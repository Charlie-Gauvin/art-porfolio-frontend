import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-background1 font-antonio text-background1">
      <h2 className="pt-20 text-center text-4xl text-text3 md:text-center md:text-5xl lg:text-7xl">
        Contact
      </h2>
      <p className="p-10 text-center text-text1">
        Pour toute question, collaboration ou commande, contactez-moi et
        ensemble, donnons vie à vos inspirations !
      </p>
      <ContactForm />
    </div>
  );
}
