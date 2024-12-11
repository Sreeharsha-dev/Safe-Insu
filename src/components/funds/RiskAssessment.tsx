import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield, TrendingUp, PieChart } from 'lucide-react';

const riskLevels = [
  {
    icon: Shield,
    level: 'Conservative',
    description: 'Low-risk investments focused on capital preservation',
    suitable: 'Ideal for short-term goals and risk-averse investors',
    allocation: {
      equity: '20%',
      debt: '70%',
      cash: '10%',
    },
  },
  {
    icon: PieChart,
    level: 'Moderate',
    description: 'Balanced approach with moderate risk and returns',
    suitable: 'Suitable for medium-term goals with some risk tolerance',
    allocation: {
      equity: '50%',
      debt: '40%',
      cash: '10%',
    },
  },
  {
    icon: TrendingUp,
    level: 'Aggressive',
    description: 'High-risk investments targeting maximum returns',
    suitable: 'Best for long-term goals and high risk tolerance',
    allocation: {
      equity: '80%',
      debt: '15%',
      cash: '5%',
    },
  },
];

const RiskAssessment = () => {
  return (
    <div className="mt-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Risk Assessment</h2>
        <p className="mt-2 text-gray-600">
          Understand your risk profile and choose suitable investments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {riskLevels.map((risk, index) => (
          <motion.div
            key={risk.level}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <risk.icon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {risk.level}
            </h3>
            <p className="text-gray-600 mb-4">{risk.description}</p>
            <p className="text-sm text-gray-500 mb-4">{risk.suitable}</p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Equity</span>
                <span className="font-semibold">{risk.allocation.equity}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Debt</span>
                <span className="font-semibold">{risk.allocation.debt}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Cash</span>
                <span className="font-semibold">{risk.allocation.cash}</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Recommended Funds
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RiskAssessment;