import { Recipe } from '../types/recipe';
import { Recipe } from '../../types/recipe';
import { potatoRecipes } from './potato-recipes';
import { paneerRecipes } from './paneer-recipes';
import { beverageRecipes } from './beverage-recipes';
import { riceRecipes } from './rice-recipes';
import { meatRecipes } from './meat-recipes';
import { dalRecipes } from './dal-recipes';
import { seafoodRecipes } from './seafood-recipes';

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Aloo Matar',
    description: 'Classic Indian potato and peas curry',
    ingredients: [
      { name: 'Potatoes', quantity: '4', unit: 'medium' },
      { name: 'Green Peas', quantity: '1', unit: 'cup' },
      { name: 'Onion', quantity: '1', unit: 'large' },
      { name: 'Tomatoes', quantity: '2', unit: 'medium' },
      { name: 'Ginger-Garlic Paste', quantity: '1', unit: 'tbsp' },
      { name: 'Garam Masala', quantity: '1', unit: 'tsp' }
    ],
    instructions: [
      'Peel and cube potatoes.',
      'Sauté onions until golden.',
      'Add ginger-garlic paste and tomatoes.',
      'Add spices and cook until oil separates.',
      'Add potatoes and peas, cook until tender.'
    ],
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 4,
    cuisine: 'Indian',
    imageUrl: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Punjabi-Aloo-Matar-Recipe.jpg',
    vegetarian: true
  },
  {
    id: '2',
    name: 'Paneer Butter Masala',
    description: 'Rich and creamy paneer curry',
    ingredients: [
      { name: 'Paneer', quantity: '400', unit: 'g' },
      { name: 'Butter', quantity: '2', unit: 'tbsp' },
      { name: 'Cream', quantity: '1/2', unit: 'cup' },
      { name: 'Tomato Puree', quantity: '2', unit: 'cups' },
      { name: 'Cashews', quantity: '15', unit: 'pieces' }
    ],
    instructions: [
      'Prepare the tomato-cashew gravy.',
      'Pan fry paneer cubes.',
      'Add butter and cream.',
      'Simmer until rich and creamy.'
    ],
    prepTime: '20 mins',
    cookTime: '40 mins',
    servings: 4,
    cuisine: 'Indian',
    imageUrl: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7',
    vegetarian: true
  },
  {
    id: '3',
    name: 'Jeera Aloo',
    description: 'Cumin-spiced potatoes with a perfect blend of spices',
    ingredients: [
      { name: 'Potatoes', quantity: '4', unit: 'medium' },
      { name: 'Cumin seeds', quantity: '1', unit: 'tsp' },
      { name: 'Green chilies', quantity: '2', unit: '' },
      { name: 'Turmeric powder', quantity: '1/2', unit: 'tsp' },
      { name: 'Red chili powder', quantity: '1', unit: 'tsp' },
      { name: 'Coriander powder', quantity: '1', unit: 'tsp' },
      { name: 'Amchur powder', quantity: '1', unit: 'tsp' },
      { name: 'Salt', quantity: 'to taste', unit: '' },
      { name: 'Oil', quantity: '2', unit: 'tbsp' },
      { name: 'Fresh coriander', quantity: '1', unit: 'tbsp' }
    ],
    instructions: [
      'Boil potatoes until tender and cut into cubes.',
      'Heat oil in a pan and add cumin seeds.',
      'Add green chilies and sauté for a minute.',
      'Add the potato cubes and mix well.',
      'Sprinkle turmeric powder, red chili powder, coriander powder, and salt.',
      'Cook on medium heat, stirring occasionally, until potatoes are slightly crispy.',
      'Add amchur powder and mix well.',
      'Garnish with fresh coriander leaves and serve hot.'
    ],
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: 3,
    cuisine: 'Indian',
    imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/04/jeera-aloo-recipe.jpg',
    vegetarian: true
  },
  {
    id: '4',
    name: 'Palak Paneer',
    description: 'Paneer cubes in a creamy spinach gravy',
    ingredients: [
      { name: 'Spinach', quantity: '250', unit: 'g' },
      { name: 'Paneer', quantity: '200', unit: 'g' },
      { name: 'Onions', quantity: '1', unit: 'large' },
      { name: 'Tomatoes', quantity: '2', unit: 'medium' },
      { name: 'Garlic', quantity: '4', unit: 'cloves' },
      { name: 'Ginger', quantity: '1', unit: 'inch' },
      { name: 'Green chilies', quantity: '2', unit: '' },
      { name: 'Cream', quantity: '2', unit: 'tbsp' },
      { name: 'Cumin seeds', quantity: '1', unit: 'tsp' },
      { name: 'Salt', quantity: 'to taste', unit: '' },
      { name: 'Oil', quantity: '2', unit: 'tbsp' }
    ],
    instructions: [
      'Blanch spinach leaves and blend into a smooth paste.',
      'Heat oil in a pan and add cumin seeds.',
      'Add chopped onions, garlic, ginger, and green chilies; sauté until golden brown.',
      'Stir in chopped tomatoes and cook until soft.',
      'Add the spinach paste and mix well.',
      'Add paneer cubes and cook for 5 minutes.',
      'Stir in cream and cook for another 2 minutes.',
      'Serve hot with roti or rice.'
    ],
    prepTime: '15 mins',
    cookTime: '25 mins',
    servings: 4,
    cuisine: 'Indian',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqWGsuyWzoyV3vMtfQVbz-uDjwNyF8vPIfYZpQrr8XcomOLSHqN6PG8K4MIFp4cTIzzq0&usqp=CAU',
    vegetarian: true
  },
  {
    id: '5',
    name: 'Masala Chai',
    description: 'Indian spiced tea brewed with milk and aromatic spices',
    ingredients: [
      { name: 'Tea leaves', quantity: '2', unit: 'tsp' },
      { name: 'Milk', quantity: '1', unit: 'cup' },
      { name: 'Water', quantity: '1', unit: 'cup' },
      { name: 'Sugar', quantity: 'to taste', unit: '' },
      { name: 'Cardamom', quantity: '2', unit: 'pods' },
      { name: 'Cloves', quantity: '2', unit: 'pieces' },
      { name: 'Cinnamon', quantity: '1', unit: 'inch' },
      { name: 'Ginger', quantity: '1', unit: 'inch' },
      { name: 'Black pepper', quantity: '2', unit: 'pieces' }
    ],
    instructions: [
      'Boil water in a saucepan.',
      'Add crushed cardamom, cloves, cinnamon, ginger, and black pepper.',
      'Add tea leaves and sugar; simmer for 2 minutes.',
      'Pour in milk and bring to a boil.',
      'Strain the tea into cups and serve hot.'
    ],
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 2,
    cuisine: 'Indian',
    imageUrl: 'https://media.istockphoto.com/id/614533094/photo/indian-masala-chai-tea.jpg?s=612x612&w=0&k=20&c=0P-npS30JIBX0FA9csLyB0WYtkEU7gWkNE7nSnvXlSE=',
    vegetarian: true
  },
  // Remaining 45 recipes to be added in the same structure
];
