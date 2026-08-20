const foods = [
  {
    id: "abacaxi",
    name: "Abacaxi",
    category: "Alimenta??o",
    caloriesPer100g: 50,
    proteinPer100g: 0.6,
    carbsPer100g: 13,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "abobora",
    name: "Abóbora",
    icon: "🎃",
    category: "Alimenta??o",
    caloriesPer100g: 50,
    proteinPer100g: 1.4,
    carbsPer100g: 10.8,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "alface",
    name: "Alface",
    category: "Alimenta??o",
    caloriesPer100g: 15,
    proteinPer100g: 1.3,
    carbsPer100g: 1.7,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "10g", grams: 10 }
    ]
  },
  {
    id: "amendoim",
    name: "Amendoim",
    icon: "🥜",
    category: "Alimenta??o",
    caloriesPer100g: 600,
    proteinPer100g: 26,
    carbsPer100g: 16,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "10g", grams: 10 }
    ]
  },
  {
    id: "arroz",
    name: "Arroz",
    category: "Alimenta??o",
    caloriesPer100g: 130,
    proteinPer100g: 2.6,
    carbsPer100g: 28,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "bala",
    name: "Bala",
    icon: "\ud83c\udf6c",
    category: "Alimenta\u00e7\u00e3o",
    caloriesPer100g: 20,
    proteinPer100g: 0,
    carbsPer100g: 5,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "unidade", name: "Unidade", grams: 100 }
    ]
  },
  {
    id: "banana",
    name: "Banana",
    category: "Alimenta??o",
    caloriesPer100g: 60,
    proteinPer100g: 0.8,
    carbsPer100g: 15,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "unidade", name: "Unidade", grams: 100 }
    ]
  },
  {
    id: "batata-com-maionese",
    name: "Batata com Maionese",
    icon: "🥔",
    category: "Alimenta??o",
    caloriesPer100g: 200,
    proteinPer100g: 0.8,
    carbsPer100g: 9.5,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "batata-palha",
    name: "Batata Palha",
    icon: "\ud83c\udf5f",
    category: "Alimenta\u00e7\u00e3o",
    caloriesPer100g: 500,
    proteinPer100g: 5,
    carbsPer100g: 50,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "10g", grams: 10 }
    ]
  },
  {
    id: "batata-frita",
    name: "Batata Frita",
    imageSpritePosition: "0%",
    category: "Alimenta??o",
    caloriesPer100g: 300,
    proteinPer100g: 3.4,
    carbsPer100g: 40,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "batata-inglesa",
    name: "Batata Inglesa",
    category: "Alimenta??o",
    caloriesPer100g: 90,
    proteinPer100g: 2,
    carbsPer100g: 20,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "batata-ensopada",
    name: "Batata Ensopada",
    icon: "\ud83e\udd54",
    category: "Alimenta\u00e7\u00e3o",
    caloriesPer100g: 100,
    proteinPer100g: 2,
    carbsPer100g: 18,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "bauru-file",
    name: "Bauru Filé",
    imageSpritePosition: "11.111%",
    category: "Alimenta??o",
    caloriesPer100g: 1760,
    proteinPer100g: 100,
    carbsPer100g: 160,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "unidade", name: "Unidade", grams: 100 }
    ]
  },
  {
    id: "bergamota",
    name: "Bergamota",
    category: "Alimenta??o",
    caloriesPer100g: 40,
    proteinPer100g: 0.8,
    carbsPer100g: 9.6,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "unidade", name: "Unidade", grams: 100 }
    ]
  },
  {
    id: "beterraba-cozida-assada",
    name: "Beterraba Cozida/Assada",
    icon: "🟣",
    category: "Alimenta??o",
    caloriesPer100g: 56,
    proteinPer100g: 2,
    carbsPer100g: 12,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "beterraba-crua",
    name: "Beterraba Crua",
    icon: "🟣",
    category: "Alimenta??o",
    caloriesPer100g: 49,
    proteinPer100g: 1.9,
    carbsPer100g: 11.1,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "bife-frito",
    name: "Bife de Res Frito",
    category: "Alimenta??o",
    caloriesPer100g: 240,
    proteinPer100g: 30,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "bife-a-parmegiana",
    name: "Bife de Res à Parmegiana",
    icon: "\ud83e\udd69",
    category: "Alimenta??o",
    caloriesPer100g: 240,
    proteinPer100g: 17,
    carbsPer100g: 12,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "brocolis",
    name: "Brocolis",
    category: "Alimenta??o",
    caloriesPer100g: 25,
    proteinPer100g: 3.6,
    carbsPer100g: 4,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "carne-acebolada-com-maionese",
    name: "Carne Acebolada com Maionese",
    category: "Alimenta??o",
    caloriesPer100g: 350,
    proteinPer100g: 24,
    carbsPer100g: 8,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "carne-assada-magra",
    name: "Carne Assada Magra",
    icon: "\ud83e\udd69",
    category: "Alimentação",
    caloriesPer100g: 220,
    proteinPer100g: 30,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "carne-assada-media",
    name: "Carne Assada Média",
    icon: "\ud83e\udd69",
    category: "Alimentação",
    caloriesPer100g: 280,
    proteinPer100g: 27,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "carne-assada-gorda",
    name: "Carne Assada Gorda",
    icon: "\ud83e\udd69",
    category: "Alimentação",
    caloriesPer100g: 340,
    proteinPer100g: 24,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "carne-de-panela-agulha",
    name: "Carne de Panela (Agulha)",
    category: "Alimenta??o",
    caloriesPer100g: 240,
    proteinPer100g: 24,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "carne-grelhada",
    name: "Carne Grelhada",
    category: "Alimenta??o",
    caloriesPer100g: 216,
    proteinPer100g: 30,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "carne-moida",
    name: "Carne Moida",
    category: "Alimenta??o",
    caloriesPer100g: 250,
    proteinPer100g: 26,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "cenoura-cozida-assada",
    name: "Cenoura Cozida/Assada",
    category: "Alimenta??o",
    caloriesPer100g: 54,
    proteinPer100g: 1,
    carbsPer100g: 12,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "10g", grams: 10 }
    ]
  },
  {
    id: "cenoura-crua",
    name: "Cenoura Crua",
    category: "Alimenta??o",
    caloriesPer100g: 34,
    proteinPer100g: 1.3,
    carbsPer100g: 7.7,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "10g", grams: 10 }
    ]
  },
  {
    id: "cerveja",
    name: "Cerveja",
    icon: "🍺",
    category: "Alimenta??o",
    caloriesPer100g: 50,
    proteinPer100g: 0.6,
    carbsPer100g: 3.3,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100ml", grams: 100 }
    ]
  },
  {
    id: "coracao-de-frango",
    name: "Coração de Frango",
    category: "Alimenta??o",
    caloriesPer100g: 220,
    proteinPer100g: 26,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "couve",
    name: "Couve",
    category: "Alimenta??o",
    caloriesPer100g: 27,
    proteinPer100g: 2.9,
    carbsPer100g: 4.3,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "coxinha-de-frango-frita",
    name: "Coxinha de Frango Frita",
    icon: "🍗",
    category: "Alimentação",
    caloriesPer100g: 280,
    proteinPer100g: 12,
    carbsPer100g: 30,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "porcao", name: "50g", grams: 50 }
    ]
  },
  {
    id: "creme-de-ricota-light",
    name: "Creme de Ricota Light",
    icon: "\ud83e\uddc0",
    category: "Alimenta\u00e7\u00e3o",
    caloriesPer100g: 100,
    proteinPer100g: 8,
    carbsPer100g: 5,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "10g", grams: 10 }
    ]
  },
  {
    id: "doce-de-leite",
    name: "Doce De Leite",
    category: "Alimenta??o",
    caloriesPer100g: 300,
    proteinPer100g: 7.5,
    carbsPer100g: 55,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "20g", grams: 20 }
    ]
  },
  {
    id: "empada-folhada",
    name: "Empada Folhada",
    icon: "\ud83e\udd67",
    category: "Alimenta\u00e7\u00e3o",
    caloriesPer100g: 100,
    proteinPer100g: 3,
    carbsPer100g: 12,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "unidade", name: "Unidade", grams: 100 }
    ]
  },
  {
    id: "estrogonof",
    name: "Strogonof de Carne",
    aliases: ["Estrogonof", "Estrogonof de Carne"],
    icon: "🍛",
    category: "Alimentação",
    caloriesPer100g: 250,
    proteinPer100g: 18,
    carbsPer100g: 4,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "estrogonof-de-frango",
    name: "Strogonof de Frango",
    aliases: ["Estrogonof de Frango"],
    icon: "🍛",
    category: "Alimentação",
    caloriesPer100g: 250,
    proteinPer100g: 18,
    carbsPer100g: 4,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "feijao",
    name: "Feijão",
    category: "Alimenta??o",
    caloriesPer100g: 80,
    proteinPer100g: 4.8,
    carbsPer100g: 14,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "frango-assada-sobrecoxa",
    name: "Frango Assada (Sobrecoxa)",
    category: "Alimenta??o",
    caloriesPer100g: 250,
    proteinPer100g: 28,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "frango-desfiado",
    name: "Frango Desfiado",
    category: "Alimenta??o",
    caloriesPer100g: 180,
    proteinPer100g: 31,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "frango-grelhado",
    name: "Frango Grelhado",
    category: "Alimenta??o",
    caloriesPer100g: 170,
    proteinPer100g: 32,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "frango-sobrecoxa-ao-molho",
    name: "Frango Sobrecoxa Ao Molho",
    category: "Alimenta??o",
    caloriesPer100g: 180,
    proteinPer100g: 28,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "goiabada",
    name: "Goiabada",
    category: "Alimenta??o",
    caloriesPer100g: 308,
    proteinPer100g: 0.4,
    carbsPer100g: 78,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "iogurte-zero",
    name: "Iogurte Zero",
    category: "Alimenta??o",
    caloriesPer100g: 25,
    proteinPer100g: 5.5,
    carbsPer100g: 7.2,
    servings: [
      { id: "mililitros", name: "Mililitros", grams: 1 },
      { id: "excel", name: "200ml", grams: 200 }
    ]
  },
  {
    id: "laranja",
    name: "Laranja",
    category: "Alimenta??o",
    caloriesPer100g: 80,
    proteinPer100g: 1.8,
    carbsPer100g: 20,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "unidade", name: "Unidade", grams: 100 }
    ]
  },
  {
    id: "lazanha-de-carne-moida",
    name: "Lasanha de Carne Moída",
    category: "Alimenta??o",
    caloriesPer100g: 200,
    proteinPer100g: 12,
    carbsPer100g: 18,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "lazanha-de-frango",
    name: "Lasanha de Frango",
    category: "Alimenta??o",
    caloriesPer100g: 200,
    proteinPer100g: 10,
    carbsPer100g: 15,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "leite-desnatado",
    name: "Leite Desnatado",
    category: "Alimenta??o",
    caloriesPer100g: 37,
    proteinPer100g: 3.4,
    carbsPer100g: 5,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100ml", grams: 100 }
    ]
  },
  {
    id: "leite-integral",
    name: "Leite Integral",
    category: "Alimenta??o",
    caloriesPer100g: 62,
    proteinPer100g: 3.4,
    carbsPer100g: 4.8,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100ml", grams: 100 }
    ]
  },
  {
    id: "maca",
    name: "Maça",
    category: "Alimenta??o",
    caloriesPer100g: 70,
    proteinPer100g: 0.3,
    carbsPer100g: 18,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "unidade", name: "Unidade", grams: 100 }
    ]
  },
  {
    id: "maionese",
    name: "Maionese",
    icon: "\ud83e\udd63",
    imageSpritePosition: "100%",
    category: "Alimentação",
    caloriesPer100g: 600,
    proteinPer100g: 1,
    carbsPer100g: 1,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "10g", grams: 10 }
    ]
  },
  {
    id: "maionese-light",
    name: "Maionese Light",
    icon: "\ud83e\udd63",
    imageSpritePosition: "100%",
    category: "Alimentação",
    caloriesPer100g: 150,
    proteinPer100g: 0.5,
    carbsPer100g: 6,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "10g", grams: 10 }
    ]
  },
  {
    id: "macarrao",
    name: "Macarrão",
    category: "Alimentação",
    caloriesPer100g: 200,
    proteinPer100g: 5.8,
    carbsPer100g: 31,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "massa-alho-e-oleo",
    name: "Massa alho e óleo",
    aliases: ["Macarrão alho e óleo"],
    category: "Alimentação",
    caloriesPer100g: 300,
    proteinPer100g: 5.8,
    carbsPer100g: 31,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "macarrao-com-carne-moida",
    name: "Macarrão com Carne Moida",
    category: "Alimenta??o",
    caloriesPer100g: 200,
    proteinPer100g: 5.8,
    carbsPer100g: 31,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "macarrao-carne-moida-molho-queijos",
    name: "Macarrão com Carne Moída e Molho de Queijos",
    aliases: ["Macarrão carne moída e molho de queijos"],
    icon: "🍝",
    category: "Alimentação",
    caloriesPer100g: 300,
    proteinPer100g: 13,
    carbsPer100g: 20,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "macarrao-instantaneo-miojo",
    name: "Macarrão instantâneo (Miojo)",
    aliases: ["Miojo", "Macarrão instantâneo"],
    category: "Alimentação",
    caloriesPer100g: 150,
    proteinPer100g: 4,
    carbsPer100g: 25,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "melancia",
    name: "Melancia",
    category: "Alimenta??o",
    caloriesPer100g: 30,
    proteinPer100g: 0.6,
    carbsPer100g: 8,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "morango",
    name: "Morango",
    category: "Alimenta??o",
    caloriesPer100g: 30,
    proteinPer100g: 0.8,
    carbsPer100g: 6.8,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "omelete",
    name: "Omelete",
    category: "Alimenta??o",
    caloriesPer100g: 160,
    proteinPer100g: 13,
    carbsPer100g: 1,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "omelete-com-queijo",
    name: "Omelete com Queijo",
    category: "Alimenta??o",
    caloriesPer100g: 280,
    proteinPer100g: 16,
    carbsPer100g: 0.6,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "fatia", name: "50g", grams: 50 }
    ]
  },
  {
    id: "outros",
    name: "Outros",
    icon: "🥘",
    category: "Alimentação",
    caloriesPer100g: 100,
    proteinPer100g: 0,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "unidade", name: "Unidade", grams: 100 }
    ]
  },
  {
    id: "ovo-cozido",
    name: "Ovo Cozido",
    category: "Alimenta??o",
    caloriesPer100g: 160,
    proteinPer100g: 14,
    carbsPer100g: 2,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "unidade", name: "Unidade", grams: 50 }
    ]
  },
  {
    id: "ovo-frito",
    name: "Ovo Frito",
    category: "Alimenta??o",
    caloriesPer100g: 240,
    proteinPer100g: 14,
    carbsPer100g: 2,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "unidade", name: "Unidade", grams: 50 }
    ]
  },
  {
    id: "panqueca-carne-moida",
    name: "Panqueca de Carne Moída",
    aliases: ["Panqueca (Carne Moida)", "Panqueca (Carne Moída)"],
    category: "Alimenta??o",
    caloriesPer100g: 180,
    proteinPer100g: 12,
    carbsPer100g: 16,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "panqueca-frango",
    name: "Panqueca de Frango",
    aliases: ["Panqueca (Frango)"],
    category: "Alimenta??o",
    caloriesPer100g: 180,
    proteinPer100g: 14,
    carbsPer100g: 16,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "pao-caseiro",
    name: "Pão Caseiro",
    category: "Alimenta??o",
    caloriesPer100g: 300,
    proteinPer100g: 18,
    carbsPer100g: 110,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "pao-de-forma",
    name: "Pão De Forma",
    category: "Alimenta??o",
    caloriesPer100g: 140,
    proteinPer100g: 5,
    carbsPer100g: 24,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "fatia", name: "Fatia", grams: 50 }
    ]
  },
  {
    id: "pao-frances",
    name: "Pão Frances",
    category: "Alimenta??o",
    caloriesPer100g: 300,
    proteinPer100g: 8,
    carbsPer100g: 58,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "pao-torrado",
    name: "Pão Torrado",
    icon: "\ud83c\udf5e",
    category: "Alimenta\u00e7\u00e3o",
    caloriesPer100g: 300,
    proteinPer100g: 8,
    carbsPer100g: 58,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "pao-frances-ovo-frito",
    name: "Pão Frances + Ovo Frito",
    category: "Alimenta??o",
    caloriesPer100g: 270,
    proteinPer100g: 11,
    carbsPer100g: 30,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "unidade", name: "Unidade", grams: 100 }
    ]
  },
  {
    id: "pao-frances-ovo-mexido",
    name: "Pão Frances + Ovo Mexido",
    category: "Alimenta??o",
    caloriesPer100g: 230,
    proteinPer100g: 11,
    carbsPer100g: 30,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "unidade", name: "Unidade", grams: 100 }
    ]
  },
  {
    id: "pao-com-queijo-e-presunto",
    name: "Pão com Queijo e Presunto",
    icon: "🥪",
    category: "Alimenta??o",
    caloriesPer100g: 235,
    proteinPer100g: 12,
    carbsPer100g: 30,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "unidade", name: "Unidade", grams: 100 }
    ]
  },
  {
    id: "peixe-assado-anchova",
    name: "Peixe Assado (Anchova)",
    category: "Alimenta??o",
    caloriesPer100g: 160,
    proteinPer100g: 26,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "peixe-assado-tainha",
    name: "Peixe Assado (Tainha)",
    category: "Alimenta??o",
    caloriesPer100g: 180,
    proteinPer100g: 26,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "peixe-frito",
    name: "Peixe Frito",
    icon: "🐟",
    category: "Alimentação",
    caloriesPer100g: 220,
    proteinPer100g: 24,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "presunto",
    name: "Presunto",
    category: "Alimenta??o",
    caloriesPer100g: 40,
    proteinPer100g: 4,
    carbsPer100g: 0.5,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "fatia", name: "Fatia", grams: 100 }
    ]
  },
  {
    id: "queijo-fatia",
    name: "Queijo Fatia",
    category: "Alimenta??o",
    caloriesPer100g: 80,
    proteinPer100g: 6,
    carbsPer100g: 1,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "fatia", name: "Fatia", grams: 100 }
    ]
  },
  {
    id: "queijo-mucarela",
    name: "Queijo Muçarela",
    category: "Alimenta??o",
    caloriesPer100g: 80,
    proteinPer100g: 6,
    carbsPer100g: 1,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "fatia", name: "Fatia", grams: 100 }
    ]
  },
  {
    id: "queijo-parmesao",
    name: "Queijo Parmesão",
    category: "Alimenta??o",
    caloriesPer100g: 115,
    proteinPer100g: 10,
    carbsPer100g: 1,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "fatia", name: "Fatia", grams: 100 }
    ]
  },
  {
    id: "repolho",
    name: "Repolho",
    category: "Alimenta??o",
    caloriesPer100g: 17,
    proteinPer100g: 0.9,
    carbsPer100g: 3.9,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "requeijao",
    name: "Requeijão",
    icon: "🧀",
    category: "Alimenta??o",
    caloriesPer100g: 250,
    proteinPer100g: 9.6,
    carbsPer100g: 2.4,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "10g", grams: 10 }
    ]
  },
  {
    id: "requeijao-light",
    name: "Requeijão Light",
    icon: "🧀",
    category: "Alimenta??o",
    caloriesPer100g: 150,
    proteinPer100g: 9.6,
    carbsPer100g: 2.4,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "10g", grams: 10 }
    ]
  },
  {
    id: "tomate",
    name: "Tomate",
    icon: "\ud83c\udf45",
    category: "Alimenta\u00e7\u00e3o",
    caloriesPer100g: 18,
    proteinPer100g: 1.1,
    carbsPer100g: 3.1,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "tomate-cereja",
    name: "Tomate Cereja",
    category: "Alimenta??o",
    caloriesPer100g: 18,
    proteinPer100g: 1.1,
    carbsPer100g: 3.1,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "uva",
    name: "Uva",
    category: "Alimenta??o",
    caloriesPer100g: 68,
    proteinPer100g: 0.8,
    carbsPer100g: 18,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "arroz-com-carne",
    name: "Arroz com Carne",
    category: "Alimenta??o",
    caloriesPer100g: 140,
    proteinPer100g: 6.5,
    carbsPer100g: 15,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "bolo-de-banana-com-canela",
    name: "Bolo de Banana com Canela",
    category: "Alimenta??o",
    caloriesPer100g: 360,
    proteinPer100g: 4,
    carbsPer100g: 40,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "bolo-de-cenoura",
    name: "Bolo de Cenoura",
    category: "Alimenta??o",
    caloriesPer100g: 360,
    proteinPer100g: 4,
    carbsPer100g: 40,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "padrao", name: "50g", grams: 50 }
    ]
  },
  {
    id: "bolo-de-aniversario",
    name: "Bolo de Aniversário",
    category: "Alimenta??o",
    caloriesPer100g: 440,
    proteinPer100g: 6.7,
    carbsPer100g: 58.7,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "padrao", name: "50g", grams: 50 }
    ]
  },
  {
    id: "brigadeiro",
    name: "Brigadeiro",
    icon: "🍫",
    category: "Alimenta??o",
    caloriesPer100g: 400,
    proteinPer100g: 8.5,
    carbsPer100g: 67.3,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "10g", grams: 10 }
    ]
  },
  {
    id: "bolo-de-chocolate-com-calda",
    name: "Bolo de Chocolate com Calda",
    category: "Alimenta??o",
    caloriesPer100g: 400,
    proteinPer100g: 10,
    carbsPer100g: 104,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "bolo-de-chocolate",
    name: "Bolo de Chocolate",
    icon: "🍰",
    category: "Alimentação",
    caloriesPer100g: 360,
    proteinPer100g: 5,
    carbsPer100g: 50,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "cueca-virada-grostoli",
    name: "Cueca Virada (Grostoli)",
    imageSpritePosition: "22.222%",
    category: "Alimentação",
    caloriesPer100g: 400,
    proteinPer100g: 7,
    carbsPer100g: 52,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "lombo-de-porco",
    name: "Lombo de Porco",
    category: "Alimenta??o",
    caloriesPer100g: 240,
    proteinPer100g: 25,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "pizza",
    name: "Pizza",
    category: "Alimenta??o",
    caloriesPer100g: 300,
    proteinPer100g: 15,
    carbsPer100g: 35,
    servings: [
      { id: "unidade", name: "Unid.", grams: 100 }
    ]
  },
  {
    id: "enroladinho-salsicha-frito",
    name: "Enroladinho de Salsicha (Frito)",
    icon: "🌭",
    category: "Alimentação",
    caloriesPer100g: 300,
    proteinPer100g: 10,
    carbsPer100g: 30,
    servings: [
      { id: "unidade", name: "Unid.", grams: 100 }
    ]
  },
  {
    id: "enroladinho-salsicha-airfryer",
    name: "Enroladinho de Salsicha (Airfryer)",
    aliases: ["Enroladinho de Salsicha (Airfrier)"],
    icon: "🌭",
    category: "Alimentação",
    caloriesPer100g: 250,
    proteinPer100g: 10,
    carbsPer100g: 30,
    servings: [
      { id: "unidade", name: "Unid.", grams: 100 }
    ]
  },
  {
    id: "salsichao-frito",
    name: "Salsichão Frito",
    category: "Alimenta??o",
    caloriesPer100g: 340,
    proteinPer100g: 14,
    carbsPer100g: 2,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "salsichao-grelhado",
    name: "Salsichão Grelhado",
    category: "Alimenta??o",
    caloriesPer100g: 300,
    proteinPer100g: 14,
    carbsPer100g: 2,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "vinho-seco",
    name: "Vinho Seco",
    icon: "🍷",
    category: "Alimenta??o",
    caloriesPer100g: 80,
    proteinPer100g: 0.1,
    carbsPer100g: 2.6,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100ml", grams: 100 }
    ]
  },
  {
    id: "vinho-suave",
    name: "Vinho Suave",
    icon: "🍷",
    category: "Alimenta??o",
    caloriesPer100g: 100,
    proteinPer100g: 0.1,
    carbsPer100g: 8,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100ml", grams: 100 }
    ]
  },
  {
    id: "cafe-sem-acucar",
    name: "Café sem Açúcar",
    icon: "☕",
    category: "Alimenta??o",
    caloriesPer100g: 0,
    proteinPer100g: 0,
    carbsPer100g: 0,
    servings: [
      { id: "unidade", name: "Unidade", grams: 100 }
    ]
  },
  {
    id: "cafe-com-uma-colher-acucar",
    name: "Café com 1 Colher de Açúcar",
    icon: "☕",
    category: "Alimenta??o",
    caloriesPer100g: 20,
    proteinPer100g: 0,
    carbsPer100g: 5,
    servings: [
      { id: "unidade", name: "Unidade", grams: 100 }
    ]
  },
  {
    id: "cafe-com-duas-colheres-acucar",
    name: "Café com 2 Colheres de Açúcar",
    icon: "☕",
    category: "Alimenta??o",
    caloriesPer100g: 40,
    proteinPer100g: 0,
    carbsPer100g: 10,
    servings: [
      { id: "unidade", name: "Unidade", grams: 100 }
    ]
  },
  {
    id: "acucar-cristal",
    name: "Açúcar Cristal",
    icon: "🍬",
    category: "Alimenta??o",
    caloriesPer100g: 387,
    proteinPer100g: 0.3,
    carbsPer100g: 99.6,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "5g", grams: 5 }
    ]
  },
  {
    id: "azeite-oliva-extra-virgem",
    name: "Azeite de Oliva Extra Virgem",
    icon: "🫒",
    category: "Alimenta??o",
    caloriesPer100g: 884,
    proteinPer100g: 0,
    carbsPer100g: 0,
    servings: [
      { id: "mililitros", name: "Mililitros", grams: 1 },
      { id: "excel", name: "10ml", grams: 10 }
    ]
  },
  {
    id: "manteiga-com-sal",
    name: "Manteiga com Sal",
    icon: "🧈",
    category: "Alimenta??o",
    caloriesPer100g: 726,
    proteinPer100g: 0.4,
    carbsPer100g: 0.1,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "10g", grams: 10 }
    ]
  },
  {
    id: "margarina-com-sal",
    name: "Margarina com Sal",
    icon: "🧈",
    category: "Alimenta??o",
    caloriesPer100g: 700,
    proteinPer100g: 0,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "10g", grams: 10 }
    ]
  },
  {
    id: "batata-doce-cozida",
    name: "Batata-doce Cozida",
    category: "Alimenta??o",
    caloriesPer100g: 77,
    proteinPer100g: 0.6,
    carbsPer100g: 18.4,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "mandioca-cozida",
    name: "Mandioca Cozida",
    icon: "🍠",
    category: "Alimenta??o",
    caloriesPer100g: 125,
    proteinPer100g: 0.6,
    carbsPer100g: 30.1,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "aveia-em-flocos",
    name: "Aveia em Flocos",
    icon: "🥣",
    category: "Alimenta??o",
    caloriesPer100g: 400,
    proteinPer100g: 13.9,
    carbsPer100g: 66.6,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "25g", grams: 25 }
    ]
  },
  {
    id: "tapioca-com-manteiga",
    name: "Tapioca com Manteiga",
    icon: "🫓",
    category: "Alimenta??o",
    caloriesPer100g: 348,
    proteinPer100g: 0.1,
    carbsPer100g: 63.6,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "mamao-formosa",
    name: "Mamão Formosa",
    icon: "🥭",
    category: "Alimenta??o",
    caloriesPer100g: 45,
    proteinPer100g: 0.8,
    carbsPer100g: 11.6,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "abacate",
    name: "Abacate",
    icon: "🥑",
    category: "Alimenta??o",
    caloriesPer100g: 96,
    proteinPer100g: 1.2,
    carbsPer100g: 6,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "atum-conserva-oleo",
    name: "Atum em Conserva com Óleo",
    icon: "🐟",
    category: "Alimenta??o",
    caloriesPer100g: 166,
    proteinPer100g: 26.2,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "sardinha-assada",
    name: "Sardinha Assada",
    icon: "🐟",
    category: "Alimenta??o",
    caloriesPer100g: 164,
    proteinPer100g: 32.2,
    carbsPer100g: 0,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "queijo-minas-frescal",
    name: "Queijo Minas Frescal",
    category: "Alimenta??o",
    caloriesPer100g: 264,
    proteinPer100g: 17.4,
    carbsPer100g: 3.2,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "30g", grams: 30 }
    ]
  },
  {
    id: "queijo-cottage",
    name: "Queijo Cottage",
    category: "Alimenta??o",
    caloriesPer100g: 98,
    proteinPer100g: 11.1,
    carbsPer100g: 3.4,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "granola",
    name: "Granola",
    icon: "🥣",
    category: "Alimenta??o",
    caloriesPer100g: 471,
    proteinPer100g: 10.1,
    carbsPer100g: 62.5,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "30g", grams: 30 }
    ]
  },
  {
    id: "quentao",
    name: "Quentão",
    icon: "☕",
    category: "Alimenta??o",
    caloriesPer100g: 120,
    proteinPer100g: 0.1,
    carbsPer100g: 15,
    servings: [
      { id: "mililitros", name: "Mililitros", grams: 1 },
      { id: "excel", name: "100ml", grams: 100 }
    ]
  },
  {
    id: "pure-de-batatas",
    name: "Purê de Batatas",
    icon: "🥔",
    category: "Alimenta??o",
    caloriesPer100g: 110,
    proteinPer100g: 2,
    carbsPer100g: 17,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "100g", grams: 100 }
    ]
  },
  {
    id: "pastel-de-carne-frito",
    name: "Pastel de Carne Frito",
    icon: "🥟",
    category: "Alimenta??o",
    caloriesPer100g: 400,
    proteinPer100g: 10.1,
    carbsPer100g: 43.8,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "torta-de-bolacha",
    name: "Torta de Bolacha",
    aliases: ["Torta Bolacha"],
    icon: "\ud83c\udf70",
    category: "Alimenta??o",
    caloriesPer100g: 200,
    proteinPer100g: 3,
    carbsPer100g: 30,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "arroz-doce",
    name: "Arroz Doce",
    icon: "\ud83c\udf5a",
    category: "Alimenta??o",
    caloriesPer100g: 200,
    proteinPer100g: 4,
    carbsPer100g: 36,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "excel", name: "50g", grams: 50 }
    ]
  },
  {
    id: "biscoito-maizena",
    name: "Biscoito de Maisena",
    imageSpritePosition: "33.333%",
    category: "Alimenta??o",
    caloriesPer100g: 400,
    proteinPer100g: 7,
    carbsPer100g: 76,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "porcao", name: "10g", grams: 10 }
    ]
  },
  {
    id: "biscoito-agua-e-sal",
    name: "Biscoito de Água e Sal",
    imageSpritePosition: "44.444%",
    category: "Alimenta??o",
    caloriesPer100g: 400,
    proteinPer100g: 8,
    carbsPer100g: 72,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "porcao", name: "10g", grams: 10 }
    ]
  },
  {
    id: "biscoito-cream-cracker",
    name: "Biscoito Cream Cracker",
    imageSpritePosition: "55.556%",
    category: "Alimenta??o",
    caloriesPer100g: 450,
    proteinPer100g: 9,
    carbsPer100g: 70,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "porcao", name: "10g", grams: 10 }
    ]
  },
  {
    id: "biscoito-rosquinha-doce",
    name: "Biscoito Rosquinha Doce",
    imageSpritePosition: "66.667%",
    category: "Alimenta??o",
    caloriesPer100g: 450,
    proteinPer100g: 7,
    carbsPer100g: 73,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "porcao", name: "10g", grams: 10 }
    ]
  },
  {
    id: "biscoito-recheado",
    name: "Biscoito Recheado",
    imageSpritePosition: "77.778%",
    category: "Alimenta??o",
    caloriesPer100g: 450,
    proteinPer100g: 6,
    carbsPer100g: 67,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "porcao", name: "10g", grams: 10 }
    ]
  },
  {
    id: "biscoito-vovo-sentada",
    name: "Biscoito Vovó Sentada",
    imageSpritePosition: "88.889%",
    category: "Alimenta??o",
    caloriesPer100g: 500,
    proteinPer100g: 7,
    carbsPer100g: 70,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "porcao", name: "10g", grams: 10 }
    ]
  },
  {
    id: "bife-de-figado",
    name: "Bife de Fígado",
    icon: "\ud83e\udd69",
    category: "Alimenta??o",
    caloriesPer100g: 200,
    proteinPer100g: 29.9,
    carbsPer100g: 4.2,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "porcao", name: "50g", grams: 50 }
    ]
  },
  {
    id: "pacoquinha",
    name: "Paçoquinha",
    icon: "\ud83e\udd5c",
    category: "Alimenta??o",
    caloriesPer100g: 500,
    proteinPer100g: 17.33,
    carbsPer100g: 48,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "unidade", name: "Unidade", grams: 15 }
    ]
  },
  {
    id: "tijolinho-mariola-banana",
    name: "Tijolinho (Mariola) de Banana (15g)",
    icon: "🍌",
    category: "Alimentação",
    caloriesPer100g: 200,
    proteinPer100g: 0,
    carbsPer100g: 53.333333,
    servings: [
      { id: "unidade", name: "Unidade", grams: 15 }
    ]
  },
  {
    id: "chocolate-bis",
    name: "Chocolate Bis",
    icon: "🍫",
    category: "Alimentação",
    caloriesPer100g: 555.6,
    proteinPer100g: 6.3,
    carbsPer100g: 63,
    saturatedFatPer100g: 14,
    servings: [
      { id: "unidade", name: "Unidade", grams: 6.3 }
    ]
  },
  {
    id: "coca-cola-original",
    name: "Coca-Cola Original",
    icon: "\ud83e\udd64",
    category: "Alimenta??o",
    caloriesPer100g: 42.5,
    proteinPer100g: 0,
    carbsPer100g: 10.5,
    servings: [
      { id: "mililitros", name: "Mililitros", grams: 1 },
      { id: "excel", name: "200ml", grams: 200 }
    ]
  },
  {
    id: "farofa",
    name: "Farofa",
    icon: "🥣",
    category: "Alimentação",
    caloriesPer100g: 400,
    proteinPer100g: 5,
    carbsPer100g: 75,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "porcao", name: "10g", grams: 10 }
    ]
  },
  {
    id: "pudim-leite-condensado",
    name: "Pudim (Leite Condensado)",
    icon: "🍮",
    category: "Alimentação",
    caloriesPer100g: 300,
    proteinPer100g: 5,
    carbsPer100g: 50,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "porcao", name: "50g", grams: 50 }
    ]
  },
  {
    id: "pudim-po-para-pudim",
    name: "Pudim (Pó para Pudim)",
    icon: "🍮",
    category: "Alimentação",
    caloriesPer100g: 150,
    proteinPer100g: 3,
    carbsPer100g: 27,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "porcao", name: "50g", grams: 50 }
    ]
  },
  {
    id: "pessego-em-calda",
    name: "Pêssego em Calda",
    icon: "🍑",
    category: "Alimentação",
    caloriesPer100g: 80,
    proteinPer100g: 0.4,
    carbsPer100g: 20,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "porcao", name: "50g", grams: 50 }
    ]
  },
  {
    id: "doce-de-figo",
    name: "Doce de Figo",
    icon: "🍬",
    category: "Alimentação",
    caloriesPer100g: 160,
    proteinPer100g: 0.5,
    carbsPer100g: 40,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "porcao", name: "50g", grams: 50 }
    ]
  },
  {
    id: "abacaxi-em-calda",
    name: "Abacaxi em Calda",
    icon: "🍍",
    category: "Alimentação",
    caloriesPer100g: 150,
    proteinPer100g: 0.4,
    carbsPer100g: 37,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "porcao", name: "50g", grams: 50 }
    ]
  },
  {
    id: "pudim-flan",
    name: "Pudim (Flan)",
    icon: "🍮",
    category: "Alimentação",
    caloriesPer100g: 140,
    proteinPer100g: 3,
    carbsPer100g: 24,
    servings: [
      { id: "gramas", name: "Gramas", grams: 1 },
      { id: "porcao", name: "50g", grams: 50 }
    ]
  }
];

