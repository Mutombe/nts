import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users, TrendingUp, Target, Heart } from 'lucide-react';
import { SiFsecure } from "react-icons/si";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { LiaAwardSolid } from "react-icons/lia";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { GiSupersonicArrow } from "react-icons/gi";
import { GrUpdate } from "react-icons/gr";


const OurBrand = () => {
  const brands = [
    {
      name: 'Bridgestone',
      logo: '/bridgestone.png',
    },
    {
      name: 'Firestone',
      logo: '/firestone.png',
    },
    {
      name: 'Leader Tread',
      logo: '/leader-tread.png',
    },
    {
      name: 'Comfoser',
      logo: '/comforser.png',
    },
    {
      name: 'Dunlop',
      logo: '/dunlop.png',
    },
    {
      name: 'MRL',
      logo: '/mrl.png',
    },
    {
      name: 'Sportrak',
      logo: '/sportrak.png',
    },
    {
      name: 'Aufine',
      logo: '/aufine.png',
    },
  ];

  const brandValues = [
    {
      icon: SiFsecure,
      title: 'Trust & Reliability',
      description: 'Nearly 100 years of proven excellence in the tyre industry',
    },
    {
      icon: LiaAwardSolid,
      title: 'Quality Assurance',
      description: 'Commitment to providing only the best products and services',
    },
    {
      icon: LiaPeopleCarrySolid,
      title: 'Customer Focus',
      description: 'Putting customer satisfaction at the heart of everything we do',
    },
    {
      icon: HiOutlineArrowTrendingUp,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies and systems',
    },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(30, 58, 138, 0.92), rgba(29, 78, 216, 0.88)), url('/brand1.jpg')`,
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-16 h-16  rounded-full flex items-center justify-center">
                <img
                  src="/logo2.png"
                  alt="NTS Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Brand</h1>
            <p className="text-xl text-gray-200">
              Zimbabwe's pioneer tyre brand - Building trust since 1925
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story with Background Image */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.94)), url('/2.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-blue-900 mb-6">The NTS Story</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="text-lg leading-relaxed mb-6">
                  National Tyre Services is one of the pioneer tyre brands in Zimbabwe, with a rich
                  history dating back to 1925. For nearly 100 years, we have been at the forefront
                  of the tyre industry, evolving with the times while maintaining our commitment to
                  excellence.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our brand represents more than just tyres - it embodies trust, reliability, and a
                  century of expertise. From our humble beginnings to becoming Zimbabwe's leading
                  tyre service provider, we have consistently prioritized customer satisfaction and
                  quality above all else.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, National Tyre Services stands as a symbol of excellence in the tyre
                  industry, with 12+ retail outlets nationwide, state-of-the-art retreading
                  factories, and a team of dedicated professionals committed to serving our
                  customers with integrity and expertise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">What Makes NTS Different</h2>
            <p className="text-xl text-gray-600">
              The values that drive our brand forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-sm p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-sm p-8 text-white"
            >
              <Target className="w-12 h-12 mb-6 text-yellow-400" />
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                To be the leading provider of customer centric tyre management solutions through
                innovation driven systems attaining at least 50% market share by 2030.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-sm p-8"
            >
              <GiSupersonicArrow className="w-12 h-12 mb-6 text-blue-900" />
              <h3 className="text-3xl font-bold mb-6 text-blue-900">Our Mission</h3>
              <p className="text-blue-900 text-lg leading-relaxed">
                Enhance value for all stakeholders through provision of customer centric tyre
                management solutions in our chosen markets with unmatched quality products,
                innovative technologies and systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Brands with Logos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Leading Tyre Brands We Stock
            </h2>
            <p className="text-xl text-gray-600">
              Partnering with the world's most trusted tyre manufacturers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-sm p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-center h-20">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <p 
                    className="text-blue-900 font-bold text-lg text-center hidden"
                  >
                    {brand.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Nearly a century of excellence</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: '1925',
                  title: 'The Beginning',
                  description: 'National Tyre Services was founded, marking the start of our journey',
                },
                {
                  year: '1960s-1980s',
                  title: 'Expansion Era',
                  description: 'Established multiple retail outlets across Zimbabwe',
                },
                {
                  year: '1990s-2000s',
                  title: 'Modernization',
                  description: 'Introduced advanced retreading technologies and systems',
                },
                {
                  year: '2020s',
                  title: 'Digital Transformation',
                  description: 'Embracing innovation and technology for better customer service',
                },
                {
                  year: '2030',
                  title: 'Future Vision',
                  description: 'Aiming for 50% market share through customer-centric solutions',
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-yellow-500">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-blue-900 rounded-sm mt-2"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the NTS Difference
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust NTS for their tyre needs
            </p>
            <a
              href="/branches"
              className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-sm font-bold hover:bg-yellow-500 transition-all hover:scale-105"
            >
              Visit a Branch Today
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

export default OurBrand;