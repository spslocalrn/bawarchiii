import { Recipe } from '../../types/recipe';

export const paneerRecipes: Recipe[] = [
  {
    id: 2,
    name: "Paneer Butter Masala",
    description: "Creamy curry with soft paneer cubes in a rich tomato gravy",
    mainIngredient: "paneer",
    category: "Vegetarian",
    cookingTime: 45,
    servings: 4,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=1000",
    ingredients: [
      "Paneer",
      "Tomatoes",
      "Onions",
      "Cashews",
      "Butter",
      "Cream",
      "Ginger-garlic paste",
      "Garam masala",
      "Kashmiri red chili powder",
      "Salt",
      "Oil",
    ],
    steps: [
      "Blend tomatoes and cashews into a smooth paste.",
      "Heat butter in a pan and sauté onions until translucent.",
      "Add ginger-garlic paste and cook until aromatic.",
      "Stir in the tomato-cashew paste and cook until oil separates.",
      "Add garam masala, Kashmiri red chili powder, and salt.",
      "Add water and bring the gravy to a boil.",
      "Add paneer cubes and cook for 5 minutes.",
      "Stir in cream and cook for 2 more minutes.",
      "Garnish with coriander leaves and serve with naan or rice.",
    ],
  },
  {
    id: 4,
    name: "Palak Paneer",
    description: "Paneer cubes in a creamy spinach gravy",
    mainIngredient: "paneer",
    category: "Vegetarian",
    cookingTime: 40,
    servings: 4,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=1000",
    ingredients: [
      "Spinach",
      "Paneer",
      "Onions",
      "Tomatoes",
      "Garlic",
      "Ginger",
      "Green chilies",
      "Cream",
      "Cumin seeds",
      "Salt",
      "Oil",
    ],
    steps: [
      "Blanch spinach leaves and blend into a smooth paste.",
      "Heat oil in a pan and add cumin seeds.",
      "Add chopped onions, garlic, ginger, and green chilies; sauté until golden brown.",
      "Stir in chopped tomatoes and cook until soft.",
      "Add the spinach paste and mix well.",
      "Add paneer cubes and cook for 5 minutes.",
      "Stir in cream and cook for another 2 minutes.",
      "Serve hot with roti or rice.",
    ],
  },
];