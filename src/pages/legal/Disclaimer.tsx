import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Info, AlertTriangle, ExternalLink } from 'lucide-react';

const Disclaimer = () => {
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
            <AlertCircle className="h-12 w-12 text-blue-400" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Disclaimer</h1>
            <p className="text-lg text-gray-300">
              Last updated: March 15, 2024
            </p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
            <div className="flex items-start space-x-3 mb-4">
              <Info className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <p className="text-gray-600">
                The information provided on SimpleInsure is for general informational purposes only. All
                information on the site is provided in good faith, however, we make no representation or
                warranty of any kind, express or implied, regarding the accuracy, adequacy, validity,
                reliability, availability, or completeness of any information on the site.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Investment Risks</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex items-center">
                <AlertTriangle className="h-6 w-6 text-yellow-400 mr-2" />
                <p className="text-yellow-700 font-medium">
                  Investment Warning
                </p>
              </div>
              <p className="mt-2 text-yellow-600">
                All investments carry risk. Past performance is not indicative of future returns.
                Investment value can go up or down depending on market conditions.
              </p>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span>Market risks can affect investment returns</span>
              </li>
              <li className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span>Economic conditions may impact investment performance</span>
              </li>
              <li className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span>Regulatory changes can affect investment strategies</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Insurance Coverage</h2>
            <p className="text-gray-600 mb-4">
              Insurance coverage is subject to the terms and conditions of the specific policy. Please
              read all policy documentation carefully before making a purchase decision.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <ExternalLink className="h-5 w-5 text-blue-600" />
                  <span>Policy terms may vary by provider</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink className="h-5 w-5 text-blue-600" />
                  <span>Coverage limits and exclusions apply</span>
                </li>
                <li className="flex items-center space-x-2">
                  <ExternalLink className="h-5 w-5 text-blue-600" />
                  <span>Claims subject to verification and assessment</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Advice</h2>
            <p className="text-gray-600 mb-4">
              The information provided on this website does not constitute professional advice. We
              recommend consulting with qualified professionals for:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Financial planning decisions</li>
              <li>Insurance coverage recommendations</li>
              <li>Investment strategies</li>
              <li>Tax implications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Disclaimer</h2>
            <p className="text-gray-600">
              We reserve the right to modify this disclaimer at any time. Changes will be effective
              immediately upon posting to the website. Your continued use of our services constitutes
              acceptance of these changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;