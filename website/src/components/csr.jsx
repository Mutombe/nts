import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Ribbon, Award, Target, TrendingUp, Globe } from 'lucide-react';
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import { GrUpdate } from "react-icons/gr";


const CSR = () => {
  const cancerObjectives = [
    {
      icon: Globe,
      title: 'Raise Awareness',
      description: 'Educate our community about the risks, symptoms, and prevention strategies for various types of cancer.',
    },
    {
      icon: Target,
      title: 'Promote Early Detection',
      description: 'Encourage regular screenings and check-ups to facilitate early detection and treatment.',
    },
    {
      icon: TrendingUp,
      title: 'Support Cancer Research',
      description: 'Collaborate with reputable organizations to support cancer research and advancements in treatment options.',
    },
    {
      icon: Heart,
      title: 'Provide Support',
      description: 'Offer emotional and practical support to individuals and families affected by cancer.',
    },
  ];

  const movemberStats = [
    { number: '1 in 8', label: 'Men will be diagnosed with prostate cancer' },
    { number: '60 sec', label: 'One man dies from suicide every minute' },
    { number: '10,000+', label: 'Men develop testicular cancer annually' },
    { number: '510,000', label: 'Deaths from prostate cancer in 2018' },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(30, 58, 138, 0.92), rgba(29, 78, 216, 0.88)), url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2000')`,
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <LiaHandHoldingHeartSolid className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Corporate Social Responsibility
            </h1>
            <p className="text-xl text-gray-200">
              Making a positive impact in our communities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction with Background Image */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.97), rgba(255, 255, 255, 0.95)), url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2000')`,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Our Commitment to Social Responsibility
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At National Tyre Services, we believe in giving back to the communities we serve. Our
              corporate social responsibility initiatives focus on health awareness, education, and
              community support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cancer Awareness Initiative */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Ribbon className="w-16 h-16 mx-auto mb-6 text-pink-500" />
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Cancer Awareness Initiative
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At National Tyre Services we recognize the importance of cancer awareness and
              education in the fight against this devastating disease. Our cancer awareness
              initiative aims to promote early detection, prevention, and support for those
              affected by cancer.
            </p>
          </motion.div>

          {/* Objectives */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cancerObjectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-sm p-6 shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-sm flex items-center justify-center flex-shrink-0">
                      <objective.icon className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-2">{objective.title}</h4>
                      <p className="text-gray-600">{objective.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Get Involved */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-pink-50 to-purple-50 rounded-sm p-8 md:p-12 text-center"
          >
            <LiaPeopleCarrySolid className="w-16 h-16 mx-auto mb-6 text-pink-500" />
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Get Involved</h3>
            <p className="text-lg text-gray-600 mb-6">
              Join us in making a difference in the fight against cancer. Together, we can raise
              awareness, support research, and help those affected by cancer.
            </p>
            <button className="bg-pink-500 text-white px-8 py-4 rounded-sm font-bold hover:bg-pink-600 transition-all hover:scale-105">
              Learn More About Our Initiatives
            </button>
          </motion.div>
        </div>
      </section>

      {/* Movember Initiative */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-6">🥸</div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Movember: A Global Movement for Men's Health
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Movember is an annual event where men grow their mustaches (or "mo's") to raise
              awareness and funds for men's health, specifically prostate cancer, testicular cancer,
              and mental health.
            </p>
          </motion.div>

          {/* The Goal */}
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-sm p-8"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">The Goal</h3>
              <p className="text-gray-600 mb-6 text-center">
                The goal of Movember is to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Raise awareness about men\'s health issues',
                  'Encourage men to take control of their health',
                  'Fund research and support programs for men\'s health',
                ].map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-sm p-4 text-center shadow-md"
                  >
                    <div className="w-8 h-8 bg-blue-900 rounded-sm flex items-center justify-center mx-auto mb-3">
                      <Award className="w-4 h-4 text-yellow-400" />
                    </div>
                    <p className="text-gray-700 font-medium">{goal}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Key Stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {movemberStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-sm p-6 text-white text-center shadow-lg"
                >
                  <div className="text-4xl font-bold mb-2 text-yellow-400">{stat.number}</div>
                  <p className="text-gray-200 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <GiWorld className="w-16 h-16 mx-auto mb-6 text-blue-900" />
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Impact</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Through our CSR initiatives, National Tyre Services is committed to making a
              meaningful difference in the lives of our employees, customers, and the wider
              community. We believe that by working together, we can create a healthier, more
              supportive society for everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: '1000+', label: 'People Reached' },
                { number: '50+', label: 'Awareness Events' },
                { number: '100%', label: 'Commitment' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-sm p-6 shadow-lg"
                >
                  <div className="text-3xl font-bold text-blue-900 mb-2">{item.number}</div>
                  <p className="text-gray-600">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Together, we can create positive change in our communities
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-sm font-bold hover:bg-yellow-500 transition-all hover:scale-105"
            >
              Get Involved
            </a>
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

export default CSR;