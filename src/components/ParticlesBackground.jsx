import { useMemo } from "react";

export default function ParticlesBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 120 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 8 + 2,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        color:
          Math.random() > 0.5
            ? "#22d3ee"
            : "#ec4899",
      })),
    []
  );

  return (
   <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            boxShadow: `0 0 15px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
}