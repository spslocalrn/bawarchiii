import React from 'react';
import { getAllMainIngredients } from '../../utils/recipe-filters';
import { recipes } from '../../data/recipes';

interface IngredientFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export const IngredientFilter: React.FC<IngredientFilterProps> = ({ value, onChange }) => {
  const mainIngredients = getAllMainIngredients(recipes);

  const capitalizeFirstLetter = (str: string): string => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">Main Ingredient</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
      >
        <option value="">Any Ingredient</option>
        {mainIngredients.filter(Boolean).map((ingredient) => (
          <option key={ingredient} value={ingredient}>
            {capitalizeFirstLetter(ingredient)}
          </option>
        ))}
      </select>
    </div>
  );
};