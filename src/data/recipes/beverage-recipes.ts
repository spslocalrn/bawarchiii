import { Recipe } from '../../types/recipe';

export const beverageRecipes: Recipe[] = [
  {
    id: 5,
    name: "Masala Chai",
    description: "Indian spiced tea brewed with milk and aromatic spices",
    mainIngredient: "tea leaves",
    category: "Beverage",
    cookingTime: 10,
    servings: 2,
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&q=80&w=1000",
    ingredients: [
      "Tea leaves",
      "Milk",
      "Water",
      "Sugar",
      "Cardamom",
      "Cloves",
      "Cinnamon",
      "Ginger",
      "Black pepper",
    ],
    steps: [
      "Boil water in a saucepan.",
      "Add crushed cardamom, cloves, cinnamon, ginger, and black pepper.",
      "Add tea leaves and sugar; simmer for 2 minutes.",
      "Pour in milk and bring to a boil.",
      "Strain the tea into cups and serve hot.",
    ],
  },
];