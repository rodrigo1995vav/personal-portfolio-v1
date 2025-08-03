"use client";

import { motion } from "framer-motion";
import { SkillBadge } from "@/components/atoms/SkillBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Wrench, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "JavaScript", level: "expert" as const },
      { name: "TypeScript", level: "expert" as const },
      { name: "HTML", level: "expert" as const },
      { name: "CSS", level: "expert" as const },
      { name: "Python", level: "intermediate" as const },
      { name: "C", level: "beginner" as const },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Smartphone,
    skills: [
      { name: "React.js", level: "expert" as const },
      { name: "Next.js", level: "expert" as const },
      { name: "React Native", level: "advanced" as const },
      { name: "Angular", level: "advanced" as const },
      { name: "Node.js", level: "advanced" as const },
      { name: "Express.js", level: "advanced" as const },
      { name: "Nest.js", level: "intermediate" as const },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: "advanced" as const },
      { name: "MySQL", level: "advanced" as const },
      { name: "MongoDB", level: "intermediate" as const },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: [
      { name: "Git", level: "expert" as const },
      { name: "GitHub", level: "expert" as const },
      { name: "Docker", level: "intermediate" as const },
      { name: "Heroku", level: "intermediate" as const },
      { name: "Jira", level: "advanced" as const },
      { name: "SCRUM", level: "advanced" as const },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I
            use to build amazing applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="w-4 h-4 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBadge
                        key={skill.name}
                        skill={skill.name}
                        level={skill.level}
                        index={skillIndex}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
