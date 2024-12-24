import React from 'react';

interface TimeFilterProps {
  value: number;
  onChange: (value: number) => void;
}

export const TimeFilter: React.FC<TimeFilterProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">Cooking Time (mins)</label>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
      >
        <option value={0}>Any Time</option>
        <option value={30}>30 mins or less</option>
        <option value={45}>45 mins or less</option>
        <option value={60}>60 mins or less</option>
      </select>
    </div>
  );
};