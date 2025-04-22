import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact, SiTailwindcss, SiJavascript, SiTypescript, SiNodedotjs,
  SiExpress, SiMongodb, SiFirebase, SiVite, SiFramer, SiGit,
  SiFigma, SiPostman, SiHtml5, SiCss3
} from 'react-icons/si';
import { BackgroundBeamsWithCollision } from './ui/BackgroundBeamsWithCollision'; // ✅ adjust path as needed

const proficient = [
  { name: 'React', icon: SiReact, color: 'text-sky-500', desc: 'Component-based frontend framework' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400', desc: 'Utility-first CSS framework' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', desc: 'Core scripting language for the web' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', desc: 'JavaScript runtime for backend development' },
  { name: 'Express', icon: SiExpress, color: 'text-white dark:text-gray-300', desc: 'Minimalist backend framework' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', desc: 'NoSQL database for JSON-like data' },
  { name: 'Git', icon: SiGit, color: 'text-orange-500', desc: 'Version control system' },
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-600', desc: 'Markup language for web structure' },
  { name: 'CSS3', icon: SiCss3, color: 'text-blue-400', desc: 'Stylesheet language for web presentation' },
];

const learning = [
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', desc: 'Typed superset of JavaScript' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500', desc: 'Backend-as-a-service platform' },
  { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-500', desc: 'Animation library for React' },
  { name: 'Figma', icon: SiFigma, color: 'text-pink-400', desc: 'Collaborative UI/UX design tool' },
  { name: 'Postman', icon: SiPostman, color: 'text-orange-400', desc: 'API platform for testing & docs' },
  { name: 'Vite', icon: SiVite, color: 'text-purple-500', desc: 'Lightning fast frontend build tool' },
];

const SkillCard = ({ name, Icon, color, desc, delay }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`w-48 bg-slate-900 dark:bg-slate-800 border border-purple-600 p-4 rounded-2xl shadow-xl hover:shadow-purple-500/60 cursor-pointer relative z-10 group transition duration-300`}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      onClick={() => setOpen(!open)}
    >
      <div className={`text-5xl ${color} mb-2 group-hover:drop-shadow-[0_0_10px]`}>
        <Icon />
      </div>
      <div className="text-sm font-semibold text-white mb-2">{name}</div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-[-100px] w-56 bg-slate-950 text-white text-xs px-4 py-3 rounded-xl border border-purple-700 z-20 shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {desc}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-32 bg-slate-950 text-white overflow-hidden">
      <BackgroundBeamsWithCollision className="w-full py-32 px-6 md:px-12 min-h-[100vh]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-lime-400 font-mono"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            $ skills --list
          </motion.h2>

          <motion.h3 className="text-xl font-semibold mb-6 text-purple-400">
            Proficient 🧠
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {proficient.map((s, i) => (
              <SkillCard
                key={i}
                name={s.name}
                Icon={s.icon}
                color={s.color}
                desc={s.desc}
                delay={i * 0.05}
              />
            ))}
          </div>
                    {/* Glowing explosion at bottom
          <div className="relative mt-32 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: [0.3, 0.8, 0.1], scale: [0.4, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-transparent blur-2xl"
            />
          </div> */}

          <motion.h3 className="text-xl font-semibold mb-6 text-purple-400">
            Currently Learning ⚡
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-6">
            {learning.map((s, i) => (
              <SkillCard
                key={i}
                name={s.name}
                Icon={s.icon}
                color={s.color}
                desc={s.desc}
                delay={i * 0.05 + 0.3}
              />
            ))}
          </div>


        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Skills;
