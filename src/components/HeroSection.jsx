import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <img
          src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Michelle coaching a client"
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
        <motion.div 
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Empower Your Mind and Body with Michelle Rapoport Kesten
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-200">
            Personalized coaching programs to transform your life.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              onClick={() => {
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="px-8 py-4 bg-teal-600 hover:bg-teal-700 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}