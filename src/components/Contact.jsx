"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Confetti from "react-confetti";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const spotlight = document.createElement("div");
    spotlight.className = "spotlight-cursor";
    document.body.appendChild(spotlight);

    const move = (e) => {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j6r04z7",
        "template_n4135gu",
        formRef.current,
        "llSHV2si5l4yw6Mq9"
      )
      .then(() => {
        setSubmitted(true);
        formRef.current?.reset();
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {/* Spotlight Style */}
      <style>{`
        .spotlight-cursor {
          position: fixed;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 80%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          z-index: 999;
          mix-blend-mode: overlay;
        }
      `}</style>

      <section
        id="contact"
        className="relative min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-6 md:px-12 py-32 overflow-hidden transition-colors duration-500"
      >
        {/* Confetti Celebration */}
        {submitted && <Confetti numberOfPieces={300} recycle={false} />}

        {/* Confirmation Message */}
        {submitted && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute top-10 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-6 py-3 rounded-xl shadow-xl z-50"
          >
            🎉 Yay! Your message has been sent.
          </motion.div>
        )}

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-slate-100/70 dark:bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-slate-200 dark:border-white/20 shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-500 dark:text-purple-400">
            Let’s Connect 💬
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-semibold text-white shadow-lg"
            >
              {submitted ? "Message Sent 🎉" : "Send Message"}
            </motion.button>
          </form>

          {/* Socials */}
          <div className="mt-10 flex justify-center gap-6 text-xl">
            <a href="https://github.com/IkmannBhullar" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-purple-500 transition" />
            </a>
            <a href="https://linkedin.com/in/ikmannbhullar" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-purple-500 transition" />
            </a>
            <a href="https://twitter.com/ikmannbhullar" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-purple-500 transition" />
            </a>
          </div>
        </motion.div>

        {/* Map embed with Seattle pin */}
        <div className="mt-20 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-slate-300 dark:border-slate-700">
          <iframe
            title="Seattle Location"
            src="https://maps.google.com/maps?q=Seattle,%20WA&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-80"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;