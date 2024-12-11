import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Coins, Heart } from 'lucide-react';

const policyTypes = [
  {
    value: 'whole',
    label: 'Whole Life',
    description: 'Lifelong coverage with savings component',
    icon: Shield,
  },
  {
    value: 'endowment',
    label: 'Endowment',
    description: 'Insurance with guaranteed maturity benefit',
    icon: Clock,
  },
  {
    value: 'moneyBack',
    label: 'Money Back',
    description: 'Regular returns with life coverage',
    icon: Coins,
  },
  {
    value: 'ulip',
    label: 'ULIP',
    description: 'Market-linked insurance investment',
    icon: Heart,
  },
];

const PolicyTypeSelector = () => {
  const [selectedType, setSelectedType] = useState('whole');

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex items-center mb-8">
        <Shield className="h-8 w-8 text-teal-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Choose Policy Type</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {policyTypes.map(({ value, label, description, icon: Icon }) => (
          <motion.div
            key={value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedType(value)}
            className={`cursor-pointer rounded-xl p-6 ${
              selectedType === value
                ? 'bg-teal-600 text-white'
                : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
            }`}
          >
            <Icon className={`h-8 w-8 mb-4 ${selectedType === value ? 'text-white' : 'text-teal-600'}`} />
            <h3 className="text-xl font-bold mb-2">{label}</h3>
            <p className={selectedType === value ? 'text-teal-100' : 'text-gray-600'}>
              {description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-teal-50 rounded-lg">
        <p className="text-sm text-teal-600">
          Tip: Choose a policy type that aligns with your long-term financial goals and protection needs.
        </p>
      </div>
    </div>
  );
};

export default PolicyTypeSelector;