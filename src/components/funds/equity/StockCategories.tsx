import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Building2, Briefcase, Cpu } from 'lucide-react';

const categories = [
  {
    icon: Building2,
    name: 'Blue Chip',
    description: 'Large, stable companies with strong financials',
    risk: 'Low to Moderate',
  },
  {
    icon: TrendingUp,
    name: 'Growth Stocks',
    description: 'Companies with high growth potential',
    risk: 'Moderate to High',
  },
  {
    icon: Briefcase,
    name: 'Value Stocks',
    description: 'Undervalued companies with strong fundamentals',
    risk: 'Moderate',
  },
  {
    icon: Cpu,
    name: 'Tech Stocks',
    description: 'Technology and innovation focused companies',
    risk: 'High',
  },
];

const StockCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Blue Chip');

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Stock Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.name)}
            className={`cursor-pointer rounded-xl p-6 ${
              selectedCategory === category.name
                ? 'bg-blue-600 text-white'
                : 'bg-white hover:bg-gray-50'
            } shadow-lg`}
          >
            <category.icon className={`h-8 w-8 mb-4 ${
              selectedCategory === category.name ? 'text-white' : 'text-blue-600'
            }`} />
            <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
            <p className={`text-sm mb-2 ${
              selectedCategory === category.name ? 'text-blue-100' : 'text-gray-600'
            }`}>
              {category.description}
            </p>
            <div className={`text-sm ${
              selectedCategory === category.name ? 'text-blue-200' : 'text-gray-500'
            }`}>
              Risk: {category.risk}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StockCategories;