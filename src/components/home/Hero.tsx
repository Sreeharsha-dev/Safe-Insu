import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Calculator, FileText } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-100 opacity-50 transform -skew-y-6"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="pt-20 pb-16 lg:pt-32 lg:pb-24 flex flex-col lg:flex-row items-center justify-between"
        >
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-blue-600 font-semibold">SimpleInsure</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
            >
              Protect Your Future
              <span className="block text-blue-600">With Confidence</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Simple, transparent insurance solutions tailored to your needs. Get started today and secure what matters most.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.a
                href="/policies"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                <FileText className="w-5 h-5 mr-2" />
                View Policies
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>

              <motion.a
                href="/calculate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-base font-medium rounded-xl text-blue-600 bg-transparent hover:bg-blue-50 transition-colors duration-200"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Premium
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center justify-center lg:justify-start space-x-8"
            >
              {[
                { label: 'Active Customers', value: '50K+' },
                { label: 'Claims Processed', value: '100K+' },
                { label: 'Customer Rating', value: '4.9/5' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 mt-12 lg:mt-0"
          >
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="rounded-2xl shadow-2xl"
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                alt="Happy family protected by insurance"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;