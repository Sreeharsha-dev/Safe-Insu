import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const funds = [
  {
    name: 'Balanced Advantage Fund',
    allocation: '50:50',
    returns: {
      oneYear: 12.5,
      threeYear: 15.2,
      fiveYear: 13.8,
    },
    volatility: 'Medium',
    rating: 5,
  },
  {
    name: 'Equity Savings Fund',
    allocation: '35:65',
    returns: {
      oneYear: 8.7,
      threeYear: 11.4,
      fiveYear: 10.2,
    },
    volatility: 'Low',
    rating: 4,
  },
  {
    name: 'Multi-Asset Fund',
    allocation: '65:35',
    returns: {
      oneYear: 15.8,
      threeYear: 18.6,
      fiveYear: 16.4,
    },
    volatility: 'High',
    rating: 4,
  },
];

const PerformanceMetrics = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex items-center mb-8">
        <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Fund Performance</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4">Fund Name</th>
              <th className="text-center py-3 px-4">Equity:Debt</th>
              <th className="text-center py-3 px-4">1Y Returns</th>
              <th className="text-center py-3 px-4">3Y Returns</th>
              <th className="text-center py-3 px-4">5Y Returns</th>
              <th className="text-center py-3 px-4">Volatility</th>
              <th className="text-center py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {funds.map((fund, index) => (
              <motion.tr
                key={fund.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-100"
              >
                <td className="py-4 px-4">
                  <div className="font-semibold text-gray-900">{fund.name}</div>
                </td>
                <td className="text-center py-4 px-4">{fund.allocation}</td>
                <td className="text-center py-4 px-4">
                  <div className="flex items-center justify-center">
                    {fund.returns.oneYear >= 0 ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                    )}
                    <span className={fund.returns.oneYear >= 0 ? 'text-green-500' : 'text-red-500'}>
                      {fund.returns.oneYear}%
                    </span>
                  </div>
                </td>
                <td className="text-center py-4 px-4">{fund.returns.threeYear}%</td>
                <td className="text-center py-4 px-4">{fund.returns.fiveYear}%</td>
                <td className="text-center py-4 px-4">{fund.volatility}</td>
                <td className="text-center py-4 px-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Invest
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceMetrics;