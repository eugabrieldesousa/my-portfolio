'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SeguidorMouse() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 220, damping: 28, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 28, mass: 0.6 });
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setVisivel(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [x, y]);

  if (!visivel) return null;

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block"
      aria-hidden
    >
      <div
        className="-translate-x-1/2 -translate-y-1/2"
        style={{
          width: 240,
          height: 240,
          background:
            'radial-gradient(circle, rgba(255,122,26,0.25) 0%, rgba(255,107,91,0.08) 40%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />
    </motion.div>
  );
}
