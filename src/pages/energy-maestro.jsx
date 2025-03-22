import { Energy } from "../constants";

export const EnergyMaestro = () => {
  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-left space-y-4">
          <h2 className="text-green-600 font-bold text-3xl md:text-4xl leading-tight">
            Empowering Your <br /> EV Charge Network
          </h2>
          <p className="text-gray-700 text-lg">
            EnergyMaestro, a leading-edge charge network management system,
            seamlessly blends ERP and CRM functionalities to revolutionize
            electric vehicle infrastructure management. Designed to optimize
            energy costs and enhance user experience.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/intro.png"
            alt="EnergyMaestro"
            className="w-full max-w-md rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Dynamic Sections */}
      {Energy.map((section, index) => (
        <div
          key={index}
          className={`mt-12 flex flex-col md:flex-row ${
            section.reverse ? "md:flex-row-reverse" : ""
          } items-center bg-green-500 py-10 px-6 text-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl`}
        >
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={section.image}
              alt={section.title}
              className="w-full max-w-md rounded-lg shadow-md"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 text-left p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-green-600 font-bold text-xl md:text-2xl">
              {section.heading}
            </h3>
            <p className="mt-4 text-lg leading-relaxed">{section.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
