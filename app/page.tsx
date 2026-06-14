import Hero from "@/components/sections/Hero";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import StatsBar from "@/components/sections/StatsBar";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import BookCall from "@/components/sections/BookCall";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeTicker />
      <Services />
      <StatsBar />
      <Testimonials limit={3} />
      <BookCall />
    </>
  );
}
