import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Car } from 'lucide-react';

const CarCoverageCalculator = () => {
  const [carValue, setCarValue] = useState(500000);
  const [carAge, setCarAge] = useState(0);
  const [coverageType, setCoverageType] = useState('comprehensive');
  const [ncbDiscount, setNcbDiscount] = useState(0);

  const calculatePremium = () => {
    // Simple premium calculation logic (for demonstration)
    const baseRate = coverageType === 'comprehensive' ? 0.02 : 0.01;
    const ageMultiplier = Math.max(0.6, 1 - (carAge * 0.1));
    const ncbMultiplier = 1 - (ncbDiscount / 100);
    
    return Math.round(carValue * baseRate * ageMultiplier * ncbMultiplier);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex items-center mb-8">
        <Calculator className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Premium Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Car Value (IDV)
            </label>
            <input
              type="range"
              min="100000"
              max="5000000"
              step="50000"
              value={carValue}
              onChange={(e) => setCarValue(Number(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-blue-600 font-semibold mt-2">
              ₹{carValue.toLocaleString()}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Car Age (Years)
            </label>
            <input
              type="range"
              min="0"
              max="15"
              value={carAge}
              onChange={(e) => setCarAge(Number(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-blue-600 font-semibold mt-2">
              {carAge} {carAge === 1 ? 'year' : 'years'}
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
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Comprehensive
              </button>
              <button
                onClick={() => setCoverageType('thirdParty')}
                className={`px-4 py-2 rounded-lg ${
                  coverageType === 'thirdParty'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Third Party
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              No Claim Bonus (NCB)
            </label>
            <select
              value={ncbDiscount}
              onChange={(e) => setNcbDiscount(Number(e.target.value))}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value={0}>0% (No NCB)</option>
              <option value={20}>20% (After 1 claim-free year)</option>
              <option value={25}>25% (After 2 claim-free years)</option>
              <option value={35}>35% (After 3 claim-free years)</option>
              <option value={45}>45% (After 4 claim-free years)</option>
              <option value={50}>50% (After 5 claim-free years)</option>
            </select>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Estimated Annual Premium
          </h3>
          <motion.div
            key={calculatePremium()}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl font-bold text-blue-600"
          >
            ₹{calculatePremium().toLocaleString()}
          </motion.div>
          <p className="mt-4 text-sm text-gray-600">
            This is an estimated premium. The actual premium may vary based on additional factors and car specifications.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Detailed Quote
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CarCoverageCalculator;