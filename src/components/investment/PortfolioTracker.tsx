import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, ArrowDownRight, PieChart } from 'lucide-react';

const investments = [
  {
    name: 'Tech Growth Fund',
    type: 'ETF',
    value: 25000,
    returns: 15.8,
    allocation: 35,
  },
  {
    name: 'Government Bonds',
    type: 'Bonds',
    value: 15000,
    returns: 7.2,
    allocation: 25,
  },
  {
    name: 'Real Estate Trust',
    type: 'REIT',
    value: 20000,
    returns: 12.5,
    allocation: 20,
  },
  {
    name: 'Blue Chip Stocks',
    type: 'Stocks',
    value: 18000,
    returns: -2.3,
    allocation: 20,
  },
];

const PortfolioTracker = () => {
  const totalValue = investments.reduce((sum, inv) => sum + inv.value, 0);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Portfolio Overview</h2>
          <p className="text-gray-600">Total Value: ₹{totalValue.toLocaleString()}</p>
        </div>
        <PieChart className="h-8 w-8 text-indigo-600" />
      </div>

      <div className="space-y-6">
        {investments.map((investment, index) => (
          <motion.div
            key={investment.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{investment.name}</h3>
                <p className="text-sm text-gray-600">{investment.type}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold">₹{investment.value.toLocaleString()}</div>
                <div className="flex items-center text-sm">
                  {investment.returns >= 0 ? (
                    <>
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                      <span className="text-green-500">{investment.returns}%</span>
                    </>
                  ) : (
                    <>
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                      <span className="text-red-500">{investment.returns}%</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${investment.allocation}%` }}
              />
            </div>
            <div className="text-right text-sm text-gray-600 mt-1">
              {investment.allocation}% allocation
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
      >
        Rebalance Portfolio
      </motion.button>
    </div>
  );
};

export default PortfolioTracker;