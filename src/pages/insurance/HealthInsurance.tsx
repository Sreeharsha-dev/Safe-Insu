import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Clock, DollarSign } from 'lucide-react';
import CoverageCalculator from '../../components/insurance/CoverageCalculator';
import PlanComparison from '../../components/insurance/PlanComparison';
import NetworkHospitals from '../../components/insurance/NetworkHospitals';
import FAQSection from '../../components/insurance/FAQSection';

const HealthInsurance = () => {
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
                Health Insurance That Cares
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-blue-100 mb-8"
              >
                Comprehensive coverage for you and your family's healthcare needs
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg"
              >
                Get a Quote
              </motion.button>
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Health Insurance"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Key Features */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-4 text-xl text-gray-600">Why choose our health insurance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Comprehensive Coverage',
                description: 'Wide range of medical expenses covered',
              },
              {
                icon: Shield,
                title: 'No Claim Bonus',
                description: 'Up to 50% bonus for claim-free years',
              },
              {
                icon: Clock,
                title: 'Quick Processing',
                description: 'Hassle-free claims within 24 hours',
              },
              {
                icon: DollarSign,
                title: 'Affordable Premium',
                description: 'Plans starting from ₹500/month',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Coverage Calculator */}
      <CoverageCalculator />

      {/* Plan Comparison */}
      <PlanComparison />

      {/* Network Hospitals */}
      <NetworkHospitals />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default HealthInsurance;