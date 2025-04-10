import React, { useState } from 'react';
import { Minus, Plus, X, Home, Package2, Truck, Mail } from 'lucide-react';
import Footer from './components/Footer';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "White Leather Bag",
      price: 75.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 2,
      name: "Faded Vintage Sweater",
      price: 45.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=200"
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 20.00;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <span className="text-gray-600">{cartItems.length} items</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow p-6 space-y-6">
            {cartItems.map(item => (
  <div
    key={item.id}
    className="flex flex-col sm:flex-row items-center gap-4 py-4 border-b last:border-0"
  >
    {/* Mobile View: Image and Details */}
    <div className="flex items-start gap-4 w-full sm:w-auto">
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      {/* Product Details (Mobile View) */}
      <div className="flex-1 sm:hidden">
        {/* Name and Price */}
        <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>

        {/* Quantity Controls and Cancel Button */}
        <div className="flex items-center gap-3 mt-3">
          {/* Quantity Controls */}
          <button
            onClick={() => updateQuantity(item.id, -1)}
            className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <Minus size={16} />
          </button>
          <span className="text-lg font-semibold">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, 1)}
            className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <Plus size={16} />
          </button>

          {/* Cancel Button */}
          <button
            onClick={() => removeItem(item.id)}
            className="p-2 bg-red-100 rounded-lg text-red-600 hover:bg-red-200"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>

    {/* Desktop View: Original Details */}
    <div className="hidden sm:flex flex-1 items-center justify-between">
      {/* Product Name and Price */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
      </div>

      {/* Buttons and Price Container */}
      <div className="flex items-center gap-6 justify-end flex-1">
        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => updateQuantity(item.id, -1)}
            className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <Minus size={16} />
          </button>
          <span className="text-lg font-semibold">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, 1)}
            className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            <Plus size={16} />
          </button>
        </div>

        {/* Price */}
        <div className="text-lg font-semibold text-gray-800">
          ${(item.price * item.quantity).toFixed(2)}
        </div>

        {/* Cancel Button */}
        <button
          onClick={() => removeItem(item.id)}
          className="p-2 bg-red-100 rounded-lg text-red-600 hover:bg-red-200"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  </div>
))}

            </div>
          </div>

          {/* Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-gray-900 font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="w-full px-4 py-2 border rounded-lg mt-4 focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition mt-4">
                  Proceed to Checkout
                </button>
              </div>
            </div>

            {/* Navigation Icons */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-sm">
              <div className="flex flex-col items-center">
                <div className="p-3 bg-gray-100 rounded-full">
                  <Home size={20} className="text-gray-600" />
                </div>
                <span>Home</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-gray-100 rounded-full">
                  <Package2 size={20} className="text-gray-600" />
                </div>
                <span>Orders</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-gray-100 rounded-full">
                  <Truck size={20} className="text-gray-600" />
                </div>
                <span>Shipping</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-gray-100 rounded-full">
                  <Mail size={20} className="text-gray-600" />
                </div>
                <span>Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