// Fibras médias por 100 g/ml. Preparações caseiras usam uma referência média.
const fiberPer100gById = {
  "abacaxi": 1.4, "abobora": 2.8, "alface": 1.3, "amendoim": 8.5,
  "arroz": 1.6, "banana": 2.6, "batata-com-maionese": 1.5,
  "batata-palha": 4, "batata-frita": 3.8, "batata-inglesa": 1.8,
  "batata-ensopada": 1.8,
  "bauru-file": 4, "bergamota": 1.8, "beterraba-cozida-assada": 2,
  "beterraba-crua": 2.8, "bife-a-parmegiana": 0.8, "brocolis": 3.3,
  "carne-acebolada-com-maionese": 0.7, "carne-de-panela-agulha": 0.4,
  "cenoura-cozida-assada": 3, "cenoura-crua": 3.2, "couve": 3.1,
  "coxinha-de-frango-frita": 1.5,
  "doce-de-leite": 0.2, "empada-folhada": 1.1,
  "estrogonof": 0.5, "estrogonof-de-frango": 0.5,
  "feijao": 8.5, "frango-sobrecoxa-ao-molho": 0.4, "goiabada": 5.4,
  "iogurte-zero": 0, "laranja": 2.2, "lazanha-de-carne-moida": 1.7,
  "lazanha-de-frango": 1.5, "maca": 2.4, "macarrao": 1.8,
  "massa-alho-e-oleo": 1.8, "macarrao-com-carne-moida": 1.5,
  "macarrao-carne-moida-molho-queijos": 1.3, "macarrao-instantaneo-miojo": 2.6,
  "melancia": 0.4, "morango": 2, "omelete-com-queijo": 0.1,
  "panqueca-carne-moida": 1.2, "panqueca-frango": 1.2,
  "pao-caseiro": 2.7, "pao-de-forma": 4.1, "pao-frances": 2.3,
  "pao-torrado": 2.3,
  "pao-frances-ovo-frito": 1.2, "pao-frances-ovo-mexido": 1.2,
  "pao-com-queijo-e-presunto": 1.5, "repolho": 2.5, "tomate-cereja": 1.2,
  "uva": 0.9, "arroz-com-carne": 1.2, "bolo-de-banana-com-canela": 2.1,
  "bolo-de-cenoura": 1.3, "bolo-de-aniversario": 1.1, "brigadeiro": 0.8,
  "bolo-de-chocolate-com-calda": 2.2, "bolo-de-chocolate": 2.2,
  "cueca-virada-grostoli": 1.2,
  "pizza": 2.3, "enroladinho-salsicha-frito": 1.5,
  "enroladinho-salsicha-airfryer": 1.5,
  "salsichao-frito": 0.2, "salsichao-grelhado": 0.2,
  "acucar-cristal": 0, "batata-doce-cozida": 2.2, "mandioca-cozida": 1.6,
  "aveia-em-flocos": 9.1, "tapioca-com-manteiga": 0.4, "mamao-formosa": 1.8,
  "abacate": 6.3, "queijo-cottage": 0, "granola": 7.5, "quentao": 0.3,
  "pure-de-batatas": 1.3, "pastel-de-carne-frito": 2.2, "torta-de-bolacha": 1.1,
  "arroz-doce": 0.6, "biscoito-maizena": 1.5, "biscoito-agua-e-sal": 2.4,
  "biscoito-cream-cracker": 2.8, "biscoito-rosquinha-doce": 1.8,
  "biscoito-recheado": 2.5, "biscoito-vovo-sentada": 1.6, "pacoquinha": 5.5,
  "chocolate-bis": 2.3,
  "farofa": 5, "pudim-leite-condensado": 0, "pudim-po-para-pudim": 0,
  "pessego-em-calda": 0.8, "doce-de-figo": 2,
  "abacaxi-em-calda": 1, "pudim-flan": 0
};

