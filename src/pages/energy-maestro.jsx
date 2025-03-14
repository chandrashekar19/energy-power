import { Energy } from "../constants";

export const EnergyMaestro = () => (
  <div className="pt-20 px-6 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-left">
        <h2 className="text-green-600 font-bold text-2xl">
          Empowering Your <br /> EV Charge Network
        </h2>
        <p className="text-gray-700 mt-4">
          EnergyMaestro, a leading-edge charge network management system,
          seamlessly blends ERP and CRM functionalities to revolutionize
          electric vehicle infrastructure management. Designed to optimize
          energy costs and enhance user experience.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img src="/intro.png" alt="EnergyMaestro" className="w-full max-w-md" />
      </div>
    </div>

    {Energy.map((section, index) => (
      <div
        key={index}
        className={`mt-12 flex flex-col md:flex-row ${
          section.reverse ? "md:flex-row-reverse" : ""
        } items-center bg-green-500 py-10 px-6 text-white rounded-lg shadow-lg`}
      >
        <div className="md:w-1/2 flex justify-center">
          <img
            src={section.image}
            alt={section.title}
            className="w-full max-w-md"
          />
        </div>
        <div className="md:w-1/2 text-left p-6 bg-white text-gray-800 rounded-lg shadow-lg">
          <h3 className="text-green-600 font-bold text-xl">
            {section.heading}
          </h3>
          <p className="mt-4">{section.text}</p>
        </div>
      </div>
    ))}
  </div>
);
