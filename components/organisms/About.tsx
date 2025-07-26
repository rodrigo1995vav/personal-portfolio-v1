"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Globe } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives my
            passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Location</h3>
                </div>
                <p className="text-muted-foreground">
                  Rosario, Santa Fe, Argentina
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Based in Argentina, working with global teams and clients
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Education</h3>
                </div>
                <p className="font-medium">Information Systems Engineering</p>
                <p className="text-sm text-muted-foreground">
                  Universidad del Centro Educativo Latinoamericano
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Languages</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Spanish</span>
                    <Badge variant="secondary">Native</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>English</span>
                    <Badge variant="secondary">C1</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Detail-oriented and highly skilled Front End JavaScript
                Developer with a solid background in both front-end and back-end
                development. Leveraging a diverse set of technologies, I bring a
                wealth of experience to create robust and scalable web
                applications. Known for delivering high-quality code and
                solutions within tight deadlines, I am passionate about staying
                up-to-date with the latest industry trends and technologies.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
