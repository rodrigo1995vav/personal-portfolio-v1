"use client";

import { motion } from "framer-motion";
import { ContactCard } from "@/components/molecules/ContactCard";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "rodrigo1995val2@gmail.com",
    href: "mailto:rodrigo1995val2@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+54 9 341 5010421",
    href: "tel:+5493415010421",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "rodrigo1995vav",
    href: "https://github.com/rodrigo1995vav",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "rodrigovaldivia95",
    href: "https://linkedin.com/in/rodrigovaldivia95",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to work together? Feel free to reach out through any of these
            channels
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((contact, index) => (
            <ContactCard key={contact.title} {...contact} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            © 2024 Rodrigo Valdivia. Built with Next.js, TypeScript, and
            Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
