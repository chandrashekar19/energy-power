import React, { useState } from "react";

export const GetAQuote = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    name: "",
    email: "",
    phone: "",
    industry: "",
    numberOfStations: "",
    estimatedChargers: "",
    chargerType: "",
    existingInfrastructure: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (checked ? value : "") : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-white to-green-200 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h2 className="text-green-600 text-2xl font-bold text-center mb-6">
          Get a Quote
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              className="input"
              onChange={handleChange}
            />
            <input
              type="text"
              name="numberOfStations"
              placeholder="Number of Charging Stations Required"
              className="input"
              onChange={handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input"
              onChange={handleChange}
            />
            <input
              type="text"
              name="estimatedChargers"
              placeholder="Estimated Number of Chargers Required"
              className="input"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input"
              onChange={handleChange}
            />
            <input
              type="text"
              name="industry"
              placeholder="Industry"
              className="input"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-semibold">
              Type of Chargers Interested In
            </label>
            <div className="flex gap-4">
              <label>
                <input
                  type="checkbox"
                  name="chargerType"
                  value="Level 2"
                  onChange={handleChange}
                />{" "}
                Level 2
              </label>
              <label>
                <input
                  type="checkbox"
                  name="chargerType"
                  value="DC Fast"
                  onChange={handleChange}
                />{" "}
                DC Fast
              </label>
              <label>
                <input
                  type="checkbox"
                  name="chargerType"
                  value="Combination"
                  onChange={handleChange}
                />{" "}
                Combination
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-semibold">
              Do you have any Existing EV Infrastructure?
            </label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="existingInfrastructure"
                  value="Yes"
                  onChange={handleChange}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="existingInfrastructure"
                  value="No"
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Message (Max 500 characters)"
            className="input h-24"
            onChange={handleChange}
          ></textarea>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="w-4 h-4"
            />
            <label htmlFor="terms" className="text-gray-600 text-sm">
              By submitting, you agree to our{" "}
              <a href="#" className="text-green-600 underline">
                Terms and Privacy Policy
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
