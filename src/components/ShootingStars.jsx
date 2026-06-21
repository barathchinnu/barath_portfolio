import { useEffect, useState } from "react";

export default function ShootingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newStar = {
        id: Date.now(),
        top: Math.random() * window.innerHeight * 0.6,
        left: -200,
      };

      setStars((prev) => [...prev, newStar]);

      setTimeout(() => {
        setStars((prev) =>
          prev.filter((star) => star.id !== newStar.id)
        );
      }, 2500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute shooting-star"
          style={{
            top: `${star.top}px`,
            left: `${star.left}px`,
          }}
        />
      ))}
    </div>
  );
}