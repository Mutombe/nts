import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Truck, Tractor, Wrench, ShoppingCart, Award, X, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IoCarSportOutline } from "react-icons/io5";
import { GrBus } from "react-icons/gr";
import { TbCarSuv } from "react-icons/tb";
import { GiFarmTractor } from "react-icons/gi";
import { GiTyre } from "react-icons/gi";
import { VscTools } from "react-icons/vsc";
import { LiaAwardSolid } from "react-icons/lia";
import { GrUpdate } from "react-icons/gr";


const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [orderMethod, setOrderMethod] = useState('whatsapp');

  const products = [
    {
      id: 1,
      icon: IoCarSportOutline,
      title: 'Passenger Tyres',
      description: 'High-quality tyres designed for everyday vehicles, offering superior comfort, safety, and performance on all road conditions.',
      bgImage: '/18.jpg',
      variations: [
        { id: 1, name: '175/65 R14', image: '/p1.png', price: '$45' },
        { id: 2, name: '185/65 R15', image: '/p2.png', price: '$55' },
        { id: 3, name: '195/55 R16', image: '/p3.png', price: '$65' },
        { id: 4, name: '205/55 R16', image: '/p4.png', price: '$70' },
      ],
      features: ['Enhanced grip and stability', 'Fuel-efficient design', 'Long-lasting tread life', 'Quiet and comfortable ride'],
    },
    {
      id: 2,
      icon: GrBus,
      title: 'Truck & Bus Tyres',
      description: 'Heavy-duty tyres engineered for commercial vehicles, delivering exceptional durability and load-carrying capacity.',
      bgImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
      variations: [
        { id: 1, name: '295/80 R22.5', image: '/t1.png', price: '$250' },
        { id: 2, name: '315/80 R22.5', image: '/t2.png', price: '$280' },
        { id: 3, name: '385/65 R22.5', image: '/t3.png', price: '$320' },
      ],
      features: ['Maximum load capacity', 'Extended service life', 'Excellent traction', 'Heat-resistant compounds'],
    },
    {
      id: 3,
      icon: GiFarmTractor,
      title: 'Agriculture/OTR Tyres',
      description: 'Specialized tyres for agricultural machinery and off-the-road vehicles, built to withstand the toughest terrains.',
      bgImage: '/19.jpg',
      variations: [
        { id: 1, name: '18.4-34', image: '/tr1.png', price: '$450' },
        { id: 2, name: '20.8-38', image: '/tr2.png', price: '$550' },
        { id: 3, name: '23.1-26', image: '/tr3.png', price: '$620' },
      ],
      features: ['Deep tread patterns', 'Superior traction', 'Puncture resistance', 'All-terrain capability'],
    },
    {
      id: 4,
      icon: TbCarSuv,
      title: 'SUV/Light Truck Tyres',
      description: 'Robust tyres designed for SUVs and light trucks, combining on-road comfort with off-road capability.',
      bgImage: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
      variations: [
        { id: 1, name: '235/65 R17', image: '/lt2.png', price: '$85' },
        { id: 2, name: '255/70 R16', image: '/lt1.png', price: '$95' },
        { id: 3, name: '265/70 R17', image: '/lt3.png', price: '$105' },
      ],
      features: ['Versatile performance', 'Enhanced durability', 'All-season traction', 'Comfortable highway ride'],
    },
    {
      id: 5,
      icon: GiTyre,
      title: 'Retreading Tyres',
      description: 'Environmentally friendly and cost-effective retreading services that extend tyre life while maintaining quality.',
      bgImage: '/retreading.png',
      variations: [
        { id: 1, name: 'Hot Retreading', image: '/cold.png', price: '$50' },
        { id: 2, name: 'Cold Retreading', image: '/hot.jpg', price: '$60' },
        { id: 3, name: 'Pre-cure Retreading', image: '/hc.webp', price: '$70' },
      ],
      features: ['Cost-effective solution', 'Environmentally friendly', 'Quality assured', 'Extended tyre life'],
    },
    {
      id: 6,
      icon: VscTools,
      title: 'Accessories',
      description: 'Complete range of tyre accessories and related products to complement your tyre needs.',
      bgImage: '/accessories.png',
      variations: [
        { id: 1, name: 'Wheel Weights', image: '/weights.jpg', price: '$5' },
        { id: 2, name: 'Valve Stems', image: '/valve.webp', price: '$3' },
        { id: 3, name: 'Pressure Gauges', image: '/guage.jpg', price: '$15' },
        { id: 4, name: 'Repair Kits', image: '/kit.jpg', price: '$25' },
      ],
      features: ['Wheel balancing weights', 'Valve stems and caps', 'Tyre pressure gauges', 'Repair kits'],
    },
  ];

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
  

  const handleOrder = () => {
    if (!selectedProduct || !selectedVariation) return;

    const message = `Hello NTS! I'd like to order:%0A%0AProduct: ${selectedProduct.title}%0AVariation: ${selectedVariation.name}%0APrice: ${selectedVariation.price}%0A%0APlease confirm availability.`;

    if (orderMethod === 'whatsapp') {
      window.open(`https://wa.me/263785948128?text=${message}`, '_blank');
    } else {
      const emailSubject = `Order Request - ${selectedProduct.title}`;
      const emailBody = `Hello NTS!\n\nI'd like to order:\n\nProduct: ${selectedProduct.title}\nVariation: ${selectedVariation.name}\nPrice: ${selectedVariation.price}\n\nPlease confirm availability.\n\nThank you!`;
      window.location.href = `mailto:orders@nts.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    }
  };

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/4.jpg)',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <GiTyre className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-200">
              Explore our comprehensive range of premium tyres and accessories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Bento Grid */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Explore Our Tyre Range
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium quality tyres for every vehicle and application
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-0">
            {/* Passenger Tyres - Large Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-3 md:row-span-2 relative overflow-hidden group cursor-pointer rounded-tl-sm"
              onClick={() => setSelectedProduct(products[0])}
            >
              <div className="absolute inset-0">
                <img 
                  src={products[0].bgImage} 
                  alt={products[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/70 group-hover:from-blue-900/95 group-hover:to-blue-700/80 transition-all" />
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[400px]">
                <div>
                  <IoCarSportOutline className="w-16 h-16 mb-4 text-yellow-400" />
                  <h3 className="text-3xl font-bold text-white mb-4">{products[0].title}</h3>
                  <p className="text-gray-200 mb-6">{products[0].description}</p>
                </div>
                <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-sm font-bold hover:bg-yellow-500 transition-all w-fit">
                  View Options
                </button>
              </div>
            </motion.div>

            {/* Truck & Bus Tyres */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 lg:col-span-3 relative overflow-hidden group cursor-pointer rounded-tr-sm rounded-br-sm"
              onClick={() => setSelectedProduct(products[1])}
            >
              <div className="absolute inset-0">
                <img 
                  src={products[1].bgImage} 
                  alt={products[1].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/70 group-hover:from-blue-900/95 group-hover:to-blue-700/80 transition-all" />
              </div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[200px]">
                <div>
                  <GrBus className="w-12 h-12 mb-3 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white mb-2">{products[1].title}</h3>
                  <p className="text-gray-200 text-sm mb-4">{products[1].description}</p>
                </div>
                <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-sm font-bold hover:bg-yellow-500 transition-all w-fit text-sm">
                  View Options
                </button>
              </div>
            </motion.div>

            {/* Agriculture/OTR Tyres */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 lg:col-span-2 relative overflow-hidden group cursor-pointer rounded-br-sm"
              onClick={() => setSelectedProduct(products[2])}
            >
              <div className="absolute inset-0">
                <img 
                  src={products[2].bgImage} 
                  alt={products[2].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/70 group-hover:from-blue-900/95 group-hover:to-blue-700/80 transition-all" />
              </div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[200px]">
                <div>
                  <GiFarmTractor className="w-12 h-12 mb-3 text-yellow-400" />
                  <h3 className="text-xl font-bold text-white mb-2">{products[2].title}</h3>
                  <p className="text-gray-200 text-sm mb-4">{products[2].description}</p>
                </div>
                <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-sm font-bold hover:bg-yellow-500 transition-all w-fit text-sm">
                  View Options
                </button>
              </div>
            </motion.div>

            {/* SUV/Light Truck Tyres */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 lg:col-span-2 relative overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProduct(products[3])}
            >
              <div className="absolute inset-0">
                <img 
                  src={products[3].bgImage} 
                  alt={products[3].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/70 group-hover:from-blue-900/95 group-hover:to-blue-700/80 transition-all" />
              </div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[200px]">
                <div>
                  <TbCarSuv className="w-12 h-12 mb-3 text-yellow-400" />
                  <h3 className="text-xl font-bold text-white mb-2">{products[3].title}</h3>
                  <p className="text-gray-200 text-sm mb-4">{products[3].description}</p>
                </div>
                <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-sm font-bold hover:bg-yellow-500 transition-all w-fit text-sm">
                  View Options
                </button>
              </div>
            </motion.div>

            {/* Retreading Tyres */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 lg:col-span-2 relative overflow-hidden group cursor-pointer rounded-br-sm"
              onClick={() => setSelectedProduct(products[4])}
            >
              <div className="absolute inset-0">
                <img 
                  src={products[4].bgImage} 
                  alt={products[4].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/70 group-hover:from-blue-900/95 group-hover:to-blue-700/80 transition-all" />
              </div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[200px]">
                <div>
                  <VscTools className="w-12 h-12 mb-3 text-yellow-400" />
                  <h3 className="text-xl font-bold text-white mb-2">{products[4].title}</h3>
                  <p className="text-gray-200 text-sm mb-4">{products[4].description}</p>
                </div>
                <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-sm font-bold hover:bg-yellow-500 transition-all w-fit text-sm">
                  View Options
                </button>
              </div>
            </motion.div>

            {/* Accessories */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 lg:col-span-3 relative overflow-hidden group cursor-pointer rounded-br-sm rounded-bl-sm"
              onClick={() => setSelectedProduct(products[5])}
            >
              <div className="absolute inset-0">
                <img 
                  src={products[5].bgImage} 
                  alt={products[5].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/70 group-hover:from-blue-900/95 group-hover:to-blue-700/80 transition-all" />
              </div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[200px]">
                <div>
                  <GiTyre className="w-12 h-12 mb-3 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white mb-2">{products[5].title}</h3>
                  <p className="text-gray-200 text-sm mb-4">{products[5].description}</p>
                </div>
                <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-sm font-bold hover:bg-yellow-500 transition-all w-fit text-sm">
                  View Options
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Variations Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => {
              setSelectedProduct(null);
              setSelectedVariation(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-t-sm relative">
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    setSelectedVariation(null);
                  }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-sm flex items-center justify-center transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
                {React.createElement(selectedProduct.icon, { className: "w-12 h-12 mb-3 text-yellow-400" })}
                <h2 className="text-3xl font-bold mb-2">{selectedProduct.title}</h2>
                <p className="text-gray-200">{selectedProduct.description}</p>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Select a Variation</h3>
                
                {/* Variations Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                  {selectedProduct.variations.map((variation) => (
                    <motion.div
                      key={variation.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedVariation(variation)}
                      className={`cursor-pointer rounded-sm overflow-hidden border-2 transition-all ${
                        selectedVariation?.id === variation.id
                          ? 'border-yellow-400 shadow-lg'
                          : 'border-gray-200 hover:border-blue-400'
                      }`}
                    >
                      <div className="aspect-square bg-gray-100">
                        <img
                          src={variation.image}
                          alt={variation.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 bg-white">
                        <p className="font-bold text-sm text-blue-900 mb-1">{variation.name}</p>
                        <p className="text-yellow-600 font-bold">{variation.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Order Method Selection */}
                {selectedVariation && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-sm p-6"
                  >
                    <h4 className="text-xl font-bold text-blue-900 mb-4">Choose Order Method</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <button
                        onClick={() => setOrderMethod('whatsapp')}
                        className={`p-4 rounded-sm border-2 transition-all ${
                          orderMethod === 'whatsapp'
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-300 hover:border-green-400'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-green-500 rounded-sm flex items-center justify-center">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-gray-900">WhatsApp</p>
                            <p className="text-sm text-gray-600">Order via WhatsApp</p>
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => setOrderMethod('email')}
                        className={`p-4 rounded-sm border-2 transition-all ${
                          orderMethod === 'email'
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:border-blue-400'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-blue-500 rounded-sm flex items-center justify-center">
                            <Mail className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-gray-900">Email</p>
                            <p className="text-sm text-gray-600">Order via Email</p>
                          </div>
                        </div>
                      </button>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white rounded-sm p-4 mb-6">
                      <h5 className="font-bold text-gray-900 mb-2">Order Summary</h5>
                      <div className="space-y-1 text-sm">
                        <p><span className="text-gray-600">Product:</span> <span className="font-semibold">{selectedProduct.title}</span></p>
                        <p><span className="text-gray-600">Variation:</span> <span className="font-semibold">{selectedVariation.name}</span></p>
                        <p><span className="text-gray-600">Price:</span> <span className="font-semibold text-yellow-600">{selectedVariation.price}</span></p>
                      </div>
                    </div>

                    {/* Place Order Button */}
                    <button
                      onClick={handleOrder}
                      className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4 rounded-sm font-bold text-lg hover:from-blue-800 hover:to-blue-600 transition-all flex items-center justify-center gap-2"
                    >
                      {orderMethod === 'whatsapp' ? (
                        <>
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Order via WhatsApp
                        </>
                      ) : (
                        <>
                          <Mail className="w-6 h-6" />
                          Order via Email
                        </>
                      )}
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Leading Brands */}
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
              Leading Tyre Brands
            </h2>
            <p className="text-xl text-gray-600">
              We stock premium brands trusted worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white rounded-sm p-6 shadow-lg hover:shadow-xl transition-all text-center border-2 border-transparent hover:border-yellow-400"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="mx-auto h-16 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Why Choose Our Products
            </h2>
            <p className="text-xl text-gray-600">
              Quality, reliability, and value in every tyre
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Quality Assured',
                description: 'Every product meets stringent quality standards',
              },
              {
                title: 'Wide Selection',
                description: 'Comprehensive range for all vehicle types',
              },
              {
                title: 'Competitive Pricing',
                description: 'Best value for money in the market',
              },
              {
                title: 'Expert Advice',
                description: 'Professional guidance on product selection',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-sm p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-900 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <LiaAwardSolid className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
              Ready to Find Your Perfect Tyres?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Visit any of our branches or contact us for expert advice on the best tyres for your
              vehicle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/branches"
                className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-sm font-bold hover:bg-yellow-500 transition-all hover:scale-105"
              >
                Find a Branch
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-sm font-bold hover:bg-white hover:text-blue-900 transition-all"
              >
                Contact Us
              </Link>
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

export default Products;