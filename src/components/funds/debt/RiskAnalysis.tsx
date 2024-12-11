import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield, Clock, TrendingUp } from 'lucide-react';

const risks = [
  {
    icon: AlertTriangle,
    name: 'Interest Rate Risk',
    description: 'Impact of interest rate changes on bond prices',
    mitigation: 'Duration management and laddering strategy',
  },
  {
    icon: Shield,
    name: 'Credit Risk',
    description: 'Risk of default by bond issuer',
    mitigation: 'Focus on high-rated bonds and diversification',
  },
  {
    icon: Clock,
    name: 'Liquidity Risk',
    description: 'Difficulty in buying or selling bonds',
    mitigation: 'Maintain mix of liquid and high-yield bonds',
  },
  {
    icon: TrendingUp,
    name: 'Reinvestment Risk',
    description: 'Risk of reinvesting at lower rates',
    mitigation: 'Ladder maturities and hold till maturity',
  },
];

const RiskAnalysis = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Risk Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {risks.map((risk, index) => (
          <motion.div
            key={risk.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 rounded-lg p-6"
          >
            <risk.icon className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {risk.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{risk.description}</p>
            <div className="text-sm text-green-600 font-medium">
              Mitigation: {risk.mitigation}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RiskAnalysis;