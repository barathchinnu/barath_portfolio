import { projects } from '../data/constants'; // Ensure your path is correct
import GtaCardSimulator from './GtaCardSimulator';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-16 text-center">
          Featured <span className="text-cyan-400">Missions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <GtaCardSimulator key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}