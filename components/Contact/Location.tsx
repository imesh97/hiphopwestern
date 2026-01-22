import { LocationMap } from "@/components/ui/expand-map";

export default function Location() {
  return (
    <main className="pt-48 pb-24 bg-black flex items-center justify-center w-full">
      {/* Subtle background gradient */}

      <div className="relative z-10 flex flex-col items-center gap-8">
        <LocationMap
          location="University Community Centre"
          coordinates="London, ON"
        />
      </div>
    </main>
  );
}
