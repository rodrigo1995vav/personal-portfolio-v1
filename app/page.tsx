import { About } from "@/components/organisms/About";
import { Contact } from "@/components/organisms/Contact";
import { Experience } from "@/components/organisms/Experience";
import { Hero } from "@/components/organisms/Hero";
import { NavBar } from "@/components/organisms/NavBar";
import { Skills } from "@/components/organisms/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
