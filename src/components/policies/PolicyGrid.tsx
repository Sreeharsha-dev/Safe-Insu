import React from 'react';
import { motion } from 'framer-motion';
import PolicyCard from './PolicyCard';
import type { PolicyType } from '../../types/policy';

interface PolicyGridProps {
  policies: PolicyType[];
}

const PolicyGrid: React.FC<PolicyGridProps> = ({ policies }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {policies.map((policy) => (
        <PolicyCard key={policy.id} policy={policy} />
      ))}
    </motion.div>
  );
};

export default PolicyGrid;