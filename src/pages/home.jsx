import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="text-center">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: "url('/hero-banner.png')" }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-green-600 drop-shadow-lg animate-fadeIn">
          The Schon Way
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl font-medium drop-shadow-lg animate-fadeIn delay-200">
          Making Range Anxiety Charging Inconvenience a thing of the past by
          Making EV Chargers Cost-Effective and Smart
        </p>
        <Link to="/get-quote">
          <button className="mt-6 bg-green-500 hover:bg-green-600 transition-all text-white px-8 py-3 rounded-full text-lg md:text-xl font-semibold shadow-xl hover:shadow-2xl animate-bounce">
            Get a Quote
          </button>
        </Link>
      </div>

      {/* Products Section  -skew-y-6 */}
      <div className="relative py-20 bg-white">
        {/* Diagonal Background */}
        <div className="absolute top-0 left-0 w-full h-full transform  origin-bottom-left"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800">
            Our Products
          </h2>

          {/* Slider for Mobile & Grid for Desktop */}
          <div className="mt-12 md:grid md:grid-cols-4 gap-6 px-6 overflow-x-auto scrollbar-hide flex md:block space-x-4 md:space-x-0">
            {[
              { src: "/powerup-3.png", label: "PowerUp 32" },
              { src: "/powerup-one.png", label: "PowerUp 22" },
              { src: "/powerup-four.png", label: "PowerUp 60" },
              { src: "/powerup-three.png", label: "PowerUp Mobile" },
            ].map((product, index) => (
              <div
                key={index}
                className="min-w-[250px] md:w-auto bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={product.src}
                  alt={product.label}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-black text-white text-center p-3 font-semibold text-lg">
                  {product.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Energy Maestro Section */}
      <div className="py-20 shadow-md rounded-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800">
          EnergyMÆSTRO
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-green-400">
              Our Charge Network Management Software
            </h3>
            <p className="mt-4  text-lg leading-relaxed text-green-800">
              EnergyMaestro, Schön's innovative charge network management
              system, is the nexus of advanced EV infrastructure management and
              energy optimization. This platform, tailored for the evolving
              needs of electric vehicle support, streamlines operations, and
              reduces costs.
            </p>
          </div>
          <img
            src="/energy-maestro.png"
            alt="Energy Maestro"
            className="w-full max-w-md rounded-lg shadow-xl hover:shadow-2xl transition-all"
          />
        </div>
      </div>

      {/* Industries We Service */}
      <div className="py-20 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800">
          Industries We Service
        </h2>

        {/* Slider for Mobile */}
        <div className="mt-10 overflow-x-scroll md:overflow-hidden whitespace-nowrap scrollbar-hide flex md:grid md:grid-cols-4 gap-6 md:gap-10 px-4">
          {[
            { src: "/auto-dealership.png", label: "Auto Dealerships" },
            { src: "/auto-marker.png", label: "AutoMakers" },
            { src: "/hospital.png", label: "Hospitality" },
            { src: "/retail.png", label: "Real Estate" },
            { src: "/parking.png", label: "Parking" },
            { src: "/munci.png", label: "Municipality" },
            { src: "/work-place.png", label: "Work Place" },
          ].map((industry) => (
            <div
              key={industry.label}
              className="text-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2 w-48 md:w-auto inline-block md:block"
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
