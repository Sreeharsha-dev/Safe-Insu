import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Clock, DollarSign, Settings } from 'lucide-react';

const InvestmentCalculator = () => {
  const [investmentType, setInvestmentType] = useState('sip');
  const [amount, setAmount] = useState(10000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [riskLevel, setRiskLevel] = useState('moderate');

  const calculateReturns = () => {
    if (investmentType === 'sip') {
      // SIP calculation
      const monthlyRate = expectedReturn / 12 / 100;
      const months = years * 12;
      const futureValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
      const totalInvestment = amount * months;
      const estimatedReturns = futureValue - totalInvestment;

      return {
        futureValue: Math.round(futureValue),
        totalInvestment: Math.round(totalInvestment),
        estimatedReturns: Math.round(estimatedReturns),
      };
    } else {
      // Lump sum calculation
      const futureValue = amount * Math.pow(1 + expectedReturn / 100, years);
      const estimatedReturns = futureValue - amount;

      return {
        futureValue: Math.round(futureValue),
        totalInvestment: Math.round(amount),
        estimatedReturns: Math.round(estimatedReturns),
      };
    }
  };

  const result = calculateReturns();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Investment Type
          </label>
          <div className="flex space-x-4">
            <button
              onClick={() => setInvestmentType('sip')}
              className={`px-4 py-2 rounded-lg ${
                investmentType === 'sip'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Monthly SIP
            </button>
            <button
              onClick={() => setInvestmentType('lumpsum')}
              className={`px-4 py-2 rounded-lg ${
                investmentType === 'lumpsum'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Lump Sum
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {investmentType === 'sip' ? 'Monthly Investment' : 'One-time Investment'}
          </label>
          <input
            type="range"
            min={investmentType === 'sip' ? '1000' : '10000'}
            max={investmentType === 'sip' ? '100000' : '1000000'}
            step={investmentType === 'sip' ? '1000' : '10000'}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-blue-600 font-semibold mt-2">
            ₹{amount.toLocaleString()}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Investment Period (Years)
          </label>
          <input
            type="range"
            min="1"
            max="30"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-blue-600 font-semibold mt-2">
            {years} years
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expected Annual Return (%)
          </label>
          <input
            type="range"
            min="4"
            max="20"
            step="0.5"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-blue-600 font-semibold mt-2">
            {expectedReturn}%
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Risk Level
          </label>
          <select
            value={riskLevel}
            onChange={(e) => setRiskLevel(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="low">Low Risk (4-8% returns)</option>
            <option value="moderate">Moderate Risk (8-12% returns)</option>
            <option value="high">High Risk (12-20% returns)</option>
          </select>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Total Investment
            </h3>
            <motion.div
              key={result.totalInvestment}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl font-bold text-blue-600"
            >
              ₹{result.totalInvestment.toLocaleString()}
            </motion.div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Estimated Returns
            </h3>
            <motion.div
              key={result.estimatedReturns}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl font-bold text-green-600"
            >
              ₹{result.estimatedReturns.toLocaleString()}
            </motion.div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Total Value
            </h3>
            <motion.div
              key={result.futureValue}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-3xl font-bold text-blue-600"
            >
              ₹{result.futureValue.toLocaleString()}
            </motion.div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Investment Benefits</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span>Wealth Creation</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="h-4 w-4 text-blue-600" />
              <span>Long-term Growth</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <DollarSign className="h-4 w-4 text-blue-600" />
              <span>Tax Benefits</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Settings className="h-4 w-4 text-blue-600" />
              <span>Portfolio Diversification</span>
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Start Investing
        </motion.button>
      </div>
    </div>
  );
};

export default InvestmentCalculator;