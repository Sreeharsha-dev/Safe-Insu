import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
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
            <Lock className="h-12 w-12 text-blue-400" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-300">
              Last updated: March 15, 2024
            </p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Insurance policy details and preferences</li>
              <li>Payment information</li>
              <li>Communication history with our support team</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>To provide and maintain our insurance services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To process payments and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <Shield className="h-6 w-6 text-blue-600 mb-2" />
                <h3 className="text-lg font-semibold mb-2">Secure Storage</h3>
                <p className="text-gray-600">
                  Your data is encrypted and stored on secure servers with regular backups.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Eye className="h-6 w-6 text-blue-600 mb-2" />
                <h3 className="text-lg font-semibold mb-2">Access Control</h3>
                <p className="text-gray-600">
                  Strict access controls and authentication measures are in place.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Right to access your personal data</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to request deletion of your data</li>
              <li>Right to restrict processing of your data</li>
              <li>Right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="text-gray-600 space-y-2">
                <li>Email: privacy@simpleinsure.com</li>
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

export default Privacy;