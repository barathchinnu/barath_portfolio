import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener(
        "mousemove",
        updateMousePosition
      );
    };
  }, []);

  return (
    <>
      <div
        className="
          fixed
          pointer-events-none
          z-[99999]
          w-12
          h-12
          rounded-full
          border
          border-white/20
        "
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div
        className="
          fixed
          pointer-events-none
          z-[99999]
          w-3
          h-3
          rounded-full
          bg-white
          shadow-[0_0_25px_white]
        "
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}