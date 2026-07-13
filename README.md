# Dieta Controlada

Aplicativo PWA para Android e navegador, voltado ao acompanhamento de alimentação, hidratação, atividades, metas e histórico diário.

## Funcionalidades

- Perfil com idade, altura, peso, gasto basal e meta calórica.
- Sugestões de refeições por horário.
- Troca, inclusão, exclusão e ajuste da quantidade dos alimentos.
- Registro de alimentação e atividades.
- Controle de hidratação em intervalos de 250 ml.
- Resumo diário com indicador de desempenho.
- Histórico salvo localmente no navegador ou celular.
- Instalação como aplicativo e funcionamento básico offline.

## Arquivos do projeto

- `index.html`: interface e funcionamento do aplicativo.
- `foods.js`: cadastro de alimentos.
- `manifest.webmanifest`: configuração de instalação da PWA.
- `service-worker.js`: cache e funcionamento offline.
- `favicon.ico`, `icon-192.png` e `icon-512.png`: ícones do aplicativo.

## Publicar no GitHub Pages

Envie todos os arquivos desta pasta para a raiz do repositório. Depois, no GitHub:

1. Abra `Settings`.
2. Entre em `Pages`.
3. Em `Build and deployment`, escolha `Deploy from a branch`.
4. Selecione a branch `main` e a pasta `/ (root)`.
5. Clique em `Save`.

O endereço será semelhante a:

```text
https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/
```

No Chrome do Android, abra o endereço e use `Adicionar à tela inicial` ou `Instalar app`.

## Atualizar alimentos

Edite o arquivo `foods.js`, publique novamente no GitHub e atualize o aplicativo. Os registros do usuário continuam salvos localmente no navegador ou celular.
