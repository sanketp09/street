import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Plus, Heart, Star, UtensilsCrossed } from 'lucide-react';

const DateNightRestaurantsShop = ({ onBack, onAddToCart }) => {
  const [cart, setCart] = useState([]);
  const [addedItems, setAddedItems] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Candlelight Dinner for Two",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop&crop=center",
      description: "Romantic 3-course dinner with wine pairing and live music",
      rating: 4.9,
      category: "Fine Dining"
    },
    {
      id: 2,
      name: "Rooftop Sunset Experience",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&h=400&fit=crop&crop=center",
      description: "Exclusive rooftop dining with city skyline views",
      rating: 4.8,
      category: "Rooftop"
    },
    {
      id: 3,
      name: "Italian Cuisine Night",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1551218372-a8789b81b253?w=400&h=400&fit=crop&crop=center",
      description: "Authentic Italian dishes with fresh pasta and wine",
      rating: 4.7,
      category: "Italian"
    },
    {
      id: 4,
      name: "Sushi & Sake Experience",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=400&fit=crop&crop=center",
      description: "Premium sushi selection with sake tasting menu",
      rating: 4.8,
      category: "Japanese"
    },
    {
      id: 5,
      name: "French Bistro Evening",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop&crop=center",
      description: "Classic French cuisine with champagne service",
      rating: 4.9,
      category: "French"
    },
    {
      id: 6,
      name: "Wine & Cheese Pairing",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400&h=400&fit=crop&crop=center",
      description: "Artisan cheese board with curated wine selection",
      rating: 4.6,
      category: "Wine Bar"
    },
    {
      id: 7,
      name: "Beach Side Seafood",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop&crop=center",
      description: "Fresh seafood with ocean views and beach ambiance",
      rating: 4.7,
      category: "Seafood"
    },
    {
      id: 8,
      name: "Garden Dining Experience",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop&crop=center",
      description: "Outdoor garden setting with farm-to-table menu",
      rating: 4.5,
      category: "Garden"
    },
    {
      id: 9,
      name: "Steakhouse Premium",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop&crop=center",
      description: "Prime cuts with truffle sides and vintage wines",
      rating: 4.8,
      category: "Steakhouse"
    },
    {
      id: 10,
      name: "Cozy Cafe Corner",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&crop=center",
      description: "Intimate cafe setting with desserts and coffee",
      rating: 4.4,
      category: "Cafe"
    },
    {
      id: 11,
      name: "Mediterranean Feast",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?w=400&h=400&fit=crop&crop=center",
      description: "Mediterranean mezze with olive oil tasting",
      rating: 4.7,
      category: "Mediterranean"
    },
    {
      id: 12,
      name: "Private Chef Experience",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
      description: "Personal chef preparing custom menu at your table",
      rating: 4.9,
      category: "Exclusive"
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-red-50 to-pink-50 relative overflow-hidden">

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          className="bg-white/90 backdrop-blur-sm shadow-lg border-b-4 border-rose-200"
        >
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <motion.button
                onClick={onBack}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Love Street
              </motion.button>

              <div className="text-center">
                <motion.h1
                  className="text-5xl font-bold text-rose-600 mb-2"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  Date Night Restaurants 🍽️
                </motion.h1>
                <p className="text-lg text-rose-500 font-medium">Romantic dining experiences for special moments</p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-rose-100 px-4 py-3 rounded-full"
              >
                <ShoppingCart className="w-6 h-6 text-rose-600" />
                <span className="font-bold text-rose-600">{cart.length}</span>
              </motion.div>
            </div>
          </div>
        </motion.header>

        {/* Featured Section */}
        <motion.section
          className="max-w-7xl mx-auto px-4 py-12"
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-rose-700 mb-4"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              🍽️ Romantic Dining Experiences 🍽️
            </motion.h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto rounded-full"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  scale: 1.02
                }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-rose-100 hover:border-rose-300 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-8 text-center relative h-64">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg flex items-center justify-center text-7xl" style={{ display: 'none' }}>
                    🍽️
                  </div>
                  <motion.div
                    className="absolute top-2 right-2 text-rose-400"
                  >
                    <UtensilsCrossed className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-rose-200 text-rose-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-rose-400 hover:text-rose-600"
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
                    <span className="text-2xl font-bold text-rose-600">{product.price}</span>
                    <motion.button
                      onClick={() => handleAddToCart(product)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg transition-all"
                    >
                      <Plus className="w-4 h-4" />
                      Book
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Romance Message */}
        <motion.div
          className="max-w-4xl mx-auto px-4 py-8"
        >
          <div className="bg-gradient-to-r from-rose-200 to-pink-200 rounded-3xl p-8 text-center border-4 border-rose-300">
            <motion.div
              className="text-6xl mb-4"
            >
              🕯️❤️🍷
            </motion.div>
            <h3 className="text-2xl font-bold text-rose-700 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Love is in the Air!
            </h3>
            <p className="text-rose-600 font-medium">
              Create unforgettable memories with our curated selection of romantic dining experiences!
            </p>
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center pb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-xl transition-all"
          >
            View All Restaurants 🍽️
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default DateNightRestaurantsShop;


