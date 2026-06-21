import { skills } from "../data/constants";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="
          text-5xl
          md:text-7xl
          font-black
          text-white
          uppercase
          text-center
          mb-16
        "
        >
          Tech <span className="text-cyan-400">Stack</span>
        </h2>

        {skills.map((category) => (
          <div key={category.category} className="mb-14">
            <h3
              className="
              text-2xl
              font-bold
              text-fuchsia-400
              mb-6
              uppercase
              tracking-wide
            "
            >
              {category.category}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {category.items.map((skill) => (
                <div
                  key={skill.name}
                  className="
                  group
                  flex
                  items-center
                  gap-4
                  p-5
                  rounded-2xl
                  bg-white/[0.03]
                  border
                  border-white/10
                  backdrop-blur-md
                  hover:border-cyan-400/50
                  hover:scale-105
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
                  transition-all
                  duration-300
                  cursor-pointer
                "
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="
                    w-12
                    h-12
                    object-contain
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                  />

                  <span
                    className="
                    text-gray-300
                    font-semibold
                    transition-all
                    duration-300
                    group-hover:text-cyan-300
                  "
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}