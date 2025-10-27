import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  FileText,
  Calendar,
  Users,
  DollarSign,
  Target,
  Download,
  BarChart3,
} from 'lucide-react';
import { toast } from 'sonner';
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { GiSupersonicArrow } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";


const InvestorCentre = () => {
  const handleDownload = (documentName) => {
    toast.success(`Downloading ${documentName}...`);
  };

  const financialHighlights = [
    {
      icon: HiOutlineArrowTrendingUp,
      title: 'Revenue Growth',
      value: '15%',
      description: 'Year-on-year revenue increase',
    },
    {
      icon: IoStatsChartOutline,
      title: 'Market Share',
      value: '35%',
      description: 'Current market position',
    },
    {
      icon: IoPeopleCircleOutline,
      title: 'Customer Base',
      value: '10,000+',
      description: 'Active customers nationwide',
    },
    {
      icon: GiSupersonicArrow,
      title: '2030 Goal',
      value: '50%',
      description: 'Target market share',
    },
  ];

  const documents = [
    {
      title: 'Annual Report 2023',
      description: 'Comprehensive overview of our financial performance and achievements',
      date: 'March 2024',
      size: '5.2 MB',
      category: 'Annual Report',
    },
    {
      title: 'Q4 Financial Results 2023',
      description: 'Detailed quarterly financial statements and analysis',
      date: 'February 2024',
      size: '2.1 MB',
      category: 'Financial Results',
    },
    {
      title: 'Corporate Governance Report',
      description: 'Our commitment to transparency and ethical business practices',
      date: 'January 2024',
      size: '3.8 MB',
      category: 'Governance',
    },
    {
      title: 'Sustainability Report 2023',
      description: 'Environmental and social responsibility initiatives',
      date: 'December 2023',
      size: '4.5 MB',
      category: 'Sustainability',
    },
    {
      title: 'Investor Presentation',
      description: 'Strategic overview and growth opportunities',
      date: 'November 2023',
      size: '8.7 MB',
      category: 'Presentation',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Annual General Meeting',
      date: 'June 15, 2024',
      time: '10:00 AM',
      location: 'Head Office, Graniteside',
    },
    {
      title: 'Q1 2024 Results Announcement',
      date: 'May 10, 2024',
      time: '2:00 PM',
      location: 'Virtual',
    },
    {
      title: 'Investor Relations Webinar',
      date: 'April 28, 2024',
      time: '3:00 PM',
      location: 'Online',
    },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(30, 58, 138, 0.93), rgba(29, 78, 216, 0.89)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000')`,
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <HiOutlineArrowTrendingUp className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Investor Centre</h1>
            <p className="text-xl text-gray-200">
              Transparency, growth, and value creation for our stakeholders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial Highlights with Background Image */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.94)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000')`,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Financial Highlights</h2>
            <p className="text-xl text-gray-600">Key performance indicators and achievements</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financialHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-sm p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-blue-900 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <highlight.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2">{highlight.value}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-sm p-8 md:p-12 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-sm flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-900" />
                </div>
                <h2 className="text-3xl font-bold text-blue-900">Our Strategic Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To be the leading provider of customer centric tyre management solutions through
                innovation driven systems attaining at least 50% market share by 2030.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to enhancing value for all stakeholders through provision of
                customer centric tyre management solutions in our chosen markets with unmatched
                quality products, innovative technologies and systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documents & Reports */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Reports & Presentations
            </h2>
            <p className="text-xl text-gray-600">
              Download our latest financial reports and investor materials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-sm p-6 shadow-lg border-2 border-transparent hover:border-yellow-400 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-sm flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-blue-100 text-blue-900 px-3 py-1 rounded-sm text-xs font-semibold mb-2">
                      {doc.category}
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{doc.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{doc.date}</span>
                      <span>{doc.size}</span>
                    </div>
                    <button
                      onClick={() => handleDownload(doc.title)}
                      className="inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-sm font-semibold hover:bg-blue-800 transition-all group"
                    >
                      <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Stay informed about important investor events</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-sm p-6 shadow-lg"
              >
                <IoCalendarNumberOutline className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2 text-sm">
                    <IoCalendarNumberOutline className="w-4 h-4" />
                    {event.date}
                  </p>
                  <p className="text-sm">{event.time}</p>
                  <p className="text-sm">{event.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Investor Relations */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaPeopleGroup className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Investor Relations Contact
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Have questions about our financial performance or investment opportunities?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:nts@ntsgroup.co.zw"
                className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-sm font-bold hover:bg-yellow-500 transition-all hover:scale-105"
              >
                Email Investor Relations
              </a>
              <a
                href="tel:+263242771222"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-sm font-bold hover:bg-white hover:text-blue-900 transition-all"
              >
                Call Us
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

export default InvestorCentre;