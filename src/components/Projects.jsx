import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'LiteMusic 🎧',
    description: 'A music discovery web app using the Deezer API with audio previews, search, trending, and genre filters.',
    tech: ['React', 'Tailwind', 'Deezer API'],
    image: '/src/assets/Lite-music-bg-main.png',
    link: 'https://lite-music.netlify.app/',
    github: 'https://github.com/IkmannBhullar/Lite-Music',
  },
  {
    title: 'Chai Hut: Modern Tea Shop 🫖',
    description: 'A cozy web app for a modern tea lounge, built with an animated menu, online orders, and responsive layout.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: '/src/assets/chaihut-bg-main.png',
    link: 'https://chaithut.netlify.app/',
    github: 'https://github.com/IkmannBhullar/Chai-Hut',
  },
  {
    title: 'TryAgain® Portfolio',
    description: 'Personal brand site built with React and Vite — minimal, responsive, and animated to impress.',
    tech: ['Vite', 'React', 'Framer Motion'],
    image: '/images/tryagain.png',
    link: 'https://tryagain.me',
    github: 'https://github.com/yourusername/tryagain',
  },
];

const Projects = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("projects");
      if (section) {
        const { top } = section.getBoundingClientRect();
        setVisible(top < window.innerHeight * 0.9);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="projects"
      className={`py-20 px-6 md:px-12 max-w-7xl mx-auto transition-all duration-700 ease-in-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 dark:text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-slate-700"
          >
            {/* Project Image */}
            <div className="overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 text-xs mb-4">
                {project.tech.map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2 py-1 rounded"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 text-sm font-medium">
                <a href={project.link} target="_blank" className="text-purple-600 hover:underline">
                  Live Site
                </a>
                <a href={project.github} target="_blank" className="text-gray-600 dark:text-gray-300 hover:underline">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
