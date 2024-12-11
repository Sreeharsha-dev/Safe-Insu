import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';

const StockScreener = () => {
  const [marketCap, setMarketCap] = useState('all');
  const [sector, setSector] = useState('all');
  const [peRatio, setPeRatio] = useState(50);
  const [dividend, setDividend] = useState(0);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex items-center mb-8">
        <Search className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Stock Screener</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Market Cap
          </label>
          <select
            value={marketCap}
            onChange={(e) => setMarketCap(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Market Caps</option>
            <option value="large">Large Cap (Above Rs.20,000 Cr)</option>
            <option value="mid">Mid Cap (Rs.5,000-20,000 Cr)</option>
            <option value="small">Small Cap (Below Rs.5,000 Cr)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sector
          </label>
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Sectors</option>
            <option value="it">Information Technology</option>
            <option value="banking">Banking & Finance</option>
            <option value="pharma">Pharmaceuticals</option>
            <option value="auto">Automobile</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            P/E Ratio (Max)
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={peRatio}
            onChange={(e) => setPeRatio(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-blue-600 font-semibold mt-2">
            {peRatio}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dividend Yield (Min %)
          </label>
          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            value={dividend}
            onChange={(e) => setDividend(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-right text-blue-600 font-semibold mt-2">
            {dividend}%
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Screen Stocks
      </motion.button>
    </div>
  );
};

export default StockScreener;