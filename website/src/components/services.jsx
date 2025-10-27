import React from 'react';
import { motion } from 'framer-motion';
import {
  Wrench,
  TrendingUp,
  Route,
  Users,
  Laptop,
  GraduationCap,
  CheckCircle,
  Settings,
  Award,
  Target,
} from 'lucide-react';
import { GrUpdate } from "react-icons/gr";


const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Out of Tyre Service Analysis',
      description:
        'Comprehensive analysis of tyre performance and efficiency to maximize your investment',
    },
    {
      icon: Users,
      title: 'Fleet Inspections',
      description:
        'Regular fleet inspections to ensure optimal tyre condition and safety compliance',
    },
    {
      icon: Route,
      title: 'Route Surveys',
      description:
        'Detailed route analysis to recommend the best tyre solutions for your specific needs',
    },
    {
      icon: Target,
      title: 'Tyre Fleet Management Tips',
      description: 'Expert advice and strategies for efficient fleet tyre management',
    },
    {
      icon: Laptop,
      title: 'Tyre Management Software',
      description:
        'Advanced software solutions for tracking and managing your tyre inventory and performance',
    },
    {
      icon: GraduationCap,
      title: 'Trainings (Driver, Fitter)',
      description:
        'Professional training programs for drivers and fitters to ensure best practices',
    },
  ];

  const coreServices = [
    {
      icon: Wrench,
      title: 'Tyre Fitment',
      description: 'Professional installation and balancing services',
    },
    {
      icon: Settings,
      title: 'Retreading',
      description: 'Cost-effective tyre retreading solutions',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks on all products',
    },
    {
      icon: CheckCircle,
      title: 'After-Sales Support',
      description: '24/7 customer support and maintenance',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Wrench className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              Product Support Services - Contemporary after-sales services providing exceptional
              value
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Product Support Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              National Tyre Services offers contemporary after-sales services that provide
              exceptional value addition through the exchange of technical tyre knowledge and
              several packages of value services. Our after-sales services include but are not
              limited to:
            </p>
          </motion.div>

          {/* Core Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Main Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-yellow-400"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions backed by nearly 100 years of industry experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Expert Technicians',
                description: 'Highly trained professionals with years of experience',
              },
              {
                title: 'Best Equipment',
                description: 'State-of-the-art tools and technology',
              },
              {
                title: 'Timely Delivery',
                description: 'Quick turnaround without compromising quality',
              },
              {
                title: 'Reliable Service',
                description: '24/7 support and maintenance available',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600">
              Simple, efficient, and customer-focused
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Contact Us', description: 'Reach out via phone or email' },
                {
                  step: '02',
                  title: 'Assessment',
                  description: 'We evaluate your needs',
                },
                {
                  step: '03',
                  title: 'Solution',
                  description: 'Tailored service package',
                },
                {
                  step: '04',
                  title: 'Support',
                  description: 'Ongoing assistance',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-900">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
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
              We Are Here For You
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              If you have any queries, please contact us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:nts@ntsgroup.co.zw"
                className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-all hover:scale-105"
              >
                Mail Us Now
              </a>
              <a
                href="tel:+263242771222"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-all"
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

export default Services;