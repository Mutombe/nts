import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, Shield, CheckCircle, Award, Lock } from 'lucide-react';
import { GoLaw } from "react-icons/go";
import { SiFsecure } from "react-icons/si";
import { LiaAwardSolid } from "react-icons/lia";
import { GrUpdate } from "react-icons/gr";


const LegalCompliance = () => {
  const complianceAreas = [
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description:
        'We adhere to all national and international regulations governing the tyre industry, ensuring our operations meet the highest standards.',
    },
    {
      icon: Award,
      title: 'Quality Standards',
      description:
        'Our products and services comply with ISO quality management standards and industry best practices.',
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description:
        'We are committed to protecting customer data and maintaining confidentiality in all our business operations.',
    },
    {
      icon: CheckCircle,
      title: 'Environmental Compliance',
      description:
        'We follow environmental regulations and promote sustainable practices in tyre retreading and disposal.',
    },
    {
      icon: FileText,
      title: 'Business Ethics',
      description:
        'Our business practices are guided by integrity, transparency, and ethical conduct in all dealings.',
    },
    {
      icon: Scale,
      title: 'Legal Framework',
      description:
        'We operate within the legal framework of Zimbabwe and maintain proper licensing and certifications.',
    },
  ];

  const policies = [
    'Health and Safety Policy',
    'Environmental Policy',
    'Quality Assurance Policy',
    'Data Privacy Policy',
    'Anti-Corruption Policy',
    'Equal Opportunity Policy',
    'Customer Service Policy',
    'Supplier Code of Conduct',
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(30, 58, 138, 0.93), rgba(29, 78, 216, 0.90)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000')`,
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <GoLaw className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Legal and Compliance
            </h1>
            <p className="text-xl text-gray-200">
              Committed to ethical business practices and regulatory excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction with Background Image */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.97), rgba(255, 255, 255, 0.95)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000')`,
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
              Our Commitment to Compliance
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At National Tyre Services, we are committed to conducting our business with the
              highest standards of legal and ethical compliance. Our operations are guided by
              integrity, transparency, and respect for all applicable laws and regulations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Key Compliance Areas</h2>
            <p className="text-xl text-gray-600">
              Ensuring excellence across all aspects of our business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceAreas.map((area, index) => (
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
                  <area.icon className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Corporate Governance
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    National Tyre Services is committed to maintaining the highest standards of
                    corporate governance. Our governance framework ensures accountability,
                    transparency, and ethical decision-making at all levels of the organization.
                  </p>
                  <p className="mb-4">
                    We have established robust systems and processes to ensure compliance with all
                    regulatory requirements and to protect the interests of our stakeholders,
                    including customers, employees, shareholders, and the communities we serve.
                  </p>
                  <p>
                    Our board of directors and management team are dedicated to upholding the
                    values of integrity, responsibility, and excellence that have defined our
                    company for nearly 100 years.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-sm p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-6">Our Governance Principles</h3>
                <div className="space-y-4">
                  {[
                    'Transparency in all operations',
                    'Accountability to stakeholders',
                    'Ethical business conduct',
                    'Risk management excellence',
                    'Regulatory compliance',
                    'Sustainable practices',
                  ].map((principle, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-yellow-400 rounded-sm flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-blue-900" />
                      </div>
                      <span>{principle}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies & Procedures */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Our Policies & Procedures
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive policies guiding our operations
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-sm p-6 shadow-lg flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-blue-900 rounded-sm flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="font-semibold text-gray-800">{policy}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Whistleblowing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-yellow-50 rounded-sm p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <SiFsecure className="w-16 h-16 mx-auto mb-6 text-blue-900" />
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Reporting Concerns
              </h2>
              <p className="text-lg text-gray-600">
                We encourage all stakeholders to report any concerns regarding legal compliance,
                ethical conduct, or potential violations of our policies.
              </p>
            </div>
            <div className="bg-white rounded-sm p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">How to Report</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong>Email:</strong> compliance@ntsgroup.co.zw
                </p>
                <p>
                  <strong>Phone:</strong> +263 242-771225-38
                </p>
                <p>
                  <strong>In Person:</strong> Visit our Head Office at Corner Cripps & Seke Road,
                  Graniteside, Harare
                </p>
              </div>
              <p className="mt-4 text-sm text-gray-500 italic">
                All reports are treated confidentially and protected from retaliation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <LiaAwardSolid className="w-16 h-16 mx-auto mb-6 text-blue-900" />
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Certifications & Licenses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              National Tyre Services holds all necessary licenses and certifications required to
              operate in Zimbabwe and maintains compliance with industry standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Business License', description: 'Registered and licensed in Zimbabwe' },
              {
                title: 'Industry Certifications',
                description: 'Certified for quality and safety standards',
              },
              {
                title: 'Environmental Permits',
                description: 'Compliant with environmental regulations',
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-sm p-6 shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <LiaAwardSolid className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
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
              Questions About Our Compliance?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact our compliance team for more information
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-sm font-bold hover:bg-yellow-500 transition-all hover:scale-105"
            >
              Contact Us
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

export default LegalCompliance;