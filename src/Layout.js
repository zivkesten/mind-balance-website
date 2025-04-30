import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "utils/createPageUrl";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center">
              <span className={`text-xl md:text-2xl font-bold ${isScrolled ? "text-teal-600" : "text-white"}`}>
                מיכל רפופורט קסטן
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-reverse space-x-8">
              <button 
                onClick={() => scrollToSection("about")}
                className={`font-medium hover:text-teal-600 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                אודות
              </button>
              <button 
                onClick={() => scrollToSection("programs")}
                className={`font-medium hover:text-teal-600 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                תוכניות
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className={`font-medium hover:text-teal-600 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                המלצות
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className={`px-5 py-2 rounded-full ${
                  isScrolled 
                    ? "bg-teal-600 text-white hover:bg-teal-700" 
                    : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                } transition-colors`}
              >
                צור קשר
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="container mx-auto px-6 py-4">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection("about")}
                  className="font-medium text-gray-700 hover:text-teal-600 transition-colors py-2"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="font-medium text-gray-700 hover:text-teal-600 transition-colors py-2"
                >
                  Programs
                </button>
                <button 
                  onClick={() => scrollToSection("testimonials")}
                  className="font-medium text-gray-700 hover:text-teal-600 transition-colors py-2"
                >
                  Testimonials
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors py-2 px-4 rounded"
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>
      
      {/* Main Content */}
      <main>
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">מיכל רפופורט קסטן</h3>
              <p className="text-gray-400 mb-4">
                Certified personal trainer specializing in mental coaching, functional coaching, 
                and holistic wellness programs.
              </p>
              <p className="text-gray-400">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Programs
                </button>
                <button 
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Testimonials
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Contact
                </button>
              </nav>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">צור קשר</h3>
              <p className="text-gray-400 mb-2">
                תל אביב, ישראל
              </p>
              <p className="text-gray-400 mb-2">
                michal@example.com
              </p>
              <p className="text-gray-400 mb-4">
                +972 50 123 4567
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}