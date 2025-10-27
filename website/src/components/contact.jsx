import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, ArrowLeft, Navigation } from 'lucide-react';
import { toast } from 'sonner';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { GrUpdate } from "react-icons/gr";


// Fix for default marker icon in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const BranchContact = () => {
  const { branchId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const branches = {
    'harare-cripps': {
      name: 'Harare Cripps (Head Office)',
      address: 'Corner Cripps & Seke Road Graniteside',
      city: 'Harare',
      phone: '+263 242-771225-38',
      alternativePhones: ['+263-024-2759360', '+263 77 233 6868'],
      email: 'ntssalescripps@ntsgroup.co.zw',
      type: 'head-office',
      coordinates: [-17.8252, 31.0335],
      bgImage: 'https://images.unsplash.com/photo-1587894862581-4b33c0b8d3b2?q=80&w=2070',
      workingHours: {
        weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
        saturday: 'Saturday: 8:00 AM - 1:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
    'harare-kelvin': {
      name: 'Harare Kelvin',
      address: '5 Crawford Road, Graniteside',
      city: 'Harare',
      phone: '+263 242759360/2759344',
      email: 'ntssaleskelvin@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-17.8216, 31.0489],
      bgImage: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2070',
      workingHours: {
        weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
        saturday: 'Saturday: 8:00 AM - 1:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
    'harare-samora': {
      name: 'Harare Samora Machel',
      address: '167 Samora Machel Avenue',
      city: 'Harare',
      phone: '+26324-2796291/2',
      email: 'ntssamora@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-17.8292, 31.0522],
      bgImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070',
      workingHours: {
        weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
        saturday: 'Saturday: 8:00 AM - 1:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
    'bulawayo': {
      name: 'Bulawayo',
      address: '130 J M Nkomo Street',
      city: 'Bulawayo',
      phone: '+263-029-2262497/8',
      email: 'ntsbulawayo@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-20.1547, 28.5827],
      bgImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070',
      workingHours: {
        weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
        saturday: 'Saturday: 8:00 AM - 1:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
    'gweru': {
      name: 'Gweru',
      address: '43 Second Street',
      city: 'Gweru',
      phone: '+26354-224235 / 2221008',
      email: 'gwerunts@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-19.4500, 29.8167],
      bgImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070',
      workingHours: {
        weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
        saturday: 'Saturday: 8:00 AM - 1:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
    'mutare': {
      name: 'Mutare',
      address: '26 Park Road',
      city: 'Mutare',
      phone: '+263-020-2064541 / 2064557',
      email: 'ntsmutare@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-18.9707, 32.6700],
      bgImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070',
      workingHours: {
        weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
        saturday: 'Saturday: 8:00 AM - 1:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
    'kwekwe': {
      name: 'Kwekwe',
      address: '2515A Industrial Road',
      city: 'Kwekwe',
      phone: '+26355-2522864/5 / 2522865',
      email: 'ntskwekwe@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-18.9286, 29.8147],
      bgImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070',
      workingHours: {
        weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
        saturday: 'Saturday: 8:00 AM - 1:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
    'chegutu': {
      name: 'Chegutu',
      address: '4007 CNR Queen & George Avenue',
      city: 'Chegutu',
      phone: '068 215 3088/3090',
      email: 'ntschegutu@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-18.1333, 30.1500],
      bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
      workingHours: {
        weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
        saturday: 'Saturday: 8:00 AM - 1:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
    'chinhoyi': {
      name: 'Chinhoyi',
      address: '40 Magamba Way',
      city: 'Chinhoyi',
      phone: '+26367-2122336/ 2122230',
      email: 'ntschinhoyi@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-17.3667, 30.2000],
      bgImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070',
      workingHours: {
        weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
        saturday: 'Saturday: 8:00 AM - 1:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
    'masvingo': {
      name: 'Masvingo',
      address: '694A Josiah Tongogara Ave',
      city: 'Masvingo',
      phone: '+263-039-2262278/9',
      email: 'ntsmasvingo@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-20.0637, 30.8275],
      bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
      workingHours: {
        weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
        saturday: 'Saturday: 8:00 AM - 1:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
    'chiredzi': {
      name: 'Chiredzi',
      address: '75 Knobthorn Rd',
      city: 'Chiredzi',
      phone: '+263-031-2312286 / 2312042',
      email: 'ntschiredzi@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-21.0500, 31.6667],
      bgImage: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070',
      workingHours: {
        weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
        saturday: 'Saturday: 8:00 AM - 1:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
    'zvishavane': {
      name: 'Zvishavane',
      address: 'Lot 3 RG Mugabe Way',
      city: 'Zvishavane',
      phone: '+263-039-2355394',
      email: 'ntszvishavane@ntsgroup.co.zw',
      type: 'retail',
      coordinates: [-20.3333, 30.0667],
      bgImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070',
      workingHours: {
        weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
        saturday: 'Saturday: 8:00 AM - 1:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
    'bulawayo-factory': {
      name: 'Bulawayo Retreading Factory',
      address: 'Corner Magazine and Khami Road Steeldale',
      city: 'Bulawayo',
      phone: '+263-292-262562',
      email: 'ntskhami@ntsgroup.co.zw',
      type: 'factory',
      coordinates: [-20.1703, 28.5553],
      bgImage: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2070',
      workingHours: {
        weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
        saturday: 'Saturday: 8:00 AM - 12:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
    'harare-factory': {
      name: 'Harare Retreading Factory',
      address: 'Corner Cripps and Seke Road Graniteside',
      city: 'Harare',
      phone: '+263-242-771225-38',
      email: 'ekazingizi@ntsgroup.co.zw',
      type: 'factory',
      coordinates: [-17.8252, 31.0335],
      bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
      workingHours: {
        weekday: 'Monday - Friday: 8:00 AM - 5:00 PM',
        saturday: 'Saturday: 8:00 AM - 12:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
  };

  const branch = branches[branchId];

  useEffect(() => {
    if (!branch) {
      navigate('/branches');
    }
  }, [branch, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Thank you! Your message has been sent to ${branch.name}.`);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!branch) {
    return null;
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-60"
          style={{
            backgroundImage: `url('${branch.bgImage}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-700/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/branches"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Branches
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <Navigation className="w-16 h-16 text-yellow-400" />
              {branch.type === 'head-office' && (
                <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold">
                  HEAD OFFICE
                </span>
              )}
              {branch.type === 'factory' && (
                <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold">
                  FACTORY
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{branch.name}</h1>
            <p className="text-xl text-gray-200">
              Get in touch with our {branch.city} branch
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">Call Us</h3>
              <div className="space-y-2">
                <a
                  href={`tel:${branch.phone}`}
                  className="block text-gray-700 hover:text-blue-900 font-semibold transition-colors"
                >
                  {branch.phone}
                </a>
                {branch.alternativePhones?.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone}`}
                    className="block text-gray-600 hover:text-blue-900 text-sm transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">Email Us</h3>
              <a
                href={`mailto:${branch.email}`}
                className="text-gray-700 hover:text-blue-900 font-semibold transition-colors break-all"
              >
                {branch.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">Visit Us</h3>
              <p className="text-gray-700">{branch.address}</p>
              <p className="text-gray-600 text-sm mt-1">{branch.city}</p>
            </motion.div>
          </div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto mt-8"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-yellow-500" />
                <h3 className="text-xl font-bold text-blue-900">Working Hours</h3>
              </div>
              <div className="space-y-2 text-center">
                <p className="text-gray-700">{branch.workingHours.weekday}</p>
                <p className="text-gray-700">{branch.workingHours.saturday}</p>
                <p className="text-gray-600">{branch.workingHours.sunday}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="+263 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message to {branch.city} Branch
                  </button>
                </form>
              </motion.div>

              {/* Branch Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Why Choose {branch.name}?</h3>
                  <p className="text-gray-200 mb-8 leading-relaxed">
                    Our {branch.city} branch offers comprehensive tyre services with expert staff
                    ready to assist you with all your tyre needs. We provide quality products and
                    professional service to keep you safe on the road.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-blue-900" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Quick Response</h4>
                        <p className="text-gray-200">Call us now for immediate assistance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-blue-900" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Email Support</h4>
                        <p className="text-gray-200">Get detailed information via email</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-blue-900" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Easy to Find</h4>
                        <p className="text-gray-200">Conveniently located in {branch.city}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Find Us on the Map</h2>
            <p className="text-gray-600">
              Click the marker for directions to {branch.name}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ height: '500px' }}
          >
            <MapContainer
              center={branch.coordinates}
              zoom={15}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={branch.coordinates}>
                <Popup>
                  <div className="text-center p-2">
                    <h3 className="font-bold text-blue-900 mb-2">{branch.name}</h3>
                    <p className="text-sm text-gray-700 mb-2">{branch.address}</p>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${branch.coordinates[0]},${branch.coordinates[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-900 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition-colors"
                    >
                      Get Directions
                    </a>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </motion.div>

          <div className="text-center mt-8">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${branch.coordinates[0]},${branch.coordinates[1]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all hover:scale-105"
            >
              <Navigation className="w-5 h-5" />
              Open in Google Maps
            </a>
          </div>
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

export default BranchContact;