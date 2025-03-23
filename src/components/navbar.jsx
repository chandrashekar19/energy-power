import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    <header
      className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl 
      bg-white shadow-lg rounded-full px-8 py-3 flex items-center justify-between z-50"
    >
      <nav className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo.jpg" alt="Schön" className="h-10 w-10" />
          <span className="text-xl font-bold text-gray-900">SCHÖN</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link to="/" className="text-gray-700 hover:text-black transition">
            Home
          </Link>
          <Link
            to="/energymaestro"
            className="text-gray-700 hover:text-black transition"
          >
            EnergyMÆSTRO
          </Link>

          {/* Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="text-gray-700 hover:text-black flex items-center transition"
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
            className="text-gray-700 hover:text-black transition"
          >
            Company
          </Link>
        </div>

        {/* "Let’s Talk" Button */}
        <Link
          to="/contact-us"
          className="bg-green-500 text-white px-6 py-2 rounded-full 
          shadow-md hover:bg-green-600 transition text-lg font-semibold"
        >
          Let's Talk
        </Link>
      </nav>
    </header>
  );
};
