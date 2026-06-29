import {
  motion,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function AutoScrollCarousel({
  children,
  speed = 0.03,
  className = "",
}: Props) {
  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);

  useAnimationFrame((_, delta) => {
    if (!paused) {
      x.set(x.get() - delta * speed);
    }
  });

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <motion.div
        drag="x"
        dragMomentum={false}
        style={{ x }}
        className="flex w-max gap-4 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => {
          setTimeout(() => setPaused(false), 1500);
        }}
        onDragStart={() => setPaused(true)}
        onDragEnd={() => {
          setTimeout(() => setPaused(false), 1500);
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}