// Açúcares totais médios por 100 g/ml. O valor nunca ultrapassa o carboidrato cadastrado.
const sugarPer100gById = {
  "abacaxi": 10, "abobora": 2.8, "alface": 0.8, "amendoim": 4.7,
  "banana": 12.2, "bergamota": 8.5, "batata-ensopada": 1.2,
  "beterraba-cozida-assada": 7,
  "beterraba-crua": 6.8, "brocolis": 1.7, "cenoura-cozida-assada": 4.7,
  "cenoura-crua": 4.7, "cerveja": 0.1, "couve": 0.8, "doce-de-leite": 50,
  "estrogonof": 2.2, "estrogonof-de-frango": 2.2,
  "feijao": 0.3, "goiabada": 68, "iogurte-zero": 4.5,
  "coxinha-de-frango-frita": 2,
  "laranja": 8.5, "lazanha-de-carne-moida": 3.2, "lazanha-de-frango": 2.8,
  "leite-desnatado": 5, "leite-integral": 4.8, "maca": 14,
  "maionese": 0.6, "maionese-light": 3, "melancia": 6.2, "morango": 4.9,
  "pao-caseiro": 5, "pao-de-forma": 4.5, "pao-frances": 2.8,
  "pao-torrado": 2.8,
  "repolho": 3.2, "requeijao": 2.4, "requeijao-light": 2.4,
  "tomate-cereja": 2.7, "uva": 16, "bolo-de-banana-com-canela": 24,
  "bolo-de-cenoura": 27, "bolo-de-aniversario": 38, "brigadeiro": 55,
  "bolo-de-chocolate-com-calda": 52, "bolo-de-chocolate": 28,
  "cueca-virada-grostoli": 12,
  "pizza": 4, "enroladinho-salsicha-frito": 2,
  "enroladinho-salsicha-airfryer": 2, "vinho-seco": 0.6, "vinho-suave": 6,
  "cafe-com-uma-colher-acucar": 5, "cafe-com-duas-colheres-acucar": 10,
  "acucar-cristal": 99.6, "batata-doce-cozida": 5.7, "mandioca-cozida": 1.7,
  "aveia-em-flocos": 1, "tapioca-com-manteiga": 0.4, "mamao-formosa": 7.8,
  "abacate": 0.7, "granola": 24, "quentao": 15, "pure-de-batatas": 1.4,
  "torta-de-bolacha": 18, "arroz-doce": 15, "biscoito-maizena": 22,
  "biscoito-agua-e-sal": 4, "biscoito-cream-cracker": 5,
  "biscoito-rosquinha-doce": 25, "biscoito-recheado": 35,
  "biscoito-vovo-sentada": 25, "pacoquinha": 38, "chocolate-bis": 40,
  "tijolinho-mariola-banana": 46.7, "coca-cola-original": 10.5,
  "farofa": 1, "pudim-leite-condensado": 40, "pudim-po-para-pudim": 25,
  "pessego-em-calda": 18, "doce-de-figo": 35,
  "abacaxi-em-calda": 32, "pudim-flan": 20
};

