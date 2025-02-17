import { Recipe } from '../../types/recipe';

export const meatRecipes: Recipe[] = [
  {
    id: 101,
    name: "Butter Chicken",
    description: "Creamy tomato-based curry with tender chicken pieces",
    mainIngredient: "chicken",
    category: "Non-Vegetarian",
    cookingTime: 50,
    servings: 4,
    image: "https://images.unsplash.com/photo-1601289831544-74d5d6934114?auto=format&fit=crop&q=80&w=1000",
    ingredients: [
      "Chicken",
      "Tomatoes",
      "Onions",
      "Butter",
      "Cream",
      "Ginger-garlic paste",
      "Garam masala",
      "Red chili powder",
      "Salt",
      "Oil",
    ],
    steps: [
      "Marinate chicken with ginger-garlic paste, salt, and red chili powder.",
      "Cook chicken in a pan until lightly browned and set aside.",
      "Heat butter in a pan and sauté onions until golden brown.",
      "Add tomatoes and cook until soft.",
      "Blend the tomato-onion mixture into a smooth paste.",
      "Return the paste to the pan, add spices, and cook until oil separates.",
      "Add cooked chicken and simmer for 10 minutes.",
      "Stir in cream and cook for 5 more minutes.",
      "Garnish with fresh coriander leaves and serve with naan or rice.",
    ],
  },
  {
    id: 103,
    name: "Mutton Rogan Josh",
    description: "Rich and aromatic Kashmiri mutton curry",
    mainIngredient: "mutton",
    category: "Non-Vegetarian",
    cookingTime: 90,
    servings: 4,
    image: "https://images.unsplash.com/photo-1604772330856-0c64213eeeb3?auto=format&fit=crop&q=80&w=1000",
    ingredients: [
      "Mutton",
      "Yogurt",
      "Onions",
      "Garlic",
      "Ginger",
      "Red chili powder",
      "Turmeric powder",
      "Cloves",
      "Cinnamon",
      "Cardamom",
      "Oil",
    ],
    steps: [
      "Marinate mutton with yogurt, garlic paste, and spices for 1 hour.",
      "Heat oil in a pan and add whole spices (cloves, cinnamon, cardamom).",
      "Add onions and sauté until golden brown.",
      "Add ginger and garlic paste and cook for 2 minutes.",
      "Add marinated mutton and cook on high heat until browned.",
      "Add water, cover, and simmer until the mutton is tender.",
      "Serve hot with naan or steamed rice.",
    ],
  },
];