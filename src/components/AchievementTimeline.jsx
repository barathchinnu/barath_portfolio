import React, { useRef } from "react";
import { achievements } from "../data/constants";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AchievementTimeline() {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const carY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 900]
  );

  return (
    <section
      id="achievements"
      className="py-24 px-6 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-20">
          Achievements
        </h2>

        <div
          ref={timelineRef}
          className="relative"
        >
          {/* Road */}
          <div
            className="
              absolute
              left-12
              top-0
              bottom-0
              w-2
              rounded-full
              bg-gradient-to-b
              from-cyan-400
              via-fuchsia-500
              to-purple-600
            "
          />

          {/* Moving Car */}
          <motion.img
            src="/images/car.png"
            alt="car"
            style={{
              y: carY,
              rotate: 180,
            }}
            className="
              absolute
              left-0
              top-0
              w-24
              z-50
              pointer-events-none
              drop-shadow-[0_0_25px_#22d3ee]
            "
          />

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: 200,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                relative
                mb-24
                pl-32
                group
              "
            >
              {/* Checkpoint */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="
                  absolute
                  left-[-80px]
                  top-8
                  w-5
                  h-5
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_25px_#22d3ee]
                "
              />

              {/* Card */}
              <div
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-md
                  p-8
                  transition-all
                  duration-500
                  hover:scale-[1.02]
                  hover:border-cyan-400/60
                  hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
                "
              >
                {/* GTA Label */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="
                    text-xs
                    tracking-[4px]
                    text-cyan-400
                    uppercase
                    font-bold
                    mb-2
                  "
                >
                  Mission Unlocked
                </motion.p>

                <p className="text-fuchsia-400 font-bold">
                  {item.year}
                </p>

                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="
                    text-3xl
                    md:text-4xl
                    font-black
                    text-white
                    mt-2
                  "
                >
                  {item.title}
                </motion.h3>

                <p className="text-cyan-300 mt-2">
                  {item.organization}
                </p>

                <p className="text-gray-300 mt-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-3
                        py-1
                        rounded-full
                        border
                        border-white/20
                        text-sm
                        transition-all
                        duration-300
                        group-hover:border-cyan-400
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}