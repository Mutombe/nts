import React from 'react';
import { motion } from 'framer-motion';
import {
  Wrench,
  Settings,
  Shield,
  Gauge,
  Package,
  Users,
  TrendingUp,
  Route,
  Laptop,
  GraduationCap,
} from 'lucide-react';
import { GoTools } from "react-icons/go";
import { TbSettingsAutomation } from "react-icons/tb";
import { GrUpdate } from "react-icons/gr";


const WhatWeDo = () => {
  const services = [
    {
      icon: Gauge,
      title: 'Wheel Alignment',
      description:
        'Wheel alignment is a crucial maintenance procedure that ensures your vehicle\'s tyres are properly positioned to make contact with the road.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
      size: 'large', // For bento layout
    },
    {
      icon: Settings,
      title: 'Suspension Checks',
      description:
        'A well-maintained suspension system is crucial for a comfortable and safe driving experience. Regular checks and maintenance can help identify and address potential issues before they escalate.',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80',
      size: 'medium',
    },
    {
      icon: GoTools,
      title: 'Tyre Repairs',
      description:
        'A tyre repair is a process to fix a puncture in a tyre, allowing it to hold air pressure again. This is typically done for small punctures in the tread area of the tyre.',
      image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800&q=80',
      size: 'small',
    },
    {
      icon: Wrench,
      title: 'Suspension Repairs',
      description:
        'A well-functioning suspension system is essential for a comfortable and safe driving experience. When your vehicle\'s suspension starts to show signs of wear and tear, it\'s crucial to address the issue promptly.',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80',
      size: 'medium',
    },
    {
      icon: Shield,
      title: 'Fitment & Balancing',
      description:
        'Fitment and balancing are two essential aspects of wheel and tyre maintenance that significantly impact a vehicle\'s performance, handling, and overall driving experience.',
      image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&q=80',
      size: 'large',
    },
    {
      icon: Package,
      title: 'Brand New Tyres',
      description:
        'We offer a wide range of brand new tyres to fit your vehicle and driving needs. Whether you\'re looking for all-season, winter, or performance tires, we have the perfect option for you.',
      image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800&q=80',
      size: 'small',
    },
  ];

  const afterSalesServices = [
    {
      icon: GraduationCap,
      title: 'Trainings',
      description: 'Driver, fitter, and basic tyre management training programs',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Users,
      title: 'Fleet Management Tips',
      description: 'Expert advice for efficient fleet management',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: TrendingUp,
      title: 'Fleet Inspections',
      description: 'Comprehensive fleet inspection services',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: Route,
      title: 'Route Surveys',
      description: 'Route surveys and tyre management software solutions',
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: Laptop,
      title: 'Out of Tyre Service Analysis',
      description: 'Detailed OOTSAS (Out Of Tyre Service Analysis)',
      color: 'from-pink-500 to-pink-700',
    },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/brand4.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-700/75 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <TbSettingsAutomation className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">What We Do</h1>
            <p className="text-2xl text-gray-100 mb-4">
              Services We Offer to Our Customers
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Professional tyre and suspension services delivered by expert technicians across the nation
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/50 to-transparent"></div>
      </section>

      {/* Main Services Section with Bento Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional tyre services delivered by expert technicians
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
            {/* Large Card 1 - Wheel Alignment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="md:col-span-6 lg:col-span-7 lg:row-span-2 group"
            >
              <div className="relative h-full rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <img 
                  src={services[0].image} 
                  alt={services[0].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/50 to-transparent"></div>
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className="w-14 h-14 bg-yellow-400 rounded-sm flex items-center justify-center mb-4">
                    {React.createElement(services[0].icon, { className: "w-7 h-7 text-blue-900" })}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">{services[0].title}</h3>
                  <p className="text-gray-100 leading-relaxed">{services[0].description}</p>
                </div>
              </div>
            </motion.div>

            {/* Small Card 1 - Tyre Repairs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-3 lg:col-span-5 group"
            >
              <div className="relative h-full min-h-[280px] rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <img 
                  src={services[2].image} 
                  alt={services[2].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-3">
                    <GoTools className="w-6 h-6 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{services[2].title}</h3>
                  <p className="text-gray-100 text-sm leading-relaxed">{services[2].description}</p>
                </div>
              </div>
            </motion.div>

            {/* Medium Card 1 - Suspension Checks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-3 lg:col-span-5 group"
            >
              <div className="relative h-full min-h-[300px] rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <img 
                  src={services[1].image} 
                  alt={services[1].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/40 to-transparent"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-yellow-400 rounded-sm flex items-center justify-center mb-3">
                    {React.createElement(services[1].icon, { className: "w-6 h-6 text-blue-900" })}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{services[1].title}</h3>
                  <p className="text-gray-100 text-sm leading-relaxed">{services[1].description}</p>
                </div>
              </div>
            </motion.div>

            {/* Large Card 2 - Fitment & Balancing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-6 lg:col-span-7 lg:row-span-2 group"
            >
              <div className="relative h-full rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <img 
                  src={services[4].image} 
                  alt={services[4].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/95 via-orange-900/50 to-transparent"></div>
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className="w-14 h-14 bg-yellow-400 rounded-sm flex items-center justify-center mb-4">
                    {React.createElement(services[4].icon, { className: "w-7 h-7 text-blue-900" })}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">{services[4].title}</h3>
                  <p className="text-gray-100 leading-relaxed">{services[4].description}</p>
                </div>
              </div>
            </motion.div>

            {/* Medium Card 2 - Suspension Repairs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-3 lg:col-span-5 group"
            >
              <div className="relative h-full min-h-[300px] rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <img 
                  src={services[3].image} 
                  alt={services[3].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/40 to-transparent"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-yellow-400 rounded-sm flex items-center justify-center mb-3">
                    {React.createElement(services[3].icon, { className: "w-6 h-6 text-blue-900" })}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{services[3].title}</h3>
                  <p className="text-gray-100 text-sm leading-relaxed">{services[3].description}</p>
                </div>
              </div>
            </motion.div>

            {/* Small Card 2 - Brand New Tyres */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-3 lg:col-span-5 group"
            >
              <div className="relative h-full min-h-[280px] rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <img 
                  src={services[5].image} 
                  alt={services[5].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 to-transparent"></div>
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-yellow-400 rounded-sm flex items-center justify-center mb-3">
                    {React.createElement(services[5].icon, { className: "w-6 h-6 text-blue-900" })}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{services[5].title}</h3>
                  <p className="text-gray-100 text-sm leading-relaxed">{services[5].description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* After Sales Section - Unique Design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-sm text-sm font-bold mb-6 shadow-lg">
              AFTER SALES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Product Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              National Tyre Services offers contemporary after-sales services that provide
              exceptional value addition through the exchange of technical tyre knowledge and
              several packages of value services.
            </p>
          </motion.div>

          {/* Unique Asymmetric Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-6">
              {/* Large Featured Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="lg:col-span-4 lg:row-span-2"
              >
                <div className={`relative h-full min-h-[400px] bg-gradient-to-br ${afterSalesServices[0].color} rounded-sm p-8 text-white shadow-2xl overflow-hidden group`}>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-sm -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-sm flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                      {React.createElement(afterSalesServices[0].icon, { className: "w-10 h-10 text-white" })}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{afterSalesServices[0].title}</h3>
                    <p className="text-white/90 text-lg leading-relaxed flex-grow">{afterSalesServices[0].description}</p>
                    <div className="mt-6 inline-flex items-center text-sm font-semibold">
                      Learn More →
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Two Medium Cards Stacked */}
              <div className="lg:col-span-3 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group"
                >
                  <div className={`relative bg-gradient-to-br ${afterSalesServices[1].color} rounded-sm p-6 text-white shadow-xl h-full min-h-[190px] overflow-hidden`}>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-sm -ml-16 -mb-16 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-sm flex items-center justify-center mb-4">
                        {React.createElement(afterSalesServices[1].icon, { className: "w-7 h-7 text-white" })}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{afterSalesServices[1].title}</h3>
                      <p className="text-white/90 text-sm">{afterSalesServices[1].description}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group"
                >
                  <div className={`relative bg-gradient-to-br ${afterSalesServices[2].color} rounded-sm p-6 text-white shadow-xl h-full min-h-[190px] overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-sm -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-sm flex items-center justify-center mb-4">
                        {React.createElement(afterSalesServices[2].icon, { className: "w-7 h-7 text-white" })}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{afterSalesServices[2].title}</h3>
                      <p className="text-white/90 text-sm">{afterSalesServices[2].description}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Side Cards */}
              <div className="lg:col-span-3 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="group"
                >
                  <div className={`relative bg-gradient-to-br ${afterSalesServices[3].color} rounded-sm p-6 text-white shadow-xl h-full min-h-[190px] overflow-hidden`}>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-sm -mr-16 -mb-16 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-sm flex items-center justify-center mb-4">
                        {React.createElement(afterSalesServices[3].icon, { className: "w-7 h-7 text-white" })}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{afterSalesServices[3].title}</h3>
                      <p className="text-white/90 text-sm">{afterSalesServices[3].description}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="group"
                >
                  <div className={`relative bg-gradient-to-br ${afterSalesServices[4].color} rounded-sm p-6 text-white shadow-xl h-full min-h-[190px] overflow-hidden`}>
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-sm -ml-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-sm flex items-center justify-center mb-4">
                        {React.createElement(afterSalesServices[4].icon, { className: "w-7 h-7 text-white" })}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{afterSalesServices[4].title}</h3>
                      <p className="text-white/90 text-sm">{afterSalesServices[4].description}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 text-lg italic">
              Our after-sales services include but are not limited to the above
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                  Why Choose Our Services?
                </h2>
                <div className="space-y-4">
                  {[
                    'Expert technicians with years of experience',
                    'State-of-the-art equipment and technology',
                    'Competitive pricing and transparent quotes',
                    'Quick turnaround times',
                    'Comprehensive warranty on all services',
                    'Nationwide branch network',
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 bg-blue-50 p-4 rounded-sm"
                    >
                      <div className="w-8 h-8 bg-yellow-400 rounded-sm flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-blue-900" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-sm p-8 lg:p-10 text-white shadow-2xl"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-8">Service Process</h3>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Vehicle Inspection', desc: 'Thorough assessment' },
                    { step: '02', title: 'Expert Diagnosis', desc: 'Professional evaluation' },
                    { step: '03', title: 'Service Execution', desc: 'Quality workmanship' },
                    { step: '04', title: 'Quality Check', desc: 'Final verification' },
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                    >
                      <div className="w-14 h-14 bg-yellow-400 rounded-sm flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-900 font-bold text-lg">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-200 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
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
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Visit your nearest NTS branch for professional tyre services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/branches"
                className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-sm font-bold hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg"
              >
                Find a Branch
              </a>
              <a
                href="tel:+263242771222"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-sm font-bold hover:bg-white hover:text-blue-900 transition-all"
              >
                Call Us Now
              </a>
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

export default WhatWeDo;