// Açúcares livres/adicionados por 100 g/ml. Não inclui o açúcar natural
// de frutas inteiras, verduras ou leite sem açúcar adicionado.
const freeSugarPer100gById = {
  "doce-de-leite": 45, "goiabada": 68,
  "pao-caseiro": 3, "pao-de-forma": 4,
  "bolo-de-banana-com-canela": 20, "bolo-de-cenoura": 27,
  "bolo-de-aniversario": 38, "brigadeiro": 55,
  "bolo-de-chocolate-com-calda": 52, "bolo-de-chocolate": 28,
  "cueca-virada-grostoli": 12,
  "pizza": 2, "coxinha-de-frango-frita": 2,
  "enroladinho-salsicha-frito": 2,
  "enroladinho-salsicha-airfryer": 2, "cafe-com-uma-colher-acucar": 5,
  "cafe-com-duas-colheres-acucar": 10, "acucar-cristal": 99.6,
  "granola": 18, "quentao": 15, "torta-de-bolacha": 18,
  "arroz-doce": 12, "biscoito-maizena": 22,
  "biscoito-agua-e-sal": 3, "biscoito-cream-cracker": 4,
  "biscoito-rosquinha-doce": 25, "biscoito-recheado": 35,
  "biscoito-vovo-sentada": 25, "pacoquinha": 32, "chocolate-bis": 40,
  "tijolinho-mariola-banana": 40,
  "coca-cola-original": 10.5,
  "pudim-leite-condensado": 35, "pudim-po-para-pudim": 25,
  "pessego-em-calda": 14, "doce-de-figo": 30,
  "abacaxi-em-calda": 27, "pudim-flan": 17
};

