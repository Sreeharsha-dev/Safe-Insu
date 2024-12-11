import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Shield, Umbrella, Lock } from 'lucide-react';

const HomeCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(2000000);
  const [contentValue, setContentValue] = useState(500000);
  const [propertyAge, setPropertyAge] = useState(0);
  const [coverageType, setCoverageType] = useState('comprehensive');
  const [location, setLocation] = useState('urban');

  const calculatePremium = () => {
    // Basic premium calculation logic (for demonstration)
    const baseRate = coverageType === 'comprehensive' ? 0.001 : 0.0005;
    const ageMultiplier = Math.max(0.8, 1 - (propertyAge * 0.02));
    const locationMultiplier = location === 'urban' ? 1.2 : 1;
    const totalValue = propertyValue + contentValue;
    
    const annualPremium = totalValue * baseRate * ageMultiplier * locationMultiplier;
    return {
      annual: Math.round(annualPremium),
      monthly: Math.round(annualPremium / 12),
    };
  };

  const premium = calculatePremium();

  return (
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
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-blue-600 font-semibold mt-2">
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
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-blue-600 font-semibold mt-2">
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
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-blue-600 font-semibold mt-2">
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
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Comprehensive
            </button>
            <button
              onClick={() => setCoverageType('basic')}
              className={`px-4 py-2 rounded-lg ${
                coverageType === 'basic'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Basic
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="urban">Urban Area</option>
            <option value="suburban">Suburban Area</option>
            <option value="rural">Rural Area</option>
          </select>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-6">
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
          <h3 className="text-lg font-semibold text-gray-900">Coverage Benefits</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Home className="h-4 w-4 text-blue-600" />
              <span>Structure Coverage</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="h-4 w-4 text-blue-600" />
              <span>Contents Coverage</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Umbrella className="h-4 w-4 text-blue-600" />
              <span>Natural Disasters</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Lock className="h-4 w-4 text-blue-600" />
              <span>Theft Protection</span>
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

export default HomeCalculator;