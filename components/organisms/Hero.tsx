"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypeWriter } from "@/components/molecules/TypeWriter";
import { GlitchText } from "@/components/atoms/GlitchText";
import { CodeBlock } from "@/components/atoms/CodeBlock";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const codeSnippet = `const developer = {
  name: "Rodrigo Valdivia",
  role: "Frontend Developer",
  location: "Rosario, Argentina",
  skills: ["React", "Next.js", "TypeScript", "Node.js", "Express.js", "Nest.js", "React Native", "Angular", "SQL, "MongoDB"],
  passion: "Building dynamic, user-focused web and mobile applications with seamless front-end experiences and robust back-end solutions"
};

console.log(developer.greeting());`;

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-mono text-sm"
              >
                {"<hello-world />"}
              </motion.p>
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm <GlitchText text="Rodrigo" className="text-primary" />
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground">
                <TypeWriter
                  texts={[
                    "Frontend Developer",
                    "React Specialist",
                    "TypeScript Enthusiast",
                    "FullStack Focused",
                  ]}
                />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Dedicated Front End Developer with deep expertise in JavaScript
              and TypeScript, excelling in crafting responsive, high-performance
              interfaces using React, Next.js, and Angular. Equally proficient
              in back-end development, leveraging Node.js, Express, and
              databases like PostgreSQL and MongoDB to build robust, end-to-end
              systems. Passionate about optimizing both client and server-side
              components for seamless, scalable solutions, I deliver innovative,
              user-focused applications while staying current with industry
              trends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4"
            >
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/rodrigo1995vav"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://linkedin.com/in/rodrigovaldivia95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:justify-self-end"
          >
            <CodeBlock code={codeSnippet} className="max-w-md" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
