import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Plus, Heart, Star, Crown } from 'lucide-react';

const TraditionalClosetShop = ({ onBack, onAddToCart }) => {
  const [cart, setCart] = useState([]);
  const [addedItems, setAddedItems] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Silk Saree",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop&crop=center",
      description: "Elegant Banarasi silk saree with golden zari work",
      rating: 4.9,
      category: "Sarees"
    },
    {
      id: 2,
      name: "Lehenga Choli",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop&crop=center",
      description: "Bridal lehenga with intricate embroidery and beadwork",
      rating: 4.8,
      category: "Lehengas"
    },
    {
      id: 3,
      name: "Anarkali Suit",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center",
      description: "Flowing anarkali suit in royal blue with golden prints",
      rating: 4.7,
      category: "Suits"
    },
    {
      id: 4,
      name: "Kurta Pajama",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1506629905607-45dc0a2e4853?w=400&h=400&fit=crop&crop=center",
      description: "Traditional white kurta pajama for men",
      rating: 4.6,
      category: "Men's Wear"
    },
    {
      id: 5,
      name: "Sherwanis",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
      description: "Royal sherwani with gold embroidery for weddings",
      rating: 4.8,
      category: "Formal"
    },
    {
      id: 6,
      name: "Salwar Kameez",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d76?w=400&h=400&fit=crop&crop=center",
      description: "Comfortable cotton salwar kameez with dupatta",
      rating: 4.5,
      category: "Casual"
    },
    {
      id: 7,
      name: "Dhoti Kurta",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=400&fit=crop&crop=center",
      description: "Traditional dhoti kurta set in cream color",
      rating: 4.4,
      category: "Traditional"
    },
    {
      id: 8,
      name: "Sharara Set",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center",
      description: "Festive sharara set with heavy dupatta",
      rating: 4.7,
      category: "Party Wear"
    },
    {
      id: 9,
      name: "Bandhgala Jacket",
      price: "One Kiss",
      image: "🎩",
      description: "Classic bandhgala jacket in navy blue",
      rating: 4.6,
      category: "Jackets"
    },
    {
      id: 10,
      name: "Palazzo Suit",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&crop=center",
      description: "Indo-western palazzo suit with cape style top",
      rating: 4.5,
      category: "Indo-Western"
    },
    {
      id: 11,
      name: "Nehru Jacket",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop&crop=center",
      description: "Stylish Nehru jacket with ethnic buttons",
      rating: 4.4,
      category: "Ethnic Wear"
    },
    {
      id: 12,
      name: "Ghagra Choli",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
      description: "Traditional Rajasthani ghagra choli with mirror work",
      rating: 4.8,
      category: "Regional"
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Floating traditional elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(22)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          >
            {['🥻', '👗', '👚', '🤴', '👳', '🧘', '💃', '👘', '🪔', '🏺'][Math.floor(Math.random() * 10)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-sm shadow-lg border-b-4 border-amber-200"
        >
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <motion.button
                onClick={onBack}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Love Street
              </motion.button>

              <div className="text-center">
                <motion.h1
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(245,158,11,0.8)",
                      "0 0 30px rgba(245,158,11,1)",
                      "0 0 20px rgba(245,158,11,0.8)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl font-bold text-amber-600 mb-2"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  Traditional Closet 🥻
                </motion.h1>
                <p className="text-lg text-amber-500 font-medium">Embrace timeless elegance and heritage</p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-amber-100 px-4 py-3 rounded-full"
              >
                <ShoppingCart className="w-6 h-6 text-amber-600" />
                <span className="font-bold text-amber-600">{cart.length}</span>
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
              className="text-4xl font-bold text-amber-700 mb-4"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              🥻 Exquisite Traditional Collection 🥻
            </motion.h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
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
                className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-amber-100 hover:border-amber-300 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 text-center relative h-64">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    animate={{ 
                      rotate: [0, 2, -2, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center text-7xl" style={{ display: 'none' }}>
                    👗
                  </div>
                  <motion.div
                    animate={{ 
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-2 right-2 text-amber-400"
                  >
                    <Crown className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-amber-200 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-amber-400 hover:text-amber-600"
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
                    <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                    <motion.button
                      onClick={() => handleAddToCart(product)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg transition-all"
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

        {/* Heritage Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto px-4 py-8"
        >
          <div className="bg-gradient-to-r from-amber-200 to-orange-200 rounded-3xl p-8 text-center border-4 border-amber-300">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              🥻👗🤴
            </motion.div>
            <h3 className="text-2xl font-bold text-amber-700 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Heritage & Elegance!
            </h3>
            <p className="text-amber-600 font-medium">
              Celebrate culture and tradition with our handpicked collection of timeless ethnic wear!
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
              boxShadow: "0 10px 30px rgba(245,158,11,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-xl transition-all"
          >
            View All Traditional Wear 🥻
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TraditionalClosetShop;


