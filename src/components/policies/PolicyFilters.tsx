import React from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  options: string[];
}

interface PolicyFiltersProps {
  filters: FilterOption[];
  selectedFilters: Record<string, string>;
  onFilterChange: (filterId: string, value: string) => void;
}

const PolicyFilters: React.FC<PolicyFiltersProps> = ({
  filters,
  selectedFilters,
  onFilterChange,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <Filter className="h-5 w-5 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold">Filters</h3>
      </div>
      <div className="space-y-6">
        {filters.map((filter) => (
          <div key={filter.id}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {filter.label}
            </label>
            <select
              value={selectedFilters[filter.id] || ''}
              onChange={(e) => onFilterChange(filter.id, e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">All</option>
              {filter.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicyFilters;