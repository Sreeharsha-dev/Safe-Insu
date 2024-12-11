import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bike } from 'lucide-react';

const bikeTypes = [
  { value: 'sport', label: 'Sport Bikes', description: 'High-performance motorcycles built for speed' },
  { value: 'commuter', label: 'Commuter Bikes', description: 'Efficient and comfortable for daily rides' },
  { value: 'electric', label: 'Electric Bikes', description: 'Eco-friendly with zero emissions' },
  { value: 'cruiser', label: 'Cruiser Bikes', description: 'Relaxed riding position for long journeys' },
];

const BikeTypeSelector = () => {
  const [selectedType, setSelectedType] = useState('commuter');

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex items-center mb-8">
        <Bike className="h-8 w-8 text-purple-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Select Bike Type</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bikeTypes.map(({ value, label, description }) => (
          <motion.div
            key={value}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedType(value)}
            className={`cursor-pointer rounded-xl p-6 ${
              selectedType === value
                ? 'bg-purple-600 text-white'
                : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
            }`}
          >
            <h3 className="text-xl font-bold mb-2">{label}</h3>
            <p className={selectedType === value ? 'text-purple-100' : 'text-gray-600'}>
              {description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-purple-50 rounded-lg">
        <p className="text-sm text-purple-600">
          Tip: Choose your bike type to get accurate premium calculations and coverage recommendations.
        </p>
      </div>
    </div>
  );
};

export default BikeTypeSelector;