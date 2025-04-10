import React from "react";
import { motion } from "framer-motion";
import { Upload, Settings, CreditCard, Package } from "lucide-react";

const steps = [
  {
    icon: <Upload className="w-8 h-8 text-white" />,
    title: "1. Upload",
    description: "Upload your files securely",
  },
  {
    icon: <Settings className="w-8 h-8 text-white" />,
    title: "2. Customize",
    description: "Choose your specifications",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-white" />,
    title: "3. Pay",
    description: "Secure payment processing",
  },
  {
    icon: <Package className="w-8 h-8 text-white" />,
    title: "4. Receive",
    description: "Get your prints delivered",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Follow these simple steps to get started
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
