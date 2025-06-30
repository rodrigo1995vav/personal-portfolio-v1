import Navbar from "./components/organisms/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-blue text-white">
      <div>
        <Navbar />
        <section id="about" className="h-screen">
          <div>
            <h1>About Me</h1>
            {/* Content for About section */}
          </div>
        </section>
        <section id="experience" className="h-screen">
          <h1>Experience</h1>
          {/* Content for Experience section */}
        </section>
        <section id="work" className="h-screen">
          <h1>Work</h1>
          {/* Content for Work section */}
        </section>
        <section id="contact" className="h-screen">
          <h1>Contact</h1>
          {/* Content for Contact section */}
        </section>
      </div>
    </div>
  );
}
