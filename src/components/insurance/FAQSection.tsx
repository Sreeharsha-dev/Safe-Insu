import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is covered under health insurance?',
    answer: 'Our health insurance covers hospitalization expenses, pre and post hospitalization care, day care procedures, ambulance charges, and more. The exact coverage depends on the plan you choose.',
  },
  {
    question: 'How do I make a claim?',
    answer: 'You can make a claim through our cashless facility at network hospitals or by reimbursement. For cashless claims, simply show your health card at our network hospital. For reimbursement, submit the required documents within 15 days of discharge.',
  },
  {
    question: 'Is there a waiting period?',
    answer: 'Yes, there is a waiting period for pre-existing diseases and specific treatments. The waiting period varies from 2 to 4 years depending on the condition and plan chosen.',
  },
  {
    question: 'Can I add family members to my policy?',
    answer: 'Yes, you can add your spouse, dependent children, and parents to your health insurance policy. Additional premium may apply based on the number of members and their age.',
  },
  {
    question: 'What is not covered under health insurance?',
    answer: 'Cosmetic treatments, dental procedures (unless caused by an accident), experimental treatments, and self-inflicted injuries are typically not covered. Please refer to the policy document for a complete list of exclusions.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about our health insurance
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;