import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Plus, Heart, Star, Footprints } from 'lucide-react';

const FootwearShop = ({ onBack, onAddToCart }) => {
  const [cart, setCart] = useState([]);
  const [addedItems, setAddedItems] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Nike Air Max 270",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
      description: "Comfortable running shoes with air cushioning",
      rating: 4.8,
      category: "Sneakers"
    },
    {
      id: 2,
      name: "High Heel Pumps",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center",
      description: "Classic black pumps perfect for formal occasions",
      rating: 4.6,
      category: "Heels"
    },
    {
      id: 3,
      name: "Leather Boots",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
      description: "Genuine leather ankle boots with side zip",
      rating: 4.9,
      category: "Boots"
    },
    {
      id: 4,
      name: "Flip Flops",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=400&fit=crop&crop=center",
      description: "Comfortable summer flip flops in bright colors",
      rating: 4.3,
      category: "Sandals"
    },
    {
      id: 5,
      name: "Oxford Dress Shoes",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop&crop=center",
      description: "Premium leather oxford shoes for men",
      rating: 4.7,
      category: "Formal"
    },
    {
      id: 6,
      name: "Ballet Flats",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop&crop=center",
      description: "Comfortable ballet flats in nude color",
      rating: 4.5,
      category: "Flats"
    },
    {
      id: 7,
      name: "Hiking Boots",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1544824724-5f5ccdfab261?w=400&h=400&fit=crop&crop=center",
      description: "Waterproof hiking boots for outdoor adventures",
      rating: 4.8,
      category: "Outdoor"
    },
    {
      id: 8,
      name: "Converse Chuck Taylor",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop&crop=center",
      description: "Classic canvas high-top sneakers",
      rating: 4.6,
      category: "Casual"
    },
    {
      id: 9,
      name: "Stiletto Heels",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=400&h=400&fit=crop&crop=center",
      description: "Elegant stiletto heels in metallic gold",
      rating: 4.4,
      category: "Heels"
    },
    {
      id: 10,
      name: "Running Shoes",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
      description: "Lightweight running shoes with mesh upper",
      rating: 4.7,
      category: "Athletic"
    },
    {
      id: 11,
      name: "Chelsea Boots",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1544824724-5f5ccdfab261?w=400&h=400&fit=crop&crop=center",
      description: "Stylish chelsea boots in brown leather",
      rating: 4.8,
      category: "Boots"
    },
    {
      id: 12,
      name: "Platform Sandals",
      price: "One Kiss",
      image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop&crop=center",
      description: "Trendy platform sandals with ankle strap",
      rating: 4.5,
      category: "Sandals"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Floating shoe elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            👟
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm shadow-lg border-b-4 border-emerald-200">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <button
                onClick={onBack}
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Love Street
              </button>

              <div className="text-center">
                <h1
                  className="text-5xl font-bold text-emerald-600 mb-2"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  Footwear Shop 👟
                </h1>
                <p className="text-lg text-emerald-500 font-medium">Step into style and comfort</p>
              </div>

              <div className="flex items-center gap-2 bg-emerald-100 px-4 py-3 rounded-full">
                <ShoppingCart className="w-6 h-6 text-emerald-600" />
                <span className="font-bold text-emerald-600">{cart.length}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-emerald-700 mb-4"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}
            >
              👟 Premium Footwear Collection 👟
            </h2>
            <div className="w-24 h-1 bg-emerald-400 mx-auto rounded-full"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-emerald-100 hover:border-emerald-300 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-8 text-center relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center text-7xl" style={{ display: 'none' }}>
                    👟
                  </div>
                  <div className="absolute top-2 right-2 text-emerald-400">
                    <Footprints className="w-6 h-6" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                    <button
                      className="text-emerald-400 hover:text-emerald-600"
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
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg transition-all"
                    >
                      <Plus className="w-4 h-4" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comfort Message */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-emerald-200 to-teal-200 rounded-3xl p-8 text-center border-4 border-emerald-300">
            <div className="text-6xl mb-4">
              👟👠👢
            </div>
            <h3 className="text-2xl font-bold text-emerald-700 mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Walk in Comfort!
            </h3>
            <p className="text-emerald-600 font-medium">
              From casual sneakers to elegant heels, find the perfect footwear for every step of your journey!
            </p>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center pb-12">
          <button
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-xl transition-all"
          >
            View All Footwear 👟
          </button>
        </div>
      </div>
    </div>
  );
};

export default FootwearShop;


