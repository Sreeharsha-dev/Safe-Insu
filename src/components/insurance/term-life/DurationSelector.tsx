import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const durations = [
  { years: 10, description: 'Short-term coverage' },
  { years: 20, description: 'Medium-term protection' },
  { years: 30, description: 'Long-term security' },
];

const DurationSelector = () => {
  const [selectedDuration, setSelectedDuration] = useState(20);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <div className="flex items-center mb-8">
        <Clock className="h-8 w-8 text-indigo-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Choose Policy Duration</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {durations.map(({ years, description }) => (
          <motion.div
            key={years}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedDuration(years)}
            className={`cursor-pointer rounded-xl p-6 ${
              selectedDuration === years
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">{years} Years</h3>
            <p className={selectedDuration === years ? 'text-indigo-100' : 'text-gray-600'}>
              {description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
        <p className="text-sm text-indigo-600">
          Tip: Choose a duration that covers your longest financial obligation (e.g., mortgage, children's education).
        </p>
      </div>
    </div>
  );
};

export default DurationSelector;