// ./ui/Spotlight.jsx
import { useEffect, useState } from "react";

const Spotlight = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(500px at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.05), transparent)`,
      }}
    />
  );
};

export default Spotlight;
