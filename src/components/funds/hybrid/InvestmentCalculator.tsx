import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, PieChart } from 'lucide-react';

const InvestmentCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [years, setYears] = useState(10);
  const [equityAllocation, setEquityAllocation] = useState(50);
  const [expectedEquityReturn, setExpectedEquityReturn] = useState(12);
  const [expectedDebtReturn, setExpectedDebtReturn] = useState(8);

  const calculateReturns = () => {
    const monthlyRate = (
      (equityAllocation / 100 * expectedEquityReturn +
      (100 - equityAllocation) / 100 * expectedDebtReturn) / 12 / 100
    );
    const months = years * 12;
    const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    const totalInvestment = monthlyInvestment * months;
    const estimatedReturns = futureValue - totalInvestment;

    return {
      futureValue: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      estimatedReturns: Math.round(estimatedReturns),
    };
  };

  const result = calculateReturns();

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-8">
        <Calculator className="h-6 w-6 text-purple-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Hybrid Fund Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Investment
            </label>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-purple-600 font-semibold mt-2">
              ₹{monthlyInvestment.toLocaleString()}
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
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-right text-purple-600 font-semibold mt-2">
              {years} years
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Equity Allocation (%)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={equityAllocation}
              onChange={(e) => setEquityAllocation(Number(e.target.value))}
              className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>Equity: {equityAllocation}%</span>
              <span>Debt: {100 - equityAllocation}%</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Equity Return (%)
              </label>
              <input
                type="number"
                min="1"
                max="30"
                value={expectedEquityReturn}
                onChange={(e) => setExpectedEquityReturn(Number(e.target.value))}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Debt Return (%)
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={expectedDebtReturn}
                onChange={(e) => setExpectedDebtReturn(Number(e.target.value))}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-xl p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Total Investment
              </h3>
              <motion.div
                key={result.totalInvestment}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-2xl font-bold text-purple-600"
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
                className="text-3xl font-bold text-purple-600"
              >
                ₹{result.futureValue.toLocaleString()}
              </motion.div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Start Investing
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCalculator;