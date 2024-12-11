import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const indices = [
  {
    name: 'NIFTY 50',
    value: '19,425.35',
    change: '+125.45',
    changePercent: 0.65,
    volume: '152.3M',
  },
  {
    name: 'SENSEX',
    value: '64,875.20',
    change: '+380.75',
    changePercent: 0.59,
    volume: '98.7M',
  },
  {
    name: 'NIFTY Bank',
    value: '43,650.80',
    change: '-85.30',
    changePercent: -0.20,
    volume: '45.2M',
  },
  {
    name: 'NIFTY IT',
    value: '32,780.45',
    change: '+275.60',
    changePercent: 0.85,
    volume: '28.9M',
  },
];

const MarketOverview = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex items-center mb-8">
        <TrendingUp className="h-6 w-6 text-indigo-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Market Overview</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {indices.map((index, i) => (
          <motion.div
            key={index.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-50 rounded-lg p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{index.name}</h3>
              {parseFloat(index.changePercent) >= 0 ? (
                <ArrowUpRight className="h-5 w-5 text-green-500" />
              ) : (
                <ArrowDownRight className="h-5 w-5 text-red-500" />
              )}
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {index.value}
            </div>
            <div className="flex items-center space-x-2">
              <span className={`font-medium ${
                parseFloat(index.changePercent) >= 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {index.change} ({index.changePercent}%)
              </span>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Volume: {index.volume}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarketOverview;