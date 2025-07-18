import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Plus, Heart, Star, Candy } from 'lucide-react';

const CandyCrushShop = ({ onBack, onAddToCart }) => {
  const [cart, setCart] = useState([]);
  const [addedItems, setAddedItems] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Silk Chocolate",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1549007908-de9eb120d2dc?w=400&h=400&fit=crop&crop=center",
      description: "Premium smooth silk chocolate bars",
      rating: 4.8,
      category: "Premium"
    },
    {
      id: 2,
      name: "Kinder Joy",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1571506165871-ee72117b9044?w=400&h=400&fit=crop&crop=center",
      description: "Delicious chocolate with surprise toy inside",
      rating: 4.7,
      category: "Kids"
    },
    {
      id: 3,
      name: "Ferrero Rocher",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1549007908-de9eb120d2dc?w=400&h=400&fit=crop&crop=center",
      description: "Hazelnut chocolate in golden wrapper",
      rating: 4.9,
      category: "Luxury"
    },
    {
      id: 4,
      name: "Snickers",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&h=400&fit=crop&crop=center",
      description: "Chocolate bar with peanuts and caramel",
      rating: 4.6,
      category: "Classic"
    },
    {
      id: 5,
      name: "Dubai Chocolate",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1549007908-de9eb120d2dc?w=400&h=400&fit=crop&crop=center",
      description: "Viral Dubai chocolate with pistachio and kunafa",
      rating: 4.9,
      category: "Viral"
    },
    {
      id: 6,
      name: "KitKat",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&h=400&fit=crop&crop=center",
      description: "Crispy wafer covered in milk chocolate",
      rating: 4.7,
      category: "Classic"
    },
    {
      id: 7,
      name: "Milky Bar",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&h=400&fit=crop&crop=center",
      description: "Creamy white chocolate bar",
      rating: 4.5,
      category: "White Chocolate"
    },
    {
      id: 8,
      name: "Toblerone",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1549007908-de9eb120d2dc?w=400&h=400&fit=crop&crop=center",
      description: "Swiss milk chocolate with honey and almond nougat",
      rating: 4.8,
      category: "Swiss"
    },
    {
      id: 9,
      name: "Custom Candy Mix",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&h=400&fit=crop&crop=center",
      description: "Create your own custom candy selection!",
      rating: 5.0,
      category: "Custom",
      isCustom: true
    },
    {
      id: 10, // Add missing id for Jelly Beans
      name: "Jelly Beans",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=400&h=400&fit=crop&crop=center",
      description: "Gourmet jelly beans in 20 flavors",
      rating: 4.7,
      category: "Jelly Beans" // Add missing semicolon
    },
    {
      id: 11,
      name: "Caramel Apples",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=400&fit=crop&crop=center",
      description: "Fresh apples dipped in rich caramel",
      rating: 4.8,
      category: "Caramel"
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 relative overflow-hidden">
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
            🍬
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
                className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Love Street
              </button>

              <div className="text-center">
                <h1
                  className="text-5xl font-bold text-pink-600 mb-2"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  Candy Crush 🍬
                </h1>
                <p className="text-lg text-pink-500 font-medium">Sweet treats to crush your cravings</p>
              </div>

              <div className="flex items-center gap-2 bg-pink-100 px-4 py-3 rounded-full">
                <ShoppingCart className="w-6 h-6 text-pink-600" />
                <span className="font-bold text-pink-600">{cart.length}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-pink-700 mb-4"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              🍭 Sweet Candy Paradise 🍭
            </h2>
            <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-pink-100 hover:border-pink-300 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="bg-gradient-to-br from-pink-100 to-yellow-100 p-8 text-center relative overflow-hidden">
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
                    🍬
                  </div>
                  <div
                    className="absolute top-2 right-2 text-pink-400"
                  >
                    <Candy className="w-6 h-6" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-pink-200 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                    <button
                      className="text-pink-400 hover:text-pink-600"
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
                    <span className="text-2xl font-bold text-pink-600">{product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`px-4 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg transition-all ${
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

        {/* Sweet Message */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-pink-200 to-yellow-200 rounded-3xl p-8 text-center border-4 border-pink-300">
            <div className="text-6xl mb-4">
              🍭🍬🧁
            </div>
            <h3 className="text-2xl font-bold text-pink-700 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Life is Sweet!
            </h3>
            <p className="text-pink-600 font-medium">
              Indulge in our handpicked collection of the world's most delicious candies and treats!
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
              className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-xl transition-all"
            >
              View All Candies 🍬
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CandyCrushShop;
