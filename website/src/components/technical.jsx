import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Download,
  CloudRain,
  AlertTriangle,
  CheckCircle,
  Eye,
  Wrench,
  Award,
  FileText,
} from 'lucide-react';
import { toast } from 'sonner';
import { SiFsecure } from "react-icons/si";
import { WiDayRainMix } from "react-icons/wi";
import { LiaAwardSolid } from "react-icons/lia";
import { GrUpdate } from "react-icons/gr";


const TechnicalSafety = () => {
  const handleDownload = (docName) => {
    toast.success(`Downloading ${docName}...`);
  };

  const downloads = [
    {
      title: 'Company Profile',
      icon: FileText,
      size: '2.5 MB',
      description: 'Comprehensive company overview and capabilities',
    },
    {
      title: 'Our Catalogue',
      icon: FileText,
      size: '12.8 MB',
      description: 'Complete product catalogue with specifications',
    },
    {
      title: 'Comforser Catalogue',
      icon: FileText,
      size: '8.4 MB',
      description: 'Comforser brand tyre catalogue',
    },
    {
      title: 'Aufine TBR Catalogue',
      icon: FileText,
      size: '6.7 MB',
      description: 'Aufine truck and bus radial tyre catalogue',
    },
  ];

  const safetyTips = [
    {
      icon: Eye,
      title: 'Check Your Tyre Tread Depth Regularly',
      description:
        'A good standard is that the tread depth should not be less than 2mm. If you are unsure, visit NTS for a free tyre check.',
    },
    {
      icon: Wrench,
      title: 'Check Your Tyre Pressure Regularly',
      description:
        'Proper tyre pressure ensures optimal performance, safety, and fuel efficiency.',
    },
    {
      icon: AlertTriangle,
      title: 'Ensure Your Wipers Are in Good Condition',
      description:
        'Good visibility is crucial during rain. Replace worn wiper blades before the rainy season.',
    },
    {
      icon: Shield,
      title: 'Regular Maintenance of Your Brakes',
      description:
        'Well-maintained brakes are essential for stopping safely on wet roads.',
    },
    {
      icon: CheckCircle,
      title: 'Familiarise Yourself with Vehicle Functions',
      description:
        'Know how to use your vehicle\'s safety features, especially in adverse conditions.',
    },
    {
      icon: CloudRain,
      title: 'Drive Safely and Slowly',
      description:
        'Reduce speed during rain and maintain a safe following distance from other vehicles.',
    },
  ];

  const retreading = [
    {
      title: 'Economic Benefits',
      description: 'Save up to 70% compared to buying new tyres',
      icon: '💰',
    },
    {
      title: 'Environmental Benefits',
      description: 'Reduce waste and conserve natural resources',
      icon: '🌱',
    },
    {
      title: 'Quality Assured',
      description: 'Safe and dependable, just like new tyres',
      icon: '✅',
    },
    {
      title: 'Expert Service',
      description: 'Decades of experience and modern technology',
      icon: '🏆',
    },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(30, 58, 138, 0.91), rgba(29, 78, 216, 0.87)), url('/brand3.png')`,
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <SiFsecure className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Technical & Safety
            </h1>
            <p className="text-xl text-gray-200">
              Your safety is our priority - Expert guidance and resources
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloads Section with Background Image */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.93)), url('/17.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Downloads</h2>
            <p className="text-xl text-gray-600">
              Access our technical documents and catalogues
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {downloads.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-sm p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-blue-900 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <doc.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{doc.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                <p className="text-gray-500 text-xs mb-4">{doc.size}</p>
                <button
                  onClick={() => handleDownload(doc.title)}
                  className="inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-sm font-semibold hover:bg-blue-800 transition-all group"
                >
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Driving Safely in Rain */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <WiDayRainMix className="w-16 h-16 mx-auto mb-6 text-blue-900" />
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Driving Safely in the Rain with NTS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Weather patterns have changed abruptly. Motorists should brace up for wet road
              conditions to avoid being caught off-guard. Exercise extreme caution as roads become
              slippery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {safetyTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-sm p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-sm flex items-center justify-center mb-4">
                  <tip.icon className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-sm font-bold mb-4">
              STAY CONSCIOUS
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Visit National Tyre Services for Free Tyre Checks
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              National Tyre Services has branches nationwide. Visit your nearest NTS branch for free
              tyre check and expert advice. We wish that you will have safe journeys on the roads.
            </p>
            <a
              href="/branches"
              className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-sm font-bold hover:bg-blue-800 transition-all hover:scale-105"
            >
              Find Your Nearest Branch
            </a>
          </motion.div>
        </div>
      </section>

      {/* NTS The Retreading Home */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <LiaAwardSolid className="w-16 h-16 mx-auto mb-6 text-blue-900" />
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              NTS - The Retreading Home
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In modern times, relugging and retreading tyres is perceived as twice 'blessed
              activity' - it bestows economic benefits to consumers and an environmental bonus to
              our country.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {retreading.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-sm p-6 text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-sm p-8 md:p-12 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose NTS Retreading?</h3>
              <div className="prose prose-lg text-gray-200">
                <p className="mb-4">
                  Retreads and relugs are safe just as new tyres, permitting extended use of the
                  investment made in expensive tyres. The quality and life cycle of retreaded and
                  relugged tyres is improving daily with better quality coming on the horizon due to
                  continuous effort from tread rubber manufacturers and technological innovations.
                </p>
                <p className="mb-4">
                  With our lengthy industry experience and the widest branch network in the country,
                  we have grown to be a reliable retreading company using quality and more robust
                  compounds to produce retreaded tyres that give you better mileage at lower costs.
                </p>
                <p>
                  NTS has two retreading plants, one in Harare and another in Bulawayo to cater for
                  our different customer segments. National Tyre Services is the only tyre company
                  in Zimbabwe with a relugging factory.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The NTS Promise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">The NTS Promise</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Quality Retreading',
                description:
                  'A reputable and consistent retreading company that uses quality and application specific rubber and treads.',
              },
              {
                title: 'Wide Branch Network',
                description:
                  'Closer to our customers with standardized service offering, professional wheel alignment and balancing.',
              },
              {
                title: 'Quality Products',
                description:
                  'Supplier of a wide range of tested quality new tyre brands and accessories.',
              },
              {
                title: 'Customer Service',
                description:
                  'Unmatched customer service experience in our refreshing and friendly tyre retail stores.',
              },
              {
                title: 'Experienced Staff',
                description:
                  'Trained and experienced staff to ensure sustainable service delivery.',
              },
              {
                title: 'Value Services',
                description:
                  'Customized after sales and package of value services to manage fleets efficiently.',
              },
            ].map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-sm p-6 shadow-lg"
              >
                <div className="w-10 h-10 bg-yellow-400 rounded-sm flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">{promise.title}</h3>
                <p className="text-gray-600 text-sm">{promise.description}</p>
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
              Visit Any of Our 13 Branches Countrywide
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              For retreading and relugging services, we have multiple tread designs and rubber
              tested in various environments
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

export default TechnicalSafety;