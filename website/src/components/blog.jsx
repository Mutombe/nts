import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GrUpdate } from "react-icons/gr";

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Right Time To Change Your Car Tyres',
      subtitle: 'Things You Need To Know!',
      date: 'March 14, 2024',
      readTime: '5 min read',
      image: '/4.jpg',
      category: 'Maintenance Tips',
      excerpt:
        'Learn about the signs that indicate it\'s time to replace your tyres and ensure optimal safety on the road.',
      author: 'John Mubaiwa',
    },
    {
      title: 'Budget Tyres vs Premium Tyres',
      subtitle: 'All You Need To Know!',
      date: 'March 21, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800&q=80',
      category: 'Buying Guide',
      excerpt:
        'Understanding the differences between budget and premium tyres to make an informed decision for your vehicle.',
      author: 'Sarah Ndlovu',
    },
    {
      title: 'ADMA AGRISHOW 2024!',
      subtitle: 'Catch up on all the Highlights',
      date: 'March 12, 2024',
      readTime: '4 min read',
      image: '/19.jpg',
      category: 'Events',
      excerpt:
        'Relive the excitement of ADMA AGRISHOW 2024 and discover the latest innovations in agricultural tyres.',
      author: 'David Chiromo',
    },
    {
      title: 'Tyre Maintenance Tips for Rainy Season',
      subtitle: 'Stay Safe on Wet Roads',
      date: 'February 28, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
      category: 'Safety',
      excerpt:
        'Essential tips for maintaining your tyres during the rainy season to ensure maximum safety and performance.',
      author: 'Mary Ncube',
    },
    {
      title: 'Understanding Tyre Specifications',
      subtitle: 'A Complete Guide',
      date: 'February 15, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800&q=80',
      category: 'Education',
      excerpt:
        'Decode tyre specifications and learn what all those numbers and letters on your tyre sidewall mean.',
      author: 'Peter Moyo',
    },
    {
      title: 'The Benefits of Tyre Retreading',
      subtitle: 'Eco-Friendly and Cost-Effective',
      date: 'February 5, 2024',
      readTime: '5 min read',
      image: '/retreading.png',
      category: 'Sustainability',
      excerpt:
        'Discover how tyre retreading can save you money while contributing to environmental conservation.',
      author: 'Grace Sibanda',
    },
  ];

  const categories = ['All', 'Maintenance Tips', 'Buying Guide', 'Events', 'Safety', 'Education', 'Sustainability'];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=1600&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-900/80 backdrop-blur-sm"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <BookOpen className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Our Blog</h1>
            <p className="text-2xl text-gray-100 mb-4">
              Latest insights, tips, and news from the tyre industry
            </p>
            <p className="text-lg text-gray-300">
              Expert advice and knowledge to keep you safe on the road
            </p>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-2 rounded-sm font-semibold transition-all shadow-sm ${
                  index === 0
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-yellow-400 hover:text-blue-900'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-sm overflow-hidden shadow-2xl max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Image Section */}
              <div className="lg:col-span-3 relative h-96 lg:h-auto overflow-hidden group">
                <img 
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                
                {/* Featured Badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-sm text-sm font-bold shadow-lg flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    FEATURED POST
                  </div>
                </div>

                {/* Category */}
                <div className="absolute bottom-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-blue-900 px-4 py-2 rounded-sm text-sm font-semibold">
                    {blogPosts[0].category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3 leading-tight">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg text-gray-700 mb-3 font-medium">
                  {blogPosts[0].subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>

                <button className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 rounded-sm font-bold hover:bg-blue-800 transition-all hover:scale-105 group shadow-lg">
                  Read Full Article
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-blue-100 text-blue-900 px-6 py-2 rounded-sm text-sm font-bold mb-4">
              RECENT ARTICLES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Latest Blog Insights</h2>
            <p className="text-xl text-gray-600">
              Stay informed with our latest articles and updates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                {/* Image with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-blue-900 px-3 py-1 rounded-sm text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-700 font-medium mb-3">
                    {post.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4 pb-4 border-b">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="inline-flex items-center text-blue-900 font-bold group-hover:text-yellow-600 transition-colors">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="inline-flex items-center justify-center bg-blue-900 text-white px-8 py-4 rounded-sm font-bold hover:bg-blue-800 transition-all hover:scale-105 shadow-lg">
              Load More Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Popular Topics Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Popular Topics
            </h2>
            <p className="text-lg text-gray-600">
              Explore our most read categories
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {categories.slice(1).map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-sm shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-sm flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-sm font-bold text-blue-900">{category}</h3>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Enhanced */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-700/95"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter for tips, news, and exclusive offers delivered to your inbox
            </p>
            
            <div className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-md p-2 rounded-sm">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                />
                <button className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-sm font-bold hover:bg-yellow-500 transition-all hover:scale-105 whitespace-nowrap shadow-lg">
                  Subscribe Now
                </button>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-gray-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm">Articles Published</div>
              </div>
              <div className="h-12 w-px bg-gray-600"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-sm">Subscribers</div>
              </div>
              <div className="h-12 w-px bg-gray-600"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">Weekly</div>
                <div className="text-sm">Updates</div>
              </div>
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

export default Blog;