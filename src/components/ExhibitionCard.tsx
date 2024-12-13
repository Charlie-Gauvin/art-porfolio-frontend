"use client";

import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { Exhibitions, ExhibitionsCardProps } from "../types/types";

export default function ExhibitionsCard({ isUpcoming }: ExhibitionsCardProps) {
  const [exhibitions, setExhibitions] = useState<Exhibitions[]>([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  // Fecth Strapi pour récupérer les expositions
  useEffect(() => {
    const fetchExhibitions = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/exhibitions?populate=*`
        );
        const data = await response.json();
        setExhibitions(data.data);
      } catch (error) {
        console.error(
          "An error occurred while fetching the exhibitions",
          error
        );
      }
    };
    fetchExhibitions();
  }, []);

  // Utilisation de useMemo pour optimiser le filtrage et le tri des expositions
  const filteredExhibitions = useMemo(() => {
    const today = new Date();
    return exhibitions
      .filter((exhibition) => {
        const endDate = new Date(exhibition.EndDate);
        return isUpcoming ? endDate >= today : endDate < today;
      })
      .sort(
        (a, b) => new Date(a.EndDate).getTime() - new Date(b.EndDate).getTime()
      );
  }, [exhibitions, isUpcoming]);

  // Gérer les expositions de grand format et de petit format
  const largeExhibitions = filteredExhibitions.filter(
    (exhibition) => exhibition.format === "grand"
  );
  const smallExhibitions = filteredExhibitions.filter(
    (exhibition) => exhibition.format === "petit"
  );

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage("");
  };

  return (
    <section className="bg-background1 text-text1">
      <div className="container mx-auto max-w-6xl space-y-6 p-6 sm:space-y-12">
        {largeExhibitions.map((exhibition) => (
          <a
            key={exhibition.id}
            rel="noopener noreferrer"
            href={exhibition.Redirection_Link}
            target="_blank"
            className="group mx-auto block max-w-sm cursor-pointer gap-3 hover:no-underline focus:no-underline sm:max-w-full lg:grid lg:grid-cols-12"
          >
            <Image
              src={`http://localhost:1337${exhibition.Image.url}`}
              width={exhibition.Image.width}
              height={exhibition.Image.height}
              alt=""
              className="h-64 w-full rounded object-cover sm:h-96 lg:col-span-7"
              onClick={(e) => {
                e.preventDefault();
                openLightbox(`http://localhost:1337${exhibition.Image.url}`);
              }}
            />
            <div className="space-y-2 p-6 lg:col-span-5">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline sm:text-4xl">
                {exhibition.Title}
              </h3>
              <div className="font-inter">
                <span className="text-xs ">
                  {" "}
                  Du {exhibition.BeginDate} au {exhibition.EndDate}
                </span>
                <p className="text-justify">{exhibition.Description}</p>
                <span className="text-xs">{exhibition.Lieu}</span>
              </div>
            </div>
          </a>
        ))}
        <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {smallExhibitions.map((exhibition) => (
            <a
              key={exhibition.id}
              rel="noopener noreferrer"
              href={exhibition.Redirection_Link}
              target="_blank"
              className="group mx-auto max-w-sm cursor-pointer hover:no-underline focus:no-underline"
            >
              <Image
                role="presentation"
                className="h-44 w-full rounded object-cover "
                src={`http://localhost:1337${exhibition.Image.url}`}
                width={exhibition.Image.width}
                height={exhibition.Image.height}
                alt="tableau"
                onClick={(e) => {
                  e.preventDefault();
                  openLightbox(`http://localhost:1337${exhibition.Image.url}`); // Ouvrir la Lightbox quand on clique sur l'image
                }}
              />
              <div className="space-y-2 p-6">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {exhibition.Title}
                </h3>
                <div className="font-inter">
                  <span className="text-xs">
                    Du {exhibition.BeginDate} au {exhibition.EndDate}
                  </span>
                  <p className="text-justify">{exhibition.Description}</p>
                  <span className="text-xs">{exhibition.Lieu}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
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
            className="fixed inset-0 z-50 flex items-center justify-center pt-20"
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
    </section>
  );
}
