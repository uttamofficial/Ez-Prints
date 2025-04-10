import React from 'react';

export function Hero() {
  return (
    <div className="relative bg-gray-900 h-[700px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-gray-900 opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center animate-fade-in">
        <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl">
          Student Printing <br /> & <br />Stationery Hub
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Your one-stop destination for quick and affordable printing services with premium stationery essentials designed specially for VIT students.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
            Upload PDF
          </button>
          <button className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
            Explore Stationery
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-10 left-10 w-32 h-32 bg-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
    </div>
  );
}
