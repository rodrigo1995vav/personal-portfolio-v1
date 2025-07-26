import { About } from "@/components/organisms/About";
import { Hero } from "@/components/organisms/Hero";
import { NavBar } from "@/components/organisms/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <About />
    </main>
  );
}
