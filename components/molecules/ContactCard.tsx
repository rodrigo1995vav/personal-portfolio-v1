"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

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
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="block"
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/50">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{value}</p>
        </CardContent>
      </Card>
    </CardWrapper>
  );
}
