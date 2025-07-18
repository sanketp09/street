import React, { useState } from 'react';
import maleImg from '../images/image.png';
import happyImg from '../images/happy.png';
import { motion, AnimatePresence } from 'framer-motion';



// Cute human-like girl with walking animation
const GirlSticker = () => (
  <motion.svg 
    width="200" 
    height="240" 
    viewBox="0 0 200 240" 
    className="drop-shadow-2xl"
    animate={{
      y: [0, -5, 0],
      x: [0, 3, -3, 0]
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {/* Head */}
    <circle cx="100" cy="80" r="35" fill="#FDBCB4" />
    {/* Hair */}
    <path d="M 65 65 Q 100 45 135 65 L 135 95 Q 100 85 65 95 Z" fill="#8B4513" />
    <ellipse cx="75" cy="100" rx="15" ry="25" fill="#8B4513" />
    <ellipse cx="125" cy="100" rx="15" ry="25" fill="#8B4513" />
    {/* Hair bangs */}
    <path d="M 70 70 Q 85 55 100 70 Q 115 55 130 70 Q 100 65 70 70" fill="#8B4513" />
    
    {/* Face features */}
    {/* Eyes */}
    <ellipse cx="88" cy="85" rx="8" ry="10" fill="#FFF" />
    <ellipse cx="112" cy="85" rx="8" ry="10" fill="#FFF" />
    <ellipse cx="88" cy="85" rx="4" ry="6" fill="#000" />
    <ellipse cx="112" cy="85" rx="4" ry="6" fill="#000" />
    <ellipse cx="88" cy="83" rx="2" ry="2" fill="#FFF" />
    <ellipse cx="112" cy="83" rx="2" ry="2" fill="#FFF" />
    
    {/* Eyebrows */}
    <path d="M 82 78 Q 88 75 94 78" stroke="#8B4513" strokeWidth="2" fill="none" />
    <path d="M 106 78 Q 112 75 118 78" stroke="#8B4513" strokeWidth="2" fill="none" />
    
    {/* Nose */}
    <ellipse cx="100" cy="90" rx="2" ry="3" fill="#F4A582" />
    
    {/* Mouth */}
    <path d="M 92 100 Q 100 108 108 100" stroke="#E91E63" strokeWidth="3" fill="none" />
    
    {/* Blush */}
    <ellipse cx="75" cy="95" rx="6" ry="4" fill="#FFB6C1" opacity="0.8" />
    <ellipse cx="125" cy="95" rx="6" ry="4" fill="#FFB6C1" opacity="0.8" />

    {/* Neck */}
    <rect x="92" y="115" width="16" height="15" fill="#FDBCB4" />
    
    {/* Body/Dress */}
    <path d="M 70 130 L 130 130 L 135 180 L 65 180 Z" fill="#FF69B4" />
    <ellipse cx="100" cy="180" rx="35" ry="15" fill="#FF69B4" />
    
    {/* Dress decorations */}
    <ellipse cx="85" cy="150" rx="4" ry="4" fill="#FFB6C1" />
    <ellipse cx="115" cy="150" rx="4" ry="4" fill="#FFB6C1" />
    <ellipse cx="100" cy="165" rx="4" ry="4" fill="#FFB6C1" />
    
    {/* Arms */}
    <ellipse cx="65" cy="145" rx="8" ry="20" fill="#FDBCB4" />
    <ellipse cx="135" cy="145" rx="8" ry="20" fill="#FDBCB4" />
    <circle cx="65" cy="165" r="6" fill="#FDBCB4" />
    <circle cx="135" cy="165" r="6" fill="#FDBCB4" />
    
    {/* Legs with walking motion */}
    <motion.rect 
      x="85" 
      y="195" 
      width="8" 
      height="30" 
      rx="4" 
      fill="#FDBCB4"
      animate={{ x: [85, 83, 85] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <motion.rect 
      x="107" 
      y="195" 
      width="8" 
      height="30" 
      rx="4" 
      fill="#FDBCB4"
      animate={{ x: [107, 109, 107] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    
    {/* Shoes with walking motion */}
    <motion.ellipse 
      cx="89" 
      cy="230" 
      rx="8" 
      ry="5" 
      fill="#E91E63"
      animate={{ cx: [89, 87, 89] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <motion.ellipse 
      cx="111" 
      cy="230" 
      rx="8" 
      ry="5" 
      fill="#E91E63"
      animate={{ cx: [111, 113, 111] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    
    {/* Headband/Hair accessory */}
    <ellipse cx="100" cy="65" rx="30" ry="8" fill="#FF1744" />
    <ellipse cx="100" cy="65" rx="6" ry="6" fill="#FFE0E6" />
  </motion.svg>
);

const MaleSticker = ({ src }) => (
  <img src={src} alt="Male cartoon" style={{ width: 180, height: 180, borderRadius: '50%', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', objectFit: 'cover' }} />
);

const LandingPage = ({ onReady }) => {
  const [zoomOut, setZoomOut] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  const handleReady = () => {
    setShowLoading(true);
    setLoadingStep(1);
    setTimeout(() => {
      setLoadingStep(2);
      setTimeout(() => {
        setShowLoading(false);
        setZoomOut(true);
        setTimeout(() => {
          onReady();
        }, 900);
      }, 2200);
    }, 3200);
  };

  // Animal stickers
  const animalStickers = [
    '🐻', '🐶', '🐱', '🐰', '🦊', '🐼', '🦄', '🐥', '🐸', '🐧', '🐭', '🐯', '🦋', '🐝', '🐬', '🦉', '🦜', '🐢', '🐠', '🦩'
  ];

  return (
    <AnimatePresence>
      {showLoading && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.2, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300"
        >
          <div className="flex flex-col items-center justify-center">
            <MaleSticker src={loadingStep === 1 ? maleImg : happyImg} />
            <div className="my-8">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                className="mx-auto w-16 h-16 border-8 border-blue-300 border-t-blue-600 rounded-full"
                style={{ borderTopColor: '#1976d2', borderRightColor: '#90caf9', borderBottomColor: '#90caf9', borderLeftColor: '#90caf9' }}
              />
            </div>
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="bg-white rounded-2xl px-10 py-8 text-4xl md:text-5xl font-bold text-blue-700 shadow-xl border-4 border-blue-200"
            >
              {loadingStep === 1 && 'Wait for 30 mins I need to get ready'}
              {loadingStep === 2 && 'Just kidding!'}
            </motion.div>
          </div>
        </motion.div>
      )}
      {!zoomOut && !showLoading && (
        <motion.div
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ scale: 1.2, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 overflow-hidden"
        >
          {/* Animal stickers floating background */}
          <div className="absolute inset-0 pointer-events-none">
            {animalStickers.map((emoji, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl md:text-6xl opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  zIndex: 1
                }}
                initial={{ scale: 0.7, rotate: 0, opacity: 0.4 }}
                animate={{ scale: [0.7, 1.1, 0.9, 1], rotate: [0, 20, -20, 0], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: Math.random() * 6 + 4, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>
          <div className="relative w-full flex flex-col items-center justify-center">
            <motion.h1
              initial={{ x: '-100vw', scale: 0.8, opacity: 0 }}
              animate={{ x: 0, scale: 1.1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
              className="text-pink-700 text-6xl md:text-8xl lg:text-[7rem] font-extrabold text-center leading-tight mb-4 drop-shadow-2xl relative"
              style={{ zIndex: 2 }}
            >
              Let's Go Shopping!<br />
              <span className="text-purple-700 text-5xl md:text-7xl lg:text-[5rem] block mt-2">Are you ready?</span>
            </motion.h1>
            <div className="flex flex-row items-end justify-center mt-12 gap-4 relative z-10">
              <motion.button
                whileHover={{ 
                  scale: 1.22,
                  boxShadow: "0 50px 100px rgba(255, 20, 147, 0.7)",
                  y: -16,
                  rotate: [0, -5, 5, 0],
                  background: "linear-gradient(90deg, #FF69B4 0%, #BA68C8 100%)"
                }}
                whileTap={{ scale: 0.97 }}
                onClick={handleReady}
                className="px-32 py-20 text-8xl md:text-9xl font-black rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 text-white shadow-2xl border-8 border-white hover:from-pink-600 hover:to-purple-600 transition-all duration-300 relative overflow-hidden flex items-center"
                style={{ zIndex: 3 }}
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 40px rgba(255,255,255,1)",
                      "0 0 60px rgba(255,255,255,1)",
                      "0 0 40px rgba(255,255,255,1)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className=""
                >
                  ✨ Ready! ✨
                </motion.span>
                {/* Sparkle effects */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute top-2 left-4 text-4xl">💫</div>
                  <div className="absolute bottom-2 right-4 text-4xl">⭐</div>
                  <div className="absolute top-4 right-6 text-3xl">✨</div>
                  <div className="absolute bottom-4 left-6 text-3xl">🌟</div>
                </motion.div>
              </motion.button>
              <motion.div
                initial={{ x: '-80vw', y: '-40vh', scale: 0.8, opacity: 0 }}
                animate={{ 
                  x: '0vw',
                  y: '0vh', 
                  scale: 1, 
                  opacity: 1 
                }}
                transition={{ 
                  delay: 0.7, 
                  duration: 2.5,
                  ease: "easeOut"
                }}
                className="mx-auto"
                style={{ alignSelf: 'center' }}
              >
                <GirlSticker />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
      {zoomOut && (
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-40 bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300"
        />
      )}
    </AnimatePresence>
  );
};

export default LandingPage;
