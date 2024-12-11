import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign } from 'lucide-react';

const InvestmentPlanner = () => {
  const [investment, setInvestment] = useState(100000);
  const [duration, setDuration] = useState(5);
  const [expectedYield, setExpectedYield] = useState(8);

  const calculateReturns = () => {
    const maturityAmount = investment * Math.pow(1 + expectedYield/100, duration);
    const totalInterest = maturityAmount - investment;
    
    return {
      maturityAmount: Math.round(maturityAmount),
      totalInterest: Math.round(totalInterest),
      yearlyInterest: Math.round(totalInterest/duration),
    };
  };

  const result = calculateReturns();

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-8">
        <Calculator className="h-6 w-6 text-green-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Investment Planner</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Investment Amount
            </label>
            <input
              type="range"
              min="10000"
              max="1000000"
              step="10000"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-green-600 font-semibold mt-2">
              ₹{investment.toLocaleString()}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Investment Duration (Years)
            </label>
            <input
              type="range"
              min="1"
              max="30"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-green-600 font-semibold mt-2">
              {duration} years
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Yield (%)
            </label>
            <input
              type="range"
              min="4"
              max="12"
              step="0.5"
              value={expectedYield}
              onChange={(e) => setExpectedYield(Number(e.target.value))}
              className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-green-600 font-semibold mt-2">
              {expectedYield}%
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Maturity Amount
              </h3>
              <motion.div
                key={result.maturityAmount}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-3xl font-bold text-green-600"
              >
                ₹{result.maturityAmount.toLocaleString()}
              </motion.div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Total Interest Earned
              </h3>
              <motion.div
                key={result.totalInterest}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-2xl font-bold text-green-600"
              >
                ₹{result.totalInterest.toLocaleString()}
              </motion.div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Yearly Interest
              </h3>
              <motion.div
                key={result.yearlyInterest}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-2xl font-bold text-green-600"
              >
                ₹{result.yearlyInterest.toLocaleString()}
              </motion.div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Investing
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPlanner;