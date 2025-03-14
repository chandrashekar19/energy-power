import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="bg-gray-900 text-white p-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      <div>
        <h3 className="text-green-400 font-bold mb-2">Quick Links</h3>
        <ul className="space-y-1">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/quote" className="hover:underline">
              Get a Quote
            </Link>
          </li>
          <li>
            <Link to="/company" className="hover:underline">
              Company
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-green-400 font-bold mb-2">Products</h3>
        <ul className="space-y-1">
          <li>
            <Link to="/powerup-32" className="hover:underline">
              PowerUp 32
            </Link>
          </li>
          <li>
            <Link to="/powerup-60" className="hover:underline">
              PowerUp 60
            </Link>
          </li>
          <li>
            <Link to="/powerup-mobile" className="hover:underline">
              PowerUp Mobile
            </Link>
          </li>
          <li>
            <Link to="/energymaestro" className="hover:underline">
              EnergyMÆSTRO
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-green-400 font-bold mb-2">Industries</h3>
        <ul className="space-y-1">
          <li>Auto Dealership</li>
          <li>Automakers</li>
          <li>Hospitality Sector</li>
          <li>Apartments</li>
          <li>Parking Operators</li>
          <li>Retail</li>
          <li>Workplace</li>
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-bold mb-2">Talk to our agent</h3>
        <p>Mon-Fri</p>
        <p>8:00am - 5:00pm (ET)</p>
        <p>
          Email:{" "}
          <a
            href="mailto:sales@schonmobility.com"
            className="text-green-400 hover:underline"
          >
            sales@schonmobility.com
          </a>
        </p>
      </div>
    </div>
  </footer>
);
