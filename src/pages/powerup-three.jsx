export const PowerUpMobile = () => {
  return (
    <div className="pt-8 px-6 py-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      {/* Left Side - Images */}
      <div className="flex flex-col items-center gap-4">
        <img src="/van-closed.png" alt="PowerUp Mobile Van" className="w-72" />
      </div>

      {/* Right Side - Text and Icons */}
      <div className="flex-1 text-left">
        <h1 className="text-3xl font-bold text-green-600">PowerUp Mobile</h1>
        <p className="text-gray-700 mt-2">
          Introducing PowerUp Mobile: your ultimate solution for emergency EV
          charging and network expansion. This portable DC fast charger delivers
          quick, on-the-go energy boosts, ensuring you’re never left stranded.
        </p>
        <p className="text-gray-700 mt-4">
          Ideal for temporary setups, roadside assistance, and filling charging
          gaps, PowerUp Mobile is the agile, efficient answer to keeping the
          journey going. Wherever there’s a need for a swift charge, PowerUp
          Mobile steps in to power up your adventure, seamlessly blending
          flexibility with reliability.{" "}
          <span className="font-bold text-green-600">Best suited for</span>
        </p>

        {/* Best Suited For Section */}
        <div className="mt-6 flex gap-4">
          {[
            { img: "/enroute.png", label: "ENROUTE" },
            { img: "/activities.png", label: "EVENTS" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg text-center shadow-md w-32 bg-white"
            >
              <img src={item.img} alt={item.label} className="h-12 mx-auto" />
              <p className="mt-2 font-semibold text-green-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
