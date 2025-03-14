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
    <div className="w-full h-[150px] bg-black flex justify-center items-center">
      <nav className="bg-white shadow-md p-4 flex justify-between items-center w-[90%] max-w-7xl top-8 z-50 rounded-full px-6">
        <div className="flex items-center space-x-3">
          <img src="/logo.jpg" alt="Power Charging" className="h-12 w-12" />
          <span className="text-xl font-bold text-gray-800">
            Power Charging
          </span>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link
            to="/energymaestro"
            className="text-gray-700 hover:text-green-600"
          >
            EnergyMÆSTRO
          </Link>
          <div className="relative dropdown-list" ref={dropdownRef}>
            <button
              className="text-gray-700 hover:text-green-600 flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Products <ChevronDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg p-2 rounded w-48">
                <Link
                  to="/powerup-32"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  PowerUp 32
                </Link>
                <Link
                  to="/powerup-60"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  PowerUp 60
                </Link>
                <Link
                  to="/powerup-mobile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  PowerUp Mobile
                </Link>
              </div>
            )}
          </div>
          <Link to="/company" className="text-gray-700 hover:text-green-600">
            Company
          </Link>
        </div>
        <Link
          to="#"
          className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600"
        >
          Contact Us
        </Link>
      </nav>
    </div>
  );
};
