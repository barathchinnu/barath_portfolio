import { education } from "../data/constants";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <div className="w-14 h-14 rounded-full border border-cyan-500/30 flex items-center justify-center">
            <FaGraduationCap className="text-cyan-400 text-xl" />
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white">
            Education
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-md
                p-8
                group
              "
            >
              {/* Neon top line */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}
              />

              {/* Mission Number */}
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  border
                  border-cyan-500/20
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  font-bold
                "
              >
                {item.id}
              </div>

              <p className="mt-8 text-cyan-400 font-semibold">
                {item.year}
              </p>

              <h3 className="mt-3 text-3xl font-black text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.institution}
              </p>

              <div
                className="
                  mt-8
                  inline-flex
                  px-4
                  py-2
                  rounded-full
                  border
                  border-fuchsia-500/30
                  text-fuchsia-400
                  font-bold
                "
              >
                {item.score}
              </div>

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-br
                  from-cyan-500/5
                  via-transparent
                  to-fuchsia-500/5
                "
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}