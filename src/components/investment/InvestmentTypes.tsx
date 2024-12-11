import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Building2, Briefcase } from 'lucide-react';

const investmentTypes = [
  {
    icon: TrendingUp,
    name: 'Stocks',
    description: 'Direct equity investments in companies',
    minInvestment: '₹500',
    risk: 'High',
  },
  {
    icon: DollarSign,
    name: 'Bonds',
    description: 'Fixed income securities with regular returns',
    minInvestment: '₹10,000',
    risk: 'Low',
  },
  {
    icon: Building2,
    name: 'REITs',
    description: 'Real estate investment trusts',
    minInvestment: '₹5,000',
    risk: 'Moderate',
  },
  {
    icon: Briefcase,
    name: 'ETFs',
    description: 'Exchange-traded funds tracking indices',
    minInvestment: '₹1,000',
    risk: 'Moderate',
  },
];

const InvestmentTypes = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Investment Options</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {investmentTypes.map((type, index) => (
          <motion.div
            key={type.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <type.icon className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {type.name}
            </h3>
            <p className="text-gray-600 mb-4">{type.description}</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Min Investment</span>
                <span className="font-medium text-indigo-600">{type.minInvestment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Risk Level</span>
                <span className="font-medium text-indigo-600">{type.risk}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentTypes;