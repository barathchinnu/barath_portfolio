import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

import {
  SiGmail,
  SiLeetcode,
  SiX,
} from "react-icons/si"

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.04 }}
          className="
    relative
    w-[320px]
    md:w-[400px]
    mx-auto
    rounded-[32px]
    border
    border-cyan-500/20
    p-3
    bg-white/[0.03]
    backdrop-blur-md
    overflow-hidden
    shadow-[0_0_50px_rgba(34,211,238,0.15)]
  "
        >
          <img
            src="/images/profile.jpg"
            alt="Barath"
            className="
    w-full
    h-[420px]
    object-cover
    rounded-[24px]
  "
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-xl mb-4">
          </p>

<motion.h1
  whileHover={{
    color: "#ffffff",
    scale: 1.05,
  }}
  className="
    text-6xl
    md:text-8xl
    font-black
    text-cyan-400
    stroke-text
    cursor-pointer
    transition-all
    duration-300
  "
>
  BARATH 
</motion.h1>

          <h2
            className="
              mt-6
              text-3xl
              md:text-5xl
              font-black
              text-white
            "
          >
            Full Stack Developer • AI Developer • SIH Pre-Finalist
          </h2>

          <p
            className="
              mt-8
              text-gray-300
              text-lg
              leading-relaxed
              max-w-2xl
            "
          >
            I build scalable web applications, AI-powered solutions,
            Deep Learning systems and IoT products that solve real-world
            problems. Passionate about React, Node.js, AWS, MongoDB,
            YOLOv8, OpenCV and modern software engineering.
          </p>


          {/* Social Icons Card */}
          <div
            className="
              mt-10
              flex
              gap-8
              w-fit
              px-8
              py-6
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-md
            "
          >
            <a href="https://www.linkedin.com/in/barath-magendiran-93108930a" target="_blank" rel="noreferrer">
              <FaLinkedin
                size={30}
                className="hover:text-cyan-400 transition"
              />
            </a>

            <a href="mailto:barathchinnu5@gmail.com" target="_blank" rel="noreferrer">
              <SiGmail
                size={30}
                className="hover:text-red-400 transition"
              />
            </a>

            <a href="https://github.com/barathchinnu" target="_blank" rel="noreferrer">
              <FaGithub
                size={30}
                className="hover:text-white transition"
              />
            </a>

            <a href="https://leetcode.com/u/barath_24csr036/" target="_blank" rel="noreferrer">
              <SiLeetcode
                size={30}
                className="hover:text-yellow-400 transition"
              />
            </a>

            <a href="https://www.hackerrank.com/profile/barath_24csr036" target="_blank" rel="noreferrer">
              <FaDiscord
                size={30}
                className="hover:text-indigo-400 transition"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}