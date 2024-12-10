
import Image from "next/image";
import { GalleryCardProps } from "../types/types";


const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  description,
  imageSrc,
  dimensions,
  price,
  artStatus,
  reverse,
  onImageClick,
}) => {
  return (


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
              onClick={onImageClick} // Ouvrir la Lightbox quand on clique sur l'image
              unoptimized
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
          <div className="mb-4 flex items-center justify-between text-xs text-text1 sm:text-lg">
            <span className="italic">{dimensions}</span>
            <span className="font-bold ">{artStatus === "sold" ? "Vendu" : `${price} euros`}</span>
          </div>
          <div className="mb-4 w-full border-b border-text1"></div>
          {/* Titre et Description */}
          <h2 className="mb-2 text-2xl font-semibold sm:text-4xl">{title}</h2>
          <p className="max-w-lg flex-1 pt-2 text-justify font-inter text-xs sm:text-sm md:text-base">{description}</p>
        </div>
      </div>


  );
};

export default GalleryCard;
