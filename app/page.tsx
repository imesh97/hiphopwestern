import HeroSection from "@/components/Home/HeroSection";
import GallerySection from "@/components/Home/GallerySection";
import BookSection from "@/components/Home/BookSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import EventsSection from "@/components/Home/EventsSection";
import CompanySection from "@/components/Home/CompanySection";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <BookSection />
      <EventsSection />
      <CompanySection />
      <GallerySection /> {/* interlude section too. */}
      <TestimonialsSection />
    </div>
  );
}
