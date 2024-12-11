import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Clock, DollarSign } from 'lucide-react';

const profiles = [
  {
    icon: Shield,
    name: 'Risk Management',
    description: 'Dynamic asset allocation based on market conditions',
    benefits: [
      'Automatic rebalancing',
      'Downside protection',
      'Volatility management',
    ],
  },
  {
    icon: TrendingUp,
    name: 'Return Potential',
    description: 'Blend of equity growth and debt stability',
    benefits: [
      'Capital appreciation',
      'Regular income',
      'Better risk-adjusted returns',
    ],
  },
  {
    icon: Clock,
    name: 'Investment Horizon',
    description: 'Suitable for medium to long-term goals',
    benefits: [
      '3-5 years minimum',
      'Goal-based investing',
      'Systematic investment',
    ],
  },
  {
    icon: DollarSign,
    name: 'Tax Efficiency',
    description: 'Tax benefits under different sections',
    benefits: [
      'LTCG advantages',
      'Dividend taxation',
      'Tax-loss harvesting',
    ],
  },
];

const RiskReturnProfile = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Risk & Return Profile</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 rounded-lg p-6"
          >
            <profile.icon className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {profile.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{profile.description}</p>
            <ul className="space-y-2">
              {profile.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RiskReturnProfile;