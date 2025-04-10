import React from "react";
import { motion } from "framer-motion";
import { Clock, Award, Tag } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "24/7 Service",
    description: "Round-the-clock support and quick turnaround times",
  },
  {
    icon: <Award className="w-8 h-8 text-white" />,
    title: "Quality Guarantee",
    description: "Premium materials and state-of-the-art technology",
  },
  {
    icon: <Tag className="w-8 h-8 text-white" />,
    title: "Best Prices",
    description: "Competitive pricing with student and bulk discounts",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience the difference with our premium printing services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
