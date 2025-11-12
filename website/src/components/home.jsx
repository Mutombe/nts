import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Shield,
  Users,
  Wrench,
  Phone,
  Mail,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SiFsecure } from "react-icons/si";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { GoTools } from "react-icons/go";
import { GiWeightLiftingUp } from "react-icons/gi";
import { SiGodotengine } from "react-icons/si";
import { FaSmileWink } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { LiaAwardSolid } from "react-icons/lia";
import { BsShop } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

// Custom hook for animated counter
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endValue =
      typeof end === "string" ? parseInt(end.replace(/[^0-9]/g, "")) : end;

    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * endValue);

      setCount(currentCount);

      if (progress === 1) {
        clearInterval(timer);
        setCount(endValue);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return [count, setIsVisible];
};

// Counter component with animation trigger
const AnimatedCounter = ({ value, label, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setIsVisible] = useCounter(value, 2000);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView, setIsVisible]);

  // Format the display value
  const formatValue = (val) => {
    const originalValue = typeof value === "string" ? value : val.toString();
    if (originalValue.includes("+")) {
      return `${val}+`;
    }
    if (originalValue.includes("%")) {
      return `${val}%`;
    }
    return val;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
      className="text-center p-4"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
        {formatValue(count)}
      </div>
      <div className="text-white/90 text-sm font-medium drop-shadow">
        {label}
      </div>
    </motion.div>
  );
};

