import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, Building2, Briefcase } from 'lucide-react';

const categories = [
  {
    icon: DollarSign,
    name: 'Government Securities',
    description: 'Sovereign bonds with highest safety',
    duration: '5-30 years',
    yield: '6.5-7.5%',
  },
  {
    icon: Clock,
    name: 'Corporate Bonds',
    description: 'Fixed deposits from companies',
    duration: '1-10 years',
    yield: '7-9%',
  },
  {
    icon: Building2,
    name: 'Money Market',
    description: 'Short-term debt instruments',
    duration: '< 1 year',
    yield: '5-6%',
  },
  {
    icon: Briefcase,
    name: 'Credit Risk',
    description: 'Higher yield with moderate risk',
    duration: '2-5 years',
    yield: '8-11%',
  },
];

const DebtCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Government Securities');

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Debt Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.name)}
            className={`cursor-pointer rounded-xl p-6 ${
              selectedCategory === category.name
                ? 'bg-green-600 text-white'
                : 'bg-white hover:bg-gray-50'
            } shadow-lg`}
          >
            <category.icon className={`h-8 w-8 mb-4 ${
              selectedCategory === category.name ? 'text-white' : 'text-green-600'
            }`} />
            <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
            <p className={`text-sm mb-4 ${
              selectedCategory === category.name ? 'text-green-100' : 'text-gray-600'
            }`}>
              {category.description}
            </p>
            <div className={`text-sm ${
              selectedCategory === category.name ? 'text-green-200' : 'text-gray-500'
            }`}>
              <div>Duration: {category.duration}</div>
              <div>Yield: {category.yield}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DebtCategories;