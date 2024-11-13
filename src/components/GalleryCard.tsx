import React from "react";
import Image from "next/image";

interface GalleryCardProps {
  imageSrc: string;
  title: string;
  dimensions: string;
  price: number;
  description: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  imageSrc,
  title,
  dimensions,
  price,
  description,
}) => {
  return (
    <div className="mb-8 flex flex-col items-center space-y-6 rounded-lg p-6  font-antonio shadow-lg md:flex-row md:items-start md:space-x-8 md:space-y-0 dark:bg-background2">
      {/* Image de la toile */}
      <div className="mb-4 box-border w-full border-4 md:mb-0 md:w-1/2">
        <Image
          src={imageSrc} // Utilisation de l'URL de l'image locale
          alt={title} // Texte alternatif pour l'accessibilité
          className="size-auto rounded-lg object-contain"
          width={400} // Largeur de l'image (nécessaire pour Next.js)
          height={400} // Hauteur de l'image (nécessaire pour Next.js)
        />
      </div>
      {/* Détails de l'œuvre */}
      <div className="h-full bg-background1 text-left text-text1 md:w-1/2">
        <div className="mb-4 flex items-center justify-between text-lg text-text2 dark:text-text1">
          <span>{dimensions}</span>
          <span className="font-bold ">{price} euros</span>
        </div>
        <h3 className="mb-2  text-2xl font-bold  dark:text-white">{title}</h3>
        <p className="text-text2 dark:text-text1">{description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
