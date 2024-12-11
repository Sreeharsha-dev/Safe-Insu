import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPoliciesDropdown, setShowPoliciesDropdown] = useState(false);
  const [showFundsDropdown, setShowFundsDropdown] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-blue-600">SimpleInsure</h1>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <div className="relative group">
                <button
                  onMouseEnter={() => setShowPoliciesDropdown(true)}
                  onMouseLeave={() => setShowPoliciesDropdown(false)}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  Policies
                </button>
                {showPoliciesDropdown && (
                  <div
                    onMouseEnter={() => setShowPoliciesDropdown(true)}
                    onMouseLeave={() => setShowPoliciesDropdown(false)}
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1">
                      <Link to="/policies/health" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Health Insurance</Link>
                      <Link to="/policies/term-life" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Term Life Insurance</Link>
                      <Link to="/policies/life" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Life Insurance</Link>
                      <Link to="/policies/car" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Car Insurance</Link>
                      <Link to="/policies/bike" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bike Insurance</Link>
                      <Link to="/policies/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home Insurance</Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button
                  onMouseEnter={() => setShowFundsDropdown(true)}
                  onMouseLeave={() => setShowFundsDropdown(false)}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  Funds
                </button>
                {showFundsDropdown && (
                  <div
                    onMouseEnter={() => setShowFundsDropdown(true)}
                    onMouseLeave={() => setShowFundsDropdown(false)}
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1">
                      <Link to="/funds/mutual" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mutual Funds</Link>
                      <Link to="/funds/equity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Equity Funds</Link>
                      <Link to="/funds/debt" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Debt Funds</Link>
                      <Link to="/funds/hybrid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hybrid Funds</Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/invest" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600">
                Invest
              </Link>
              <Link to="/calculate" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600">
                Calculate
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <SearchBar />
            <button className="hidden sm:block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Get Started
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                Home
              </Link>
              <Link to="/policies" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                Policies
              </Link>
              <Link to="/funds" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                Funds
              </Link>
              <Link to="/invest" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                Invest
              </Link>
              <Link to="/calculate" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                Calculate
              </Link>
            </div>
            <div className="px-4 py-3 border-t border-gray-200">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;