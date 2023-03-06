import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";

import TracksContainer from "@/components/TracksContainer";

export default function Home() {
  return (
    <main>
      <Background />
      <Navbar />
      <Hero />
      <Courses />
      <TracksContainer />
    </main>
  );
}
