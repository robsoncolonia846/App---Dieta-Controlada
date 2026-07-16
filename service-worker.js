const CACHE_NAME = "dieta-controlada-pwa-v88";

importScripts("./firebase-config.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js");

firebase.initializeApp(self.DIETA_FIREBASE_CONFIG);
const firebaseMessaging = firebase.messaging();

firebaseMessaging.onBackgroundMessage((payload) => {
  if (payload.notification) return;
  const title = payload.data?.title || "Dieta Controlada";
  const options = {
    body: payload.data?.body || "Você recebeu um novo lembrete.",
    icon: "./icon-192.png",
    badge: "./icon-192.png",
    tag: payload.data?.tag || "dieta-controlada-reminder",
    data: {
      url: payload.data?.url || "./index.html#hoje"
    }
  };
  self.registration.showNotification(title, options);
});

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./firebase-config.js",
  "./favicon.ico",
  "./foods.js",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return networkResponse;
        })
        .catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }
          return caches.match(event.request);
        });
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const destination = event.notification.data?.url || "./index.html#hoje";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      const absoluteDestination = new URL(destination, self.location.href).href;
      for (const client of clientList) {
        if ("navigate" in client) {
          return client.navigate(absoluteDestination).then(() => client.focus());
        }
      }
      return clients.openWindow(absoluteDestination);
    })
  );
});
