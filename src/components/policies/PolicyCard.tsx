import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { PolicyType } from '../../types/policy';

interface PolicyCardProps {
  policy: PolicyType;
}

const PolicyCard: React.FC<PolicyCardProps> = ({ policy }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={policy.image}
          alt={policy.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <policy.icon className="absolute bottom-4 left-4 h-8 w-8 text-white" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{policy.title}</h3>
        <p className="text-gray-600 mb-4">{policy.description}</p>
        <div className="space-y-2">
          {policy.features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-500">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
              {feature}
            </div>
          ))}
        </div>
        <motion.a
          href={policy.href}
          whileHover={{ x: 5 }}
          className="mt-6 inline-flex items-center text-blue-600 font-medium"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default PolicyCard;