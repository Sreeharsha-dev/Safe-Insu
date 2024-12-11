import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, Shield, ArrowRight } from 'lucide-react';

const strategies = [
  {
    name: 'Aggressive Hybrid',
    equity: 65,
    debt: 35,
    description: 'Higher equity allocation for growth',
    riskLevel: 'Moderately High',
    suitability: 'Long-term wealth creation',
  },
  {
    name: 'Balanced Hybrid',
    equity: 50,
    debt: 50,
    description: 'Equal allocation for stability',
    riskLevel: 'Moderate',
    suitability: 'Medium to long-term goals',
  },
  {
    name: 'Conservative Hybrid',
    equity: 25,
    debt: 75,
    description: 'Debt focus for stability',
    riskLevel: 'Moderately Low',
    suitability: 'Regular income with some growth',
  },
];

const AllocationStrategy = () => {
  const [selectedStrategy, setSelectedStrategy] = useState('Balanced Hybrid');

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex items-center mb-8">
        <PieChart className="h-6 w-6 text-purple-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Asset Allocation Strategies</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {strategies.map((strategy) => (
          <motion.div
            key={strategy.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedStrategy(strategy.name)}
            className={`cursor-pointer rounded-xl p-6 ${
              selectedStrategy === strategy.name
                ? 'bg-purple-600 text-white'
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <h3 className="text-xl font-bold mb-4">{strategy.name}</h3>
            
            <div className="flex justify-between mb-4">
              <div>
                <div className={selectedStrategy === strategy.name ? 'text-purple-200' : 'text-gray-600'}>
                  Equity
                </div>
                <div className="text-lg font-semibold">{strategy.equity}%</div>
              </div>
              <div>
                <div className={selectedStrategy === strategy.name ? 'text-purple-200' : 'text-gray-600'}>
                  Debt
                </div>
                <div className="text-lg font-semibold">{strategy.debt}%</div>
              </div>
            </div>

            <div className={`text-sm mb-4 ${
              selectedStrategy === strategy.name ? 'text-purple-100' : 'text-gray-600'
            }`}>
              {strategy.description}
            </div>

            <div className="space-y-2">
              <div className={`flex items-center text-sm ${
                selectedStrategy === strategy.name ? 'text-purple-200' : 'text-gray-600'
              }`}>
                <Shield className="h-4 w-4 mr-2" />
                Risk: {strategy.riskLevel}
              </div>
              <div className={`flex items-center text-sm ${
                selectedStrategy === strategy.name ? 'text-purple-200' : 'text-gray-600'
              }`}>
                <TrendingUp className="h-4 w-4 mr-2" />
                Best for: {strategy.suitability}
              </div>
            </div>

            <motion.button
              whileHover={{ x: 5 }}
              className={`mt-6 flex items-center text-sm font-medium ${
                selectedStrategy === strategy.name
                  ? 'text-white'
                  : 'text-purple-600'
              }`}
            >
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllocationStrategy;