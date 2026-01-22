import Link from "next/link";
import GalleryButton from "./GalleryButton";

export default function FeaturedSection() {
  return (
    <Link href="https://instagram.com/hiphopwestern">
      <main
        id="gallery"
        className="min-h-[400px] sm:min-h-[600px] bg-black flex flex-col items-center justify-center gap-4 px-8 py-2"
      >
        <div className="flex flex-col items-center gap-5 italic">
          {/* dance? vid? x2 
          <MagneticText text="elevate" hoverText="~elevate" />
          <MagneticText text="dance." hoverText="dance~" />*/}
          <GalleryButton />
        </div>
      </main>
    </Link>
  );
}
