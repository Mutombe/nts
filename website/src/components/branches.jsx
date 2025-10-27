import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GiCartwheel } from "react-icons/gi";
import { GrUpdate } from "react-icons/gr";


const Branches = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);

  const branches = [
    {
      id: 'harare-cripps',
      name: 'Harare Cripps (Head Office)',
      address: 'Corner Cripps & Seke Road Graniteside',
      city: 'Harare',
      phone: '+263 242-771225-38',
      email: 'ntssalescripps@ntsgroup.co.zw',
      type: 'head-office',
      coordinates: [-17.8252, 31.0335],
      bgImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070',
    },
    {
      id: 'harare-kelvin',
      name: 'Harare Kelvin',
      address: '5 Crawford Road, Graniteside',
      city: 'Harare',
      phone: '+263 242759360/2759344',
      email: 'ntssaleskelvin@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-17.8216, 31.0489],
      bgImage: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2070',
    },
    {
      id: 'harare-samora',
      name: 'Harare Samora Machel',
      address: '167 Samora Machel Avenue',
      city: 'Harare',
      phone: '+26324-2796291/2',
      email: 'ntssamora@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-17.8292, 31.0522],
      bgImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070',
    },
    {
      id: 'bulawayo',
      name: 'Bulawayo',
      address: '130 J M Nkomo Street',
      city: 'Bulawayo',
      phone: '+263-029-2262497/8',
      email: 'ntsbulawayo@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-20.1547, 28.5827],
      bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
    },
    {
      id: 'gweru',
      name: 'Gweru',
      address: '43 Second Street',
      city: 'Gweru',
      phone: '+26354-224235 / 2221008',
      email: 'gwerunts@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-19.4500, 29.8167],
      bgImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070',
    },
    {
      id: 'mutare',
      name: 'Mutare',
      address: '26 Park Road',
      city: 'Mutare',
      phone: '+263-020-2064541 / 2064557',
      email: 'ntsmutare@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-18.9707, 32.6700],
      bgImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070',
    },
    {
      id: 'kwekwe',
      name: 'Kwekwe',
      address: '2515A Industrial Road',
      city: 'Kwekwe',
      phone: '+26355-2522864/5 / 2522865',
      email: 'ntskwekwe@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-18.9286, 29.8147],
      bgImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070',
    },
    {
      id: 'chegutu',
      name: 'Chegutu',
      address: '4007 CNR Queen & George Avenue',
      city: 'Chegutu',
      phone: '068 215 3088/3090',
      email: 'ntschegutu@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-18.1333, 30.1500],
      bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
    },
    {
      id: 'chinhoyi',
      name: 'Chinhoyi',
      address: '40 Magamba Way',
      city: 'Chinhoyi',
      phone: '+26367-2122336/ 2122230',
      email: 'ntschinhoyi@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-17.3667, 30.2000],
      bgImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070',
    },
    {
      id: 'masvingo',
      name: 'Masvingo',
      address: '694A Josiah Tongogara Ave',
      city: 'Masvingo',
      phone: '+263-039-2262278/9',
      email: 'ntsmasvingo@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-20.0637, 30.8275],
      bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
    },
    {
      id: 'chiredzi',
      name: 'Chiredzi',
      address: '75 Knobthorn Rd',
      city: 'Chiredzi',
      phone: '+263-031-2312286 / 2312042',
      email: 'ntschiredzi@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-21.0500, 31.6667],
      bgImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070',
    },
    {
      id: 'zvishavane',
      name: 'Zvishavane',
      address: 'Lot 3 RG Mugabe Way',
      city: 'Zvishavane',
      phone: '+263-039-2355394',
      email: 'ntszvishavane@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-20.3333, 30.0667],
      bgImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070',
    },
    {
      id: 'bulawayo-factory',
      name: 'Bulawayo Retreading Factory',
      address: 'Corner Magazine and Khami Road Steeldale',
      city: 'Bulawayo',
      phone: '+263-292-262562',
      email: 'ntskhami@ntsgroup.co.zw',
      type: 'factory',
      coordinates: [-20.1703, 28.5553],
      bgImage: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2070',
    },
    {
      id: 'harare-factory',
      name: 'Harare Retreading Factory',
      address: 'Corner Cripps and Seke Road Graniteside',
      city: 'Harare',
      phone: '+263-242-771225-38',
      email: 'ekazingizi@ntsgroup.co.zw',
      type: 'factory',
      coordinates: [-17.8252, 31.0335],
      bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
    },
  ];

  const cities = [...new Set(branches.map((b) => b.city))];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-60"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-700/70" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <GiCartwheel className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Branches</h1>
            <p className="text-xl text-gray-200">
              Find your nearest National Tyre Services branch across Zimbabwe
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-yellow-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-900 mb-2">12+</div>
              <div className="text-blue-900 font-semibold">Retail Outlets</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-900 mb-2">2</div>
              <div className="text-blue-900 font-semibold">Retreading Factories</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-900 mb-2">{cities.length}</div>
              <div className="text-blue-900 font-semibold">Cities Covered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-blue-900 font-semibold">Nationwide Coverage</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">All NTS Branches</h2>
            <p className="text-xl text-gray-600">
              Visit your nearest branch for quality tyre services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative"
              >
                <Link to={`/branch/${branch.id}`}>
                  <div
                    className={`relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 overflow-hidden ${
                      branch.type === 'head-office'
                        ? 'border-yellow-400'
                        : branch.type === 'factory'
                        ? 'border-blue-400'
                        : 'border-transparent hover:border-yellow-400'
                    }`}
                  >
                    {/* Background City Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-5"
                      style={{
                        backgroundImage: `url('${branch.bgImage}')`,
                      }}
                    />

                    {/* Link Icon - Top Left */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center z-10">
                      <ExternalLink className="w-4 h-4 text-yellow-400" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Branch Type Badge */}
                      <div className="flex justify-end mb-4">
                        {branch.type === 'head-office' && (
                          <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                            HEAD OFFICE
                          </div>
                        )}
                        {branch.type === 'factory' && (
                          <div className="inline-block bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-bold">
                            FACTORY
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-blue-900 mb-4 mt-8">{branch.name}</h3>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-gray-700">{branch.address}</p>
                            <p className="text-gray-500 text-sm">{branch.city}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                          <p className="text-gray-700">{branch.phone}</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                          <p className="text-gray-700 text-sm break-all">{branch.email}</p>
                        </div>
                      </div>

                      {/* View Details Button */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-blue-900 font-semibold text-sm flex items-center gap-2 hover:text-yellow-600 transition-colors">
                          View Details & Map
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Visit Your Nearest NTS Branch Today
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Experience professional tyre services and expert advice at any of our locations
              nationwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+263242771222"
                className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-all hover:scale-105"
              >
                <Phone className="mr-2" />
                Call Us Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
          <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-700 to-yellow-300 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition z-40"
            >
              <GrUpdate className="w-4 h-4" />
            </motion.button>
    </div>
  );
};

export default Branches;