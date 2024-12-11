import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, DollarSign, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted Protection',
    description: 'Over 25 years of experience protecting what matters most to our customers.',
  },
  {
    icon: Clock,
    title: 'Quick Claims',
    description: '90% of claims processed within 24 hours for hassle-free experience.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Rates',
    description: 'Best-in-class coverage at rates that won\'t break the bank.',
  },
  {
    icon: HeartHandshake,
    title: 'Personal Support',
    description: '24/7 customer support from our dedicated team of insurance experts.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900"
          >
            Why Choose SimpleInsure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            We make insurance simple, transparent, and hassle-free
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;