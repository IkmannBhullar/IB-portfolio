import { MacbookScroll } from "./ui/MacbookScroll";
import ThemeToggle from "./ThemeToggle";
import Spotlight from "./ui/Spotlight";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] px-4 pt-20 md:pt-32 pb-12 flex flex-col items-center justify-start
        bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-slate-900
        text-slate-900 dark:text-white overflow-hidden"
    >
      {/* Spotlight Cursor */}
      <Spotlight />

      {/* Theme toggle */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      {/* Hero Text */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold relative inline-block">
          Hi, I'm Ikmann <span className="text-purple-500">— Full Stack Dev</span>
          {/* 🔥 Animated gradient line */}
          <span className="block h-[3px] mt-2 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-pulse rounded-full" />
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2">
          Welcome to my dev work 👨‍💻
        </p>
      </motion.div>

      {/* MacBook Scroll — HUGGED tightly */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        className="mt-6 scale-[0.95] md:scale-100"
      >
        <MacbookScroll
          src="/src/assets/hero-img.png"
          showGradient
        />
      </motion.div>

      {/* Scroll Down Chevron */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [10, 0, 10] }}
        transition={{
          delay: 1.4,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 z-20"
      >
        <a
          href="#about"
          className="text-purple-400 hover:text-purple-600 transition text-3xl"
        >
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
