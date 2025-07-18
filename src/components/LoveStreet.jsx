import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Heart, Gift, Star, ShoppingCart, ArrowRight } from 'lucide-react';
import SweetDelightsShop from './SweetDelightsShop';
import ShinySparklesShop from './ShinySparklesShop';
import CandyCrushShop from './CandyCrushShop';
import WesternWearShop from './WesternWearShop';
import FootwearShop from './FootwearShop';
import TraditionalClosetShop from './TraditionalClosetShop';
import DateNightRestaurantsShop from './DateNightRestaurantsShop';
import DreamDateIdeasShop from './DreamDateIdeasShop';
import CheckoutPage from './CheckoutPage';

const LoveStreet = () => {
  const [selectedGifts, setSelectedGifts] = useState([]);
  const [activeShop, setActiveShop] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const containerRef = useRef(null);
  // Always call scroll hooks at the top
  const { scrollYProgress } = useScroll({ target: containerRef });
  const girlY = useTransform(scrollYProgress, [0, 0.7, 1], [0, 400, 400]);

  // Gift shops data - Love journey categories
  const giftShops = [
    {
      id: 1,
      name: "Sweet Delights",
      emoji: "🧁",
      side: "left",
      description: "Delicious cakes, cookies & chocolates",
      color: "from-pink-400 to-red-400",
      items: 8
    },
    {
      id: 2,
      name: "Shiny Sparkles", 
      emoji: "💎",
      side: "right",
      description: "Beautiful rings, pendants & jewelry",
      color: "from-purple-400 to-blue-400",
      items: 12
    },
    {
      id: 3,
      name: "Candy Crush",
      emoji: "🍫",
      side: "left", 
      description: "Premium truffles & heart chocolates",
      color: "from-amber-400 to-orange-400",
      items: 6
    },
    {
      id: 4,
      name: "Western Wear",
      emoji: "👗",
      side: "right",
      description: "Trendy dresses, jackets & accessories", 
      color: "from-teal-400 to-cyan-400",
      items: 15
    },
    {
      id: 8,
      name: "Footwear Shop",
      emoji: "👠",
      side: "left",
      description: "Stylish shoes, heels & sandals",
      color: "from-yellow-400 to-pink-400",
      items: 18
    },
    {
      id: 5,
      name: "Traditional Closet",
      emoji: "🥻",
      side: "left",
      description: "Elegant sarees, lehengas & ethnic wear",
      color: "from-indigo-400 to-purple-400", 
      items: 10
    },
    {
      id: 6,
      name: "Date Night Restaurants",
      emoji: "🍽️",
      side: "right",
      description: "Romantic dining experiences",
      color: "from-green-400 to-emerald-400",
      items: 20
    },
    {
      id: 7,
      name: "Dream Date Ideas",
      emoji: "✨",
      side: "left",
      description: "Unforgettable romantic experiences", 
      color: "from-rose-400 to-pink-400",
      items: 25
    }
  ];

  // Map shop name to component
  const shopComponents = {
    'Sweet Delights': SweetDelightsShop,
    'Shiny Sparkles': ShinySparklesShop,
    'Candy Crush': CandyCrushShop,
    'Western Wear': WesternWearShop,
    'Footwear Shop': FootwearShop,
    'Traditional Closet': TraditionalClosetShop,
    'Date Night Restaurants': DateNightRestaurantsShop,
    'Dream Date Ideas': DreamDateIdeasShop,
  };

  // Handle shop icon click
  const handleShopClick = (shop) => {
    setActiveShop(shop.name);
  };

  // Handle back from shop page
  const handleBack = () => {
    setActiveShop(null);
    setShowCheckout(false);
  };

  // Handle checkout
  const handleCheckout = () => {
    setShowCheckout(true);
  };

  // Handle purchase complete
  const handlePurchaseComplete = () => {
    setSelectedGifts([]);
    setShowCheckout(false);
  };

  // Handle add to cart from shop page
  const handleAddToCart = (product) => {
    setSelectedGifts((prev) => [...prev, product.name]);
  };

  // Render shop page if activeShop is set
  if (activeShop && shopComponents[activeShop]) {
    const ShopComponent = shopComponents[activeShop];
    return (
      <ShopComponent onBack={handleBack} onAddToCart={handleAddToCart} />
    );
  }

  // Render checkout page if showCheckout is true
  if (showCheckout) {
    return (
      <CheckoutPage 
        onBack={handleBack} 
        selectedGifts={selectedGifts}
        onPurchaseComplete={handlePurchaseComplete}
      />
    );
  }

  return (
    <div ref={containerRef} className="min-h-[600vh] bg-gradient-to-b from-pink-100 via-purple-50 to-red-100 relative overflow-hidden">

      {/* Central Road - Realistic styling */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-32 md:w-48 bg-gray-600 h-full shadow-2xl">
        <div className="w-full h-full bg-gradient-to-b from-gray-500 via-gray-600 to-gray-700 relative">
          {/* Road edges */}
          <div className="absolute left-0 w-2 h-full bg-yellow-400"></div>
          <div className="absolute right-0 w-2 h-full bg-yellow-400"></div>
          {/* Road center dashes */}
          {[...Array(150)].map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 transform -translate-x-1/2 w-2 h-16 bg-yellow-200"
              style={{ top: `${i * 80}px` }}
            />
          ))}
        </div>
      </div>

      {/* Animated Girl Avatar - Walking motion */}
      <motion.div
        className="fixed left-1/2 transform -translate-x-1/2 z-20"
        style={{ y: girlY, top: "40px" }}
      >
        <motion.div
          className="text-6xl"
          animate={{
            rotate: [0, 3, -3, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🚶‍♀️
        </motion.div>
        {/* Walking dust effect */}
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-8 h-2 bg-gray-300 rounded-full blur-sm"></div>
        </motion.div>
        <motion.div 
          className="absolute -top-28 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-pink-200"
          animate={{
            y: [0, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-sm font-medium text-purple-600">Love Journey! 💕</span>
        </motion.div>
      </motion.div>

      {/* Shop Icons - Love Journey */}
      <div className="relative pt-[900px] pb-32">
        {giftShops.map((shop, index) => (
          <ShopIcon
            key={shop.id}
            shop={shop}
            index={index}
            onShopClick={handleShopClick}
          />
        ))}
      {/* Checkout Button and Cart Items - bottom right corner */}
      <div className="fixed bottom-8 right-8 z-50 bg-white/90 rounded-2xl shadow-xl px-8 py-6 border-4 border-pink-300 flex flex-col items-end min-w-[220px]">
        <h3 className="text-xl font-bold text-pink-600 mb-2">Your Cart</h3>
        <ul className="mb-4 w-full">
          {selectedGifts.length === 0 ? (
            <li className="text-pink-400">No items added yet.</li>
          ) : (
            selectedGifts.map((name, idx) => (
              <li key={idx} className="text-pink-700 font-semibold text-right">{name}</li>
            ))
          )}
        </ul>
        <button 
          onClick={handleCheckout}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all"
        >
          Checkout
        </button>
      </div>
      </div>
    </div>
  );
};

// Shop Icon Component - Large and Clickable
const ShopIcon = ({ shop, index, onShopClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className={`w-96 md:w-[28rem] mx-auto mb-32 ${shop.side === 'left' ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'}`}
    >
      <motion.div 
        className={`bg-gradient-to-br ${shop.color} p-8 rounded-3xl shadow-2xl border-4 border-white cursor-pointer transition-all duration-500 relative overflow-hidden`}
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
          y: -10,
          rotate: shop.side === 'left' ? 2 : -2
        }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onShopClick(shop)}
      >
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
        
        {/* Shop Icon - Large and Prominent */}
        <motion.div 
          className="text-center mb-6 relative z-10"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: index * 0.4 + 0.3 }}
        >
          <motion.div 
            className="text-8xl md:text-9xl mb-4 filter drop-shadow-2xl"
            animate={{ 
              rotate: [0, 8, -8, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {shop.emoji}
          </motion.div>
          
          {/* Shop Name - Very Visible */}
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3 drop-shadow-lg tracking-wide">
            {shop.name}
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 font-semibold mb-4 drop-shadow-md">
            {shop.description}
          </p>
          
          {/* Items count badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
            <Gift className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-lg">{shop.items} Items</span>
          </div>
        </motion.div>

        {/* Enter Shop Button */}
        <motion.div
          className="flex justify-center relative z-10"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: index * 0.4 + 0.5 }}
        >
          <motion.button
            className="bg-yellow-200 hover:bg-yellow-300 text-white font-bold py-4 px-8 rounded-full shadow-xl flex items-center gap-3 text-xl border-2 border-yellow-300 hover:border-yellow-400 transition-all outline outline-2 outline-pink-300"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter Shop
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Removed floating decorative elements for performance */}
      </motion.div>
    </motion.div>
  );
};

export default LoveStreet;
