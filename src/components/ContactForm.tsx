"use client";

import { useState } from "react";

export default function ContactForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sujet, setSujet] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

const handleSubmit = async (e: React.FormEvent) => {
    
  e.preventDefault();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, sujet, message }),
    });

    if (res.ok) {
      setStatus('Email envoyé avec succès');
      setName('');
      setEmail('');
      setSujet('');
      setMessage('');
    } else {
      setStatus('Erreur lors de l\'envoi de l\'email');
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email', error);
    setStatus('Erreur lors de l\'envoi de l\'email');
  }
};

  return (
    <section className="relative h-screen p-6 text-text3">
      <form
        noValidate
        className="container mx-auto w-full max-w-xl space-y-6 rounded-md p-8 shadow-lg"
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
            maxLength={50}
            className="block w-full rounded bg-background2 p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            maxLength={50}
            className="block w-full rounded bg-background2 p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            maxLength={100}
            className="block w-full rounded bg-background2 p-2"
            value={sujet}
            onChange={(e) => setSujet(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 ml-1 block">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Message..."
            className=" block w-full rounded bg-background2 p-2"
            required
            maxLength={500}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded bg-text3 px-4 py-2 font-bold text-text1 hover:bg-background2 hover:text-text3"
          >
            Send
          </button>
          {status && <p className="mt-4 text-center">{status}</p>}
        </div>
      </form>
    </section>
  );
}