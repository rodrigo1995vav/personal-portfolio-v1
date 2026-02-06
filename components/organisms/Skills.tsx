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
      { name: "JavaScript (ES6+)", level: "expert" as const },
      { name: "TypeScript", level: "expert" as const },
      { name: "HTML5", level: "expert" as const },
      { name: "CSS3", level: "expert" as const },
      { name: "SQL", level: "advanced" as const },
      { name: "Python", level: "intermediate" as const },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Smartphone,
    skills: [
      { name: "React.js", level: "expert" as const },
      { name: "Next.js", level: "expert" as const },
      { name: "NestJS", level: "expert" as const },
      { name: "Node.js", level: "advanced" as const },
      { name: "React Native (Expo)", level: "advanced" as const },
      { name: "Angular", level: "advanced" as const },
      { name: "Express.js", level: "advanced" as const },
      { name: "Tailwind CSS", level: "expert" as const },
      { name: "Redux", level: "advanced" as const },
    ],
  },
  {
    title: "Databases & ORM",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: "advanced" as const },
      { name: "MySQL", level: "advanced" as const },
      { name: "MongoDB", level: "advanced" as const },
      { name: "Sequelize", level: "advanced" as const },
      { name: "TypeORM", level: "advanced" as const },
    ],
  },
  {
    title: "Cloud, DevOps & Tools",
    icon: Wrench,
    skills: [
      { name: "AWS (EC2, S3, Elastic Beanstalk)", level: "advanced" as const },
      { name: "Docker", level: "advanced" as const },
      { name: "Git", level: "expert" as const },
      { name: "CI/CD", level: "advanced" as const },
      { name: "OpenAI API", level: "advanced" as const },
      { name: "Claude Code", level: "advanced" as const },
      { name: "GitHub Copilot", level: "advanced" as const },
      { name: "Jira", level: "advanced" as const },
      { name: "Scrum", level: "advanced" as const },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
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
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="h-full relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {category.title}
                    </span>
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
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
