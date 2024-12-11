import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, User, Calendar } from 'lucide-react';

const TermLifeCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState(1000000);
  const [age, setAge] = useState(30);
  const [policyTerm, setPolicyTerm] = useState(30);
  const [smoker, setSmoker] = useState(false);
  const [gender, setGender] = useState('male');

  const calculateCoverage = () => {
    // Simple coverage calculation (for demonstration)
    return Math.round(annualIncome * 10);
  };

  const calculatePremium = () => {
    // Simple premium calculation (for demonstration)
    const basePremium = (calculateCoverage() * 0.002);
    const ageMultiplier = 1 + (age - 25) * 0.03;
    const smokerMultiplier = smoker ? 1.5 : 1;
    const genderMultiplier = gender === 'male' ? 1.2 : 1;
    const termMultiplier = 1 + (policyTerm / 100);

    const annualPremium = basePremium * ageMultiplier * smokerMultiplier * genderMultiplier * termMultiplier;
    return {
      annual: Math.round(annualPremium),
      monthly: Math.round(annualPremium / 12),
    };
  };

  const coverage = calculateCoverage();
  const premium = calculatePremium();

  return (
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
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-blue-600 font-semibold mt-2">
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
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-blue-600 font-semibold mt-2">
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
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-blue-600 font-semibold mt-2">
            {policyTerm} years
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <div className="flex space-x-4">
            <button
              onClick={() => setGender('male')}
              className={`px-4 py-2 rounded-lg ${
                gender === 'male'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Male
            </button>
            <button
              onClick={() => setGender('female')}
              className={`px-4 py-2 rounded-lg ${
                gender === 'female'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Female
            </button>
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={smoker}
              onChange={(e) => setSmoker(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">
              Smoker
            </span>
          </label>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-6">
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Recommended Coverage
          </h3>
          <motion.div
            key={coverage}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-3xl font-bold text-blue-600"
          >
            ₹{coverage.toLocaleString()}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Monthly Premium
            </h3>
            <motion.div
              key={premium.monthly}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-3xl font-bold text-blue-600"
            >
              ₹{premium.monthly.toLocaleString()}
            </motion.div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Annual Premium
            </h3>
            <motion.div
              key={premium.annual}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-3xl font-bold text-blue-600"
            >
              ₹{premium.annual.toLocaleString()}
            </motion.div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="text-lg font-semibold text-gray-900">Key Benefits</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <DollarSign className="h-4 w-4 text-blue-600" />
              <span>Death Benefit</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <User className="h-4 w-4 text-blue-600" />
              <span>Terminal Illness</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span>Tax Benefits</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Calculator className="h-4 w-4 text-blue-600" />
              <span>Flexible Terms</span>
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Coverage
        </motion.button>
      </div>
    </div>
  );
};

export default TermLifeCalculator;