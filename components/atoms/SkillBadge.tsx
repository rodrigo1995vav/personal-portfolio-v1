"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

interface SkillBadgeProps {
  skill: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
  index: number;
}

export function SkillBadge({
  skill,
  level = "intermediate",
  index,
}: SkillBadgeProps) {
  const levelConfig = {
    beginner: {
      gradient: "from-blue-500/20 to-blue-600/20",
      border: "border-blue-500/30 hover:border-blue-500/60",
      text: "text-blue-600 dark:text-blue-400",
      dots: 1,
    },
    intermediate: {
      gradient: "from-emerald-500/20 to-teal-600/20",
      border: "border-emerald-500/30 hover:border-emerald-500/60",
      text: "text-emerald-600 dark:text-emerald-400",
      dots: 2,
    },
    advanced: {
      gradient: "from-purple-500/20 to-pink-600/20",
      border: "border-purple-500/30 hover:border-purple-500/60",
      text: "text-purple-600 dark:text-purple-400",
      dots: 3,
    },
    expert: {
      gradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
      border: "border-indigo-500/30 hover:border-indigo-500/60",
      text: "text-indigo-600 dark:text-indigo-400",
      dots: 4,
    },
  };

  const config = levelConfig[level];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="relative"
    >
      <Badge
        variant="outline"
        className={`
          relative overflow-hidden
          bg-gradient-to-r ${config.gradient}
          ${config.border} ${config.text}
          border-2
          px-4 py-2
          font-medium
          transition-all duration-300
          cursor-pointer
          hover:shadow-lg
          group
        `}
      >
        <span className="relative z-10 flex items-center gap-2">
          {level === "expert" && <Sparkles className="w-3 h-3 animate-pulse" />}
          {skill}
        </span>

        <div className="flex gap-1 ml-2">
          {Array.from({ length: config.dots }).map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 rounded-full ${config.text} opacity-60`}
            />
          ))}
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${config.gradient} blur-sm`}
          />
        </div>
      </Badge>
    </motion.div>
  );
}
