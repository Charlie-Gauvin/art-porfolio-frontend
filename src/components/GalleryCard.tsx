import React, { useState } from "react";
import Image from "next/image";

interface GalleryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  artStatus: string;
  dimensions: string;
  price: number;
  reverse?: boolean;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  description,
  imageSrc,
  dimensions,
  price,
  reverse,
}) => {
  // État pour gérer l'affichage de la Lightbox
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Fonction pour ouvrir et fermer la Lightbox
  const toggleLightbox = () => {
    setIsLightboxOpen(!isLightboxOpen);
  };

  return (
    <>
      <div
        className={`mb-8 grid min-h-[350px] grid-cols-1 gap-6 overflow-hidden rounded-lg font-antonio text-text1 shadow-lg md:grid-cols-12 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Image de la toile avec Lightbox */}
        <div
          className={`relative col-span-1 flex items-center justify-center overflow-hidden rounded-lg py-4 md:col-span-4 lg:py-0 ${
            reverse ? "lg:order-last" : ""
          }`}
        >
          <div className="h-auto w-full max-w-[300px] md:max-w-[400px] lg:max-w-[350px]">
            <Image
              src={imageSrc}
              alt={title}
              layout="responsive" // Utilisez layout="responsive" pour des dimensions fixes
              width={500} // Largeur de l'image
              height={400} // Hauteur de l'image
              className="cursor-pointer rounded-lg object-cover" // Utilisez object-cover pour ajuster l'image
              onClick={toggleLightbox} // Ouvrir la Lightbox quand on clique sur l'image
            />
          </div>
        </div>

        {/* Détails de l'œuvre */}
        <div
          className={
            "col-span-full flex flex-col bg-background1 p-6 text-text1 lg:col-span-8 lg:p-10"
          }
        >
          {/* Conteneur pour Dimensions et Prix */}
          <div className="mb-4 flex items-center justify-between text-sm">
            <span className="text-xl italic">{dimensions}</span>
            <span className="text-lg font-bold text-text3">{price} euros</span>
          </div>
          <div className="mb-4 w-full border-b border-text1"></div>
          {/* Titre et Description */}
          <h2 className="mb-2 text-3xl font-semibold">{title}</h2>
          <p className="flex-1 pt-2">{description}</p>
        </div>
      </div>

      {/* Lightbox / Overlay */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 top-6 z-50 flex items-center justify-center bg-black/70 "
          onClick={toggleLightbox} // Fermer la Lightbox en cliquant sur l'overlay
        >
          <div className="relative w-11/12 max-w-4xl overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              alt={title}
              layout="intrinsic"
              width={800}
              height={600}
              className="max-h-[70vh] rounded-lg object-contain"
            />

            <button
              onClick={toggleLightbox}
              className="absolute right-24 top-1 text-4xl text-white transition-colors hover:text-text3"
              aria-label="Fermer la Lightbox"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryCard;
