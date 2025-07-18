import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CountdownIntro = ({ onComplete }) => {
  const [currentNumber, setCurrentNumber] = useState(5);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showSkip, setShowSkip] = useState(true);

  // Realistic Animal SVG Components - Bigger and more animal-like
  const CuteKitten = ({ className, style }) => (
    <motion.div
      className={`${className}`}
      style={style}
      animate={{
        y: [0, -10, 0],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-lg">
        {/* Cat body */}
        <ellipse cx="40" cy="55" rx="25" ry="18" fill="#FF8C42" />
        {/* Cat chest */}
        <ellipse cx="40" cy="50" rx="15" ry="12" fill="#FFB366" />
        {/* Cat head */}
        <circle cx="40" cy="35" r="22" fill="#FF8C42" />
        {/* Cat ears */}
        <path d="M 22 20 L 18 8 L 32 18 Z" fill="#FF8C42" />
        <path d="M 58 20 L 62 8 L 48 18 Z" fill="#FF8C42" />
        <path d="M 24 18 L 22 12 L 30 18 Z" fill="#FFB366" />
        <path d="M 56 18 L 58 12 L 50 18 Z" fill="#FFB366" />
        {/* Cat forehead stripes */}
        <path d="M 30 25 Q 40 22 50 25" stroke="#E67A00" strokeWidth="2" fill="none" />
        <path d="M 32 30 Q 40 27 48 30" stroke="#E67A00" strokeWidth="2" fill="none" />
        {/* Cat eyes */}
        <ellipse cx="32" cy="32" rx="4" ry="5" fill="#32CD32" />
        <ellipse cx="48" cy="32" rx="4" ry="5" fill="#32CD32" />
        <ellipse cx="32" cy="32" rx="2" ry="3" fill="#000" />
        <ellipse cx="48" cy="32" rx="2" ry="3" fill="#000" />
        <ellipse cx="31" cy="30" rx="1" ry="1" fill="#FFF" />
        <ellipse cx="47" cy="30" rx="1" ry="1" fill="#FFF" />
        {/* Cat nose */}
        <path d="M 40 38 L 37 42 L 43 42 Z" fill="#FF69B4" />
        {/* Cat mouth */}
        <path d="M 40 42 Q 35 46 32 44" stroke="#000" strokeWidth="2" fill="none" />
        <path d="M 40 42 Q 45 46 48 44" stroke="#000" strokeWidth="2" fill="none" />
        {/* Cat whiskers */}
        <line x1="20" y1="35" x2="30" y2="35" stroke="#000" strokeWidth="2" />
        <line x1="20" y1="40" x2="30" y2="38" stroke="#000" strokeWidth="2" />
        <line x1="50" y1="35" x2="60" y2="35" stroke="#000" strokeWidth="2" />
        <line x1="50" y1="38" x2="60" y2="40" stroke="#000" strokeWidth="2" />
        {/* Cat paws */}
        <ellipse cx="28" cy="68" rx="6" ry="4" fill="#FF8C42" />
        <ellipse cx="52" cy="68" rx="6" ry="4" fill="#FF8C42" />
        {/* Cat tail */}
        <path d="M 65 55 Q 70 45 68 35 Q 66 25 62 20" stroke="#FF8C42" strokeWidth="8" fill="none" strokeLinecap="round" />
      </svg>
    </motion.div>
  );

  const CutePuppy = ({ className, style }) => (
    <motion.div
      className={`${className}`}
      style={style}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 10, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-lg">
        {/* Dog body */}
        <ellipse cx="40" cy="55" rx="22" ry="15" fill="#8B4513" />
        {/* Dog chest */}
        <ellipse cx="40" cy="48" rx="12" ry="8" fill="#D2691E" />
        {/* Dog head */}
        <ellipse cx="40" cy="35" rx="20" ry="18" fill="#8B4513" />
        {/* Dog ears */}
        <ellipse cx="25" cy="28" rx="8" ry="15" fill="#654321" transform="rotate(-20 25 28)" />
        <ellipse cx="55" cy="28" rx="8" ry="15" fill="#654321" transform="rotate(20 55 28)" />
        {/* Dog snout */}
        <ellipse cx="40" cy="42" rx="12" ry="10" fill="#D2691E" />
        {/* Dog nose area */}
        <ellipse cx="40" cy="38" rx="8" ry="6" fill="#A0522D" />
        {/* Dog eyes */}
        <circle cx="33" cy="30" r="4" fill="#000" />
        <circle cx="47" cy="30" r="4" fill="#000" />
        <circle cx="33" cy="28" r="2" fill="#FFF" />
        <circle cx="47" cy="28" r="2" fill="#FFF" />
        {/* Dog nose */}
        <ellipse cx="40" cy="36" rx="3" ry="2" fill="#000" />
        {/* Dog mouth */}
        <path d="M 40 40 Q 35 45 32 43" stroke="#000" strokeWidth="2" fill="none" />
        <path d="M 40 40 Q 45 45 48 43" stroke="#000" strokeWidth="2" fill="none" />
        {/* Dog tongue */}
        <ellipse cx="40" cy="46" rx="4" ry="3" fill="#FF69B4" />
        {/* Dog paws */}
        <ellipse cx="28" cy="68" rx="6" ry="4" fill="#8B4513" />
        <ellipse cx="52" cy="68" rx="6" ry="4" fill="#8B4513" />
        {/* Dog tail */}
        <path d="M 62 50 Q 68 40 65 30" stroke="#8B4513" strokeWidth="10" fill="none" strokeLinecap="round" />
      </svg>
    </motion.div>
  );

  const CuteBear = ({ className, style }) => (
    <motion.div
      className={`${className}`}
      style={style}
      animate={{
        rotate: [0, 8, 0],
        y: [0, -8, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-lg">
        {/* Bear body */}
        <ellipse cx="40" cy="55" rx="24" ry="18" fill="#8B4513" />
        {/* Bear chest */}
        <ellipse cx="40" cy="48" rx="14" ry="10" fill="#D2691E" />
        {/* Bear head */}
        <circle cx="40" cy="35" r="20" fill="#8B4513" />
        {/* Bear ears */}
        <circle cx="28" cy="22" r="8" fill="#8B4513" />
        <circle cx="52" cy="22" r="8" fill="#8B4513" />
        <circle cx="28" cy="22" r="4" fill="#D2691E" />
        <circle cx="52" cy="22" r="4" fill="#D2691E" />
        {/* Bear snout */}
        <ellipse cx="40" cy="42" rx="10" ry="8" fill="#DEB887" />
        {/* Bear eyes */}
        <circle cx="33" cy="30" r="3" fill="#000" />
        <circle cx="47" cy="30" r="3" fill="#000" />
        <circle cx="33" cy="28" r="1" fill="#FFF" />
        <circle cx="47" cy="28" r="1" fill="#FFF" />
        {/* Bear nose */}
        <ellipse cx="40" cy="38" rx="3" ry="2" fill="#000" />
        {/* Bear mouth */}
        <path d="M 40 42 Q 35 45 32 43" stroke="#000" strokeWidth="2" fill="none" />
        <path d="M 40 42 Q 45 45 48 43" stroke="#000" strokeWidth="2" fill="none" />
        {/* Bear paws */}
        <ellipse cx="28" cy="68" rx="7" ry="5" fill="#8B4513" />
        <ellipse cx="52" cy="68" rx="7" ry="5" fill="#8B4513" />
        {/* Bear claws */}
        <path d="M 25 65 L 23 62" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        <path d="M 28 65 L 26 62" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        <path d="M 31 65 L 29 62" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        <path d="M 49 65 L 47 62" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        <path d="M 52 65 L 50 62" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        <path d="M 55 65 L 53 62" stroke="#000" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </motion.div>
  );

  const CuteRabbit = ({ className, style }) => (
    <motion.div
      className={`${className}`}
      style={style}
      animate={{
        y: [0, -15, 0],
        x: [0, 5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-lg">
        {/* Rabbit body */}
        <ellipse cx="40" cy="55" rx="18" ry="12" fill="#F5F5DC" />
        {/* Rabbit head */}
        <ellipse cx="40" cy="40" rx="16" ry="14" fill="#F5F5DC" />
        {/* Rabbit ears */}
        <ellipse cx="32" cy="18" rx="5" ry="18" fill="#F5F5DC" />
        <ellipse cx="48" cy="18" rx="5" ry="18" fill="#F5F5DC" />
        <ellipse cx="32" cy="18" rx="2" ry="12" fill="#FFB6C1" />
        <ellipse cx="48" cy="18" rx="2" ry="12" fill="#FFB6C1" />
        {/* Rabbit eyes */}
        <circle cx="35" cy="36" r="4" fill="#000" />
        <circle cx="45" cy="36" r="4" fill="#000" />
        <circle cx="35" cy="34" r="2" fill="#FFF" />
        <circle cx="45" cy="34" r="2" fill="#FFF" />
        {/* Rabbit nose */}
        <ellipse cx="40" cy="42" rx="2" ry="1.5" fill="#FFB6C1" />
        {/* Rabbit mouth */}
        <path d="M 40 44 L 38 46 L 40 48 L 42 46 Z" fill="#000" />
        {/* Rabbit cheeks */}
        <circle cx="28" cy="42" r="3" fill="#FFB6C1" opacity="0.6" />
        <circle cx="52" cy="42" r="3" fill="#FFB6C1" opacity="0.6" />
        {/* Rabbit paws */}
        <ellipse cx="32" cy="68" rx="5" ry="3" fill="#F5F5DC" />
        <ellipse cx="48" cy="68" rx="5" ry="3" fill="#F5F5DC" />
        {/* Rabbit tail */}
        <circle cx="58" cy="52" r="6" fill="#FFF" />
        {/* Rabbit whiskers */}
        <line x1="25" y1="40" x2="32" y2="40" stroke="#000" strokeWidth="1" />
        <line x1="25" y1="44" x2="32" y2="43" stroke="#000" strokeWidth="1" />
        <line x1="48" y1="40" x2="55" y2="40" stroke="#000" strokeWidth="1" />
        <line x1="48" y1="43" x2="55" y2="44" stroke="#000" strokeWidth="1" />
      </svg>
    </motion.div>
  );

  const CutePanda = ({ className, style }) => (
    <motion.div
      className={`${className}`}
      style={style}
      animate={{
        rotate: [0, 15, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-lg">
        {/* Panda body */}
        <ellipse cx="40" cy="55" rx="24" ry="15" fill="#FFF" />
        {/* Panda arms */}
        <ellipse cx="22" cy="48" rx="6" ry="12" fill="#000" />
        <ellipse cx="58" cy="48" rx="6" ry="12" fill="#000" />
        {/* Panda head */}
        <circle cx="40" cy="35" r="20" fill="#FFF" />
        {/* Panda ears */}
        <circle cx="28" cy="22" r="10" fill="#000" />
        <circle cx="52" cy="22" r="10" fill="#000" />
        {/* Panda eye patches */}
        <ellipse cx="33" cy="32" rx="7" ry="9" fill="#000" />
        <ellipse cx="47" cy="32" rx="7" ry="9" fill="#000" />
        {/* Panda eyes */}
        <circle cx="33" cy="32" r="4" fill="#FFF" />
        <circle cx="47" cy="32" r="4" fill="#FFF" />
        <circle cx="33" cy="32" r="2" fill="#000" />
        <circle cx="47" cy="32" r="2" fill="#000" />
        <circle cx="33" cy="30" r="1" fill="#FFF" />
        <circle cx="47" cy="30" r="1" fill="#FFF" />
        {/* Panda nose */}
        <ellipse cx="40" cy="40" rx="3" ry="2" fill="#000" />
        {/* Panda mouth */}
        <path d="M 40 43 Q 35 46 32 44" stroke="#000" strokeWidth="2" fill="none" />
        <path d="M 40 43 Q 45 46 48 44" stroke="#000" strokeWidth="2" fill="none" />
        {/* Panda paws */}
        <ellipse cx="28" cy="68" rx="7" ry="4" fill="#000" />
        <ellipse cx="52" cy="68" rx="7" ry="4" fill="#000" />
      </svg>
    </motion.div>
  );

  const CuteFox = ({ className, style }) => (
    <motion.div
      className={`${className}`}
      style={style}
      animate={{
        x: [0, 8, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 2.8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-lg">
        {/* Fox body */}
        <ellipse cx="40" cy="55" rx="20" ry="12" fill="#FF4500" />
        {/* Fox chest */}
        <ellipse cx="40" cy="48" rx="10" ry="8" fill="#FFF" />
        {/* Fox head */}
        <ellipse cx="40" cy="35" rx="18" ry="15" fill="#FF4500" />
        {/* Fox ears */}
        <path d="M 28 22 L 22 8 L 35 25 Z" fill="#FF4500" />
        <path d="M 52 22 L 58 8 L 45 25 Z" fill="#FF4500" />
        <path d="M 28 20 L 25 12 L 32 22 Z" fill="#FFF" />
        <path d="M 52 20 L 55 12 L 48 22 Z" fill="#FFF" />
        {/* Fox snout */}
        <ellipse cx="40" cy="42" rx="8" ry="6" fill="#FFF" />
        <ellipse cx="40" cy="38" rx="6" ry="4" fill="#FF4500" />
        {/* Fox eyes */}
        <ellipse cx="34" cy="30" rx="3" ry="4" fill="#000" />
        <ellipse cx="46" cy="30" rx="3" ry="4" fill="#000" />
        <ellipse cx="34" cy="28" rx="1" ry="2" fill="#FFF" />
        <ellipse cx="46" cy="28" rx="1" ry="2" fill="#FFF" />
        {/* Fox nose */}
        <ellipse cx="40" cy="36" rx="2" ry="1.5" fill="#000" />
        {/* Fox mouth */}
        <path d="M 40 38 Q 35 41 32 39" stroke="#000" strokeWidth="2" fill="none" />
        <path d="M 40 38 Q 45 41 48 39" stroke="#000" strokeWidth="2" fill="none" />
        {/* Fox paws */}
        <ellipse cx="30" cy="68" rx="5" ry="3" fill="#FF4500" />
        <ellipse cx="50" cy="68" rx="5" ry="3" fill="#FF4500" />
        {/* Fox tail */}
        <path d="M 60 55 Q 72 45 70 30 Q 68 15 65 10" stroke="#FF4500" strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M 62 52 Q 70 42 68 28" stroke="#FFF" strokeWidth="6" fill="none" strokeLinecap="round" />
      </svg>
    </motion.div>
  );

  // Speech synthesis for countdown
  const speakNumber = (number) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(number.toString());
      utterance.rate = 0.8;
      utterance.pitch = 1.2;
      utterance.volume = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const speakCelebration = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance("Happy Anniversary Shravanya!");
      utterance.rate = 0.9;
      utterance.pitch = 1.3;
      utterance.volume = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    if (currentNumber > 0) {
      speakNumber(currentNumber);
      const timer = setTimeout(() => {
        setCurrentNumber(currentNumber - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (currentNumber === 0) {
      setShowCelebration(true);
      speakCelebration();
      setTimeout(() => {
        onComplete?.();
      }, 7000); // Show celebration for 7 seconds
    }
  }, [currentNumber, onComplete]);

  const skipCountdown = () => {
    setShowSkip(false);
    speechSynthesis.cancel();
    onComplete?.();
  };

  // Animal positions - spread them out more for bigger animals
  const animalPositions = [
    { top: '15%', left: '8%' },
    { top: '20%', right: '10%' },
    { top: '45%', left: '5%' },
    { top: '55%', right: '8%' },
    { top: '75%', left: '12%' },
    { top: '25%', left: '75%' },
    { top: '70%', left: '78%' },
    { top: '35%', right: '15%' },
    { top: '80%', right: '20%' },
    { top: '10%', left: '45%' },
    { top: '85%', left: '45%' },
    { top: '40%', left: '88%' },
  ];

  const animals = [
    CuteKitten, CutePuppy, CuteBear, CuteRabbit, CutePanda, CuteFox
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500 flex items-center justify-center overflow-hidden"
    >
      {/* Skip Button */}
      {showSkip && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={skipCountdown}
          className="absolute top-6 right-6 bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/40 transition-all shadow-lg z-10 text-sm font-medium"
        >
          Skip ⏭️
        </motion.button>
      )}

      {/* Cute Animals */}
      <div className="absolute inset-0">
        {animalPositions.map((position, index) => {
          const AnimalComponent = animals[index % animals.length];
          return (
            <AnimalComponent
              key={index}
              className="absolute z-10"
              style={{
                ...position,
                transform: 'translate(-50%, -50%)',
              }}
            />
          );
        })}
      </div>

      {/* Optimized Floating Hearts - Reduced quantity */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/30 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
            }}
            initial={{ y: '100vh' }}
            animate={{
              y: '-100px',
              x: [0, 20, -20, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 6
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      {/* Countdown Numbers */}
      <AnimatePresence mode="wait">
        {currentNumber > 0 && (
          <motion.div
            key={currentNumber}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className="text-white text-[8rem] md:text-[10rem] font-bold drop-shadow-2xl z-20 relative"
            style={{
              textShadow: '0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4)',
            }}
          >
            {currentNumber}
          </motion.div>
        )}

        {/* Celebration Message */}
        {showCelebration && (
          <motion.div
            initial={{ scale: 0, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            className="text-center z-20 relative max-w-5xl mx-auto px-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-purple-900 text-4xl md:text-6xl lg:text-8xl font-black mb-6 drop-shadow-2xl"
              style={{
                fontFamily: 'Georgia, serif',
                textShadow: '0 0 40px rgba(147, 51, 234, 0.8), 0 0 80px rgba(147, 51, 234, 0.4)',
                letterSpacing: '0.02em'
              }}
            >
              🎉 Happy Anniversary 🎉
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-purple-800 text-3xl md:text-5xl lg:text-7xl font-black mb-4"
              style={{
                fontFamily: 'Georgia, serif',
                textShadow: '0 0 30px rgba(126, 34, 206, 0.6), 0 0 60px rgba(126, 34, 206, 0.3)',
                letterSpacing: '0.02em'
              }}
            >
              Shravanya! 💕
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="text-purple-700 text-xl md:text-2xl lg:text-3xl font-bold"
              style={{
                fontFamily: 'Georgia, serif',
                textShadow: '0 0 20px rgba(109, 40, 217, 0.5)'
              }}
            >
              Welcome to Love Street! 🌟
            </motion.p>

            {/* Enhanced Big Hearts Animation */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`big-heart-${i}`}
                  className="absolute text-6xl md:text-8xl"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    color: ['#FF1493', '#FF69B4', '#FF91A4', '#FFB6C1', '#DC143C'][Math.floor(Math.random() * 5)]
                  }}
                  initial={{ scale: 0, opacity: 0, rotate: 0 }}
                  animate={{
                    scale: [0, 1.2, 0.8, 1, 0],
                    opacity: [0, 1, 1, 1, 0],
                    rotate: [0, 360, 720],
                    y: [0, -100, -200]
                  }}
                  transition={{
                    duration: 3,
                    delay: Math.random() * 1.5,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatDelay: Math.random() * 2 + 1
                  }}
                >
                  💖
                </motion.div>
              ))}
            </div>

            {/* Medium Hearts Bursting Effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`medium-heart-${i}`}
                  className="absolute text-4xl md:text-5xl"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    color: ['#FF1493', '#FF69B4', '#FF91A4', '#FFB6C1', '#DC143C', '#FF6347'][Math.floor(Math.random() * 6)]
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1.5, 1, 0],
                    opacity: [0, 1, 1, 0],
                    y: [0, -150],
                    x: [0, Math.random() * 200 - 100],
                    rotate: [0, Math.random() * 360]
                  }}
                  transition={{
                    duration: 2.5,
                    delay: Math.random() * 2,
                    ease: "easeOut"
                  }}
                >
                  {['💕', '💖', '💗', '💘', '💝', '💟'][Math.floor(Math.random() * 6)]}
                </motion.div>
              ))}
            </div>

            {/* Small Sparkling Hearts */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`small-heart-${i}`}
                  className="absolute text-xl md:text-2xl"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    color: ['#FF1493', '#FF69B4', '#FF91A4', '#FFB6C1', '#DC143C', '#FF6347', '#FFD700'][Math.floor(Math.random() * 7)]
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 360, 720]
                  }}
                  transition={{
                    duration: 2,
                    delay: Math.random() * 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: Math.random() * 3 + 2
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </div>

            {/* Golden Confetti */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(25)].map((_, i) => (
                <motion.div
                  key={`confetti-${i}`}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    backgroundColor: ['#FFD700', '#FFA500', '#FF69B4', '#FF1493', '#9370DB', '#4169E1'][Math.floor(Math.random() * 6)]
                  }}
                  initial={{ scale: 0, y: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    y: [0, -400, -800],
                    x: [0, Math.random() * 300 - 150],
                    rotate: [0, 360, 720]
                  }}
                  transition={{
                    duration: 4,
                    delay: Math.random() * 2,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CountdownIntro;