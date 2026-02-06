"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "@/components/molecules/ExperienceCard";

const experiences = [
  {
    company: "Eudaimonia Software Solutions",
    position: "Full Stack Developer",
    period: "July 2022 - Present",
    location: "Remote",
    description: [
      "Backend Lead (Delivery Platform): Spearheaded the architectural design and backend development for a delivery/dine-in platform using NestJS and TypeScript to build a scalable engine capable of handling real-time orders and logistics",
      "Mobile Development (Kawasaki & Zanella): Developed and deployed the official mobile applications for Zanella and Kawasaki Argentina using React Native, ensuring high-performance and fluid user experience on both iOS and Android",
      "AI Project (Delfi AI): Led development of Delfi AI, an intelligent chat system based on AI agents (OpenAI), orchestrating Natural Language Processing logic and automation workflows",
      "Healthcare Platform (Sanoviv): Built a fullstack platform for the Sanoviv medical clinic, allowing patients to securely manage and view their medical studies and records",
      "Active participant in Agile sprints, working closely with UX/UI and QA teams to ensure delivery of high-quality code aligned with business goals",
    ],
    technologies: [
      "NestJS",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Angular",
      "OpenAI API",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
  },
  {
    company: "Sertex",
    position: "Front End Developer",
    period: "July 2021 - May 2022",
    location: "Rosario, Argentina",
    description: [
      "Spearheaded the development of the company's main landing page and back-office system using React.js and JavaScript",
      "Managed the codebase and version control strategies via GitHub, ensuring clean commit history and code reviews",
      "Optimized web interfaces for responsiveness, serving both client and internal platform needs",
    ],
    technologies: ["React.js", "JavaScript", "GitHub", "HTML5", "CSS3"],
  },
  {
    company: "Alkemy",
    position: "Full Stack Developer (Acceleration Program)",
    period: "April 2022 - June 2022",
    location: "Remote",
    description: [
      "Developed a responsive web application for the NGO \"SOMOS MAS\" within a Scrum simulation",
      "Architected the backend using Node.js, Express, and MySQL (Sequelize) for RESTful API management",
      "Built the frontend using React.js and Redux, focusing on efficient state management",
    ],
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "React.js",
      "Redux",
      "Jira",
      "Scrum",
    ],
  },
  {
    company: "Urban Roomie",
    position: "Front End Developer",
    period: "January 2021 - June 2021",
    location: "Remote",
    description: [
      "Contributed to web development and UI/UX improvements using HTML, CSS, JavaScript, and React.js",
      "Collaborated in an agile team environment using Git for version control",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Git"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through different companies and the impact I have made in
            each role
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.company}-${experience.period}`}
                {...experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
