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
   // Ajout des états pour la pagination
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);
   const pageSize = 5; // Nombre d'œuvres par page
 
   const handlePageChange = (page: number) => {
     setCurrentPage(page);
     window.scrollTo({ top: 0, behavior: "smooth" });
   };
 

   useEffect(() => {
    const fetchWorks = async () => {
      try {
        const res = await fetch(`${apiEndpoint}&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}&populate=*`);
        const data = await res.json();
        console.log("API Data:", data); // Pour vérifier la structure des données
        setWorks(data.data); // Assigner la partie correcte des données
        setTotalPages(data.meta.pagination.pageCount); // Mettre à jour le nombre total de pages
      } catch (error) {
        console.error("Erreur lors de la récupération des oeuvres", error);
      }
    };
    fetchWorks();
  }, [apiEndpoint, currentPage]);



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
            onClick={closeLightbox}
          >
            {/* Bouton de fermeture de la Lightbox */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-[110px] text-5xl text-white transition-colors hover:text-text3  "
              aria-label="Fermer la Lightbox"
            >
              &times;
            </button>
            <div
              className="relative w-11/12 max-w-4xl overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Artwork enlarged"
                layout="responsive"
                width={800}
                height={600}
                className="max-h-[70vh] rounded-lg object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
       <div className="mt-8 flex justify-center space-x-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`rounded px-4 py-2 ${
              currentPage === index + 1
                ? "border border-text1 bg-background1 text-text1"
                : "border border-text2 bg-background2 text-text2 hover:border hover:border-text1 hover:bg-background1 hover:text-text1"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
