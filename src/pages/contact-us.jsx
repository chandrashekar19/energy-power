import React from "react";

export const ContactUs = () => {
  return (
    <div className="pt-24 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 bg-gradient-to-b from-white to-green-300">
      {/* Contact Form */}
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-green-700 text-center">
          Get in Touch
        </h2>
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Business Name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
            />
          </div>
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Message (Max 500 characters)"
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
          ></textarea>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="w-4 h-4" />
            <label htmlFor="terms" className="text-sm">
              By submitting, you agree to our{" "}
              <a href="#" className="text-green-600 underline">
                Terms and Privacy Policy
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="hidden md:flex flex-col items-center ml-12 text-center">
        <img src="/contact-us.png" alt="Contact Us" className="w-40 mb-4" />
        <h2 className="text-2xl font-bold text-green-700">CONTACT US</h2>
        <p className="text-gray-700 mt-2">sales@schonmobility.com</p>
        <p className="text-gray-700">(248) 242-7520</p>
        <p className="text-gray-700">
          Schon Mobility, Inc.
          <br />
          Bloomfield Hills, MI 48302-5007
        </p>
      </div>
    </div>
  );
};
