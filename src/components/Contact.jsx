import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { CheckCircle } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset after 4s
    setTimeout(() => {
      setSubmitted(false);
      formRef.current?.reset();
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 pb-32 bg-slate-950 text-white"
    >
      {/* Confetti animation */}
      {submitted && <Confetti numberOfPieces={200} recycle={false} />}

      <motion.div
        className="w-full max-w-lg bg-slate-900 rounded-2xl shadow-xl p-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-purple-400 text-center">
          Get in Touch ✉️
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-1 text-purple-300">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-purple-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-purple-300">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 rounded-lg bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          {/* Morphing Button */}
          <motion.button
            type="submit"
            disabled={submitted}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-md hover:bg-purple-700 transition"
          >
            {submitted ? (
              <>
                <CheckCircle className="w-5 h-5 text-white animate-bounce" />
                Sent!
              </>
            ) : (
              <>Send Message</>
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
