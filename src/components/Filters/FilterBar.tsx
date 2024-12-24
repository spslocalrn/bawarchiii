import React from 'react';
import { Filter } from 'lucide-react';
import { CategoryFilter } from './CategoryFilter';
import { TimeFilter } from './TimeFilter';
import { ServingsFilter } from './ServingsFilter';
import { IngredientFilter } from './IngredientFilter';

interface FilterBarProps {
  category: string;
  setCategory: (category: string) => void;
  cookingTime: number;
  setCookingTime: (time: number) => void;
  servings: number;
  setServings: (servings: number) => void;
  selectedIngredient: string;
  setSelectedIngredient: (ingredient: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  category,
  setCategory,
  cookingTime,
  setCookingTime,
  servings,
  setServings,
  selectedIngredient,
  setSelectedIngredient,
}) => {
  return (
    <div className="bg-white shadow-sm mb-6 p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-green-600" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <CategoryFilter value={category} onChange={setCategory} />
        <TimeFilter value={cookingTime} onChange={setCookingTime} />
        <ServingsFilter value={servings} onChange={setServings} />
        <IngredientFilter value={selectedIngredient} onChange={setSelectedIngredient} />
      </div>
    </div>
  );
};