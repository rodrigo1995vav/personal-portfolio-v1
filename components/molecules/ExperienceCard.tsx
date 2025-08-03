"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

interface ExperienceCardProps {
  company: string
  position: string
  period: string
  location?: string
  description: string[]
  technologies?: string[]
  index: number
}

export function ExperienceCard({
  company,
  position,
  period,
  location,
  description,
  technologies = [],
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative"
    >
      <div className="absolute left-0 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
      <div className="absolute left-2 top-10 w-0.5 h-full bg-border"></div>

      <Card className="ml-8 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-primary">{position}</CardTitle>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">{company}</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {period}
              </div>
              {location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {location}
                </div>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-4">
            {description.map((item, idx) => (
              <li key={idx} className="text-sm leading-relaxed">
                • {item}
              </li>
            ))}
          </ul>
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
