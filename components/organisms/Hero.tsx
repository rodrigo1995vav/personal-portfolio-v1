"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypeWriter } from "@/components/molecules/TypeWriter";
import { GlitchText } from "@/components/atoms/GlitchText";
import { CodeBlock } from "@/components/atoms/CodeBlock";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const codeSnippet = `const developer = {
  name: "Rodrigo Valdivia",
  role: "Fullstack Engineer (JS)",
  location: "Rosario, Argentina",
  experience: "4 years",
  skills: ["React", "Next.js", "TypeScript", "NestJS", "Node.js", "React Native", "AWS", "PostgreSQL", "MongoDB"],
  passion: "Building products that actually work for people"
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
                Hi, I am <GlitchText text="Rodrigo" className="text-primary" />
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground">
                <TypeWriter
                  texts={[
                    "Fullstack Engineer",
                    "TypeScript Specialist",
                    "React & NestJS Expert",
                    "Mobile Developer",
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
              Fullstack Developer with 4 years of experience, driven by the
              challenge of building products that actually work for people.
              My journey has taken me from lead roles in backend architecture
              for E-commerce to crafting seamless mobile and web experiences.
              I specialize in the TypeScript ecosystem—specifically NestJS and
              React—and I enjoy the balance of working independently while staying
              in sync with a great team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="gap-2" asChild>
                <a href="/resume.pdf" download="Rodrigo_Valdivia_Resume.pdf">
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent"
                asChild
              >
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
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
