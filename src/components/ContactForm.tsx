"use client";

import React, { useState } from "react";


export default function ContactForm() {

  // Permet de gérer l'état du formulaire
const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
});

// Permet de gérer l'état de chargement
const [isLoading, setIsLoading] = useState(false);
// Permet de gérer l'état de feedback, c'est à dire le message de succès ou d'erreur
const [feedback, setFeedback] = useState("");

// Permet de gérer le changement des valeurs des inputs
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const {id, value} = e.target;
  setFormData((prev) => ({
    ...prev,
    [id]: value,
  }));
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    const response = await fetch("http://localhost:1337/api/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setFeedback("Message envoyé avec succès !");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setFeedback("Une erreur est survenue. Veuillez réessayer.");
    }
  } catch (error) {
    console.error("Erreur :", error);
    setFeedback("Une erreur est survenue. Veuillez réessayer.");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <section className="p-6 dark:text-gray-800">
      <form
        noValidate
        className="container mx-auto mb-16 w-full max-w-xl space-y-6 rounded-md p-8"
        onSubmit={handleSubmit}
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 ml-1 block">
          subject
          </label>
          <input
            id="subject"
            type="subject"
            placeholder="subject"
            required
            className="block w-full rounded bg-background2  p-2 "
            value={formData.subject}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded bg-text3 px-4 py-2 font-bold text-text1  hover:bg-background2 hover:text-text3"
          >
            {isLoading ? "En cours..." : "Envoyer"}
          </button>
        </div>
        {feedback && <p className="mt-4 text-center">{feedback}</p>}
      </form>
    </section>
  );
}
