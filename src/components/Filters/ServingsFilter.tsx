import React from 'react';

interface ServingsFilterProps {
  value: number;
  onChange: (value: number) => void;
}

export const ServingsFilter: React.FC<ServingsFilterProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">Servings</label>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
      >
        <option value={0}>Any Servings</option>
        <option value={2}>2 servings</option>
        <option value={4}>4 servings</option>
        <option value={6}>6 servings</option>
      </select>
    </div>
  );
};