import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const usefulLinks = [
    { name: 'Investor Center', path: '/investor-centre' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Branches', path: '/branches' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-yellow-400 font-bold text-lg mb-4">ABOUT COMPANY</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              National Tyre Services is one of the pioneer tyre brands in Zimbabwe. NTS Limited
              traces its origin in tyre industry back to almost a century ago, to 1925.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-blue-900" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-yellow-400 font-bold text-lg mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-yellow-400 font-bold text-lg mb-4">CONTACT US</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">
                  Corner Cripps & Seke Road<br />
                  Graniteside, Harare
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>+263 242-771225-38</p>
                  <p>+263-024-2759360/2759344</p>
                  <p>+263 77 233 6868</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a
                  href="mailto:nts@ntsgroup.co.zw"
                  className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                >
                  nts@ntsgroup.co.zw
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-yellow-400 font-bold text-lg mb-4">QUICK CONTACT</h3>
            <p className="text-gray-300 text-sm mb-4">
              If you have any queries, please contact us
            </p>
            <a
              href="mailto:nts@ntsgroup.co.zw"
              className="inline-block bg-yellow-400 text-blue-900 px-6 py-3 rounded-sm font-semibold hover:bg-yellow-500 transition-all hover:scale-105"
            >
              Mail Us Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} National Tyre Services. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Designed with ❤️ for NTS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;