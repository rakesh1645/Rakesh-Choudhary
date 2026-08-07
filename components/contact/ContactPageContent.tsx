import ContactHeaderSection from "./ContactHeaderSection";
import ContactFormSection from "./ContactFormSection";

export default function ContactPageContent() {
  return (
    <div className="flex flex-col gap-10 w-full animate-in fade-in duration-500 max-w-6xl mx-auto py-4">
      <ContactHeaderSection />
      <ContactFormSection />
    </div>
  );
}
