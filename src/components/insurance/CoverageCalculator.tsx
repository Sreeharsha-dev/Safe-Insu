import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

const CoverageCalculator = () => {
  const [coverage, setCoverage] = useState(500000);
  const [age, setAge] = useState(30);
  const [familySize, setFamilySize] = useState(2);

  const calculatePremium = () => {
    // Simple premium calculation logic (for demonstration)
    const basePremium = coverage * 0.02;
    const ageMultiplier = age > 50 ? 1.5 : 1;
    const familyMultiplier = familySize * 0.8;
    return Math.round(basePremium * ageMultiplier * familyMultiplier);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">Coverage Calculator</h2>
          <p className="mt-4 text-xl text-gray-600">
            Calculate your estimated premium based on your needs
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Coverage Amount
              </label>
              <input
                type="range"
                min="100000"
                max="2000000"
                step="100000"
                value={coverage}
                onChange={(e) => setCoverage(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-right text-blue-600 font-semibold mt-2">
                ₹{coverage.toLocaleString()}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age of Eldest Member
              </label>
              <input
                type="range"
                min="18"
                max="70"
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
                Number of Family Members
              </label>
              <input
                type="range"
                min="1"
                max="6"
                value={familySize}
                onChange={(e) => setFamilySize(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-right text-blue-600 font-semibold mt-2">
                {familySize} {familySize === 1 ? 'member' : 'members'}
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Estimated Monthly Premium
              </h3>
              <motion.div
                key={calculatePremium()}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-3xl font-bold text-blue-600"
              >
                ₹{calculatePremium().toLocaleString()}/month
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageCalculator;