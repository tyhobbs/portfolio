import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { IconSprite } from "@/components/IconSprite";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <>
      <IconSprite />
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}
