"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  skill: string
  level?: "beginner" | "intermediate" | "advanced" | "expert"
  index: number
}

export function SkillBadge({ skill, level = "intermediate", index }: SkillBadgeProps) {
  const levelColors = {
    beginner: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    intermediate: "bg-green-500/20 text-green-400 border-green-500/30",
    advanced: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    expert: "bg-red-500/20 text-red-400 border-red-500/30",
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge
        variant="outline"
        className={`${levelColors[level]} hover:bg-opacity-30 transition-all duration-300 cursor-pointer`}
      >
        {skill}
      </Badge>
    </motion.div>
  )
}
