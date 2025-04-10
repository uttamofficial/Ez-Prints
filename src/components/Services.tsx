import React from "react";
import { motion } from "framer-motion";
import { Printer, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: <Printer className="w-10 h-10 text-white" />,
    title: "PDF Printing",
    description: "Quick and efficient printing of your PDF documents with various binding options",
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-white" />,
    title: "Stationery Store",
    description: "Complete range of academic supplies and daily-use stationery items at student-friendly prices",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Comprehensive printing solutions for every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
