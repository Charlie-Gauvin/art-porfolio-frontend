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
        className={`mb-8 grid min-h-[350px] grid-cols-1 gap-6 overflow-hidden rounded-lg font-antonio text-text1 lg:grid-cols-12 ${
          reverse ? "lg:flex-row-reverse" : ""
        } mx-auto max-w-6xl px-4 lg:px-8`}
      >
        {/* Image de la toile avec Lightbox */}
        <div
          className={`relative col-span-1 flex items-center justify-center overflow-hidden rounded-lg py-4 md:col-span-4 lg:py-0 ${
            reverse ? "lg:order-last" : ""
          }` }
        >
          <div className="m-8 h-auto w-full max-w-[300px] lg:max-w-[350px]">
            <Image
              src={imageSrc}
              alt={title}
              layout="responsive" // Utilisez layout="responsive" pour des dimensions fixes
              width={500} // Largeur de l'image
              height={400} // Hauteur de l'image
              className="cursor-pointer object-cover" // Utilisez object-cover pour ajuster l'image
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
          <div className="mb-4 flex items-center justify-between text-xs  sm:text-sm">
            <span className="italic">{dimensions}</span>
            <span className="font-bold text-text3">{price} euros</span>
          </div>
          <div className="mb-4 w-full border-b border-text1"></div>
          {/* Titre et Description */}
          <h2 className="mb-2 text-2xl font-semibold sm:text-3xl">{title}</h2>
          <p className="max-w-lg flex-1 pt-2 font-inter text-xs sm:text-sm md:text-base">{description}</p>
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
              layout="responsive"
              width={800}
              height={600}
              className="max-h-[70vh] rounded-lg object-contain"
            />

            <button
              onClick={toggleLightbox}
              className="absolute right-36 top-1 text-4xl text-white transition-colors hover:text-text3"
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
