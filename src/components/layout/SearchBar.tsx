import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
      >
        <Search className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-screen max-w-md"
          >
            <div className="bg-white rounded-lg shadow-lg p-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search policies, plans..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {searchQuery && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-500">Quick Links</h4>
                  <div className="mt-2 space-y-2">
                  <SearchResult title="Health Insurance" href="/insurance/health" />
                  <SearchResult title="Term Life Insurance" href="/insurance/term-life" />
                  <SearchResult title="Car Insurance" href="/insurance/car" />
                  <SearchResult title="Bike Insurance" href="/insurance/bike" />
                  <SearchResult title="Home Insurance" href="/insurance/home" />
                  <SearchResult title="Life Insurance" href="/insurance/life" />
                  <SearchResult title="Mutual Funds" href="/funds/mutual" />
                  <SearchResult title="Equity Funds" href="/funds/equity" />
                  <SearchResult title="Debt Funds" href="/funds/debt" />
                  <SearchResult title="Hybrid Funds" href="/funds/hybrid" />
                  <SearchResult title="Investments" href="/investment" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SearchResult = ({ title, href }: { title: string; href: string }) => (
  <a
    href={href}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
  >
    {title}
  </a>
);

export default SearchBar;