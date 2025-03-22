import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <nav className="flex justify-between items-center w-[90%] max-w-7xl mx-auto py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo.jpg" alt="Power Charging" className="h-12 w-12" />
          <span className="text-xl font-bold text-gray-800">
            Power Charging
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Home
          </Link>
          <Link
            to="/energymaestro"
            className="text-gray-700 hover:text-green-600 transition"
          >
            EnergyMÆSTRO
          </Link>

          {/* Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="text-gray-700 hover:text-green-600 flex items-center transition"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Products <ChevronDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-xl p-2 rounded-lg w-48">
                <Link
                  to="/powerup-32"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  PowerUp 32
                </Link>
                <Link
                  to="/powerup-60"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  PowerUp 60
                </Link>
                <Link
                  to="/powerup-mobile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  PowerUp Mobile
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/company"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Company
          </Link>

          <Link
            to="/contact-us"
            className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 space-y-4">
          <Link
            to="/"
            className="block text-gray-700 hover:text-green-600 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/energymaestro"
            className="block text-gray-700 hover:text-green-600 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            EnergyMÆSTRO
          </Link>

          {/* Mobile Dropdown */}
          <div className="relative">
            <button
              className="w-full text-left text-gray-700 hover:text-green-600 flex items-center justify-between"
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              Products <ChevronDown />
            </button>
            {isMobileDropdownOpen && (
              <div className="bg-white shadow-md p-2 rounded-lg">
                <Link
                  to="/powerup-32"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PowerUp 32
                </Link>
                <Link
                  to="/powerup-60"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PowerUp 60
                </Link>
                <Link
                  to="/powerup-mobile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PowerUp Mobile
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/company"
            className="block text-gray-700 hover:text-green-600 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Company
          </Link>

          <Link
            to="/contact-us"
            className="block bg-green-500 text-white px-4 py-2 rounded-full shadow-md text-center hover:bg-green-600 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};
