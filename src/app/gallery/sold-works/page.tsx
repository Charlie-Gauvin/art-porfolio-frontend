import React from "react";
import GalleryPage from "../../../components/GalleryPage";

const SoldWorksPage: React.FC = () => {
  return (
    <section className=" bg-background1 font-antonio text-text1">
      <h2 className="p-20 text-center text-4xl md:text-5xl lg:text-7xl">
        <span className="text-text3">Oeuvres</span> indisponibles
      </h2>
    <GalleryPage
      title={""}
      apiEndpoint="http://localhost:1337/api/galleries?filters[artStatus][$eq]=sold" // L'endpoint fictif pour les œuvres vendues (à adapter selon ton backend)
    />
    </section>
  );
};

export default SoldWorksPage;
