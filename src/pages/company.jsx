import { useState } from "react";

const sections = [
  {
    title: "Our Vision",
    content:
      "To make green energy available for everyone everywhere thereby accelerating sustainable transportation.",
    image: "/vision.png",
  },
  {
    title: "Our Mission",
    content:
      "Build hyper-local energy generation, storage, and distribution solutions thereby inspiring ease and confidence in using sustainable mobility solutions.",
    image: "/target.png",
  },
  {
    title: "Why Us",
    content:
      "Rooted in the automotive heartland of Michigan, USA, Schön is a visionary force in sustainable transportation. With strategic locations across Germany, India, and Australia, we offer a global footprint and a comprehensive suite of solutions, from design and development to production.",
    image: "/why-us.png",
  },
];

export const Company = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen px-6 md:px-20 py-12 pt-24">
      <h1 className="text-center text-green-700 text-4xl font-bold mb-12">
        Company
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-8 border-b pb-4 text-lg font-semibold">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`relative px-4 py-2 transition-all duration-300 
              ${
                activeSection === index
                  ? "text-green-700 after:absolute after:w-full after:h-1 after:bg-green-700 after:bottom-0 after:left-0"
                  : "text-gray-700 hover:text-green-600"
              }`}
            onClick={() => setActiveSection(index)}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-12 transition-all duration-500">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gray-800 text-lg leading-relaxed">
            {sections[activeSection].content}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={sections[activeSection].image}
            alt={sections[activeSection].title}
            className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-xl transition-all transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};
