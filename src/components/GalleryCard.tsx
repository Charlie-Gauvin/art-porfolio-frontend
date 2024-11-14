import React from "react";
import Image from "next/image";

interface GalleryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  artStatus: string;
  dimensions: string;
  price: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  description,
  imageSrc,
  dimensions,
  price,
}) => {
  return (
    <div className="mb-8 grid min-h-[350px] grid-cols-12 overflow-hidden rounded-lg font-antonio shadow-lg dark:bg-gray-100 dark:text-gray-900">
      {/* Image de la toile */}
      <div
        className="col-span-full bg-cover bg-center lg:col-span-4"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Détails de l'œuvre */}
      <div className="col-span-full flex flex-col bg-background1 p-6 text-text1 lg:col-span-8 lg:p-10 ">
        {/* Conteneur pour Dimensions et Prix */}
        <div className="mb-4 flex items-center justify-between text-sm ">
          <span className="italic">{dimensions}</span>
          <span className="font-bold text-text3">{price} euros</span>
        </div>
        <div className="mb-4 w-full border-b border-text1"></div>
        {/* Titre et Description */}
        <h2 className="mb-2 text-3xl font-semibold">{title}</h2>
        <p className="flex-1 pt-2  ">{description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;

// import React from "react";
// import Image from "next/image";

// interface GalleryCardProps {
//   imageSrc: string;
//   title: string;
//   dimensions: string;
//   price: number;
//   description: string;
// }

// const GalleryCard: React.FC<GalleryCardProps> = ({
//   imageSrc,
//   title,
//   dimensions,
//   price,
//   description,
// }) => {
//   return (
//     <div className="mb-16 flex flex-col rounded-lg bg-background1 p-6 shadow-md lg:flex-row lg:items-center lg:space-x-12">
//       {/* Image Section */}
//       <div className="mb-6 w-full lg:mb-0 lg:w-1/2 lg:max-w-md">
//         <div className="border-4 border-white">
//           <Image
//             src={imageSrc}
//             alt={title}
//             className="rounded-md object-contain"
//             width={500}
//             height={400}
//           />
//         </div>
//       </div>

//       {/* Informations sur la toile */}
//       <div className="w-full text-left lg:w-1/2">
//         <div className="mb-4 flex items-center justify-between text-lg font-medium text-gray-300">
//           <span className="italic">{dimensions}</span>
//           <span className="font-bold text-white">{price} euros</span>
//         </div>
//         <h3 className="mb-4 text-3xl font-bold text-white">{title}</h3>
//         <p className="text-base text-gray-400">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default GalleryCard;
