export interface Recipe {
  id: number;
  name: string;
  description: string;
  mainIngredient: string;
  category: string;
  cookingTime: number;
  servings: number;
  image: string;
  ingredients: string[];
  steps: string[];
}

export type RecipeCategory = 'Vegetarian' | 'Non-Vegetarian' | 'Beverage';