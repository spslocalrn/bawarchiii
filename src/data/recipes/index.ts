import { Recipe } from '../../types/recipe';
import { potatoRecipes } from './potato-recipes';
import { paneerRecipes } from './paneer-recipes';
import { beverageRecipes } from './beverage-recipes';
import { riceRecipes } from './rice-recipes';
import { meatRecipes } from './meat-recipes';
import { dalRecipes } from './dal-recipes';
import { seafoodRecipes } from './seafood-recipes';

export const recipes: Recipe[] = [
  ...potatoRecipes,
  ...paneerRecipes,
  ...beverageRecipes,
  ...riceRecipes,
  ...meatRecipes,
  ...dalRecipes,
  ...seafoodRecipes,
];