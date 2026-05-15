"use client";
import { motion } from "framer-motion";

const decorations = [
  { type: "cross", x: "8%", y: "15%", size: 12, delay: 0 },
  { type: "square", x: "92%", y: "20%", size: 8, delay: 0.5 },
  { type: "cross", x: "15%", y: "75%", size: 10, delay: 1 },
  { type: "square", x: "85%", y: "65%", size: 6, delay: 0.3 },
  { type: "cross", x: "50%", y: "10%", size: 8, delay: 0.7 },
  { type: "square", x: "70%", y: "85%", size: 10, delay: 1.2 },
];

function Cross({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none">
      <line x1="5" y1="0" x2="5" y2="10" stroke="#050505" strokeWidth="1.5" />
      <line x1="0" y1="5" x2="10" y2="5" stroke="#050505" strokeWidth="1.5" />
    </svg>
  );
}

function Square({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none">
      <rect x="1" y="1" width="8" height="8" stroke="#050505" strokeWidth="1.5" />
    </svg>
  );
}

export default function PixelDecorations({ opacity = 0.25 }: { opacity?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity }}>
      {decorations.map((d, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: d.x, top: d.y }}
          animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: d.delay, ease: "easeInOut" }}
        >
          {d.type === "cross" ? <Cross size={d.size} /> : <Square size={d.size} />}
        </motion.div>
      ))}
    </div>
  );
}
