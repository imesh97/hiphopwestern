import ContactPage from "@/components/Contact/ContactPage";
import Location from "@/components/Contact/Location";

export default function Contact() {
  return (
    <div className="bg-black">
      <div className="z-50">
        <ContactPage />
      </div>

      <Location />
    </div>
  );
}
