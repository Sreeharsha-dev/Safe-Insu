import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, User, Calendar } from 'lucide-react';

const CoverageCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState(1000000);
  const [age, setAge] = useState(30);
  const [policyTerm, setPolicyTerm] = useState(30);
  const [paymentFrequency, setPaymentFrequency] = useState('annual');

  const calculateCoverage = () => {
    // Simple coverage calculation (for demonstration)
    return Math.round(annualIncome * 10);
  };

  const calculatePremium = () => {
    // Simple premium calculation (for demonstration)
    const basePremium = (calculateCoverage() * 0.005) / (paymentFrequency === 'annual' ? 1 : 12);
    const ageMultiplier = 1 + (age - 25) * 0.02;
    return Math.round(basePremium * ageMultiplier);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex items-center mb-8">
        <Calculator className="h-8 w-8 text-teal-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Coverage Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Income
            </label>
            <input
              type="range"
              min="500000"
              max="5000000"
              step="100000"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(Number(e.target.value))}
              className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-teal-600 font-semibold mt-2">
              ₹{annualIncome.toLocaleString()}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Age
            </label>
            <input
              type="range"
              min="18"
              max="65"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-teal-600 font-semibold mt-2">
              {age} years
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Policy Term
            </label>
            <input
              type="range"
              min="10"
              max="40"
              value={policyTerm}
              onChange={(e) => setPolicyTerm(Number(e.target.value))}
              className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-teal-600 font-semibold mt-2">
              {policyTerm} years
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Premium Payment Frequency
            </label>
            <div className="flex space-x-4">
              <button
                onClick={() => setPaymentFrequency('annual')}
                className={`px-4 py-2 rounded-lg ${
                  paymentFrequency === 'annual'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Annual
              </button>
              <button
                onClick={() => setPaymentFrequency('monthly')}
                className={`px-4 py-2 rounded-lg ${
                  paymentFrequency === 'monthly'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>

        <div className="bg-teal-50 rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Recommended Coverage
            </h3>
            <motion.div
              key={calculateCoverage()}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-bold text-teal-600"
            >
              ₹{calculateCoverage().toLocaleString()}
            </motion.div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Estimated {paymentFrequency === 'annual' ? 'Annual' : 'Monthly'} Premium
            </h3>
            <motion.div
              key={calculatePremium()}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-bold text-teal-600"
            >
              ₹{calculatePremium().toLocaleString()}
            </motion.div>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            This is an estimated premium. The actual premium may vary based on medical examination and other factors.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Get Detailed Quote
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CoverageCalculator;