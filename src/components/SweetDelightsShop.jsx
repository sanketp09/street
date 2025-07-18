import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Plus, Heart, Star } from 'lucide-react';

const SweetDelightsShop = ({ onBack, onAddToCart }) => {
  const [cart, setCart] = useState([]);
  const [customName, setCustomName] = useState('');
  const [addedItems, setAddedItems] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Tiramisu",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop&crop=center",
      description: "Classic Italian dessert with coffee-soaked ladyfingers",
      rating: 4.9,
      category: "Specialty"
    },
    {
      id: 2,
      name: "Cheesecake",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop&crop=center",
      description: "Creamy cheesecake topped with fresh strawberries",
      rating: 4.9,
      category: "Cheesecakes"
    },
    {
      id: 3,
      name: "Tres Leches",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&crop=center",
      description: "Traditional Latin American sponge cake soaked in three milks",
      rating: 4.8,
      category: "Cakes"
    },
    {
      id: 4,
      name: "Chocolate Cake",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&crop=center",
      description: "Rich and decadent chocolate cake with ganache frosting",
      rating: 4.9,
      category: "Cakes"
    },
    {
      id: 5,
      name: "Churros",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=400&fit=crop&crop=center",
      description: "Golden fried churros dusted with cinnamon sugar",
      rating: 4.7,
      category: "Fried"
    },
    {
      id: 6,
      name: "Brownies",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&crop=center",
      description: "Fudgy chocolate brownies with walnuts",
      rating: 4.8,
      category: "Brownies"
    },
    {
      id: 7,
      name: "Chocolate Chip Cookies",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop&crop=center",
      description: "Freshly baked cookies with premium chocolate chips",
      rating: 4.7,
      category: "Cookies"
    },
    {
      id: 8,
      name: "Bomboloni",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1571506165871-ee72117b9044?w=400&h=400&fit=crop&crop=center",
      description: "Italian filled donuts with custard or chocolate",
      rating: 4.6,
      category: "Donuts"
    },
    {
      id: 9,
      name: "Gulab Jamun",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1606471964617-25c4b6b29a3d?w=400&h=400&fit=crop&crop=center",
      description: "Traditional Indian sweet balls in rose syrup",
      rating: 4.8,
      category: "Indian"
    },
    {
      id: 10,
      name: "Pancakes",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop&crop=center",
      description: "Fluffy pancakes with maple syrup and butter",
      rating: 4.5,
      category: "Breakfast"
    },
    {
      id: 11,
      name: "Waffles",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1562376552-0d160dee0d8d?w=400&h=400&fit=crop&crop=center",
      description: "Crispy Belgian waffles with fresh berries",
      rating: 4.6,
      category: "Breakfast"
    },
    {
      id: 12,
      name: "Custom Order",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1571506165871-ee72117b9044?w=400&h=400&fit=crop&crop=center",
      description: "Tell us what sweet treat you'd like us to make!",
      rating: 5.0,
      category: "Custom",
      isCustom: true
    }
  ];

  const handleAddToCart = (product) => {
    if (product.isCustom && !customName.trim()) {
      alert('Please enter your custom order details!');
      return;
    }
    
    const itemToAdd = product.isCustom 
      ? { ...product, name: customName.trim(), customOrder: true }
      : product;
      
    setCart([...cart, itemToAdd]);
    setAddedItems(prev => new Set([...prev, product.id]));
    if (onAddToCart) {
      onAddToCart(itemToAdd);
    }
    
    if (product.isCustom) {
      setCustomName('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
      
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            🍰
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b-4 border-pink-200">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <button
                onClick={onBack}
                className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Love Street
              </button>

              <div className="text-center">
                <h1
                  className="text-5xl font-bold text-pink-600 mb-2"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  Sweet Delights 🧁
                </h1>
                <p className="text-lg text-pink-500 font-medium">The finest desserts for your sweet moments</p>
              </div>

              <div className="flex items-center gap-2 bg-pink-100 px-4 py-3 rounded-full hover:bg-pink-200 transition-colors cursor-pointer group">
                <ShoppingCart className="w-6 h-6 text-pink-600 group-hover:animate-bounce" />
                <span className="font-bold text-pink-600">{cart.length}</span>
                <span className="text-sm text-pink-500">items</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-brown-700 mb-4"
              style={{ color: '#8B4513', fontFamily: 'Comic Sans MS, cursive' }}
            >
              ✨ Featured Desserts of the Week ✨
            </h2>
            <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-pink-100 hover:border-pink-300 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Product Image */}
                <div className="bg-gradient-to-br from-pink-100 to-orange-100 p-8 text-center relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div
                    style={{ display: 'none' }}
                    className="text-7xl mb-4"
                  >
                    🧁
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-pink-200 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                    <button
                      className="text-pink-400 hover:text-pink-600 hover:scale-125 transition-all duration-200"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

                  {/* Custom input for custom orders */}
                  {product.isCustom && (
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Enter your custom dessert request..."
                        value={customName}
                        onChange={(e) => setCustomName(e.target.value)}
                        className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:border-pink-400 text-sm"
                      />
                    </div>
                  )}

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-pink-600">{product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`px-4 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ${
                        addedItems.has(product.id) 
                          ? 'bg-green-500 hover:bg-green-600 text-white' 
                          : 'bg-pink-500 hover:bg-pink-600 text-white'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                      {addedItems.has(product.id) ? 'Added' : 'Add'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* View All Button or Cart Button */}
        <div className="text-center pb-12">
          {cart.length > 0 ? (
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 rounded-full text-xl font-bold shadow-xl transition-all flex items-center gap-3 mx-auto"
            >
              <ShoppingCart className="w-6 h-6" />
              Go to Cart ({cart.length} items)
            </button>
          ) : (
            <button
              className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white px-12 py-4 rounded-full text-xl font-bold shadow-xl transition-all"
            >
              View All Desserts 🍰
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SweetDelightsShop;
