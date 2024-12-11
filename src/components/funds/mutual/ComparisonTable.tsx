import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const funds = [
  {
    name: 'Large Cap Fund',
    nav: '₹125.45',
    minInvestment: '₹1,000',
    lockInPeriod: '0 years',
    exitLoad: '1% < 1 year',
    features: [
      { name: 'SIP Available', included: true },
      { name: 'Tax Saving', included: false },
      { name: 'Instant Redemption', included: true },
      { name: 'Switch Option', included: true },
    ],
  },
  {
    name: 'ELSS Tax Saver',
    nav: '₹85.30',
    minInvestment: '₹500',
    lockInPeriod: '3 years',
    exitLoad: 'None',
    features: [
      { name: 'SIP Available', included: true },
      { name: 'Tax Saving', included: true },
      { name: 'Instant Redemption', included: false },
      { name: 'Switch Option', included: false },
    ],
  },
  {
    name: 'Mid Cap Fund',
    nav: '₹45.75',
    minInvestment: '₹5,000',
    lockInPeriod: '0 years',
    exitLoad: '1% < 1 year',
    features: [
      { name: 'SIP Available', included: true },
      { name: 'Tax Saving', included: false },
      { name: 'Instant Redemption', included: true },
      { name: 'Switch Option', included: true },
    ],
  },
];

const ComparisonTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Compare Funds</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4">Fund Details</th>
              {funds.map((fund) => (
                <th key={fund.name} className="text-center py-3 px-4">
                  {fund.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 font-medium">NAV</td>
              {funds.map((fund) => (
                <td key={fund.name} className="text-center py-3 px-4">
                  {fund.nav}
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 font-medium">Min Investment</td>
              {funds.map((fund) => (
                <td key={fund.name} className="text-center py-3 px-4">
                  {fund.minInvestment}
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 font-medium">Lock-in Period</td>
              {funds.map((fund) => (
                <td key={fund.name} className="text-center py-3 px-4">
                  {fund.lockInPeriod}
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 font-medium">Exit Load</td>
              {funds.map((fund) => (
                <td key={fund.name} className="text-center py-3 px-4">
                  {fund.exitLoad}
                </td>
              ))}
            </tr>
            {['SIP Available', 'Tax Saving', 'Instant Redemption', 'Switch Option'].map((feature) => (
              <tr key={feature} className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">{feature}</td>
                {funds.map((fund) => (
                  <td key={fund.name} className="text-center py-3 px-4">
                    {fund.features.find((f) => f.name === feature)?.included ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {funds.map((fund) => (
          <motion.button
            key={fund.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Invest in {fund.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;