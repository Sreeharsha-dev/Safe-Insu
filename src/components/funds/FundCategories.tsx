import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, PieChart, BarChart } from 'lucide-react';

const categories = [
  {
    icon: TrendingUp,
    title: 'Mutual Funds',
    description: 'Professionally managed investment pools',
    href: '/funds/mutual',
  },
  {
    icon: DollarSign,
    title: 'Equity Funds',
    description: 'Invest directly in stocks and shares',
    href: '/funds/equity',
  },
  {
    icon: PieChart,
    title: 'Debt Funds',
    description: 'Fixed income securities with stable returns',
    href: '/funds/debt',
  },
  {
    icon: BarChart,
    title: 'Hybrid Funds',
    description: 'Mix of equity and debt investments',
    href: '/funds/hybrid',
  },
];

const FundCategories = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Investment Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.a
            key={category.title}
            href={category.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <category.icon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {category.title}
            </h3>
            <p className="text-gray-600">{category.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default FundCategories;