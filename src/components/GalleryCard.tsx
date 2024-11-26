import Image from "next/image";

interface GalleryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  artStatus: string;
  dimensions: string;
  price: number;
  reverse?: boolean;
  onImageClick: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  description,
  imageSrc,
  dimensions,
  price,
  reverse,
  onImageClick,
}) => {
  return (
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
            layout="responsive"
            width={500}
            height={400}
            className="cursor-pointer rounded-lg object-cover"
            onClick={onImageClick} // Appeler la fonction pour ouvrir la Lightbox
          />
        </div>
      </div>

      {/* Détails de l'œuvre */}
      <div
        className={
          "col-span-full flex flex-col bg-background1 p-6 text-text1 lg:col-span-8 lg:p-10"
        }
      >
        <div className="mb-4 flex items-center justify-between text-sm">
          <span className="text-xl italic">{dimensions}</span>
          <span className="text-lg font-bold text-text3">{price} euros</span>
        </div>
        <div className="mb-4 w-full border-b border-text1"></div>
        <h2 className="mb-2 text-3xl font-semibold">{title}</h2>
        <p className="flex-1 pt-2">{description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
