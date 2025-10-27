import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, BookOpen } from 'lucide-react';
import { toast } from 'sonner';
import { GrUpdate } from "react-icons/gr";

const Catalogues = () => {
  const handleDownload = (catalogueName) => {
    toast.success(`Downloading ${catalogueName}...`);
  };

  const catalogues = [
    {
      title: 'Passenger Tyres Catalogue',
      description: 'Complete range of passenger vehicle tyres with specifications and pricing',
      pages: '45 pages',
      size: '12.5 MB',
      year: '2024',
      category: 'Passenger',
    },
    {
      title: 'Truck & Bus Tyres Catalogue',
      description: 'Heavy-duty commercial vehicle tyres for trucks and buses',
      pages: '68 pages',
      size: '18.3 MB',
      year: '2024',
      category: 'Commercial',
    },
    {
      title: 'Agriculture & OTR Tyres',
      description: 'Specialized tyres for agricultural machinery and off-road vehicles',
      pages: '52 pages',
      size: '15.7 MB',
      year: '2024',
      category: 'Agriculture',
    },
    {
      title: 'SUV & Light Truck Catalogue',
      description: 'Robust tyres designed for SUVs and light commercial vehicles',
      pages: '38 pages',
      size: '10.2 MB',
      year: '2024',
      category: 'SUV',
    },
    {
      title: 'Retreading Services Guide',
      description: 'Comprehensive guide to our retreading services and processes',
      pages: '24 pages',
      size: '8.4 MB',
      year: '2024',
      category: 'Services',
    },
    {
      title: 'Accessories & Parts Catalogue',
      description: 'Complete range of tyre accessories and related products',
      pages: '30 pages',
      size: '9.8 MB',
      year: '2024',
      category: 'Accessories',
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
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Product Catalogues
            </h1>
            <p className="text-xl text-gray-200">
              Browse and download our comprehensive product catalogues
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
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Explore Our Complete Range
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Download our detailed catalogues to explore our full range of premium tyres,
              specifications, and pricing. Each catalogue is carefully prepared to help you make
              informed decisions about your tyre needs.
            </p>
          </motion.div>

          {/* Catalogues Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogues.map((catalogue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-yellow-400"
              >
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-6 text-white">
                  <FileText className="w-12 h-12 mb-4" />
                  <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    {catalogue.category}
                  </div>
                  <h3 className="text-xl font-bold">{catalogue.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{catalogue.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span>{catalogue.pages}</span>
                    <span>{catalogue.size}</span>
                    <span>{catalogue.year}</span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleDownload(catalogue.title)}
                      className="flex-1 bg-blue-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all flex items-center justify-center gap-2 group"
                    >
                      <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                      Download
                    </button>
                    <button className="bg-yellow-400 text-blue-900 px-4 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all flex items-center justify-center">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              How to Use Our Catalogues
            </h2>
            <p className="text-xl text-gray-600">
              Get the most out of our product catalogues
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Select',
                description: 'Choose the catalogue relevant to your needs',
              },
              {
                step: '02',
                title: 'Download',
                description: 'Download the PDF to your device',
              },
              {
                step: '03',
                title: 'Browse',
                description: 'Explore products and specifications',
              },
              {
                step: '04',
                title: 'Contact Us',
                description: 'Reach out for quotes and orders',
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
      </section>

      {/* Request Physical Catalogue */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 md:p-12 text-center"
          >
            <FileText className="w-16 h-16 text-blue-900 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Need a Physical Catalogue?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Visit any of our branches to pick up a physical copy of our catalogues, or contact us
              to have one delivered to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/branches"
                className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all hover:scale-105"
              >
                Find a Branch
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-all hover:scale-105"
              >
                Contact Us
              </a>
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
              Ready to Order?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              After reviewing our catalogues, get in touch with us for expert advice and competitive
              pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+263242771222"
                className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-all hover:scale-105"
              >
                Call Us Now
              </a>
              <a
                href="mailto:nts@ntsgroup.co.zw"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-all"
              >
                Email Us
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

export default Catalogues;