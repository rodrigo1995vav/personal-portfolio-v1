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
      "Led the development of various applications, including a customer-facing e-commerce platform, internal systems, mobile apps, and AI projects",
      "Worked with multiple languages, frameworks and tools such as TypeScript, React, Next.js, Angular, Node.js, and BitBucket",
      "Collaborated with UX/UI designers and QA engineers to deliver high-quality, visually appealing web applications",
      "Built and deployed mobile applications for iOS and Android using React Native and Expo",
      "Updated existing projects to the latest framework versions for enhanced performance and security",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "React Native",
      "Expo",
      "BitBucket",
    ],
  },
  {
    company: "Sertex",
    position: "Front End Developer",
    period: "July 2021 - May 2022",
    description: [
      "Led the development of the company's main landing page and back-office system using React.js and JavaScript",
      "Collaborated with cross-functional teams to design, implement, and optimize web features",
      "Managed codebase and version control through GitHub",
      "Focused on delivering responsive and user-friendly interfaces for both client and internal platforms",
    ],
    technologies: ["React.js", "JavaScript", "GitHub", "HTML", "CSS"],
  },
  {
    company: "Alkemy",
    position: "Full Stack Developer",
    period: "April 2022 - June 2022",
    description: [
      "Developed a responsive web application in collaboration with a team over three months for SOMOS MAS ONG",
      "Utilized Node.js, Express, MySQL, and Sequelize for backend development, and React.js with Redux for the frontend",
      "Implemented Scrum methodology and utilized Jira for task assignment and project management",
    ],
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "React.js",
      "Redux",
      "Jira",
      "SCRUM",
    ],
  },
  {
    company: "Urban Roomie",
    position: "Front End Developer",
    period: "January 2021 - June 2021",
    description: [
      "Contributed to web development using HTML, CSS, JavaScript, and React.js",
      "Assisted in UI/UX improvements and collaborated on feature implementation",
      "Worked with Git for version control in an agile team",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Git"],
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
