import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";

import TracksContainer from "@/components/TracksContainer";
import Outcome from "@/components/Outcome";

export default function Home() {
  return (
    <main>
      <Hero />
      <Courses />
      <TracksContainer />
      <Outcome />
    </main>
  );
}
