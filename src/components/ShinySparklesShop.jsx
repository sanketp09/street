import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Plus, Heart, Star, Sparkles } from 'lucide-react';

const ShinySparklesShop = ({ onBack, onAddToCart }) => {
  const [cart, setCart] = useState([]);
  const [addedItems, setAddedItems] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Diamond Necklace",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
      description: "Elegant diamond necklace with pendant",
      rating: 4.9,
      category: "Necklaces"
    },
    {
      id: 2,
      name: "Pearl Necklace",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
      description: "Classic freshwater pearl necklace",
      rating: 4.8,
      category: "Necklaces"
    },
    {
      id: 3,
      name: "Gold Chain Necklace",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
      description: "18k gold chain necklace with charm",
      rating: 4.7,
      category: "Necklaces"
    },
    {
      id: 4,
      name: "Silver Statement Necklace",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
      description: "Bold silver statement necklace",
      rating: 4.6,
      category: "Necklaces"
    },
    {
      id: 5,
      name: "Diamond Tennis Bracelet",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1588444650700-6a8c0de70d54?w=400&h=400&fit=crop&crop=center",
      description: "Classic diamond tennis bracelet",
      rating: 4.9,
      category: "Bracelets"
    },
    {
      id: 6,
      name: "Gold Charm Bracelet",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=400&h=400&fit=crop&crop=center",
      description: "Gold bracelet with customizable charms",
      rating: 4.7,
      category: "Bracelets"
    },
    {
      id: 7,
      name: "Silver Cuff Bracelet",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=400&h=400&fit=crop&crop=center",
      description: "Sterling silver cuff bracelet with engravings",
      rating: 4.6,
      category: "Bracelets"
    },
    {
      id: 8,
      name: "Diamond Stud Earrings",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=400&fit=crop&crop=center",
      description: "Classic diamond stud earrings",
      rating: 4.9,
      category: "Earrings"
    },
    {
      id: 9,
      name: "Pearl Drop Earrings",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=400&fit=crop&crop=center",
      description: "Elegant pearl drop earrings",
      rating: 4.7,
      category: "Earrings"
    },
    {
      id: 10,
      name: "Gold Hoop Earrings",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center",
      description: "14k gold hoop earrings, medium size",
      rating: 4.8,
      category: "Earrings"
    },
    {
      id: 11,
      name: "Silver Chandelier Earrings",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=400&fit=crop&crop=center",
      description: "Intricate silver chandelier earrings",
      rating: 4.6,
      category: "Earrings"
    },
    {
      id: 12,
      name: "Custom Jewelry",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center",
      description: "Design your own custom jewelry piece!",
      rating: 5.0,
      category: "Custom",
      isCustom: true
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            💎
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b-4 border-purple-200">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <button
                onClick={onBack}
                className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Love Street
              </button>

              <div className="text-center">
                <h1
                  className="text-5xl font-bold text-purple-600 mb-2"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  Shiny Sparkles 💎
                </h1>
                <p className="text-lg text-purple-500 font-medium">Exquisite jewelry for life's precious moments</p>
              </div>

              <div className="flex items-center gap-2 bg-purple-100 px-4 py-3 rounded-full">
                <ShoppingCart className="w-6 h-6 text-purple-600" />
                <span className="font-bold text-purple-600">{cart.length}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-purple-700 mb-4"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              ✨ Premium Jewelry Collection ✨
            </h2>
            <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-purple-100 hover:border-purple-300 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 text-center relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div
                    style={{ display: 'none' }}
                    className="text-7xl mb-4"
                  >
                    💎
                  </div>
                  <div
                    className="absolute top-2 right-2 text-yellow-400"
                  >
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                    <button
                      className="text-purple-400 hover:text-purple-600"
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
                    <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`px-4 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg transition-all ${
                        addedItems.has(product.id) 
                          ? 'bg-green-500 hover:bg-green-600 text-white' 
                          : 'bg-purple-500 hover:bg-purple-600 text-white'
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
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-xl transition-all"
            >
              View All Jewelry 💎
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShinySparklesShop;
