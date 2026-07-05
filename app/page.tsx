import EditorialHero from "@/components/home/EditorialHero";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import ServiceIndex from "@/components/home/ServiceIndex";
import QuoteShowcase from "@/components/home/QuoteShowcase";
import BookCall from "@/components/sections/BookCall";

export default function HomePage() {
  return (
    <>
      <EditorialHero />
      <MarqueeTicker />
      <ServiceIndex />
      <QuoteShowcase />
      <BookCall />
    </>
  );
}
