"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
  index: number;
}

export function ContactCard({
  icon: Icon,
  title,
  value,
  href,
  index,
}: ContactCardProps) {
  const CardWrapper = href ? motion.a : motion.div;

  return (
    <CardWrapper
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="block group"
    >
      <Card className="h-full relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardContent className="p-8 text-center relative z-10">
          <div className="relative mb-6 inline-block">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 animate-ping opacity-0 group-hover:opacity-20" />

            {href && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowUpRight className="w-3 h-3 text-white" />
              </div>
            )}
          </div>

          <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
            {value}
          </p>
        </CardContent>

        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>
    </CardWrapper>
  );
}
