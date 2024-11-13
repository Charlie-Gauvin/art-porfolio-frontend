import React from "react";
import GalleryCard from "./GalleryCard";

const GalleryPage: React.FC = () => {
  // Mock des œuvres avec des images locales
  const works = [
    {
      id: 1,
      imageSrc: "/assets/GalleryPage/peinture1.jpg",
      title: "Peinture Abstraite 1",
      dimensions: "120x160 cm",
      price: 1200,
      description:
        "Tempor veniam quis eiusmod aliquip labore sint culpa excepteur sit ad. Nulla reprehenderit pariatur cupidatat fugiat in excepteur. Fugiat est aute est duis dolor. ",
    },
    {
      id: 2,
      imageSrc: "/assets/GalleryPage/peinture2.jpg",
      title: "Peinture Moderne",
      dimensions: "100x150 cm",
      price: 1500,
      description: "Une œuvre moderne qui interpelle par ses formes.",
    },
    {
      id: 3,
      imageSrc: "/assets/GalleryPage/peinture3.jpg",
      title: "Paysage Apaisant",
      dimensions: "140x200 cm",
      price: 2000,
      description: "Un paysage naturel plein de quiétude.",
    },
  ];

  return (
    <section className="min-h-screen bg-background1 py-12 ">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-5xl font-bold text-text1">Galerrie</h2>
      </div>

      {/* Section des Cards */}
      <div className="grid gap-12 sm:grid-cols-1 ">
        {works.map((painting) => (
          <GalleryCard
            key={painting.id}
            imageSrc={painting.imageSrc}
            title={painting.title}
            dimensions={painting.dimensions}
            price={painting.price}
            description={painting.description}
          />
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
