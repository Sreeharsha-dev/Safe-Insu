import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <FileText className="h-12 w-12 text-blue-400" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-300">
              Last updated: March 15, 2024
            </p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using SimpleInsure's services, you accept and agree to be bound by the terms
              and provision of this agreement. If you do not agree to abide by these terms, please do not
              use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
            <p className="text-gray-600 mb-4">
              SimpleInsure provides insurance and investment services through its platform:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 mb-2" />
                <h3 className="text-lg font-semibold mb-2">Insurance Services</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Health Insurance</li>
                  <li>Life Insurance</li>
                  <li>Vehicle Insurance</li>
                  <li>Property Insurance</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 mb-2" />
                <h3 className="text-lg font-semibold mb-2">Investment Services</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Mutual Funds</li>
                  <li>Equity Investments</li>
                  <li>Debt Instruments</li>
                  <li>Portfolio Management</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Obligations</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                <p className="text-gray-600">
                  Users must provide accurate and complete information when purchasing insurance policies
                  or making investments.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                <p className="text-gray-600">
                  Users are responsible for maintaining the confidentiality of their account credentials.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              All payments for insurance premiums and investments must be made through our approved payment
              methods. Users agree to pay all fees and charges associated with their account.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              SimpleInsure shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-4">
                <HelpCircle className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold">Questions about the Terms?</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>Email: legal@simpleinsure.com</li>
                <li>Phone: 1-800-123-4567</li>
                <li>Address: 123 Insurance Plaza, Tech Park Road, Bangalore - 560001</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;