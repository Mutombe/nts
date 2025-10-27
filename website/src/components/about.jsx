import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Heart,
  CheckCircle,
  Users,
  BookOpen,
  Target,
  Eye,
  Award,
} from 'lucide-react';
import { GrUpdate } from "react-icons/gr";

const About = () => {
  const coreValues = [
    {
      icon: Shield,
      title: 'Safety',
      description: 'Prioritizing the wellbeing of our customers and employees in all operations',
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'Maintaining the highest ethical standards and transparency in our dealings',
    },
    {
      icon: Award,
      title: 'Reliability',
      description: 'Delivering consistent quality and dependable service every time',
    },
    {
      icon: Heart,
      title: 'Customer Centric',
      description: 'Placing customer satisfaction at the heart of everything we do',
    },
    {
      icon: BookOpen,
      title: 'Learning',
      description: 'Continuous improvement and innovation through knowledge and development',
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Collaborating effectively to achieve common goals and excellence',
    },
    {
      icon: Target,
      title: 'Leadership',
      description: 'Leading by example and inspiring excellence in the tyre industry',
    },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(30, 58, 138, 0.9), rgba(29, 78, 216, 0.85)), url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000')`,
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-sm text-sm font-semibold mb-6">
              Nearly 100 Years of Excellence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About National Tyre Services
            </h1>
            <p className="text-xl text-gray-200">
              Zimbabwe's pioneer tyre brand, delivering exceptional tyre management solutions since
              1925
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section with Background Image */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.92)), url('/5.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Tyre Management Solutions
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  National Tyre Services is one of the pioneer tyre brands in Zimbabwe. National
                  Tyre Services Limited traces its origin in the tyre industry back to almost a
                  century ago, to 1925.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  The Company's main business focus is retreading of tyres, retailing of new tyres,
                  tyre fitment and related services, supporting the Government and all critical
                  sectors of the economy.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  National Tyre Services Limited envisages enhancing value for all stakeholders
                  through provision of customer centric tyre management solutions in chosen markets
                  with unmatched quality products, innovative technologies, and systems.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-sm p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-sm p-6 text-center">
                    <div className="text-4xl font-bold text-blue-900 mb-2">1925</div>
                    <div className="text-gray-600 text-sm">Year Founded</div>
                  </div>
                  <div className="bg-white rounded-sm p-6 text-center">
                    <div className="text-4xl font-bold text-blue-900 mb-2">12+</div>
                    <div className="text-gray-600 text-sm">Retail Outlets</div>
                  </div>
                  <div className="bg-white rounded-sm p-6 text-center">
                    <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
                    <div className="text-gray-600 text-sm">Quality Assured</div>
                  </div>
                  <div className="bg-white rounded-sm p-6 text-center">
                    <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
                    <div className="text-gray-600 text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-sm p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-900 rounded-sm flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading provider of customer centric tyre management solutions through
                innovation driven systems attaining at least 50% market share by 2030.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-sm p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-sm flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Enhance value for all stakeholders through provision of customer centric tyre
                management solutions in our chosen markets with unmatched quality products,
                innovative technologies and systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our actions and define our corporate culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-sm p-6 border-2 border-transparent hover:border-yellow-400 transition-all"
              >
                <div className="w-12 h-12 bg-blue-900 rounded-sm flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                NTS has 12 retail outlets situated throughout the country, with 3 of these being
                located in Harare. The Head Office is based in Graniteside at the corner of Cripps
                and Seke Roads.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The relugging factories are in Harare, and the retreading factories, for the
                procurement of truck tyres, are in Harare and Bulawayo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-white rounded-sm p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">12</div>
                <div className="text-gray-600">Retail Outlets</div>
              </div>
              <div className="bg-white rounded-sm p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">2</div>
                <div className="text-gray-600">Retreading Factories</div>
              </div>
              <div className="bg-white rounded-sm p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">3</div>
                <div className="text-gray-600">Harare Locations</div>
              </div>
            </motion.div>
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
              Experience Excellence with NTS
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Visit us today and discover why we're Zimbabwe's most trusted tyre service provider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/branches"
                className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-sm font-bold hover:bg-yellow-500 transition-all hover:scale-105"
              >
                Find a Branch
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-sm font-bold hover:bg-white hover:text-blue-900 transition-all"
              >
                Contact Us
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

export default About;