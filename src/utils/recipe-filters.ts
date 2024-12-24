import { Recipe } from '../types/recipe';

export const filterRecipesByCategory = (recipes: Recipe[], category: string): Recipe[] => {
  if (!category) return recipes;
  return recipes.filter(recipe => recipe.category === category);
};

export const filterRecipesByTime = (recipes: Recipe[], maxTime: number): Recipe[] => {
  if (!maxTime) return recipes;
  return recipes.filter(recipe => recipe.cookingTime <= maxTime);
};

export const filterRecipesByServings = (recipes: Recipe[], servings: number): Recipe[] => {
  if (!servings) return recipes;
  return recipes.filter(recipe => recipe.servings === servings);
};

export const filterRecipesByMainIngredient = (recipes: Recipe[], ingredient: string): Recipe[] => {
  if (!ingredient) return recipes;
  return recipes.filter(recipe => recipe.mainIngredient === ingredient);
};

export const getAllMainIngredients = (recipes: Recipe[]): string[] => {
  const ingredients = new Set(recipes.map(recipe => recipe.mainIngredient));
  return Array.from(ingredients).sort();
};

export const searchRecipes = (recipes: Recipe[], searchTerm: string): Recipe[] => {
  if (!searchTerm) return recipes;
  const term = searchTerm.toLowerCase();
  return recipes.filter(recipe => 
    recipe.name.toLowerCase().includes(term) ||
    recipe.description.toLowerCase().includes(term) ||
    recipe.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(term)
    )
  );
};