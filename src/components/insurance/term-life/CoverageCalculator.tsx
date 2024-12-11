import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign } from 'lucide-react';

const CoverageCalculator = () => {
  const [coverage, setCoverage] = useState(1000000);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState('male');
  const [smoker, setSmoker] = useState(false);

  const calculatePremium = () => {
    // Simple premium calculation logic (for demonstration)
    const baseRate = 0.1;
    const ageMultiplier = age / 30;
    const smokerMultiplier = smoker ? 1.5 : 1;
    const genderMultiplier = gender === 'male' ? 1.1 : 1;
    
    return Math.round((coverage * baseRate * ageMultiplier * smokerMultiplier * genderMultiplier) / 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex items-center mb-8">
        <Calculator className="h-8 w-8 text-indigo-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Coverage Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Coverage Amount
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="range"
                min="500000"
                max="10000000"
                step="100000"
                value={coverage}
                onChange={(e) => setCoverage(Number(e.target.value))}
                className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer mt-2"
              />
              <div className="text-right text-indigo-600 font-semibold mt-2">
                ₹{coverage.toLocaleString()}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age
            </label>
            <input
              type="range"
              min="18"
              max="65"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-indigo-600 font-semibold mt-2">
              {age} years
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <div className="flex space-x-4">
                <button
                  onClick={() => setGender('male')}
                  className={`px-4 py-2 rounded-lg ${
                    gender === 'male'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Male
                </button>
                <button
                  onClick={() => setGender('female')}
                  className={`px-4 py-2 rounded-lg ${
                    gender === 'female'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Smoking Status
              </label>
              <div className="flex space-x-4">
                <button
                  onClick={() => setSmoker(false)}
                  className={`px-4 py-2 rounded-lg ${
                    !smoker
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Non-Smoker
                </button>
                <button
                  onClick={() => setSmoker(true)}
                  className={`px-4 py-2 rounded-lg ${
                    smoker
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Smoker
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Estimated Monthly Premium
          </h3>
          <motion.div
            key={calculatePremium()}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl font-bold text-indigo-600"
          >
            ₹{calculatePremium().toLocaleString()}/month
          </motion.div>
          <p className="mt-4 text-sm text-gray-600">
            This is an estimated premium. The actual premium may vary based on additional factors and medical examination results.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Get Detailed Quote
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CoverageCalculator;