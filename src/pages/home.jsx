import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="pt-20 px-6 text-center">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: "url('/hero1.jpg')" }}
      >
        <h1 className="text-5xl font-bold text-green-600 drop-shadow-lg">
          The Schön Way
        </h1>
        <p className="mt-4 max-w-2xl text-lg font-medium drop-shadow-lg">
          Making Range Anxiety Charging Inconvenience a thing of the past by
          Making EV Chargers Cost-Effective and Smart
        </p>
        <Link to="/get-quote">
          <button className="mt-6 bg-green-500 hover:bg-green-600 transition-all text-white px-6 py-3 rounded-full text-lg font-semibold shadow-xl">
            Get a Quote
          </button>
        </Link>
      </div>

      {/* Products Section */}
      <div className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
          {[
            { src: "/powerup-3.png", label: "PowerUp 32" },
            { src: "/powerup-one.png", label: "PowerUp 22" },
            { src: "/powerup-four.png", label: "PowerUp 60" },
            { src: "/powerup-three.png", label: "PowerUp Mobile" },
          ].map((product, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={product.src}
                alt={product.label}
                className="w-full rounded-lg object-cover"
              />
              <p className="mt-3 font-semibold text-lg text-gray-700">
                {product.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Energy Maestro Section */}
      <div className="py-20 bg-gray-100 shadow-md rounded-lg mx-6 lg:mx-16">
        <h2 className="text-4xl font-bold text-gray-800">EnergyMÆSTRO</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-green-600">
              Our Charge Network Management Software
            </h3>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              EnergyMaestro, Schön’s innovative charge network management
              system, is the nexus of advanced EV infrastructure management and
              energy optimization. This platform, tailored for the evolving
              needs of electric vehicle support, streamlines operations, and
              reduces costs.
            </p>
          </div>
          <img
            src="/energy-maestro.png"
            alt="Energy Maestro"
            className="w-full max-w-md rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Industries We Service */}
      <div className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-gray-800">
          Industries We Service
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {[
            { src: "/auto-dealership.png", label: "Auto Dealerships" },
            { src: "/auto-marker.png", label: "AutoMakers" },
            { src: "/hospital.png", label: "Hospitality" },
            { src: "/retail.png", label: "Real Estate" },
          ].map((industry, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={industry.src}
                alt={industry.label}
                className="mx-auto w-16 h-16 object-contain"
              />
              <p className="mt-3 font-semibold text-lg text-gray-700">
                {industry.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
