"use client";

import Career from "../components/Career";
import Image from "next/image";
import { useEffect, useState } from "react";
import { About as AboutType } from "../types/types";
import brush from "../../public/assets/about/brush.svg";


export default function About() {
  const [about, setAbout] = useState<AboutType | null>(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/about?populate=*`
        );
        const data = await response.json();
        setAbout(data.data);
      } catch (error) {
        console.error("An error occurred while fetching the about", error);
      }
    };
    fetchAbout();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-background1 pt-36 font-antonio text-text1"
    >
      <div className="flex h-full flex-col items-center justify-center px-8 lg:flex-row lg:space-x-32 lg:px-20 xl:justify-evenly">
        <div className="space-y-16 md:space-y-24 lg:space-y-28">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-7xl">A PROPOS</h2>
            <div className="mt-3 flex justify-center md:justify-start">
              <Image
                src={brush}
                alt="image de trace de peinture en dessous le titre"
                className="w-24 md:ml-5 md:w-32 lg:ml-6 lg:w-48"
              />
            </div>
          </div>
          {about && (
            <p className="max-w-xl pb-14 text-justify font-inter text-xs md:text-sm lg:pb-0 xl:max-w-2xl xl:text-lg">
              {about.Description}
            </p>
          )}
        </div>
        {about && (
          <figure className="w-full max-w-60 md:max-w-72 xl:max-w-sm">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${about.Image.url}`}
              alt="Photo de profil"
              width={about.Image.width}
              height={about.Image.height}
              unoptimized
            />
          </figure>
        )}
      </div>
      <Career />
    </section>
  );
}
