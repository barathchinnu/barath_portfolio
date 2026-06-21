import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function GtaCardSimulator({ project = {} }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, {
    stiffness: 250,
    damping: 25,
  });

  const mouseY = useSpring(y, {
    stiffness: 250,
    damping: 25,
  });

  const rotateX = useTransform(
    mouseY,
    [-0.5, 0.5],
    ["12deg", "-12deg"]
  );

  const rotateY = useTransform(
    mouseX,
    [-0.5, 0.5],
    ["-12deg", "12deg"]
  );

  const tags = project?.tags || [];

  const colorClass =
    project?.color ||
    "from-pink-500 via-fuchsia-500 to-purple-700";

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="
        relative
        h-[500px]
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-black
        group
        cursor-pointer
        shadow-[0_0_25px_rgba(255,0,255,0.4)]
        hover:shadow-[0_0_50px_rgba(255,0,255,0.8)]
        transition-all
        duration-500
      "
    >
      {/* Background Image */}
      <img
        src={project?.image || "/images/placeholder.png"}
        alt={project?.title || "Project"}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          opacity-60
          group-hover:scale-110
          transition-all
          duration-700
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient Overlay */}
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-t
          ${colorClass}
          opacity-40
        `}
      />

      {/* Glow Border */}
      <div
        className="
          absolute
          inset-0
          rounded-3xl
          border
          border-fuchsia-500/40
          shadow-[0_0_40px_#ff00ff]
        "
      />

      {/* Content */}
      <div
        style={{
          transform: "translateZ(70px)",
        }}
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          justify-end
          p-8
        "
      >
        <h3
          className="
            text-4xl
            font-black
            uppercase
            italic
            text-white
            drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]
          "
        >
          {project?.title || "Untitled Project"}
        </h3>

        <p
          className="
            mt-2
            text-sm
            font-bold
            tracking-[4px]
            text-cyan-300
            uppercase
          "
        >
          {project?.subtitle || "PROJECT"}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded
                border
                border-white/20
                bg-black/40
                px-3
                py-1
                text-xs
                uppercase
                text-white
                backdrop-blur-sm
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-3">
          <a
            href={project?.demo || "#"}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1
              bg-fuchsia-500
              py-3
              text-center
              font-black
              text-black
              rounded-lg
              transition
              hover:scale-105
            "
          >
            LIVE DEMO
          </a>

          <a
            href={project?.github || "#"}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1
              border
              border-fuchsia-500
              py-3
              text-center
              font-black
              text-white
              rounded-lg
              transition
              hover:bg-fuchsia-500
              hover:text-black
            "
          >
            GITHUB
          </a>
        </div>
      </div>
    </motion.div>
  );
}