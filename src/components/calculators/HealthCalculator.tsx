import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Shield, Calendar } from 'lucide-react';

const HealthCalculator = () => {
  const [age, setAge] = useState(30);
  const [familyMembers, setFamilyMembers] = useState(2);
  const [sumInsured, setSumInsured] = useState(500000);
  const [hasPreExisting, setHasPreExisting] = useState(false);
  const [city, setCity] = useState('tier1');

  const calculatePremium = () => {
    // Basic premium calculation logic (for demonstration)
    const basePremium = sumInsured * 0.02;
    const ageMultiplier = age > 50 ? 1.5 : 1;
    const familyMultiplier = familyMembers * 0.8;
    const preExistingMultiplier = hasPreExisting ? 1.3 : 1;
    const cityMultiplier = city === 'tier1' ? 1.2 : 1;

    const annualPremium = basePremium * ageMultiplier * familyMultiplier * preExistingMultiplier * cityMultiplier;
    const monthlyPremium = annualPremium / 12;

    return {
      monthly: Math.round(monthlyPremium),
      annual: Math.round(annualPremium),
    };
  };

  const premium = calculatePremium();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
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
            value={familyMembers}
            onChange={(e) => setFamilyMembers(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-blue-600 font-semibold mt-2">
            {familyMembers} {familyMembers === 1 ? 'member' : 'members'}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sum Insured
          </label>
          <input
            type="range"
            min="100000"
            max="2000000"
            step="100000"
            value={sumInsured}
            onChange={(e) => setSumInsured(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-blue-600 font-semibold mt-2">
            ₹{sumInsured.toLocaleString()}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City Tier
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="tier1">Tier 1 (Metro Cities)</option>
            <option value="tier2">Tier 2 & Other Cities</option>
          </select>
        </div>

        <div>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={hasPreExisting}
              onChange={(e) => setHasPreExisting(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">
              Pre-existing Medical Conditions
            </span>
          </label>
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
          <h3 className="text-lg font-semibold text-gray-900">Key Benefits</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Heart className="h-4 w-4 text-blue-600" />
              <span>Cashless Treatment</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Users className="h-4 w-4 text-blue-600" />
              <span>Family Coverage</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="h-4 w-4 text-blue-600" />
              <span>Pre & Post Care</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span>Annual Health Check</span>
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Buy Now
        </motion.button>
      </div>
    </div>
  );
};

export default HealthCalculator;