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
    <div className="bg-gray-100 min-h-screen px-6 md:px-20 py-10 pt-24">
      <h1 className="text-center text-green-600 text-4xl font-bold mb-10">
        Company
      </h1>
      {/* Tabs */}
      <div className="flex justify-center gap-10 border-b pb-4 text-lg font-semibold">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`${
              activeSection === index
                ? "text-green-600 underline"
                : "text-gray-700"
            } hover:text-green-600 transition-all`}
            onClick={() => setActiveSection(index)}
          >
            {section.title}
          </button>
        ))}
      </div>
      {/* Content Section */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gray-700 text-lg">
            {sections[activeSection].content}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={sections[activeSection].image}
            alt={sections[activeSection].title}
            className="w-64 h-64 md:w-80 md:h-80 object-contain"
          />
        </div>
      </div>
    </div>
  );
};
