// Définition des types pour Strapi
export type Exhibitions = {
  id: number;
  Image: {
    url: string;
    width: number;
    height: number;
  };
  documentId: string;
  Title: string;
  BeginDate: string;
  EndDate: string;
  Description: string;
  Lieu: string;
  format: string;
  Redirection_Link: string;
};

// typage des props gérer la date de début et de fin
export type ExhibitionsCardProps = {
  isUpcoming: boolean;
};

// typage des props pour le composant ExhibitionCard
export type About = {
  Description: string;
  Image: {
    url: string;
    width: number;
    height: number;
  };
};

// typage des props pour le composant About
export type CareerStepProps = {
  title: string;
  year: string;
  description: string;
};

// typage des props pour le composant GalleryCard
export type GalleryCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  artStatus: string;
  dimensions: string;
  price: number;
  reverse?: boolean;
  onImageClick: () => void;
}

// Typage de la structure des données des œuvres
export type Work = {
  id: number;
  title: string;
  description: string;
  dimensions: string;
  price: number;
  artStatus: string;
  image?: {
    id: number;
    documentId: string;
    name: string;
    alternativeText?: string;
    caption?: string;
    url: string; // L'URL de l'image est directement à ce niveau
  };
}

// Typage des props pour le composant GalleryPage
export type GalleryPageProps = {
  title: string;
  apiEndpoint: string;
}