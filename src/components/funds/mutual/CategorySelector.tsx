import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, BarChart, PieChart } from 'lucide-react';

const categories = [
  {
    icon: TrendingUp,
    name: 'Large Cap',
    description: 'Top 100 companies by market capitalization',
    risk: 'Moderate',
  },
  {
    icon: DollarSign,
    name: 'Mid Cap',
    description: 'Medium-sized growing companies',
    risk: 'Moderately High',
  },
  {
    icon: BarChart,
    name: 'Small Cap',
    description: 'Small emerging companies',
    risk: 'High',
  },
  {
    icon: PieChart,
    name: 'Index Funds',
    description: 'Track market indices',
    risk: 'Moderate',
  },
];

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState('Large Cap');

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Fund Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.name)}
            className={`cursor-pointer rounded-xl p-6 ${
              selectedCategory === category.name
                ? 'bg-indigo-600 text-white'
                : 'bg-white hover:bg-gray-50'
            } shadow-lg`}
          >
            <category.icon className={`h-8 w-8 mb-4 ${
              selectedCategory === category.name ? 'text-white' : 'text-indigo-600'
            }`} />
            <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
            <p className={`text-sm mb-2 ${
              selectedCategory === category.name ? 'text-indigo-100' : 'text-gray-600'
            }`}>
              {category.description}
            </p>
            <div className={`text-sm ${
              selectedCategory === category.name ? 'text-indigo-200' : 'text-gray-500'
            }`}>
              Risk: {category.risk}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;