const Home = () => {
  // Hero background carousel
  const heroImages = [
    "/3.png",
    "/nts1.jpg",
    "/nts2.png",
    "/nts3.jpg",
    "/nts4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Manual navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const features = [
    {
      icon: SiFsecure,
      title: "Safety First",
      description:
        "Commitment to the highest safety standards in all our operations",
      bgImage: "/12.jpg",
    },
    {
      icon: FaSmileWink,
      title: "Customer Centric",
      description: "Your satisfaction is our driving force and primary focus",
      bgImage: "/10.jpg",
    },
    {
      icon: SiGodotengine,
      title: "Expert Technicians",
      description:
        "Highly trained professionals with years of industry experience",
      bgImage: "/13.jpg",
    },
    {
      icon: GiCarWheel,
      title: "Quality Products",
      description: "Premium tyre brands and unmatched quality assurance",
      bgImage: "/11.jpg",
    },
  ];

  const handleAction = (action) => {
    if (action === "call") {
      window.location.href = "tel:+263785948128";
    } else if (action === "email") {
      window.location.href = "mailto:info@nts.co.zw";
    } else if (action === "whatsapp") {
      window.location.href =
        "https://wa.me/263785948128?text=Hello%20NTS!%20I%27d%20like%20to%20order!";
    }
  };

  const tyreCategories = [
    {
      name: "Passenger Tyres",
      image: "/6.png",
      description: "Premium tyres for everyday vehicles",
    },
    {
      name: "Truck & Bus Tyres",
      image: "/7.png",
      description: "Heavy-duty solutions for commercial vehicles",
    },
    {
      name: "Agriculture/OTR Tyres",
      image: "/9.png",
      description: "Specialized tyres for agricultural and off-road use",
    },
    {
      name: "SUV/Light Truck",
      image: "/8.png",
      description: "Robust tyres for SUVs and light trucks",
    },
  ];

  const stats = [
    { number: "100", label: "Years of Experience", suffix: "+" },
    { number: "12", label: "Retail Outlets", suffix: "" },
    { number: "1000", label: "Happy Customers", suffix: "+" },
    { number: "50", label: "Market Share Goal by 2030", suffix: "%" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500  text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.97 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${heroImages[currentImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "soft-light",
            }}
          />
        </AnimatePresence>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={previousImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? "bg-yellow-400 w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-900/70"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-sm blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-sm blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-sm text-sm font-semibold mb-6"
              >
                Since 1925 - Nearly 100 Years of Excellence
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Trusted Partner in
                <span className="text-yellow-400">
                  {" "}
                  Tyre Management Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Leading Zimbabwe's tyre industry with innovative technologies,
                unmatched quality products, and customer-centric solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all hover:scale-105 group shadow-lg"
                >
                  Explore Products
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/branches"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-blue-900 transition-all shadow-lg"
                >
                  Find a Branch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Glassmorphism Stats Card */}
              <div
                className="relative z-10 rounded-sm p-8 shadow-2xl backdrop-blur-lg border border-white/20"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <AnimatedCounter
                      key={index}
                      value={stat.number + stat.suffix}
                      label={stat.label}
                      index={index}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative glowing elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-yellow-400 rounded-sm opacity-20 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-400 rounded-sm opacity-20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of your sections remain the same... */}
      {/* Floating Action Elements */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          className="group bg-gradient-to-r from-blue-700 to-yellow-300 text-white hover:bg-green-300 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("whatsapp")}
        >
          <IoLogoWhatsapp className="w-6 h-6 group-hover:rotate-12 transition-transform text-white" />
        </button>
        <button
          className="group bg-gradient-to-r from-blue-700 to-yellow-300 text-white hover:bg-green-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("call")}
        >
          <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
        <button
          className="group bg-gradient-to-r from-blue-700 to-yellow-300 text-white hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("email")}
        >
          <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Delivering excellence through our core values and unwavering
              commitment to quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative bg-white rounded-sm p-6 shadow-2xl hover:shadow-lg transition-all overflow-hidden group"
              >
                {/* Diagonal Background Image */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)",
                  }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${feature.bgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  {/* Blue Overlay - lighter on hover */}
                  <div className="absolute inset-0 bg-blue-900/70 group-hover:bg-blue-900/20 transition-all duration-300" />
                </div>

                {/* Content - Above the background */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-yellow-400 rounded-sm flex items-center justify-center mb-4 shadow-lg">
                    <feature.icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-100 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-100">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-sm text-sm font-semibold mb-6">
                About National Tyre Services
              </div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Nearly 100 Years of Tyre Excellence
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                National Tyre Services Limited traces its origin in the tyre
                industry back to 1925. Our main business focus is retreading of
                tyres, retailing of new tyres, tyre fitment and related
                services, supporting the Government and all critical sectors of
                the economy.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Leading provider of tyre management solutions",
                  "Innovative technologies and systems",
                  "Unmatched quality products",
                  "Customer-centric approach",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-sm font-bold hover:bg-blue-800 transition-all hover:scale-105 group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-sm p-6 text-white">
                    <HiArrowTrendingUp className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">50%</h3>
                    <p className="text-sm">Market Share Goal by 2030</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-sm p-6 text-blue-900">
                    <BsShop className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">12+</h3>
                    <p className="text-sm">Retail Outlets Nationwide</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-sm p-6 text-blue-900">
                    <LiaAwardSolid className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Quality</h3>
                    <p className="text-sm">Unmatched Product Standards</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-sm p-6 text-white">
                    <SiFsecure className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Trusted</h3>
                    <p className="text-sm">Pioneer Brand Since 1925</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Our Tyre Range
            </h2>
            <p className="text-xl text-gray-600">
              Explore our comprehensive range of premium tyres
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tyreCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all group relative"
              >
                {/* Wheel Icon - Top Right Corner */}
                <div className="absolute top-4 right-4 z-10 bg-blue-900 text-white p-2 rounded-full shadow-md">
                  <GiCarWheel className="w-5 h-5" />
                </div>

                <div className="h-48 bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center">
                  <div className="text-6xl">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="object-contain h-32"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link
                    to="/products"
                    className="inline-flex items-center text-yellow-600 font-semibold group-hover:text-yellow-700"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-sm font-bold hover:bg-blue-800 transition-all hover:scale-105"
            >
              View All Products
              <ArrowRight className="ml-2" />
            </Link>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Excellence?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Visit your nearest NTS branch today and discover why we're
              Zimbabwe's trusted tyre partner
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/branches"
                className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-sm font-bold text-lg hover:bg-yellow-500 transition-all hover:scale-105"
              >
                Find Your Nearest Branch
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-blue-900 transition-all"
              >
                Contact Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;