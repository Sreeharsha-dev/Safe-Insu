import React from 'react';
import { motion } from 'framer-motion';
import { Bike } from 'lucide-react';
import BikeTypeSelector from '../../components/insurance/bike/BikeTypeSelector';
import BikeCoverageCalculator from '../../components/insurance/bike/BikeCoverageCalculator';
import BikeAddOns from '../../components/insurance/bike/BikeAddOns';
import BikePlanComparison from '../../components/insurance/bike/BikePlanComparison';
import FAQSection from '../../components/insurance/FAQSection';

const BikeInsurance = () => {
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
                Protect Your Two-Wheeler
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-purple-100 mb-8"
              >
                Comprehensive bike insurance with hassle-free claims
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold shadow-lg"
              >
                Get Instant Quote
              </motion.button>
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Bike Insurance"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BikeTypeSelector />
        <BikeCoverageCalculator />
        <BikeAddOns />
        <BikePlanComparison />
        <FAQSection />
      </div>
    </div>
  );
};

export default BikeInsurance;