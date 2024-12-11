import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Target } from 'lucide-react';

const About = () => {
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
              About SimpleInsure
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Protecting millions of families with transparent and reliable insurance solutions
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To make insurance accessible, transparent, and hassle-free for everyone. We believe in 
              empowering our customers with the right information and tools to make informed decisions 
              about their insurance needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the most trusted insurance partner for millions of families, providing comprehensive 
              coverage and peace of mind through innovative solutions and exceptional service.
            </p>
          </motion.div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 text-center shadow-lg"
          >
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">1M+</div>
            <div className="text-gray-600">Happy Customers</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-8 text-center shadow-lg"
          >
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-gray-600">Claims Settlement Ratio</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-8 text-center shadow-lg"
          >
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;