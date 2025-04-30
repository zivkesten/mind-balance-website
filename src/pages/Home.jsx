import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProgramsSection from "../components/ProgramsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import NewsletterSection from "../components/NewsletterSection";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection />
      
      <div className="container mx-auto flex justify-center py-6">
        <button
          onClick={() => {
            document.getElementById("about").scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="animate-bounce flex flex-col items-center text-gray-500 hover:text-teal-600 transition-colors"
        >
          <span className="text-sm font-light tracking-widest mb-2">EXPLORE</span>
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
      
      <AboutSection />
      <ProgramsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <ContactSection />
    </div>
  );
}