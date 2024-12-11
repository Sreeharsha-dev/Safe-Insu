import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Home, DollarSign } from 'lucide-react';

const CoverageCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(2000000);
  const [contentValue, setContentValue] = useState(500000);
  const [propertyAge, setPropertyAge] = useState(0);
  const [coverageType, setCoverageType] = useState('comprehensive');

  const calculatePremium = () => {
    // Simple premium calculation logic (for demonstration)
    const baseRate = coverageType === 'comprehensive' ? 0.001 : 0.0005;
    const ageMultiplier = Math.max(0.8, 1 - (propertyAge * 0.02));
    const totalValue = propertyValue + contentValue;
    
    return Math.round(totalValue * baseRate * ageMultiplier);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex items-center mb-8">
        <Calculator className="h-8 w-8 text-emerald-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Coverage Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property Value
            </label>
            <input
              type="range"
              min="1000000"
              max="10000000"
              step="100000"
              value={propertyValue}
              onChange={(e) => setPropertyValue(Number(e.target.value))}
              className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-emerald-600 font-semibold mt-2">
              ₹{propertyValue.toLocaleString()}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contents Value
            </label>
            <input
              type="range"
              min="100000"
              max="2000000"
              step="50000"
              value={contentValue}
              onChange={(e) => setContentValue(Number(e.target.value))}
              className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-emerald-600 font-semibold mt-2">
              ₹{contentValue.toLocaleString()}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property Age (Years)
            </label>
            <input
              type="range"
              min="0"
              max="50"
              value={propertyAge}
              onChange={(e) => setPropertyAge(Number(e.target.value))}
              className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-emerald-600 font-semibold mt-2">
              {propertyAge} {propertyAge === 1 ? 'year' : 'years'}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Coverage Type
            </label>
            <div className="flex space-x-4">
              <button
                onClick={() => setCoverageType('comprehensive')}
                className={`px-4 py-2 rounded-lg ${
                  coverageType === 'comprehensive'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Comprehensive
              </button>
              <button
                onClick={() => setCoverageType('basic')}
                className={`px-4 py-2 rounded-lg ${
                  coverageType === 'basic'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Basic
              </button>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Estimated Annual Premium
          </h3>
          <motion.div
            key={calculatePremium()}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl font-bold text-emerald-600"
          >
            ₹{calculatePremium().toLocaleString()}
          </motion.div>
          <p className="mt-4 text-sm text-gray-600">
            This is an estimated premium. The actual premium may vary based on property location, construction type, and other factors.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Get Detailed Quote
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CoverageCalculator;