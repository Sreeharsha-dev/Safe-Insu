import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, TrendingUp, AlertTriangle } from 'lucide-react';

const FundFilters = () => {
  const [riskLevel, setRiskLevel] = useState('all');
  const [minInvestment, setMinInvestment] = useState(1000);
  const [fundType, setFundType] = useState('all');

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Filter className="h-5 w-5 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold">Filters</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Risk Level
          </label>
          <select
            value={riskLevel}
            onChange={(e) => setRiskLevel(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Risk Levels</option>
            <option value="low">Low Risk</option>
            <option value="medium">Medium Risk</option>
            <option value="high">High Risk</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Investment
          </label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={minInvestment}
            onChange={(e) => setMinInvestment(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-blue-600 font-semibold mt-2">
            ₹{minInvestment.toLocaleString()}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fund Type
          </label>
          <select
            value={fundType}
            onChange={(e) => setFundType(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Types</option>
            <option value="equity">Equity</option>
            <option value="debt">Debt</option>
            <option value="hybrid">Hybrid</option>
            <option value="index">Index</option>
          </select>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Apply Filters
        </motion.button>
      </div>
    </div>
  );
};

export default FundFilters;