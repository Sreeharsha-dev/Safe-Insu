import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Search } from 'lucide-react';

const hospitals = [
  {
    id: 1,
    name: 'City General Hospital',
    location: 'New York',
    address: '123 Healthcare Ave, NY 10001',
    contact: '+1 234-567-8900',
  },
  {
    id: 2,
    name: 'Medicare Specialty Center',
    location: 'Los Angeles',
    address: '456 Medical Blvd, LA 90001',
    contact: '+1 234-567-8901',
  },
  {
    id: 3,
    name: 'Community Health Hospital',
    location: 'Chicago',
    address: '789 Wellness St, CH 60601',
    contact: '+1 234-567-8902',
  },
  // Add more hospitals as needed
];

const NetworkHospitals = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHospitals = hospitals.filter(
    (hospital) =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">Network Hospitals</h2>
          <p className="mt-4 text-xl text-gray-600">
            Find a hospital near you
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search hospitals by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHospitals.map((hospital) => (
            <motion.div
              key={hospital.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {hospital.name}
              </h3>
              <p className="text-blue-600 font-medium mb-4">{hospital.location}</p>
              <div className="text-gray-600 space-y-2">
                <p>{hospital.address}</p>
                <p>Contact: {hospital.contact}</p>
              </div>
              <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">
                View Details →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkHospitals;