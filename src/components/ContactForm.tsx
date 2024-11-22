export default function ContactForm() {
  return (
    <section className="p-6 dark:text-gray-800">
      <form
        noValidate
        className="container mx-auto mb-16 w-full max-w-xl space-y-6 rounded-md p-8"
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
            className="block w-full rounded bg-background2   p-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 ml-1 block">
            Sujet
          </label>
          <input
            id="sujet"
            type="sujet"
            placeholder="sujet"
            required
            className="block w-full rounded bg-background2  p-2 "
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 ml-1 block">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Message..."
            className=" block w-full rounded bg-background2  p-2 "
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded bg-text3 px-4 py-2 font-bold text-text1  hover:bg-background2 hover:text-text3"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
