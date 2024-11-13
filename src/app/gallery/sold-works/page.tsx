import React from "react";
import GalleryPage from "../../../components/GalleryPage";

const SoldWorksPage: React.FC = () => {
  return (
    <GalleryPage
      title="Œuvres Vendues"
      apiEndpoint="http://localhost:1337/api/sold-works" // L'endpoint fictif pour les œuvres vendues (à adapter selon ton backend)
    />
  );
};

export default SoldWorksPage;
