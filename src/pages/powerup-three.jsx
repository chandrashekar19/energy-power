import React from "react";

export const PowerUpMobile = () => {
  return (
    <div className="pt-26 px-6 py-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 rounded-2xl shadow-lg">
      {/* Left Side - Images */}
      <div className="flex flex-col items-center gap-6">
        <img
          src="/van-closed.png"
          alt="PowerUp Mobile Van"
          className="w-80 shadow-xl rounded-lg hover:scale-105 transition-transform"
        />
      </div>

      {/* Right Side - Text and Icons */}
      <div className="flex-1 text-left space-y-5">
        <h1 className="text-4xl font-extrabold text-green-700">
          PowerUp Mobile
        </h1>
        <p className="text-gray-800 text-lg leading-relaxed">
          Introducing <span className="font-bold">PowerUp Mobile</span>: your
          ultimate solution for emergency EV charging and network expansion.
          This **portable DC fast charger** delivers quick, on-the-go energy
          boosts, ensuring you’re never left stranded.
        </p>
        <p className="text-gray-800 text-lg">
          Ideal for temporary setups, roadside assistance, and filling charging
          gaps, PowerUp Mobile keeps the journey going. Wherever there’s a need
          for a **swift charge**, PowerUp Mobile steps in to power up your
          adventure—**blending flexibility with reliability**.
        </p>
        <h2 className="text-green-700 font-bold text-xl">Best Suited For</h2>

        {/* Best Suited For Section */}
        <div className="mt-6 flex gap-6">
          {[
            { img: "/enroute.png", label: "ENROUTE" },
            { img: "/activities.png", label: "EVENTS" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-5 border rounded-xl text-center shadow-md w-36 bg-white hover:shadow-2xl transition-transform hover:-translate-y-1"
            >
              <img src={item.img} alt={item.label} className="h-14 mx-auto" />
              <p className="mt-2 font-semibold text-green-700">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
