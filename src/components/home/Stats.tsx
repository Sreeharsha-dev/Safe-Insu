import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Users, Shield, Award, Clock } from 'lucide-react';

const stats = [
  { id: 1, name: 'Happy Customers', value: '50K+', icon: Users },
  { id: 2, name: 'Claims Processed', value: '100K+', icon: Shield },
  { id: 3, name: 'Years of Service', value: '25+', icon: Clock },
  { id: 4, name: 'Customer Rating', value: '4.9', icon: Award },
];

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {inView && (
                  <CountUp
                    end={parseFloat(stat.value)}
                    duration={2.5}
                    suffix={stat.value.includes('+') ? '+' : ''}
                    decimals={stat.value.includes('.') ? 1 : 0}
                  />
                )}
              </div>
              <div className="text-sm text-gray-500">{stat.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;