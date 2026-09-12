import MouseBackground from "@/components/MouseBackrgound";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <MouseBackground />
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Connect />
        <Footer />

        <MusicPlayer />
      </main>

      
    </>
  );
}