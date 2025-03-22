import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-green-400 font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-green-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/get-quote" className="hover:text-green-400 transition">
                Get a Quote
              </Link>
            </li>
            <li>
              <Link to="/company" className="hover:text-green-400 transition">
                Company
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:text-green-400 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-green-400 font-bold mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/powerup-32"
                className="hover:text-green-400 transition"
              >
                PowerUp 32
              </Link>
            </li>
            <li>
              <Link
                to="/powerup-60"
                className="hover:text-green-400 transition"
              >
                PowerUp 60
              </Link>
            </li>
            <li>
              <Link
                to="/powerup-mobile"
                className="hover:text-green-400 transition"
              >
                PowerUp Mobile
              </Link>
            </li>
            <li>
              <Link
                to="/energymaestro"
                className="hover:text-green-400 transition"
              >
                EnergyMÆSTRO
              </Link>
            </li>
          </ul>
        </div>

        {/* Industries We Serve */}
        <div>
          <h3 className="text-green-400 font-bold mb-4">Industries</h3>
          <ul className="space-y-2">
            <li>Auto Dealership</li>
            <li>Automakers</li>
            <li>Hospitality Sector</li>
            <li>Apartments</li>
            <li>Parking Operators</li>
            <li>Retail</li>
            <li>Workplace</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-bold mb-4">Talk to our agent</h3>
          <p>Mon-Fri, 8:00 AM - 5:00 PM (ET)</p>
          <div className="mt-3 space-y-2">
            <p className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-green-400" />
              <a
                href="mailto:sales@schonmobility.com"
                className="hover:text-green-400 transition"
              >
                sales@schonmobility.com
              </a>
            </p>
            <p className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-green-400" />
              <a
                href="tel:+1234567890"
                className="hover:text-green-400 transition"
              >
                +1 (234) 567-890
              </a>
            </p>
            <p className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-green-400" />
              <span>123 Main St, City, Country</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Schon Mobility. All rights reserved.</p>
      </div>
    </footer>
  );
};
