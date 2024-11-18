"use client";

import React, { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

interface Work {
  id: number;
  title: string;
  description: string;
  dimensions: string;
  price: number;
  artStatus: string;
  image?: {
    id: number;
    documentId: string;
    name: string;
    alternativeText?: string;
    caption?: string;
    url: string; // L'URL de l'image est directement à ce niveau
  };
}

interface GalleryPageProps {
  title: string;
  apiEndpoint: string;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ title, apiEndpoint }) => {
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const res = await fetch(`${apiEndpoint}&populate=*`);
        const data = await res.json();
        console.log("API Data:", data); // Pour vérifier la structure des données
        setWorks(data.data); // Assigner la partie correcte des données
      } catch (error) {
        console.error("Erreur lors de la récupération des oeuvres", error);
      }
    };
    fetchWorks();
  }, [apiEndpoint]);

  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  return (
    <section className="min-h-screen bg-background1 py-12 ">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-5xl font-bold text-text1">{title}</h2>
      </div>

      {/* Section des Cards */}
      <div className="grid gap-12 sm:grid-cols-1 ">
        {works.map((work, index) => {
          // Accéder à l'URL de l'image si elle existe, sinon utiliser un placeholder
          const imageUrl = work.image?.url
            ? `${baseURL}${work.image.url}`
            : "/default-placeholder.jpg";

          return (
            <GalleryCard
              key={work.id}
              imageSrc={imageUrl}
              title={work.title}
              dimensions={work.dimensions}
              price={work.price}
              description={work.description}
              artStatus={work.artStatus}
              reverse={index % 2 === 1}
            />
          );
        })}
      </div>
    </section>
  );
};

export default GalleryPage;
