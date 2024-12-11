import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Basic Life',
    coverage: '₹50 Lakhs',
    monthlyPremium: '₹2,999',
    features: [
      { name: 'Death Benefit', included: true },
      { name: 'Maturity Benefit', included: true },
      { name: 'Critical Illness Cover', included: false },
      { name: 'Accidental Death Benefit', included: false },
      { name: 'Premium Waiver', included: false },
      { name: 'Tax Benefits', included: true },
    ],
  },
  {
    name: 'Enhanced Life',
    coverage: '₹1 Crore',
    monthlyPremium: '₹4,999',
    features: [
      { name: 'Death Benefit', included: true },
      { name: 'Maturity Benefit', included: true },
      { name: 'Critical Illness Cover', included: true },
      { name: 'Accidental Death Benefit', included: true },
      { name: 'Premium Waiver', included: false },
      { name: 'Tax Benefits', included: true },
    ],
  },
  {
    name: 'Premium Life',
    coverage: '₹2 Crore',
    monthlyPremium: '₹8,999',
    features: [
      { name: 'Death Benefit', included: true },
      { name: 'Maturity Benefit', included: true },
      { name: 'Critical Illness Cover', included: true },
      { name: 'Accidental Death Benefit', included: true },
      { name: 'Premium Waiver', included: true },
      { name: 'Tax Benefits', included: true },
    ],
  },
];

const BenefitsComparison = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Compare Plans</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="p-6 bg-teal-600 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold">
                {plan.monthlyPremium}
                <span className="text-sm font-normal">/month</span>
              </div>
              <div className="mt-2 text-teal-100">Coverage: {plan.coverage}</div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature.name}
                    className="flex items-center text-gray-700"
                  >
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mr-2" />
                    )}
                    {feature.name}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Choose Plan
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsComparison;