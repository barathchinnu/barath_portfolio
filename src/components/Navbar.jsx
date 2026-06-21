import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-vice-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-vice-pink to-vice-cyan">
          BARATH 
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">

          <a
            href="#about"
            className="relative group hover:text-white transition-colors"
          >
            About
            <span
              className="
                absolute
                left-0
                -bottom-2
                h-[2px]
                w-0
                bg-gradient-to-r
                from-cyan-400
                to-fuchsia-500
                shadow-[0_0_10px_#22d3ee]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </a>

          <a
            href="#skills"
            className="relative group hover:text-white transition-colors"
          >
            Skills
            <span
              className="
                absolute
                left-0
                -bottom-2
                h-[2px]
                w-0
                bg-gradient-to-r
                from-cyan-400
                to-fuchsia-500
                shadow-[0_0_10px_#22d3ee]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </a>

          <a
            href="#projects"
            className="relative group hover:text-white transition-colors"
          >
            Projects
            <span
              className="
                absolute
                left-0
                -bottom-2
                h-[2px]
                w-0
                bg-gradient-to-r
                from-cyan-400
                to-fuchsia-500
                shadow-[0_0_10px_#22d3ee]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </a>

          <a
            href="#education"
            className="relative group hover:text-white transition-colors"
          >
            Education
            <span
              className="
                absolute
                left-0
                -bottom-2
                h-[2px]
                w-0
                bg-gradient-to-r
                from-cyan-400
                to-fuchsia-500
                shadow-[0_0_10px_#22d3ee]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </a>

          <a
            href="#achievements"
            className="relative group hover:text-white transition-colors"
          >
            Achievements
            <span
              className="
                absolute
                left-0
                -bottom-2
                h-[2px]
                w-0
                bg-gradient-to-r
                from-cyan-400
                to-fuchsia-500
                shadow-[0_0_10px_#22d3ee]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </a>

        </div>

        {/* Resume Button */}
        <a
          href="/Barath_Resume.pdf"
          download
          className="
            px-5
            py-2
            rounded-full
            bg-white/10
            hover:bg-white/20
            text-white
            text-sm
            font-semibold
            transition-all
            border
            border-white/10
            flex
            items-center
            gap-2
          "
        >
          <Download size={16} />
          Resume
        </a>
      {/*get in touch*/}
      <a
          href="#contact"
          className="
            px-5
            py-2  
          rounded-full
            bg-white/10
            hover:bg-white/20
            text-white
            text-sm   
          font-semibold
            transition-all  
          border
            border-white/10
            flex
            items-center
            gap-2
          "
        >
          GET IN TOUCH
        </a>
      </div>
    </nav>
  );
}

        

