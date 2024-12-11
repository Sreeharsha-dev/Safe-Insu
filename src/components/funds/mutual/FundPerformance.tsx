import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const funds = [
  {
    name: 'Blue Chip Growth Fund',
    category: 'Large Cap',
    returns: {
      oneMonth: 2.5,
      threeMonths: 7.8,
      oneYear: 15.6,
      threeYears: 12.4,
    },
    aum: '₹15,420 Cr',
    expense: '1.2%',
    rating: 5,
  },
  {
    name: 'Mid Cap Opportunities',
    category: 'Mid Cap',
    returns: {
      oneMonth: 3.2,
      threeMonths: 9.5,
      oneYear: 22.4,
      threeYears: 18.7,
    },
    aum: '₹8,750 Cr',
    expense: '1.5%',
    rating: 4,
  },
  {
    name: 'Small Cap Discovery',
    category: 'Small Cap',
    returns: {
      oneMonth: 4.1,
      threeMonths: 11.2,
      oneYear: 28.6,
      threeYears: 21.3,
    },
    aum: '₹3,280 Cr',
    expense: '1.8%',
    rating: 4,
  },
];

const FundPerformance = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex items-center mb-8">
        <TrendingUp className="h-6 w-6 text-indigo-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Top Performing Funds</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4">Fund Name</th>
              <th className="text-center py-3 px-4">1M</th>
              <th className="text-center py-3 px-4">3M</th>
              <th className="text-center py-3 px-4">1Y</th>
              <th className="text-center py-3 px-4">3Y</th>
              <th className="text-center py-3 px-4">AUM</th>
              <th className="text-center py-3 px-4">Expense</th>
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
                  <div className="text-sm text-gray-500">{fund.category}</div>
                </td>
                {['oneMonth', 'threeMonths', 'oneYear', 'threeYears'].map((period) => (
                  <td key={period} className="text-center py-4 px-4">
                    <div className="flex items-center justify-center">
                      {fund.returns[period] >= 0 ? (
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-500" />
                      )}
                      <span className={`ml-1 ${
                        fund.returns[period] >= 0 ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {fund.returns[period]}%
                      </span>
                    </div>
                  </td>
                ))}
                <td className="text-center py-4 px-4">{fund.aum}</td>
                <td className="text-center py-4 px-4">{fund.expense}</td>
                <td className="text-center py-4 px-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
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

export default FundPerformance;