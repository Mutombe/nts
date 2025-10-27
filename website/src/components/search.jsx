import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, Phone, Mail, MapPin, Settings, Package, BookOpen, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);

  // Searchable content for NTS
  const searchableContent = [
    {
      title: 'Home',
      path: '/',
      description: 'National Tyre Services - Your trusted tyre management solutions provider',
      keywords: ['home', 'main', 'landing', 'start', 'nts', 'national tyre services'],
      category: 'Page'
    },
    {
      title: 'About Us',
      path: '/about',
      description: 'Learn about National Tyre Services and our history',
      keywords: ['about', 'company', 'history', 'who we are', 'team'],
      category: 'Page'
    },
    {
      title: 'Our Brand',
      path: '/our-brand',
      description: 'Discover the NTS brand and what we stand for',
      keywords: ['brand', 'identity', 'values', 'mission', 'vision'],
      category: 'About'
    },
    {
      title: 'Legal and Compliance',
      path: '/legal-compliance',
      description: 'Our legal framework and compliance standards',
      keywords: ['legal', 'compliance', 'regulations', 'standards', 'policies'],
      category: 'About'
    },
    {
      title: 'Technical & Safety',
      path: '/technical-safety',
      description: 'Technical expertise and safety standards',
      keywords: ['technical', 'safety', 'standards', 'expertise', 'quality'],
      category: 'About'
    },
    {
      title: 'Corporate Social Responsibility',
      path: '/csr',
      description: 'Our commitment to corporate social responsibility',
      keywords: ['csr', 'social', 'responsibility', 'community', 'sustainability'],
      category: 'About'
    },
    {
      title: 'Investor Centre',
      path: '/investor-centre',
      description: 'Information for investors and stakeholders',
      keywords: ['investor', 'investment', 'financial', 'shareholders', 'reports'],
      category: 'Page'
    },
    {
      title: 'Services',
      path: '/services',
      description: 'Our comprehensive tyre services',
      keywords: ['services', 'offerings', 'solutions', 'what we offer'],
      category: 'Page'
    },
    {
      title: 'What We Do',
      path: '/what-we-do',
      description: 'Explore our core services and capabilities',
      keywords: ['what we do', 'capabilities', 'expertise', 'services'],
      category: 'Service'
    },
    {
      title: 'Products',
      path: '/products',
      description: 'Browse our range of tyre products',
      keywords: ['products', 'tyres', 'tires', 'range', 'brands', 'catalogue'],
      category: 'Service'
    },
    {
      title: 'Promotions',
      path: '/promotions',
      description: 'Current promotions and special offers',
      keywords: ['promotions', 'offers', 'deals', 'discounts', 'specials'],
      category: 'Service'
    },
    {
      title: 'Catalogues',
      path: '/catalogues',
      description: 'View our product catalogues',
      keywords: ['catalogues', 'brochures', 'downloads', 'pdfs', 'product info'],
      category: 'Service'
    },
    {
      title: 'Blog',
      path: '/blog',
      description: 'Latest news and insights from NTS',
      keywords: ['blog', 'news', 'articles', 'updates', 'insights'],
      category: 'Page'
    },
    {
      title: 'Branches',
      path: '/branches',
      description: 'Find our branch locations',
      keywords: ['branches', 'locations', 'outlets', 'find us', 'where'],
      category: 'Page'
    },
    {
      title: 'Contact',
      path: '/contact',
      description: 'Get in touch with NTS',
      keywords: ['contact', 'reach', 'location', 'address', 'phone', 'email'],
      category: 'Page'
    },
    {
      title: 'Phone: +263 242771222-38',
      path: 'tel:+263242771222',
      description: 'Call us for inquiries and support',
      keywords: ['phone', 'call', 'telephone', 'contact', 'reach'],
      category: 'Contact',
      isExternal: true
    },
    {
      title: 'Email: nts@ntsgroup.co.zw',
      path: 'mailto:nts@ntsgroup.co.zw',
      description: 'Send us an email for inquiries',
      keywords: ['email', 'mail', 'message', 'contact', 'write'],
      category: 'Contact',
      isExternal: true
    },
    {
      title: 'Corner Cripps & Seke Road, Graniteside',
      path: '/branches',
      description: 'Visit our main office location',
      keywords: ['location', 'address', 'map', 'directions', 'visit', 'graniteside', 'cripps'],
      category: 'Location'
    }
  ];

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = searchableContent.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const descriptionMatch = item.description.toLowerCase().includes(query);
        const keywordsMatch = item.keywords.some(keyword => 
          keyword.toLowerCase().includes(query)
        );
        return titleMatch || descriptionMatch || keywordsMatch;
      });
      setSearchResults(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleClose = () => {
    setSearchQuery('');
    setSearchResults([]);
    onClose();
  };

  const handleResultClick = () => {
    handleClose();
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Service':
        return <Settings className="w-4 h-4" />;
      case 'About':
        return <Building2 className="w-4 h-4" />;
      case 'Contact':
        return <Phone className="w-4 h-4" />;
      case 'Location':
        return <MapPin className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Service':
        return 'bg-blue-50 text-blue-700 group-hover:bg-blue-100';
      case 'About':
        return 'bg-yellow-50 text-yellow-700 group-hover:bg-yellow-100';
      case 'Contact':
        return 'bg-green-50 text-green-700 group-hover:bg-green-100';
      case 'Location':
        return 'bg-purple-50 text-purple-700 group-hover:bg-purple-100';
      default:
        return 'bg-gray-50 text-gray-700 group-hover:bg-gray-100';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4 pt-20"
          >
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-blue-900">
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b-2 border-blue-100 bg-gradient-to-r from-blue-50 to-yellow-50">
                <Search className="w-5 h-5 text-blue-900 flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services, products, or information..."
                  className="flex-1 outline-none text-gray-900 placeholder-gray-500 text-lg bg-transparent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 hover:bg-blue-100 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-blue-900" />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {searchQuery.trim() === '' ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-blue-900" />
                    </div>
                    <p className="text-gray-700 font-semibold mb-2">
                      Start searching...
                    </p>
                    <p className="text-gray-500 text-sm">
                      Try searching for "tyres", "products", "services", or "branches"
                    </p>
                  </div>
                ) : isSearching ? (
                  <div className="p-8 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      {[0, 0.2, 0.4].map((delay, index) => (
                        <motion.div
                          key={index}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.3, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: delay,
                            ease: "easeInOut",
                          }}
                          className="w-2 h-2 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mt-3">Searching...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="py-2">
                    {searchResults.map((result, index) => (
                      result.isExternal ? (
                        <a
                          key={index}
                          href={result.path}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-yellow-50 transition-colors duration-200 group border-b border-gray-100 last:border-0"
                        >
                          <div className={`p-2.5 rounded-lg transition-colors ${getCategoryColor(result.category)}`}>
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-sm font-bold text-blue-900 truncate">
                                {result.title}
                              </h3>
                              <span className="px-2 py-0.5 bg-yellow-100 text-blue-900 text-xs font-semibold rounded-full flex-shrink-0">
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 line-clamp-1">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-900 flex-shrink-0 transition-colors" />
                        </a>
                      ) : (
                        <Link
                          key={index}
                          to={result.path}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-yellow-50 transition-colors duration-200 group border-b border-gray-100 last:border-0"
                        >
                          <div className={`p-2.5 rounded-lg transition-colors ${getCategoryColor(result.category)}`}>
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-sm font-bold text-blue-900 truncate">
                                {result.title}
                              </h3>
                              <span className="px-2 py-0.5 bg-yellow-100 text-blue-900 text-xs font-semibold rounded-full flex-shrink-0">
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-600 line-clamp-1">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-900 flex-shrink-0 transition-colors" />
                        </Link>
                      )
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-700 font-semibold mb-1">No results found</p>
                    <p className="text-gray-500 text-sm">
                      Try searching with different keywords
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {searchQuery.trim() === '' && (
                <div className="border-t-2 border-blue-100 px-4 py-3 bg-gradient-to-r from-blue-50/50 to-yellow-50/50">
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <kbd className="px-2 py-1 bg-white border-2 border-blue-200 rounded text-xs font-semibold text-blue-900">↵</kbd>
                        to select
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd className="px-2 py-1 bg-white border-2 border-blue-200 rounded text-xs font-semibold text-blue-900">ESC</kbd>
                        to close
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;