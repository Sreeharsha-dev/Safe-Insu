import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car } from 'lucide-react';

const carTypes = [
  {
    type: 'Hatchback',
    description: 'Compact and fuel-efficient',
    examples: 'Swift, i20, Baleno',
  },
  {
    type: 'Sedan',
    description: 'Comfort and style',
    examples: 'City, Verna, Ciaz',
  },
  {
    type: 'SUV',
    description: 'Power and versatility',
    examples: 'Creta, Seltos, XUV700',
  },
  {
    type: 'Luxury',
    description: 'Premium features',
    examples: 'BMW, Audi, Mercedes',
  },
];

const CarTypeSelector = () => {
  const [selectedType, setSelectedType] = useState('Hatchback');

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex items-center mb-8">
        <Car className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Select Car Type</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {carTypes.map(({ type, description, examples }) => (
          <motion.div
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedType(type)}
            className={`cursor-pointer rounded-xl p-6 ${
              selectedType === type
                ? 'bg-blue-600 text-white'
                : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
            }`}
          >
            <h3 className="text-xl font-bold mb-2">{type}</h3>
            <p className={selectedType === type ? 'text-blue-100' : 'text-gray-600'}>
              {description}
            </p>
            <p className={`mt-2 text-sm ${selectedType === type ? 'text-blue-200' : 'text-gray-500'}`}>
              Examples: {examples}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-600">
          Tip: Choose your car type to get accurate premium calculations and coverage recommendations.
        </p>
      </div>
    </div>
  );
};

export default CarTypeSelector;