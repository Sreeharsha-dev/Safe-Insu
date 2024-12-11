import React from 'react';
import { Shield, Heart, Car, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    name: 'Life Insurance',
    description: 'Protect your family\'s financial future with comprehensive life insurance coverage.',
    icon: Shield,
    bgColor: 'bg-blue-500',
  },
  {
    name: 'Health Insurance',
    description: 'Get access to quality healthcare with our flexible health insurance plans.',
    icon: Heart,
    bgColor: 'bg-green-500',
  },
  {
    name: 'Car Insurance',
    description: 'Drive with confidence knowing you\'re protected against accidents and damages.',
    icon: Car,
    bgColor: 'bg-purple-500',
  },
  {
    name: 'Home Insurance',
    description: 'Safeguard your home and belongings with our comprehensive coverage options.',
    icon: Home,
    bgColor: 'bg-orange-500',
  },
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:text-center mb-12"
        >
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Products</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Insurance made simple
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose from our range of insurance products designed to protect what matters most to you.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className={`p-6 ${feature.bgColor} text-white`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn more →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;