import React from "react";
import { Link } from "react-router-dom";
import { features, power32, solutions } from "../constants";

export const PowerUp32 = () => {
  return (
    <div className="pt-26 px-6 text-center bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
      {/* Header Section */}
      <div className="p-10 rounded-2xl shadow-2xl border border-gray-200 w-full max-w-5xl mx-auto bg-white">
        <h1 className="text-4xl font-bold text-green-700">
          PowerUp 32 Bundle – A Commercial Charging Solution
        </h1>
        <p className="text-gray-800 mt-4 text-lg leading-relaxed">
          Elevate your eco-journey with the ultimate charging solution. Designed
          for premium venues, it offers more than just a charge—it allows for a
          leisurely recharge of an electric vehicle in about <b>8 hours</b>,
          giving ample time to explore, dine, or relax.
        </p>
        <p className="font-bold text-green-700 mt-4">Best suited for:</p>

        {/* Best Suited For Icons */}
        <div className="flex flex-wrap justify-center gap-6 my-6">
          {power32.map((item, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md bg-gradient-to-b from-white to-green-50 w-28 hover:shadow-xl transition-all"
            >
              <img src={item.src} alt={item.label} className="w-16 mx-auto" />
              <p className="mt-2 text-sm font-semibold text-gray-800">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Purchase Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://www.amazon.com/dp/B0DM446CY6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 hover:shadow-xl transition"
          >
            Buy at AMZ
          </a>
          <a
            href="https://shop.schonmobility.com/products/powerup-32-level-2-commercial-public-electric-vehicle-ev-charger-32-amp-240v-requires-energymaestro-software-subscription-30-month-best-for-hotels-apartments-fleet-managers?_gl=1*v7vn77*_ga*OTQ1MjcyMDgyLjE3NDE5NTA5NDQ.*_ga_7TWDL04ZGJ*MTc0MTk2NTg4Ny4zLjAuMTc0MTk2NTg4Ny42MC4wLjI2MTk2MDY3NQ.."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 hover:shadow-xl transition"
          >
            Buy with Us
          </a>
          <Link
            to="/contact"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 hover:shadow-xl transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Offer Text */}
        <p className="text-green-700 font-bold mt-4">
          * $500 OFF Offer Ends in 7 Days
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-12 p-8 bg-gradient-to-b from-green-100 to-green-200 rounded-2xl shadow-xl border border-gray-200 w-full max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-green-700">
          A Solution That Works For You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <img src={item.icon} alt={item.title} className="w-16 mx-auto" />
              <h3 className="font-bold mt-2 text-lg text-gray-800">
                {item.title}
              </h3>
              {item.features.map((feature, i) => (
                <p key={i} className="text-green-600 text-sm mt-1">
                  {feature}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="mt-12 p-8 bg-gradient-to-b from-green-200 to-green-300 rounded-2xl shadow-xl border border-gray-200 w-full max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-green-700">
          Key Features of EnergyMaestro Charge Management Software
        </h2>
        <p className="text-gray-800 italic">
          (1-Year Subscription Included in the Bundle)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <img src={item.image} alt={item.title} className="w-28 mx-auto" />
              <h3 className="font-bold mt-2 text-lg text-gray-800">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
