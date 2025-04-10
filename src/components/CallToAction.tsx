import React from "react";

export function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-6 tracking-wide">
          Print Your Documents Now
        </h2>
        <p className="mb-8 text-lg text-gray-300">
          Simply upload your PDF and we'll handle the rest
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
          Upload PDF
        </button>
      </div>
    </section>
  );
}
