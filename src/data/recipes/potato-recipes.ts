import { Recipe } from '../../types/recipe';

export const potatoRecipes: Recipe[] = [
  {
    id: 1,
    name: "Aloo Masala",
    description: "Spiced potatoes cooked with aromatic Indian spices",
    mainIngredient: "potato",
    category: "Vegetarian",
    cookingTime: 30,
    servings: 4,
    image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?auto=format&fit=crop&q=80&w=1000",
    ingredients: [
      "Potatoes",
      "Onions",
      "Tomatoes",
      "Green chilies",
      "Curry leaves",
      "Cumin seeds",
      "Mustard seeds",
      "Turmeric powder",
      "Red chili powder",
      "Salt",
      "Oil",
    ],
    steps: [
      "Boil the potatoes until tender and peel them.",
      "Heat oil in a pan and add mustard seeds and cumin seeds.",
      "Add chopped onions, green chilies, and curry leaves; sauté until golden brown.",
      "Stir in chopped tomatoes and cook until soft.",
      "Add turmeric powder, red chili powder, and salt; mix well.",
      "Add the boiled potatoes and mash slightly.",
      "Cook on low heat for 5 minutes, stirring occasionally.",
      "Garnish with fresh coriander leaves and serve hot.",
    ],
  },
  {
    id: 3,
    name: "Jeera Aloo",
    description: "Cumin-spiced potatoes with a perfect blend of spices",
    mainIngredient: "potato",
    category: "Vegetarian",
    cookingTime: 25,
    servings: 3,
    image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?auto=format&fit=crop&q=80&w=1000",
    ingredients: [
      "Potatoes",
      "Cumin seeds",
      "Green chilies",
      "Turmeric powder",
      "Red chili powder",
      "Coriander powder",
      "Amchur powder",
      "Salt",
      "Oil",
      "Fresh coriander",
    ],
    steps: [
      "Boil potatoes until tender and cut into cubes.",
      "Heat oil in a pan and add cumin seeds.",
      "Add green chilies and sauté for a minute.",
      "Add the potato cubes and mix well.",
      "Sprinkle turmeric powder, red chili powder, coriander powder, and salt.",
      "Cook on medium heat, stirring occasionally, until potatoes are slightly crispy.",
      "Add amchur powder and mix well.",
      "Garnish with fresh coriander leaves and serve hot.",
    ],
  },
];