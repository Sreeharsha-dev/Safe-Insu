import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Check } from 'lucide-react';

const portfolios = [
  {
    name: 'Conservative',
    allocation: {
      'Large Cap': '70%',
      'Mid Cap': '20%',
      'Small Cap': '10%',
    },
    features: [
      'Focus on stable blue-chip companies',
      'Regular dividend income',
      'Lower volatility',
      'Capital preservation',
    ],
  },
  {
    name: 'Balanced',
    allocation: {
      'Large Cap': '50%',
      'Mid Cap': '30%',
      'Small Cap': '20%',
    },
    features: [
      'Mix of growth and value stocks',
      'Moderate risk exposure',
      'Balanced returns',
      'Sector diversification',
    ],
  },
  {
    name: 'Aggressive',
    allocation: {
      'Large Cap': '30%',
      'Mid Cap': '40%',
      'Small Cap': '30%',
    },
    features: [
      'Focus on high-growth stocks',
      'Higher risk tolerance',
      'Maximum return potential',
      'Emerging sectors exposure',
    ],
  },
];

const PortfolioBuilder = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-8">
        <PieChart className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Portfolio Builder</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolios.map((portfolio, index) => (
          <motion.div
            key={portfolio.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {portfolio.name}
            </h3>

            <div className="space-y-3 mb-6">
              {Object.entries(portfolio.allocation).map(([category, percentage]) => (
                <div key={category} className="flex justify-between items-center">
                  <span className="text-gray-600">{category}</span>
                  <span className="font-semibold text-blue-600">{percentage}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-6">
              {portfolio.features.map((feature) => (
                <div key={feature} className="flex items-center text-gray-600">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Create Portfolio
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioBuilder;