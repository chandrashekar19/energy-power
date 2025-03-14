export const PowerUp60 = () => {
  return (
    <div className="pt-10 px-4 text-center space-y-3">
      {/* Title and Subtitle */}
      <h1 className="text-3xl font-bold text-green-600">Discover PowerUp 60</h1>
      {/* Layout for Image and Description */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Charger Image */}
        <div className="flex-shrink-0 md:w-1/2 flex justify-center">
          <img
            src="/charger.png"
            alt="PowerUp 60 Charger"
            className="w-[300px] h-[380px] md:w-[350px]"
          />
        </div>

        {/* Description and Best Suited For Section */}
        <div className="md:w-1/2 flex flex-col text-left">
          <p className="text-gray-700 max-w-lg">
            Experience the future of fast charging with our sleek, visually
            stunning DC charger. Power up your journey in just 60 minutes.
          </p>

          {/* Best Suited For Section */}
          <h2 className="mt-6 text-green-600 font-bold text-lg">
            Best Suited For
          </h2>
          <div className="mt-4 flex justify-start gap-6 flex-wrap">
            {[
              { img: "/restaurant.png", label: "Restaurants" },
              { img: "/rest.png", label: "Rest Stops" },
              { img: "/malls.png", label: "Malls" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg text-center shadow-md w-32 bg-white"
              >
                <img src={item.img} alt={item.label} className="h-12 mx-auto" />
                <p className="mt-2 font-semibold text-green-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Overview Section */}
      <h2 className="mt-8 text-xl font-bold">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-left max-w-4xl mx-auto">
        {/* Charging Specifications */}
        <div className="p-4 border h-[300px] rounded-md shadow-2xl  border border-gray-200 bg-white">
          <img
            src="/general-info.png"
            alt="Charging Icon"
            className="h-12 mx-auto"
          />
          <table className="mt-4 w-full border-t border-gray-300 text-left">
            <tbody>
              {[
                { label: "Charging Mode:", value: "AC, Mode 3 / DC, Mode 4" },
                { label: "Charging Ports:", value: "2-3" },
                { label: "Operating Temp.:", value: "-35°C to +55°C" },
                { label: "IP Protection:", value: "IP 54" },
              ].map((item, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="py-2 font-semibold">{item.label}</td>
                  <td className="py-2">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Power Specifications */}
        <div className="p-4 border rounded-md h-[300px] shadow-2xl  border border-gray-200 bg-white">
          <img
            src="/electric-info.png"
            alt="Power Icon"
            className="h-12 mx-auto"
          />
          <table className="mt-4 w-full border-t border-gray-300 text-left">
            <tbody>
              {[
                { label: "Power:", value: "60 kW Max" },
                {
                  label: "Voltage:",
                  value: "Single CCS: 200 - 920 Vdc, Dual CCS: 200 - 500 Vdc",
                },
                { label: "Current:", value: "125A Max" },
              ].map((item, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="py-2 font-semibold">{item.label}</td>
                  <td className="py-2">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-left max-w-4xl mx-auto">
        <div className="p-4 border rounded-md h-[300px] shadow-2xl border border-gray-200 bg-white">
          <img
            src="/settings.png"
            alt="Material Icon"
            className="h-12 mx-auto"
          />
          <table className="mt-4 w-full border-t border-gray-300 text-left">
            <tbody>
              {[
                { label: "Enclosure Material:", value: "Metal Panel" },
                { label: "Dimensions:", value: "1754 x 684 x 421 mm" },
                { label: "Weight:", value: "551 lbs" },
                { label: "Mounting Type:", value: "Base Mounted" },
              ].map((item, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="py-2 font-semibold">{item.label}</td>
                  <td className="py-2">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border rounded-md h-[300px] shadow-2xl  border border-gray-200 bg-white">
          <img
            src="/connectivity.png"
            alt="Communication Icon"
            className="h-12 mx-auto"
          />
          <table className="mt-4 w-full border-t border-gray-300 text-left">
            <tbody>
              {[
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
              ].map((item, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="py-2 font-semibold">{item.label}</td>
                  <td className="py-2">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
