import { Recipe } from '../../types/recipe';

export const seafoodRecipes: Recipe[] = [
  {
    id: 105,
    name: "Fish Fry",
    description: "Crispy and spiced fried fish",
    mainIngredient: "fish",
    category: "Non-Vegetarian",
    cookingTime: 30,
    servings: 4,
    image: "https://images.unsplash.com/photo-1598518146478-696b8b6cbb0c?auto=format&fit=crop&q=80&w=1000",
    ingredients: [
      "Fish fillets",
      "Turmeric powder",
      "Red chili powder",
      "Coriander powder",
      "Lemon juice",
      "Salt",
      "Rice flour",
      "Oil",
    ],
    steps: [
      "Marinate fish with spices, lemon juice, and salt for 30 minutes.",
      "Coat the fish with rice flour.",
      "Heat oil in a pan and fry fish until golden and crispy.",
      "Serve hot with lemon wedges and onion rings.",
    ],
  },
];