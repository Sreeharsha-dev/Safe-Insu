import React from 'react';
import { motion } from 'framer-motion';
import StockCategories from '../../components/funds/equity/StockCategories';
import MarketPerformance from '../../components/funds/equity/MarketPerformance';
import StockScreener from '../../components/funds/equity/StockScreener';
import PortfolioBuilder from '../../components/funds/equity/PortfolioBuilder';

const EquityFunds = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl lg:text-5xl font-bold mb-6"
              >
                Equity Investment
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-blue-100 mb-8"
              >
                Direct stock market investments for long-term wealth creation
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg"
              >
                Start Trading
              </motion.button>
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Equity Investment"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <StockCategories />
        <MarketPerformance />
        <StockScreener />
        <PortfolioBuilder />
      </div>
    </div>
  );
};

export default EquityFunds;