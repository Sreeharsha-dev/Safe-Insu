import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const funds = [
  {
    name: 'Blue Chip Growth Fund',
    type: 'Large Cap Equity',
    returns: {
      oneYear: 15.8,
      threeYear: 12.5,
      fiveYear: 14.2,
    },
    risk: 'Moderate',
    nav: 45.67,
  },
  {
    name: 'Mid Cap Opportunities',
    type: 'Mid Cap Equity',
    returns: {
      oneYear: 22.4,
      threeYear: 18.9,
      fiveYear: 16.8,
    },
    risk: 'High',
    nav: 38.92,
  },
  {
    name: 'Debt Income Fund',
    type: 'Debt',
    returns: {
      oneYear: 8.2,
      threeYear: 7.5,
      fiveYear: 7.8,
    },
    risk: 'Low',
    nav: 28.45,
  },
];

const TopPerformers = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-6">
        <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-bold">Top Performing Funds</h2>
      </div>

      <div className="space-y-6">
        {funds.map((fund, index) => (
          <motion.div
            key={fund.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{fund.name}</h3>
                <p className="text-sm text-gray-600">{fund.type}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">NAV</div>
                <div className="font-semibold">₹{fund.nav}</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-600">1Y Returns</div>
                <div className="flex items-center">
                  {fund.returns.oneYear >= 0 ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                  )}
                  <span className={`font-semibold ${
                    fund.returns.oneYear >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {fund.returns.oneYear}%
                  </span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">3Y Returns</div>
                <div className="font-semibold">{fund.returns.threeYear}%</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">5Y Returns</div>
                <div className="font-semibold">{fund.returns.fiveYear}%</div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm">
                <span className="text-gray-600">Risk: </span>
                <span className="font-medium">{fund.risk}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Invest Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformers;