import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-background1 font-antonio text-text3">
      <h2 className="p-20 text-center text-4xl md:text-left md:text-5xl lg:text-7xl">
        Contact
      </h2>
      <ContactForm />
    </div>
  );
}
