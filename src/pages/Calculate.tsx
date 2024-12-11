import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Shield, Car, Heart, Home, Bike, TrendingUp } from 'lucide-react';
import HealthCalculator from '../components/calculators/HealthCalculator';
import TermLifeCalculator from '../components/calculators/TermLifeCalculator';
import CarCalculator from '../components/calculators/CarCalculator';
import BikeCalculator from '../components/calculators/BikeCalculator';
import HomeCalculator from '../components/calculators/HomeCalculator';
import InvestmentCalculator from '../components/calculators/InvestmentCalculator';

const calculatorTypes = [
  {
    id: 'health',
    name: 'Health Insurance',
    icon: Heart,
    description: 'Calculate health insurance premiums for you and your family',
  },
  {
    id: 'term',
    name: 'Term Life Insurance',
    icon: Shield,
    description: 'Estimate term life insurance coverage and premiums',
  },
  {
    id: 'car',
    name: 'Car Insurance',
    icon: Car,
    description: 'Calculate car insurance premiums and coverage options',
  },
  {
    id: 'bike',
    name: 'Bike Insurance',
    icon: Bike,
    description: 'Estimate two-wheeler insurance costs',
  },
  {
    id: 'home',
    name: 'Home Insurance',
    icon: Home,
    description: 'Calculate property insurance premiums',
  },
  {
    id: 'investment',
    name: 'Investment Returns',
    icon: TrendingUp,
    description: 'Project returns on various investment options',
  },
];

const Calculate = () => {
  const [selectedCalculator, setSelectedCalculator] = useState('health');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl lg:text-5xl font-bold mb-6"
            >
              Premium & Investment Calculator
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              Get instant estimates for insurance premiums and investment returns
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Calculator Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {calculatorTypes.map((calc) => (
            <motion.div
              key={calc.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCalculator(calc.id)}
              className={`cursor-pointer rounded-xl p-6 ${
                selectedCalculator === calc.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white hover:bg-gray-50'
              } shadow-lg transition-colors duration-200`}
            >
              <div className="flex items-start space-x-4">
                <calc.icon className={`h-8 w-8 ${
                  selectedCalculator === calc.id ? 'text-white' : 'text-blue-600'
                }`} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{calc.name}</h3>
                  <p className={`text-sm ${
                    selectedCalculator === calc.id ? 'text-blue-100' : 'text-gray-600'
                  }`}>
                    {calc.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Calculator Components */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {selectedCalculator === 'health' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Health Insurance Premium Calculator</h2>
              <HealthCalculator />
            </div>
          )}

          {selectedCalculator === 'term' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Term Life Insurance Calculator</h2>
              <TermLifeCalculator />
            </div>
          )}

          {selectedCalculator === 'car' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Car Insurance Premium Calculator</h2>
              <CarCalculator />
            </div>
          )}

          {selectedCalculator === 'bike' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Bike Insurance Premium Calculator</h2>
              <BikeCalculator />
            </div>
          )}

          {selectedCalculator === 'home' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Home Insurance Premium Calculator</h2>
              <HomeCalculator />
            </div>
          )}

          {selectedCalculator === 'investment' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Returns Calculator</h2>
              <InvestmentCalculator />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculate;