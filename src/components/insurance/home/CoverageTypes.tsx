import React from 'react';
import { motion } from 'framer-motion';
import { Home, Shield, Umbrella, Lock } from 'lucide-react';

const coverageTypes = [
  {
    icon: Home,
    title: 'Structure Coverage',
    description: "Protection for your home's structure against damage",
    features: [
      'Building structure',
      'Permanent fixtures',
      'Built-in appliances',
    ],
  },
  {
    icon: Shield,
    title: 'Contents Coverage',
    description: 'Coverage for furniture, appliances, and personal belongings',
    features: [
      'Furniture and appliances',
      'Electronics',
      'Personal items',
    ],
  },
  {
    icon: Umbrella,
    title: 'Natural Disasters',
    description: 'Protection against floods, earthquakes, and storms',
    features: [
      'Flood damage',
      'Storm damage',
      'Earthquake coverage',
    ],
  },
  {
    icon: Lock,
    title: 'Theft Protection',
    description: 'Coverage against burglary and theft',
    features: [
      'Burglary coverage',
      'Theft protection',
      'Vandalism coverage',
    ],
  },
];

const CoverageTypes = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Coverage Types</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coverageTypes.map((coverage, index) => (
          <motion.div
            key={coverage.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
          >
            <coverage.icon className="h-10 w-10 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {coverage.title}
            </h3>
            <p className="text-gray-600 mb-4">{coverage.description}</p>
            <ul className="space-y-2">
              {coverage.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center text-sm text-gray-600"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoverageTypes;