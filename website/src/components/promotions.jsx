import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Percent, Gift, Star, ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { VscStarEmpty } from "react-icons/vsc";
import { LiaPercentageSolid } from "react-icons/lia";
import { CiGift } from "react-icons/ci";
import { GiClockwork } from "react-icons/gi";
import { GiSparkles } from "react-icons/gi";
import { BsTags } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";


const Promotions = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success('Thank you for subscribing to our promotions!');
  };

  const currentPromotions = [
    {
      title: 'New Arrivals Alert!',
      subtitle: 'Firenza Tyres - Experience Exceptional Grip and Durability',
      description:
        'The latest Firenza tyres are now in stock and selling fast. Get yours today!',
      price: '$39 ONLY',
      size: '175/65R14',
      badge: 'NEW ARRIVAL',
      icon: VscStarEmpty,
      image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800&q=80',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Fleet Discount Special',
      subtitle: 'Save More When You Buy in Bulk',
      description:
        'Special discounts for fleet purchases. Contact us for customized pricing on orders of 10+ tyres.',
      discount: 'Up to 20% OFF',
      badge: 'FLEET SPECIAL',
      icon: LiaPercentageSolid,
      image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&q=80',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Seasonal Maintenance Package',
      subtitle: 'Complete Tyre Care',
      description:
        'Tyre rotation, balancing, alignment check, and pressure monitoring - all in one package.',
      price: 'From $50',
      badge: 'LIMITED TIME',
      icon: CiGift,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
      gradient: 'from-orange-500 to-orange-700',
    },
  ];

  const upcomingPromotions = [
    {
      title: 'End of Month Mega Sale',
      date: 'Coming Soon',
      description: 'Massive discounts on selected tyre brands',
      icon: GiSparkles,
      color: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Agricultural Tyre Special',
      date: 'Next Month',
      description: 'Special pricing on all agriculture and OTR tyres',
      icon: Tag,
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Free Fitment Weekend',
      date: 'Coming Soon',
      description: 'Free tyre fitment with every purchase',
      icon: CiGift,
      color: 'from-blue-500 to-cyan-600',
    },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/75 to-blue-900/70 backdrop-blur-sm"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <BsTags className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Promotions & Special Offers
            </h1>
            <p className="text-2xl text-gray-100 mb-4">
              Exclusive deals on premium tyres and services
            </p>
            <p className="text-lg text-gray-300">
              Save big on quality tyres and professional services
            </p>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Current Promotions - Enhanced Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-sm text-sm font-bold mb-4">
              LIMITED TIME OFFERS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Current Promotions</h2>
            <p className="text-xl text-gray-600">
              Take advantage of these amazing offers today!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {currentPromotions.map((promo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                {/* Image Background */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={promo.image} 
                    alt={promo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${promo.gradient} opacity-80`}></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-sm text-xs font-bold shadow-lg">
                      {promo.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-sm flex items-center justify-center">
                      {React.createElement(promo.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{promo.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white p-6">
                  <h4 className="text-lg font-bold text-blue-900 mb-3">{promo.subtitle}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{promo.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {promo.price && (
                      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white inline-block px-6 py-3 rounded-sm font-bold text-2xl shadow-lg">
                        {promo.price}
                      </div>
                    )}
                    {promo.discount && (
                      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white inline-block px-6 py-3 rounded-sm font-bold text-2xl shadow-lg">
                        {promo.discount}
                      </div>
                    )}
                    {promo.size && (
                      <p className="text-gray-500 text-sm font-medium">Size: {promo.size}</p>
                    )}
                  </div>

                  <Link
                    to="/branches"
                    className="inline-flex items-center justify-center w-full bg-blue-900 text-white px-6 py-3 rounded-sm font-bold hover:bg-blue-800 transition-all group"
                  >
                    Visit Nearest Branch
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner - Enhanced */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/95 to-yellow-500/95"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <GiSparkles className="w-16 h-16 mx-auto mb-6 text-blue-900" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Visit Your Nearest NTS Branch Nationwide
            </h2>
            <p className="text-blue-900 text-2xl font-bold mb-8">
              and get yours TODAY!!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/branches"
                className="inline-flex items-center justify-center bg-blue-900 text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-blue-800 transition-all hover:scale-105 shadow-xl"
              >
                <ArrowRight className="mr-2 w-6 h-6" />
                Find a Branch
              </Link>
              <a
                href="tel:+263242771222"
                className="inline-flex items-center justify-center border-3 border-blue-900 bg-white text-blue-900 px-10 py-5 rounded-sm font-bold text-lg hover:bg-blue-900 hover:text-white transition-all shadow-xl"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Promotions - Enhanced Design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-6 py-2 rounded-sm text-sm font-bold mb-4">
              <GiClockwork className="w-4 h-4" />
              COMING SOON
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Upcoming Promotions</h2>
            <p className="text-xl text-gray-600">Stay tuned for these exciting offers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingPromotions.map((promo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-sm blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-white rounded-sm p-8 shadow-xl">
                  {/* Icon with Gradient Background */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${promo.color} rounded-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    {React.createElement(promo.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  
                  {/* Date Badge */}
                  <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-sm text-sm font-bold mb-4">
                    {promo.date}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">{promo.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{promo.description}</p>

                  {/* Countdown-style decoration */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-center text-yellow-600 font-semibold text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Subscribe to get notified
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shop During Promotions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Why Shop During Our Promotions?
              </h2>
              <p className="text-xl text-gray-600">
                Get more value for your money with NTS special offers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Tag, title: 'Best Prices', desc: 'Unbeatable discounts on quality tyres' },
                { icon: VscStarEmpty, title: 'Premium Brands', desc: 'Top tyre brands at reduced prices' },
                { icon: Gift, title: 'Extra Services', desc: 'Complimentary services included' },
                { icon: GiClockwork, title: 'Limited Time', desc: 'Exclusive deals you won\'t find elsewhere' },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-sm flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {React.createElement(benefit.icon, { className: "w-10 h-10 text-blue-900" })}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section - Enhanced */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=1600&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-700/95"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Gift className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Never Miss a Deal!
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter and be the first to know about our latest promotions and
              exclusive offers
            </p>
            
            <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-md p-2 rounded-sm">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-sm font-bold hover:bg-yellow-500 transition-all hover:scale-105 whitespace-nowrap shadow-lg"
                >
                  Subscribe Now
                </button>
              </div>
            </form>

            <p className="text-gray-300 text-sm mt-6">
              Join thousands of satisfied customers receiving exclusive deals
            </p>
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

export default Promotions;