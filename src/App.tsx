import React, { useState } from 'react';
import { ShoppingCart, Package, TrendingDown, CircleDollarSign, Search } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import { Product } from './types';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bulk Prices, Small Quantities</h1>
          <p className="text-xl mb-8">Shop premium groceries at wholesale prices without buying in bulk</p>
          <div className="relative max-w-xl">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute right-4 top-3 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Value Props */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
            <TrendingDown className="w-12 h-12 text-green-600" />
            <div>
              <h3 className="font-semibold text-lg">Wholesale Prices</h3>
              <p className="text-gray-600">Access bulk pricing without minimum orders</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
            <Package className="w-12 h-12 text-green-600" />
            <div>
              <h3 className="font-semibold text-lg">Small Quantities</h3>
              <p className="text-gray-600">Buy only what you need</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
            <CircleDollarSign className="w-12 h-12 text-green-600" />
            <div>
              <h3 className="font-semibold text-lg">Fair Fees</h3>
              <p className="text-gray-600">Small transaction fee, big savings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-8">Today's Fresh Deals</h2>
        <ProductGrid onAddToCart={addToCart} />
      </div>

      {/* Cart Sidebar */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        setItems={setCartItems}
      />
    </div>
  );
}

export default App;