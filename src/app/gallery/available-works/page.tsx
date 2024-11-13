import React from "react";
import GalleryPage from "../../../components/GalleryPage";

const AvailableWorksPage: React.FC = () => {
  return (
    <GalleryPage
      title="Œuvres Disponibles"
      apiEndpoint="http://localhost:1337/api/available-works" // L'endpoint fictif pour les œuvres disponibles (à adapter selon ton backend)
    />
  );
};

export default AvailableWorksPage;
