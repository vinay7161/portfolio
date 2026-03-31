import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Frontend Skills
const frontendSkills = [
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TailwindCSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Redux",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Bootstrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Material UI",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "NPM",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
];

// Additional Skillslls (BaadditionalSkills)
const additionalSkills = [
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Postman",
    src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
];

const MySkills = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="bg-[#0e1124] py-20 px-5 sm:px-8 text-white">
      {/* Frontend Heading */}
      <div className="text-center mb-14">
        <h2
          className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text leading-tight"
          data-aos="fade-down"
        >
          Frontend Skills
        </h2>
        <p
          className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
        >
          Technologies I use to build modern and responsive user interfaces.
        </p>
      </div>

      {/* Frontend Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20 px-4">
        {frontendSkills.map((skill, index) => (
          <div
            key={skill.name}
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center 
      hover:scale-110 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/20
      transition-all duration-300 group cursor-pointer"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="w-14 h-14 md:w-16 md:h-16 object-contain mb-4 
        group-hover:scale-110 transition-transform duration-300"
            />

            <p
              className="text-sm md:text-base font-medium text-gray-300 
      group-hover:text-white transition text-center"
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* Backend Heading */}
      <div className="text-center mb-14">
        <h2
          className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text leading-tight"
          data-aos="fade-down"
        >
          Additional Skills
        </h2>
        <p
          className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
        >
          I also have basic knowledge of these backend technologies.
        </p>
      </div>

      {/* Additional Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
        {additionalSkills.map((skill, index) => (
          <div
            key={skill.name}
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center 
      hover:scale-110 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 
      transition-all duration-300 group cursor-pointer"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="w-14 h-14 md:w-16 md:h-16 object-contain mb-3 
        group-hover:scale-110 transition-transform duration-300"
            />

            <p
              className="text-sm md:text-base font-medium text-gray-300 
      group-hover:text-white transition text-center"
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
