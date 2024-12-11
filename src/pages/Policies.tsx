import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PolicyFilters from '../components/policies/PolicyFilters';
import PolicyGrid from '../components/policies/PolicyGrid';
import { policies } from '../data/policies';
import type { PolicyType } from '../types/policy';

const Policies = () => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});

  const filters = [
    {
      id: 'type',
      label: 'Insurance Type',
      options: ['Health', 'Life', 'Car', 'Bike', 'Home'],
    },
    {
      id: 'coverage',
      label: 'Coverage Type',
      options: ['Individual', 'Family', 'Group'],
    },
    {
      id: 'premium',
      label: 'Premium Range',
      options: ['0-1000', '1000-5000', '5000+'],
    },
  ];

  const handleFilterChange = (filterId: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterId]: value,
    }));
  };

  const filteredPolicies = policies.filter((policy) => {
    return Object.entries(selectedFilters).every(([key, value]) => {
      if (!value) return true;
      return policy[key as keyof PolicyType] === value;
    });
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Insurance Policies</h1>
          <p className="text-xl text-gray-600">
            Find the perfect coverage for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <PolicyFilters
              filters={filters}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="lg:col-span-3">
            <PolicyGrid policies={filteredPolicies} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;