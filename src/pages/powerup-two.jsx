import React from "react";

export const PowerUp60 = () => {
  return (
    <div className="pt-24 px-6 text-center space-y-10 bg-gradient-to-b from-green-50 to-green-200 min-h-screen">
      {/* Title and Subtitle */}
      <h1 className="text-4xl font-extrabold text-green-700 drop-shadow-md">
        Discover PowerUp 60
      </h1>

      {/* Layout for Image and Description */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Charger Image */}
        <div className="flex-shrink-0 md:w-1/2 flex justify-center">
          <img
            src="/charger.png"
            alt="PowerUp 60 Charger"
            className="w-[320px] h-[400px] md:w-[420px] shadow-xl rounded-lg transition-transform transform hover:scale-105"
          />
        </div>

        {/* Description and Best Suited For Section */}
        <div className="md:w-1/2 text-left space-y-5">
          <p className="text-gray-800 text-lg leading-relaxed">
            Experience the future of fast charging with our sleek, visually
            stunning DC charger. Power up your journey in just 60 minutes.
          </p>

          {/* Best Suited For Section */}
          <h2 className="text-green-700 font-bold text-xl">Best Suited For</h2>
          <div className="mt-4 flex flex-wrap gap-6">
            {[
              { img: "/restaurant.png", label: "Restaurants" },
              { img: "/rest.png", label: "Rest Stops" },
              { img: "/malls.png", label: "Malls" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-xl text-center shadow-md w-32 bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-1"
              >
                <img src={item.img} alt={item.label} className="h-12 mx-auto" />
                <p className="mt-2 font-semibold text-green-700">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Charging Specifications",
            icon: "/general-info.png",
            data: [
              { label: "Charging Mode:", value: "AC, Mode 3 / DC, Mode 4" },
              { label: "Charging Ports:", value: "2-3" },
              { label: "Operating Temp:", value: "-35°C to +55°C" },
              { label: "IP Protection:", value: "IP 54" },
            ],
          },
          {
            title: "Power Specifications",
            icon: "/electric-info.png",
            data: [
              { label: "Power:", value: "60 kW Max" },
              {
                label: "Voltage:",
                value: "Single CCS: 200 - 920 Vdc, Dual CCS: 200 - 500 Vdc",
              },
              { label: "Current:", value: "125A Max" },
            ],
          },
          {
            title: "Enclosure & Dimensions",
            icon: "/settings.png",
            data: [
              { label: "Enclosure Material:", value: "Metal Panel" },
              { label: "Dimensions:", value: "1754 x 684 x 421 mm" },
              { label: "Weight:", value: "551 lbs" },
              { label: "Mounting Type:", value: "Base Mounted" },
            ],
          },
          {
            title: "Connectivity & Display",
            icon: "/connectivity.png",
            data: [
              {
                label: "Communication:",
                value: "Wi-Fi, Ethernet, Cellular (2G/3G/4G)",
              },
              { label: "User Interface:", value: "Resistive Touch Screen" },
              { label: "Display:", value: "10.4” Color TFT LCD (4:3)" },
              {
                label: "Authorization:",
                value: "Free mode, RFID, OCPP remote",
              },
            ],
          },
        ].map((spec, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-1"
          >
            <img
              src={spec.icon}
              alt={spec.title}
              className="h-12 mx-auto mb-3"
            />
            <h3 className="text-green-700 text-lg font-bold text-center">
              {spec.title}
            </h3>
            <table className="mt-4 w-full border-t border-gray-300 text-left">
              <tbody>
                {spec.data.map((item, i) => (
                  <tr key={i} className="border-b border-gray-300">
                    <td className="py-2 font-semibold text-gray-700">
                      {item.label}
                    </td>
                    <td className="py-2 text-gray-800">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};