function saturatedFatRatio(foodId) {
  if (/azeite/.test(foodId)) return 0.14;
  if (/amendoim|pacoquinha/.test(foodId)) return 0.16;
  if (/peixe|atum|sardinha/.test(foodId)) return 0.25;
  if (/maionese/.test(foodId)) return 0.16;
  if (/margarina/.test(foodId)) return 0.3;
  if (/manteiga|queijo|requeijao|leite|iogurte/.test(foodId)) return 0.6;
  if (/carne|bife|figado|lombo|salsich|presunto|coracao/.test(foodId)) return 0.4;
  if (/frango|ovo|omelete/.test(foodId)) return 0.32;
  if (/chocolate-bis/.test(foodId)) return 0.55;
  if (/bolo|biscoito|pizza|pastel|torta|brigadeiro|doce|goiabada|cueca|pudim/.test(foodId)) return 0.35;
  return 0.25;
}

foods.forEach((food) => {
  const calories = Number(food.caloriesPer100g) || 0;
  const protein = Number(food.proteinPer100g) || 0;
  const carbs = Number(food.carbsPer100g) || 0;
  const estimatedTotalFat = Math.max(0, (calories - protein * 4 - carbs * 4) / 9);
  food.fiberPer100g = Number(fiberPer100gById[food.id]) || 0;
  food.saturatedFatPer100g = Number(food.saturatedFatPer100g) || Number((estimatedTotalFat * saturatedFatRatio(food.id)).toFixed(1));
  food.freeSugarPer100g = Number(Math.min(carbs, Number(freeSugarPer100gById[food.id]) || 0).toFixed(1));
});

globalThis.DIETA_FOODS = foods;
