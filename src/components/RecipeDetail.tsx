import React from 'react';
import { Recipe } from '../types/recipe';
import { Clock, Users, ChefHat, X } from 'lucide-react';

interface RecipeDetailProps {
  recipe: Recipe;
  onClose: () => void;
}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={recipe.imageUrl} 
            alt={recipe.name}
            className="w-full h-64 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{recipe.name}</h2>
          <p className="text-gray-600 mb-6">{recipe.description}</p>

          <div className="flex gap-6 mb-8">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">Cook Time</p>
                <p className="font-medium">{recipe.cookTime}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">Servings</p>
                <p className="font-medium">{recipe.servings}</p>
              </div>
            </div>
            <div className="flex items-center">
              <ChefHat className="w-5 h-5 mr-2 text-gray-600" />
              <div>
                <p className="text-sm text-gray-500">Cuisine</p>
                <p className="font-medium">{recipe.cuisine}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
            <ul className="grid grid-cols-2 gap-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-4 h-4 bg-green-100 rounded-full mr-3"></span>
                  <span>
                    {ingredient.quantity} {ingredient.unit} {ingredient.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Instructions</h3>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <span className="font-bold mr-4">{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};