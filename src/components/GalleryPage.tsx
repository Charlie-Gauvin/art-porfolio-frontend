"use client";

import React, { useEffect, useState, useRef } from "react";
import GalleryCard from "./GalleryCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

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
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const res = await fetch(`${apiEndpoint}&populate=*`);
        const data = await res.json();
        setWorks(data.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des oeuvres", error);
      }
    };
    fetchWorks();
  }, [apiEndpoint]);

  useEffect(() => {
    // Utiliser GSAP et ScrollTrigger pour animer les cartes
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cards-container",
          start: "top 80%",
          end: "bottom 20%",
          pin: "true",

          scrub: true,
          markers: false, // Activer les marqueurs pour voir où l'animation démarre et s'arrête pendant le développement
        },
      }
    );
  }, [works]);

  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage("");
  };

  return (
    <section className="min-h-screen bg-background1 py-12">
      <div className="mb-12 text-center">
        <h2 className="pb-12 text-5xl font-bold text-text1">{title}</h2>
      </div>
      {/* Section des Cards */}
      <div className="mx-4 grid gap-12 sm:grid-cols-1 md:mx-6 lg:mx-28">
        {works.map((work, index) => {
          // Accéder à l'URL de l'image si elle existe, sinon utiliser un placeholder
          const imageUrl = work.image?.url
            ? `${baseURL}${work.image.url}`
            : "/default-placeholder.jpg";

          return (
            <div
              key={work.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
            >
              <GalleryCard
                imageSrc={imageUrl}
                title={work.title}
                dimensions={work.dimensions}
                price={work.price}
                description={work.description}
                artStatus={work.artStatus}
                reverse={index % 2 === 1}
                onImageClick={() => openLightbox(imageUrl)}
              />
            </div>
          );
        })}
      </div>
      {/* Lightbox / Overlay */}
      {isLightboxOpen && (
        <div>
          {/* Overlay sombre pour masquer l'arrière-plan */}
          <div
            className="fixed inset-0 z-40 bg-black/90"
            onClick={closeLightbox}
            aria-hidden="true"
          ></div>
          {/* Conteneur de la Lightbox */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-11/12 max-w-4xl overflow-hidden rounded-lg">
              <Image
                src={selectedImage}
                alt="Artwork enlarged"
                layout="responsive"
                width={800}
                height={600}
                className="max-h-[70vh] rounded-lg object-contain"
              />

              {/* Bouton de fermeture de la Lightbox */}
              <button
                onClick={closeLightbox}
                className="absolute right-0 top-0 text-5xl text-white transition-colors hover:text-text3  "
                aria-label="Fermer la Lightbox"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryPage;
