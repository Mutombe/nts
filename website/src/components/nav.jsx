import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, Mail, MapPin, ChevronDown, Search,
  Home, Info, TrendingUp, Briefcase, FileText, Building,
  Award, Users, Scale, Shield, Heart, Target, Settings, Tag, Package
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiCarWheel } from "react-icons/gi";
import SearchModal from './search';
import { LifeBuoy } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: LifeBuoy },
    { 
      name: 'About', 
      path: '/about',
      icon: Info,
      dropdown: [
        { name: 'Our Brand', path: '/our-brand', icon: Award },
        { name: 'Who We Are', path: '/about', icon: Users },
        { name: 'Legal and Compliance', path: '/legal-compliance', icon: Scale },
        { name: 'Technical & Safety', path: '/technical-safety', icon: Shield },
        { name: 'Corporate Social Responsibility', path: '/csr', icon: Heart },
      ]
    },
    { name: 'Investor Centre', path: '/investor-centre', icon: TrendingUp },
    
    { 
      name: 'Services', 
      path: '/services',
      icon: Briefcase,
      dropdown: [
        { name: 'What We Do', path: '/what-we-do', icon: Target },
        { name: 'Promotions', path: '/promotions', icon: Tag },
        { name: 'Products', path: '/products', icon: Package },
      ]
    },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Branches', path: '/branches', icon: Building },
  ];

  return (
    <>
      {/* Search Modal */}
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />

      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+263 242771222-38</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>nts@ntsgroup.co.zw</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Corner Cripps & Seke Road Graniteside</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-15 h-15 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                <div className="w-14 h-14 md:w-14 md:h-14 rounded-full flex items-center justify-center">
                  <img
                    src="/logo2.png"
                    alt="NTS Logo"
                    className="w-14 h-14 md:w-14 md:h-14"
                  />
                </div>
              </div>
              <div className="">
                <h1 className="text-xl md:text-2xl font-bold text-blue-900">
                  NATIONAL TYRE SERVICES
                </h1>
                <p className="text-xs text-gray-600">Tyre Management Solutions</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <div key={link.path} className="relative group">
                    {link.dropdown ? (
                      <div className="relative">
                        <button
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                            location.pathname === link.path || link.dropdown.some(item => item.path === location.pathname)
                              ? 'bg-yellow-400 text-blue-900'
                              : 'text-gray-700 hover:bg-yellow-100 hover:text-blue-900'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          {link.name}
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border-2 border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                          <div className="py-2">
                            {link.dropdown.map((item) => {
                              const DropdownIcon = item.icon;
                              return (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                                    location.pathname === item.path
                                      ? 'bg-yellow-400 text-blue-900'
                                      : 'text-gray-700 hover:bg-yellow-100 hover:text-blue-900'
                                  }`}
                                >
                                  <DropdownIcon className="w-4 h-4" />
                                  {item.name}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                          location.pathname === link.path
                            ? 'bg-yellow-400 text-blue-900'
                            : 'text-gray-700 hover:bg-yellow-100 hover:text-blue-900'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {link.name}
                      </Link>
                    )}
                  </div>
                );
              })}
              
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(true)}
                className="p-2.5 rounded-lg hover:bg-yellow-100 transition-colors group ml-2"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-700 group-hover:text-blue-900 transition-colors" />
              </motion.button>
            </div>

            {/* Mobile Search and Menu Buttons */}
            <div className="lg:hidden flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(true)}
                className="p-2 rounded-lg hover:bg-yellow-100 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-blue-900" />
              </motion.button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-blue-900" />
                ) : (
                  <Menu className="w-6 h-6 text-blue-900" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t"
            >
              <div className="container mx-auto px-4 py-4">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {link.dropdown ? (
                        <div>
                          <button
                            onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-sm font-medium transition-colors ${
                              location.pathname === link.path || link.dropdown.some(item => item.path === location.pathname)
                                ? 'bg-yellow-400 text-blue-900'
                                : 'text-gray-700 hover:bg-yellow-100'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4" />
                              {link.name}
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {openDropdown === link.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden ml-4 mt-2"
                              >
                                {link.dropdown.map((item) => {
                                  const DropdownIcon = item.icon;
                                  return (
                                    <Link
                                      key={item.path}
                                      to={item.path}
                                      className={`flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
                                        location.pathname === item.path
                                          ? 'bg-yellow-400 text-blue-900'
                                          : 'text-gray-600 hover:bg-yellow-100'
                                      }`}
                                    >
                                      <DropdownIcon className="w-4 h-4" />
                                      {item.name}
                                    </Link>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={link.path}
                          className={`flex items-center gap-2 px-4 py-3 rounded-sm font-medium transition-colors ${
                            location.pathname === link.path
                              ? 'bg-yellow-400 text-blue-900'
                              : 'text-gray-700 hover:bg-yellow-100'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          {link.name}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;