import React from 'react';
import { motion } from 'framer-motion';
import AllocationStrategy from '../../components/funds/hybrid/AllocationStrategy';
import PerformanceMetrics from '../../components/funds/hybrid/PerformanceMetrics';
import RiskReturnProfile from '../../components/funds/hybrid/RiskReturnProfile';
import InvestmentCalculator from '../../components/funds/hybrid/InvestmentCalculator';

const HybridFunds = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl lg:text-5xl font-bold mb-6"
              >
                Hybrid Fund Investment
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-purple-100 mb-8"
              >
                Best of both worlds - Equity growth with Debt stability
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold shadow-lg"
              >
                Start Investing
              </motion.button>
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Hybrid Fund Investment"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AllocationStrategy />
        <PerformanceMetrics />
        <RiskReturnProfile />
        <InvestmentCalculator />
      </div>
    </div>
  );
};

export default HybridFunds;