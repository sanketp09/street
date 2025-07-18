import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Plus, Heart, Star, Shirt } from 'lucide-react';

const WesternWearShop = ({ onBack, onAddToCart }) => {
  const [cart, setCart] = useState([]);
  const [addedItems, setAddedItems] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Classic Denim Jacket",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=400&fit=crop&crop=center",
      description: "Vintage-style blue denim jacket with distressed finish",
      rating: 4.8,
      category: "Jackets"
    },
    {
      id: 2,
      name: "Floral Summer Dress",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center",
      description: "Flowing floral dress perfect for summer days",
      rating: 4.7,
      category: "Dresses"
    },
    {
      id: 3,
      name: "Graphic T-Shirt",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
      description: "100% cotton graphic tee with trendy design",
      rating: 4.6,
      category: "T-Shirts"
    },
    {
      id: 4,
      name: "High-Waisted Jeans",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center",
      description: "Premium high-waisted skinny jeans in dark wash",
      rating: 4.9,
      category: "Jeans"
    },
    {
      id: 5,
      name: "Leather Boots",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1544906503-4f11bb2e5ab0?w=400&h=400&fit=crop&crop=center",
      description: "Genuine leather ankle boots with block heel",
      rating: 4.8,
      category: "Footwear"
    },
    {
      id: 6,
      name: "Cozy Sweater",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&crop=center",
      description: "Soft knit sweater in neutral beige color",
      rating: 4.7,
      category: "Sweaters"
    },
    {
      id: 7,
      name: "Silk Blouse",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center",
      description: "Elegant silk blouse for professional wear",
      rating: 4.6,
      category: "Blouses"
    },
    {
      id: 8,
      name: "Casual Shorts",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1506629905607-45dc0a2e4853?w=400&h=400&fit=crop&crop=center",
      description: "Comfortable cotton shorts for everyday wear",
      rating: 4.5,
      category: "Shorts"
    },
    {
      id: 9,
      name: "Maxi Skirt",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d76?w=400&h=400&fit=crop&crop=center",
      description: "Bohemian style maxi skirt with paisley print",
      rating: 4.7,
      category: "Skirts"
    },
    {
      id: 10,
      name: "Baseball Cap",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop&crop=center",
      description: "Classic baseball cap with adjustable strap",
      rating: 4.4,
      category: "Accessories"
    },
    {
      id: 11,
      name: "Cardigan",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
      description: "Open-front cardigan in soft pink color",
      rating: 4.8,
      category: "Cardigans"
    },
    {
      id: 12,
      name: "Sneakers",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
      description: "White leather sneakers with gold accents",
      rating: 4.9,
      category: "Footwear"
    }
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setAddedItems(prev => new Set([...prev, product.id]));
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Floating fashion elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          >
            {['👗', '👕', '👖', '👢', '🧥', '👚', '🩳', '👟'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-sm shadow-lg border-b-4 border-indigo-200"
        >
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <motion.button
                onClick={onBack}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Love Street
              </motion.button>

              <div className="text-center">
                <motion.h1
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(99,102,241,0.8)",
                      "0 0 30px rgba(99,102,241,1)",
                      "0 0 20px rgba(99,102,241,0.8)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl font-bold text-indigo-600 mb-2"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  Western Wear 👗
                </motion.h1>
                <p className="text-lg text-indigo-500 font-medium">Fashion that speaks your style</p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-indigo-100 px-4 py-3 rounded-full"
              >
                <ShoppingCart className="w-6 h-6 text-indigo-600" />
                <span className="font-bold text-indigo-600">{cart.length}</span>
              </motion.div>
            </div>
          </div>
        </motion.header>

        {/* Featured Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto px-4 py-12"
        >
          <div className="text-center mb-12">
            <motion.h2
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl font-bold text-indigo-700 mb-4"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              👗 Trendy Fashion Collection 👗
            </motion.h2>
            <div className="w-24 h-1 bg-indigo-400 mx-auto rounded-full"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  scale: 1.02
                }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-indigo-100 hover:border-indigo-300 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 text-center relative h-64">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    animate={{ 
                      rotate: [0, 2, -2, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center text-7xl" style={{ display: 'none' }}>
                    👗
                  </div>
                  <motion.div
                    animate={{ 
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
                    className="absolute top-2 right-2 text-indigo-400"
                  >
                    <Shirt className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-indigo-200 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-indigo-400 hover:text-indigo-600"
                    >
                      <Heart className="w-5 h-5" />
                    </motion.button>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-600">{product.price}</span>
                    <motion.button
                      onClick={() => handleAddToCart(product)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg transition-all"
                    >
                      <Plus className="w-4 h-4" />
                      Add
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Fashion Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto px-4 py-8"
        >
          <div className="bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl p-8 text-center border-4 border-indigo-300">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              👗✨👕
            </motion.div>
            <h3 className="text-2xl font-bold text-indigo-700 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Fashion is Art!
            </h3>
            <p className="text-indigo-600 font-medium">
              Express yourself with our curated collection of trendy western wear for every occasion!
            </p>
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center pb-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(99,102,241,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-xl transition-all"
          >
            View All Fashion 👗
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default WesternWearShop;


