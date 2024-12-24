import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';
import { recipes } from './data/recipes';
import { Recipe } from './types/recipe';
import { RecipeCard } from './components/RecipeCard';
import { RecipeDetail } from './components/RecipeDetail';
import { FilterBar } from './components/Filters/FilterBar';
import { 
  filterRecipesByCategory, 
  filterRecipesByTime, 
  filterRecipesByServings,
  filterRecipesByMainIngredient,
  searchRecipes 
} from './utils/recipe-filters';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [cookingTime, setCookingTime] = useState(0);
  const [servings, setServings] = useState(0);
  const [selectedIngredient, setSelectedIngredient] = useState('');

  const filteredRecipes = searchRecipes(
    filterRecipesByMainIngredient(
      filterRecipesByServings(
        filterRecipesByTime(
          filterRecipesByCategory(recipes, category),
          cookingTime
        ),
        servings
      ),
      selectedIngredient
    ),
    searchTerm
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ChefHat className="w-8 h-8 text-green-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Mr. Bawarchi</h1>
            </div>
            <div className="w-96">
              <input
                type="text"
                placeholder="Search recipes or ingredients..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <FilterBar
          category={category}
          setCategory={setCategory}
          cookingTime={cookingTime}
          setCookingTime={setCookingTime}
          servings={servings}
          setServings={setServings}
          selectedIngredient={selectedIngredient}
          setSelectedIngredient={setSelectedIngredient}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={setSelectedRecipe}
            />
          ))}
        </div>
      </main>

      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

export default App;