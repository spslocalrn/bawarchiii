import { Recipe } from '../../types/recipe';

export const dalRecipes: Recipe[] = [
  {
    id: 102,
    name: "Dal Tadka",
    description: "Flavorful lentil curry with aromatic tempering",
    mainIngredient: "lentils",
    category: "Vegetarian",
    cookingTime: 40,
    servings: 4,
    image: "https://images.unsplash.com/photo-1598104569651-d3ffb2e22168?auto=format&fit=crop&q=80&w=1000",
    ingredients: [
      "Yellow lentils",
      "Tomatoes",
      "Onions",
      "Garlic",
      "Ginger",
      "Cumin seeds",
      "Turmeric powder",
      "Red chili powder",
      "Ghee",
      "Salt",
    ],
    steps: [
      "Boil lentils with turmeric and salt until soft.",
      "Heat ghee in a pan and add cumin seeds.",
      "Add chopped onions, garlic, and ginger; sauté until golden brown.",
      "Stir in tomatoes and cook until soft.",
      "Add red chili powder and cook for 2 minutes.",
      "Pour the tempering over the boiled lentils and mix well.",
      "Simmer for 5 minutes and garnish with fresh coriander.",
      "Serve hot with steamed rice or roti.",
    ],
  },
];