"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text);

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const timeouts: NodeJS.Timeout[] = [];

    const createGlitch = () => {
      const glitched = text
        .split("")
        .map((char) => {
          if (Math.random() < 0.1) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        })
        .join("");

      setGlitchText(glitched);

      const resetTimeout = setTimeout(() => {
        setGlitchText(text);
      }, 100);

      timeouts.push(resetTimeout);
    };

    const interval = setInterval(createGlitch, 3000);

    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, [text]);

  return (
    <motion.span
      className={`inline-block ${className}`}
      animate={{
        textShadow: [
          "0 0 0px #00ff00",
          "2px 0 0px #ff0000, -2px 0 0px #00ff00",
          "0 0 0px #00ff00",
        ],
      }}
      transition={{
        duration: 0.1,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 3,
      }}
    >
      {glitchText}
    </motion.span>
  );
}
