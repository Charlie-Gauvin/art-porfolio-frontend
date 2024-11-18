"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// import canva from "../../public/assets/hero/canva.webp";

// Définition des types pour Strapi

type Exhibitions = {
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
};

// typage des props gérer la date de début et de fin
type ExhibitionsCardProps = {
  isUpcoming: boolean;
};

export default function ExhibitionsCard({ isUpcoming }: ExhibitionsCardProps) {
  const [exhibitions, setExhibitions] = useState<Exhibitions[]>([]);

  // Test de fetch depuis Strapi en local
  useEffect(() => {
    const fetchExhibitions = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/exhibitions?populate=*");
        const data = await response.json();
        console.log("Données récupérées:", data);        
        setExhibitions(data.data);
      } catch (error) {
        console.error("An error occurred while fetching the exhibitions", error);
      }
    };
    fetchExhibitions();
  }, []);


// Filtrer les expositions en fonction de la date
  const today = new Date();
  const filteredExhibitions = exhibitions.filter((exhibition) => {
    const endDate = new Date(exhibition.EndDate);
    return isUpcoming ? endDate >= today : endDate < today;
  }).sort((a, b) => new Date(a.EndDate).getTime() - new Date(b.EndDate).getTime());
  

// Gérer les expositions de grand format et de petit format
const largeExhibitions = filteredExhibitions.filter(exhibition => exhibition.format === 'grand');
const smallExhibitions = filteredExhibitions.filter(exhibition => exhibition.format === 'petit');

  return (
    <section className="bg-background1 text-text1">
    <div className="container mx-auto max-w-6xl space-y-6 p-6 sm:space-y-12">
    {largeExhibitions.map((exhibition) => (

        
      <a key={exhibition.id} rel="noopener noreferrer" href="#" className="group mx-auto block max-w-sm gap-3 hover:no-underline focus:no-underline sm:max-w-full lg:grid lg:grid-cols-12">
        <Image src={`http://localhost:1337${exhibition.Image.url}`} width={exhibition.Image.width} height={exhibition.Image.height} alt="" className="h-64 w-full rounded object-cover sm:h-96 lg:col-span-7" />
        <div className="space-y-2 p-6 lg:col-span-5">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline sm:text-4xl">{exhibition.Title}</h3>
          <div className="font-inter">
          <span className="text-xs "> Du {exhibition.BeginDate} au {exhibition.EndDate}</span>  
          <p>{exhibition.Description}</p>
          <span className="text-xs">{exhibition.Lieu}</span>
          </div>
        </div>
      </a>
))}
      <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {smallExhibitions.map((exhibition) => (


        <a key={exhibition.id} rel="noopener noreferrer" href="#" className="group mx-auto max-w-sm hover:no-underline focus:no-underline ">
          <Image role="presentation" className="h-44 w-full rounded object-cover " src={`http://localhost:1337${exhibition.Image.url}`}  width={exhibition.Image.width} height={exhibition.Image.height} alt="tableau" />
          <div className="space-y-2 p-6">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{exhibition.Title}</h3>
            <div className="font-inter">

            <span className="text-xs">Du {exhibition.BeginDate} au {exhibition.EndDate}</span>
            <p>{exhibition.Description}</p>
            <span className="text-xs">{exhibition.Lieu}</span>
            </div>
          </div>
        </a>
        ))}
      </div>
      {/* <div className="flex justify-center">
        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
      </div> */}
    </div>
  </section>
  );
}

    // <section className="mx-auto grid max-w-xs gap-8 p-4 font-antonio text-text2 sm:grid-cols-1 md:max-w-2xl md:grid-cols-2 lg:max-w-7xl lg:grid-cols-3 xl:gap-24">
    //   {exhibitions.map((exhibition) => (

    //   <div key={exhibition.id} className="flex flex-col border border-slate-200 bg-background2 shadow-sm">
    //   {/* m-2.5 */}
    //     <div className="flex h-64 w-full items-center justify-center overflow-hidden rounded-md">
    //       {/* size-full object-cover */}
    //       <Image
    //         className="size-full object-cover p-2"
    //         src={`http://localhost:1337${exhibition.Image.url}`}
    //         width={exhibition.Image.width}
    //         height={exhibition.Image.height}
    //         alt="profile-picture"
    //       />
    //     </div>
    //     <div className="px-6 pb-6 text-center">
    //       <h4 className="mb-2 text-2xl font-semibold lg:text-3xl">{exhibition.Title}</h4>
    //       <p className="text-sm font-semibold uppercase">
    //         {exhibition.Lieu}
    //       </p>
    //       <p className="mt-4 font-inter text-xs font-normal lg:text-sm">
    //         {exhibition.Description}
    //       </p>
    //       <div className="mt-4 text-xs font-bold md:text-sm">
    //         <p>Du {exhibition.BeginDate} au {exhibition.EndDate}</p>
    //       </div>
    //     </div>
    //   </div>
    //     ))}
    // </section>