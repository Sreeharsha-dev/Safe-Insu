import React from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Clock, Phone } from 'lucide-react';

const benefits = [
  {
    icon: Home,
    title: 'Alternative Accommodation',
    description: 'Coverage for temporary housing if your home becomes uninhabitable',
  },
  {
    icon: Users,
    title: 'Liability Protection',
    description: 'Coverage for accidents involving visitors on your property',
  },
  {
    icon: Clock,
    title: 'Emergency Repairs',
    description: '24/7 emergency repair service for critical issues',
  },
  {
    icon: Phone,
    title: 'Dedicated Support',
    description: 'Personal claims assistant to guide you through the process',
  },
];

const AdditionalBenefits = () => {
  return (
    <div className="bg-emerald-50 rounded-xl shadow-lg p-8 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Additional Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-md"
          >
            <benefit.icon className="h-10 w-10 text-emerald-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalBenefits;