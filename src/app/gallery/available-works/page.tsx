import React from "react";
import GalleryPage from "../../../components/GalleryPage";

const AvailableWorksPage: React.FC = () => {
  return (
    <section className=" bg-background1 font-antonio text-text1">
      <h2 className="p-20 text-center text-4xl md:text-5xl lg:text-7xl">
        <span className="text-text3">Oeuvres</span> disponibles
      </h2>
      <GalleryPage
        apiEndpoint={`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/galleries?filters[artStatus][$eq]=available`} // L'endpoint fictif pour les œuvres disponibles (à adapter selon ton backend)
        title={""}
      />
    </section>
  );
};

export default AvailableWorksPage;
