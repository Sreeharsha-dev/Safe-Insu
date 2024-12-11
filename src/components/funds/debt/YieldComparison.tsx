import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const instruments = [
  {
    name: '10Y Government Bond',
    yield: '7.2%',
    rating: 'Sovereign',
    maturity: '10 years',
    minInvestment: '₹10,000',
  },
  {
    name: 'AAA Corporate Bond',
    yield: '8.5%',
    rating: 'AAA',
    maturity: '5 years',
    minInvestment: '₹25,000',
  },
  {
    name: 'Treasury Bills',
    yield: '5.8%',
    rating: 'Sovereign',
    maturity: '91 days',
    minInvestment: '₹5,000',
  },
  {
    name: 'Commercial Paper',
    yield: '6.5%',
    rating: 'A1+',
    maturity: '3 months',
    minInvestment: '₹15,000',
  },
];

const YieldComparison = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex items-center mb-8">
        <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Yield Comparison</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4">Instrument</th>
              <th className="text-center py-3 px-4">Yield</th>
              <th className="text-center py-3 px-4">Rating</th>
              <th className="text-center py-3 px-4">Maturity</th>
              <th className="text-center py-3 px-4">Min Investment</th>
              <th className="text-center py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {instruments.map((instrument, index) => (
              <motion.tr
                key={instrument.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-100"
              >
                <td className="py-4 px-4">
                  <div className="font-semibold text-gray-900">{instrument.name}</div>
                </td>
                <td className="text-center py-4 px-4">
                  <div className="flex items-center justify-center text-green-600 font-semibold">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    {instrument.yield}
                  </div>
                </td>
                <td className="text-center py-4 px-4">{instrument.rating}</td>
                <td className="text-center py-4 px-4">{instrument.maturity}</td>
                <td className="text-center py-4 px-4">{instrument.minInvestment}</td>
                <td className="text-center py-4 px-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
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

export default YieldComparison;