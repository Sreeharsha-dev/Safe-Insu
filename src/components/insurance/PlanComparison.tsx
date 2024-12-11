import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '599',
    features: [
      { name: 'Hospitalization Cover', included: true },
      { name: 'Pre & Post Hospitalization', included: true },
      { name: 'Day Care Procedures', included: true },
      { name: 'Ambulance Cover', included: true },
      { name: 'No Claim Bonus', included: true },
      { name: 'Alternative Treatment', included: false },
      { name: 'International Coverage', included: false },
      { name: 'Maternity Cover', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '999',
    features: [
      { name: 'Hospitalization Cover', included: true },
      { name: 'Pre & Post Hospitalization', included: true },
      { name: 'Day Care Procedures', included: true },
      { name: 'Ambulance Cover', included: true },
      { name: 'No Claim Bonus', included: true },
      { name: 'Alternative Treatment', included: true },
      { name: 'International Coverage', included: true },
      { name: 'Maternity Cover', included: false },
    ],
  },
  {
    name: 'Family Plus',
    price: '1,499',
    features: [
      { name: 'Hospitalization Cover', included: true },
      { name: 'Pre & Post Hospitalization', included: true },
      { name: 'Day Care Procedures', included: true },
      { name: 'Ambulance Cover', included: true },
      { name: 'No Claim Bonus', included: true },
      { name: 'Alternative Treatment', included: true },
      { name: 'International Coverage', included: true },
      { name: 'Maternity Cover', included: true },
    ],
  },
];

const PlanComparison = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Compare Plans</h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6 bg-blue-600 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold">
                  ₹{plan.price}
                  <span className="text-sm font-normal">/month</span>
                </div>
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
                  className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Choose Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanComparison;