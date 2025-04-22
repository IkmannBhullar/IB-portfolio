import { CardBody, CardContainer, CardItem } from "./ui/3DCard"; // ✅ import your Aceternity UI 3D card components
import profilePic from "../assets/chaihut-bg-main.png"; // ⛳ Replace with your own photo later

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-16 bg-white dark:bg-slate-900 text-black dark:text-white">


      <CardContainer containerClassName="w-full">
        <CardBody className="w-full max-w-6xl mx-auto p-8 md:p-12 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-10 items-center justify-between">

          <CardItem translateZ={50} className="w-48 h-48 shrink-0 rounded-full overflow-hidden shadow-lg">
            <img src={profilePic} alt="Ikmann Bhullar" className="w-full h-full object-cover" />
          </CardItem>

          <CardItem translateZ={30} className="text-left max-w-3xl">
            <h3 className="text-3xl font-semibold mb-4">Hi, I’m Ikmann 👋</h3>
            <p className="text-lg mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
              I’m a full stack developer based in Seattle with a deep love for building interactive, fast, and beautiful web experiences. My mission is to create tech that not only works, but *feels* smooth and impressive. I’m always chasing ways to push boundaries in UI/UX.
            </p>
            <p className="text-sm uppercase font-bold text-purple-500 mb-2">Passions</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>🏀 Building playful, animated interfaces</li>
              <li>🛍️ E-commerce & creative branding</li>
              <li>💻 React, Motion, Tailwind wizardry</li>
              <li>📍 Based in Seattle, WA</li>
            </ul>
          </CardItem>
        </CardBody>
      </CardContainer>
      {/* ↓ Scroll Arrow */}
<div className="mt-16 flex justify-center">
  <button
    onClick={() => {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }}
    className="animate-bounce text-purple-500 hover:text-purple-700 transition"
    aria-label="Scroll to Projects"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>
</div>
    </section>
  );
};

export default About;
