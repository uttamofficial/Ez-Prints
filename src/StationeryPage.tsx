import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import PriceRangeSlider from "./components/PriceRangeSlider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { products } from "./data/products";

function StationeryPage() {
  const [priceRange, setPriceRange] = useState(100);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    "Pens & Pencils",
    "Notebooks",
    "Art Supplies",
    "Office Supplies",
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter(
    (product) =>
      (!selectedCategories.length ||
        selectedCategories.includes(product.category)) &&
      product.price <= priceRange
  );

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-[72px]">
        <main className="flex-1 max-w-7xl mx-auto px-6 py-12">
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-bold text-gray-800 tracking-wide">
              Explore Stationery Products
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              High-quality supplies for your creative and professional needs.
            </p>
          </header>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-72 bg-white rounded-lg shadow-xl sticky top-[88px] h-fit">
              {/* Mobile Filter Toggle */}
              <div className="md:hidden">
                <button
                  className="w-full bg-blue-600 text-white py-4 font-semibold rounded-md  flex justify-center items-center focus:outline-none"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  {isFilterOpen ? "Hide Filters" : "Show Filters"}
                </button>

                {isFilterOpen && (
                  <div className="bg-white rounded-lg shadow-xl p-4 space-y-6">
                    <section className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium text-gray-600">
                          Categories
                        </h3>
                        <div className="mt-3 space-y-3">
                          {categories.map((category) => (
                            <label
                              key={category}
                              className="flex items-center cursor-pointer hover:text-blue-600"
                            >
                              <input
                                type="checkbox"
                                id={category}
                                checked={selectedCategories.includes(category)}
                                onChange={() => handleCategoryChange(category)}
                                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                              />
                              <span className="ml-3 text-sm text-gray-700">
                                {category}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-600">
                          Price Range
                        </h3>
                        <PriceRangeSlider
                          value={priceRange}
                          onChange={setPriceRange}
                        />
                        <p className="text-sm text-gray-500 mt-2">
                          Up to {" "}
                          <span className="font-semibold text-gray-700">
                            ${priceRange}
                          </span>
                        </p>
                      </div>
                    </section>
                  </div>
                )}
              </div>

              {/* Desktop Filters */}
              <div className="hidden md:block p-6 space-y-6">
                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-700">Filters</h2>

                  <div className="space-y-4">
                    {/* Categories */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-600">Categories</h3>
                      <div className="mt-3 space-y-3">
                        {categories.map((category) => (
                          <label
                            key={category}
                            className="flex items-center cursor-pointer hover:text-blue-600"
                          >
                            <input
                              type="checkbox"
                              id={category}
                              checked={selectedCategories.includes(category)}
                              onChange={() => handleCategoryChange(category)}
                              className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <span className="ml-3 text-sm text-gray-700">
                              {category}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-600">Price Range</h3>
                      <PriceRangeSlider
                        value={priceRange}
                        onChange={setPriceRange}
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        Up to {" "}
                        <span className="font-semibold text-gray-700">
                          ${priceRange}
                        </span>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </aside>

            {/* Product Section */}
            <section className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="transform hover:scale-105 transition-transform duration-300"
                    >
                      <ProductCard product={product} onAddToCart={() => {}} />
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center text-gray-500">
                    No products match the selected filters.
                  </div>
                )}
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default StationeryPage;



