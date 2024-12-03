// import Image from "next/image";
// import splashForm from "../../public/assets/contact/SplashForm.svg";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    sujet: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", sujet: "", message: "" });
        alert("Votre message a été envoyé avec succès !");
      } else {
        console.error("Erreur lors de l'envoi du message.");
        alert("Une erreur est survenue, veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      alert("Une erreur est survenue, veuillez réessayer.");
    }
  };

  return (
    <section className="relative h-screen p-6 dark:text-gray-800">
      <form
        noValidate
        className="container mx-auto w-full max-w-xl space-y-6 rounded-md p-8 shadow-lg"
      >
        <div>
          <label htmlFor="name" className="mb-1 ml-1 block">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nom - Prénom"
            required
            value={formData.name}
            onChange={handleChange}
            className="block w-full rounded bg-background2 p-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 ml-1 block">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded bg-background2 p-2"
          />
        </div>
        <div>
          <label htmlFor="sujet" className="mb-1 ml-1 block">
            Sujet
          </label>
          <input
            id="sujet"
            type="text"
            placeholder="Sujet"
            required
            value={formData.sujet}
            onChange={handleChange}
            className="block w-full rounded bg-background2 p-2"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 ml-1 block">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Message..."
            required
            value={formData.message}
            onChange={handleChange}
            className="block w-full rounded bg-background2 p-2"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded bg-text3 px-4 py-2 font-bold text-text1 hover:bg-background2 hover:text-text3"
          >
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
}
