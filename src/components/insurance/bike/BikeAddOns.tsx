import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Shield } from 'lucide-react';

const addOns = [
  {
    id: 'zeroDep',
    name: 'Zero Depreciation',
    description: 'Get full claim without depreciation deduction',
    price: 1500,
  },
  {
    id: 'engineProtect',
    name: 'Engine Protection',
    description: 'Coverage for engine damage due to water ingression',
    price: 1000,
  },
  {
    id: 'roadside',
    name: 'Roadside Assistance',
    description: '24/7 emergency support and towing service',
    price: 500,
  },
  {
    id: 'personalAccident',
    name: 'Personal Accident Cover',
    description: 'Additional coverage for personal injuries',
    price: 800,
  },
];

const BikeAddOns = () => {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const calculateTotal = () => {
    return selectedAddOns.reduce((total, id) => {
      const addOn = addOns.find(item => item.id === id);
      return total + (addOn?.price || 0);
    }, 0);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex items-center mb-8">
        <Plus className="h-8 w-8 text-purple-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Additional Coverage</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addOns.map((addOn) => (
          <motion.div
            key={addOn.id}
            whileHover={{ scale: 1.02 }}
            className={`rounded-xl p-6 cursor-pointer border-2 transition-colors ${
              selectedAddOns.includes(addOn.id)
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-200 hover:border-purple-300'
            }`}
            onClick={() => toggleAddOn(addOn.id)}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{addOn.name}</h3>
              <div className="text-purple-600 font-semibold">₹{addOn.price}</div>
            </div>
            <p className="text-gray-600 text-sm">{addOn.description}</p>
          </motion.div>
        ))}
      </div>

      {selectedAddOns.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-6 bg-purple-50 rounded-xl"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Selected Add-ons ({selectedAddOns.length})
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Additional premium for selected coverage
              </p>
            </div>
            <div className="text-2xl font-bold text-purple-600">
              ₹{calculateTotal().toLocaleString()}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BikeAddOns;