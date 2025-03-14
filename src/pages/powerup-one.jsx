import React from "react";
import { Link } from "react-router-dom";
import { features, power32, solutions } from "../constants";

export const PowerUp32 = () => {
  return (
    <div className="pt-20 px-6 text-center">
      {/* Header Section */}
      <div className="p-8 rounded-md shadow-xl border border-gray-200 w-full h-[530px]">
        <h1 className="text-3xl font-bold text-green-600">
          PowerUp 32 Bundle – A Commercial Charging Solution
        </h1>
        <p className="text-gray-700 mt-4">
          Elevate your eco-journey with the ultimate charging solution. Designed
          for premium venues, it offers more than just a charge—it allows for a
          leisurely recharge of an electric vehicle in about <b>8 hours</b>,
          giving ample time to explore, dine, or relax.
        </p>
        <p className="font-bold text-green-600">Best suited for:</p>

        {/* Best Suited For Icons */}
        <div className="flex justify-center gap-4 my-6">
          {power32.map((item, index) => (
            <div key={index} className="p-4 border rounded-lg shadow">
              <img src={item.src} alt={item.label} className="w-12 mx-auto" />
              <p className="mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Purchase Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="https://www.amazon.com/dp/B0DM446CY6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            Buy at AMZ
          </a>

          <a
            href="https://shop.schonmobility.com/products/powerup-32-level-2-commercial-public-electric-vehicle-ev-charger-32-amp-240v-requires-energymaestro-software-subscription-30-month-best-for-hotels-apartments-fleet-managers?_gl=1*v7vn77*_ga*OTQ1MjcyMDgyLjE3NDE5NTA5NDQ.*_ga_7TWDL04ZGJ*MTc0MTk2NTg4Ny4zLjAuMTc0MTk2NTg4Ny42MC4wLjI2MTk2MDY3NQ.."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            Buy with Us
          </a>

          <Link
            to="/contact"
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            Contact Us
          </Link>
        </div>

        {/* Offer Text */}
        <p className="text-green-600 font-bold mt-4">
          * $500 OFF Offer Ends in 7 Days
        </p>

        {/* Features Section */}
        <div className="mt-8 text-left max-w-2xl mx-auto">
          <ul className="list-disc list-inside">
            <li>
              Comes with a Heavy-Duty pedestal and Two Safety bollards for
              secure setup.
            </li>
            <li>
              Includes <b>1-Year Charge Management Subscription</b> for easy
              control via <span className="font-bold">EnergyMÆSTRO</span>.
            </li>
            <li>Customizable features to fit your business’s unique needs.</li>
          </ul>
        </div>
      </div>
      {/* Additional Sections (from screenshots) */}
      <div className="mt-12 p-6 bg-white rounded-lg shadow-xl border border-gray-200 w-full h-[400px]">
        <h2 className="text-xl font-bold text-green-600">
          A Solution That Works For You
        </h2>
        <div className="grid grid-cols-3 gap-6 mt-6">
          {solutions.map((item, index) => (
            <div key={index} className="text-center">
              <img src={item.icon} alt={item.title} className="w-12 mx-auto" />
              <h3 className="font-bold mt-2">{item.title}</h3>
              {item.features.map((feature, i) => (
                <p key={i} className="text-green-600">
                  {feature}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 p-6 bg-white rounded-lg shadow-xl border border-gray-200">
        <h2 className="text-xl font-bold text-green-600">
          Key Features of EnergyMaestro Charge Management Software
        </h2>
        <p className="text-gray-700 italic">
          (1-Year Subscription Included in the Bundle)
        </p>

        <div className="grid grid-cols-3 gap-6 mt-6">
          {features.map((item, index) => (
            <div key={index} className="text-center">
              <img src={item.image} alt={item.title} className="w-36 mx-auto" />
              <h3 className="font-bold mt-2">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
