import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, ShoppingCart, Phone, CheckCircle } from 'lucide-react';

const CheckoutPage = ({ onBack, selectedGifts, onPurchaseComplete }) => {
  const [showPopup, setShowPopup] = useState(false);

  // Calculate totals
  const totalItems = selectedGifts.length;
  const totalKisses = totalItems; // Each item costs 1 kiss
  const gst = totalKisses * 50; // GST = kisses * 50
  const finalTotal = totalKisses + gst;

  const handlePurchase = async () => {
    setShowPopup(true);
  };

  if (showPopup) {
    const billText = `Your Love Bill: Items (${selectedGifts.length}) - ${selectedGifts.join(', ')} | Total: ${totalKisses} kisses + GST ${gst} = ${finalTotal} units.`;
    const billUrl = `https://wa.me/?text=${encodeURIComponent(billText)}`;
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-2xl p-12 border-4 border-pink-300 text-center max-w-md mx-4"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-8xl mb-6"
          >
            💕
          </motion.div>
          <h1 className="text-3xl font-bold text-pink-600 mb-4">Share this bill with your bf!</h1>
          <p className="text-lg text-pink-500 mb-6">Click below to share your bill on WhatsApp:</p>
          <a href={billUrl} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all inline-block mb-4">Share Bill</a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all"
          >
            Continue Shopping 💖
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            💖
          </div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b-4 border-pink-200">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <button
                onClick={onBack}
                className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Love Street
              </button>

              <div className="text-center">
                <h1 className="text-4xl font-bold text-pink-600 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  Checkout 💕
                </h1>
                <p className="text-lg text-pink-500 font-medium">Complete your love journey</p>
              </div>

              <div className="flex items-center gap-2 bg-pink-100 px-4 py-3 rounded-full">
                <ShoppingCart className="w-6 h-6 text-pink-600" />
                <span className="font-bold text-pink-600">{totalItems} items</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Items */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl shadow-xl p-8 border-4 border-pink-200"
              >
                <h2 className="text-2xl font-bold text-pink-600 mb-6 flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  Your Love Items
                </h2>
                {selectedGifts.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">💔</div>
                    <p className="text-pink-400 text-lg">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {selectedGifts.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-pink-50 rounded-2xl border-2 border-pink-100"
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-2xl">💖</div>
                          <div>
                            <h3 className="font-semibold text-gray-800">{item}</h3>
                            <p className="text-sm text-pink-500">Perfect for your love story</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-pink-600">One Kiss</p>
                          <p className="text-xs text-gray-500">Special price</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
            {/* Bill Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl shadow-xl p-8 border-4 border-pink-300 sticky top-24"
              >
                <h2 className="text-2xl font-bold text-pink-700 mb-6 text-center">
                  💕 Love Bill 💕
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-pink-300">
                    <span className="text-pink-600">Items ({totalItems})</span>
                    <span className="font-semibold text-pink-700">{totalKisses} Kisses</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-pink-300">
                    <span className="text-pink-600">GST (Special Rate)</span>
                    <span className="font-semibold text-pink-700">{gst} units</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-t-2 border-pink-400 bg-white/50 rounded-lg px-4">
                    <span className="text-lg font-bold text-pink-700">Total</span>
                    <span className="text-xl font-bold text-pink-700">{finalTotal} kisses</span>
                  </div>
                </div>
                {/* Purchase Button */}
                <motion.button
                  onClick={handlePurchase}
                  disabled={selectedGifts.length === 0}
                  whileHover={{ scale: selectedGifts.length > 0 ? 1.02 : 1 }}
                  whileTap={{ scale: selectedGifts.length > 0 ? 0.98 : 1 }}
                  className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg transition-all ${
                    selectedGifts.length === 0 
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-pink-500 hover:bg-pink-600 text-white'
                  }`}
                >
                  {selectedGifts.length === 0 ? (
                    'Add Items to Cart'
                  ) : (
                    `💖 Buy with Love 💖`
                  )}
                </motion.button>
                <p className="text-xs text-pink-600 text-center mt-4">
                  Secure checkout • Love guaranteed 💕
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
