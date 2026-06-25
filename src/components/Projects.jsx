import React from "react";

const projects = [
  {
    name: "Pull Ice",
    category: "Food & Beverage",
    description:
      "Handcrafted popsicle brand site showcasing artisanal ice pops, catering, franchise and cloud-kitchen offerings.",
    url: "https://pullice.com/",
  },
  {
    name: "Fresh Monkee",
    category: "Health & Beverage",
    description:
      "Health-focused smoothie and protein shake chain site highlighting natural ingredients and nutritional transparency.",
    url: "https://freshmonkee.com/",
  },
  {
    name: "Rise Up Nutrition",
    category: "Sports Nutrition",
    description:
      "E-commerce site for a sports nutrition brand selling protein powders, amino acids and pre-workout supplements.",
    url: "https://www.theriseupnutrition.com",
  },
  {
    name: "V Convention Hotel",
    category: "Hospitality",
    description:
      "Booking site for a luxury beachfront resort in Bapatla, featuring rooms, dining and event facilities.",
    url: "https://www.v-hotels.in/",
  },
  {
    name: "Kyzen Hotels",
    category: "Hospitality",
    description:
      "Hotel group website for two business-friendly properties in Hyderabad with dining and conference facilities.",
    url: "https://www.kyzenhotels.com/",
  },
  {
    name: "Eficaa",
    category: "Energy Tech",
    description:
      "Corporate site for a smart energy management and metering technology company serving utilities and enterprises.",
    url: "https://www.eficaa.com/",
  },
  {
    name: "Nextenti",
    category: "AI / Technology",
    description: "Landing page for an AI-driven technology platform.",
    url: "https://nextenti.ai/",
  },
];

const ProjectCard = ({ name, category, description, url, index }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="group flex flex-col justify-between bg-white rounded-[1.5rem] p-8 border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(192,62,46,0.15)] hover:-translate-y-1 transition-all duration-300"
  >
    <div>
      <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C03E2E] mb-4">
        {category}
      </span>
      <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight group-hover:text-[#C03E2E] transition-colors">
        {name}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed font-medium">
        {description}
      </p>
    </div>
    <div className="flex items-center gap-2 mt-6 text-sm font-bold text-gray-900 group-hover:text-[#C03E2E] transition-colors">
      Visit Site
      <svg
        className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 17L17 7M7 7h10v10"
        />
      </svg>
    </div>
  </a>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#f4f4f4] py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="max-w-2xl mb-16">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Projects I've brought to life
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            A selection of full-stack web applications built end-to-end for
            clients across food &amp; beverage, hospitality, nutrition and
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
