import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Plus, Heart, Star, Sparkles } from 'lucide-react';

const DreamDateIdeasShop = ({ onBack, onAddToCart }) => {
  const [cart, setCart] = useState([]);
  const [addedItems, setAddedItems] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Hiking Adventure",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=400&fit=crop&crop=center",
      description: "Scenic hiking trail with nature views and picnic",
      rating: 4.8,
      category: "Adventure"
    },
    {
      id: 2,
      name: "Movie Date",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1489599510096-8e35b2b4de7b?w=400&h=400&fit=crop&crop=center",
      description: "Private cinema experience with popcorn and drinks",
      rating: 4.7,
      category: "Entertainment"
    },
    {
      id: 4,
      name: "Online Gaming",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop&crop=center",
      description: "Multiplayer gaming session with voice chat",
      rating: 4.5,
      category: "Gaming"
    },
    {
      id: 5,
      name: "Traditional Date",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
      description: "Classic romantic dinner with candles and music",
      rating: 4.9,
      category: "Classic"
    },
    {
      id: 5,
      name: "Beach Sunset",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=400&fit=crop&crop=center",
      description: "Romantic beach walk during golden hour",
      rating: 4.8,
      category: "Romantic"
    },
    {
      id: 6,
      name: "Sports Date",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop&crop=center",
      description: "Mini golf, bowling or other fun sports activities",
      rating: 4.5,
      category: "Shopping"
    },
    {
      id: 8,
      name: "Dinner Date",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop&crop=center",
      description: "Fine dining experience at upscale restaurant",
      rating: 4.9,
      category: "Dining"
    },
    {
      id: 9,
      name: "Street Food Tour",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop&crop=center",
      description: "Explore local street food vendors together",
      rating: 4.6,
      category: "Food"
    },
    {
      id: 10,
      name: "Netflix and Chill",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
      description: "Cozy home date with movies and snacks",
      rating: 4.7,
      category: "Home"
    },
    {
      id: 11,
      name: "Online Gaming",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop&crop=center",
      description: "Multiplayer gaming session with voice chat",
      rating: 4.5,
      category: "Gaming"
    },
    {
      id: 12,
      name: "Scooty Ride",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
      description: "Scenic ride around the city on a scooter",
      rating: 4.8,
      category: "Adventure"
    },
    {
      id: 13,
      name: "Custom Date Plan",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=400&h=400&fit=crop&crop=center",
      description: "Tell us your dream date idea and we'll make it happen!",
      rating: 5.0,
      category: "Custom",
      isCustom: true
    },
    {
      id: 13,
      name: "Pottery Making Class",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
      description: "Create pottery pieces together in romantic setting",
      rating: 4.5,
      category: "Creative"
    },
    {
      id: 14,
      name: "Weekend Getaway",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&h=400&fit=crop&crop=center",
      description: "2-day romantic retreat at luxury mountain resort",
      rating: 4.9,
      category: "Travel"
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b-4 border-violet-200">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <button
                onClick={onBack}
                className="flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Love Street
              </button>

              <div className="text-center">
                <h1
                  className="text-5xl font-bold text-violet-600 mb-2"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  Dream Date Ideas ✨
                </h1>
                <p className="text-lg text-violet-500 font-medium">Magical experiences to create lasting memories</p>
              </div>

              <div className="flex items-center gap-2 bg-violet-100 px-4 py-3 rounded-full">
                <ShoppingCart className="w-6 h-6 text-violet-600" />
                <span className="font-bold text-violet-600">{cart.length}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-violet-700 mb-4"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              ✨ Enchanting Date Experiences ✨
            </h2>
            <div className="w-24 h-1 bg-violet-400 mx-auto rounded-full"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-violet-100 hover:border-violet-300 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="bg-gradient-to-br from-violet-100 to-fuchsia-100 p-8 text-center relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-lg flex items-center justify-center text-7xl" style={{ display: 'none' }}>
                    💝
                  </div>
                  <div className="absolute top-2 right-2 text-violet-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-violet-200 text-violet-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                    <button
                      className="text-violet-400 hover:text-violet-600"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

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
                    <span className="text-2xl font-bold text-violet-600">{product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`px-4 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg transition-all ${
                        addedItems.has(product.id) 
                          ? 'bg-green-500 hover:bg-green-600 text-white' 
                          : 'bg-violet-500 hover:bg-violet-600 text-white'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                      {addedItems.has(product.id) ? 'Booked' : 'Book'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dream Message */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-violet-200 to-fuchsia-200 rounded-3xl p-8 text-center border-4 border-violet-300">
            <div className="text-6xl mb-4">
              ✨💫🌟
            </div>
            <h3 className="text-2xl font-bold text-violet-700 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Dreams Come True!
            </h3>
            <p className="text-violet-600 font-medium">
              Turn your dream dates into reality with our carefully curated collection of magical experiences!
            </p>
          </div>
        </div>

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
              className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-xl transition-all"
            >
              View All Dream Dates ✨
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DreamDateIdeasShop;
