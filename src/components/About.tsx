"use client";

import Image from "next/image";
// import profile from "../../public/assets/about/Profile.webp";
import { useEffect, useState } from "react";

type About = {
  Description: string;
  Image: {
    url: string;
    width: number;
    height: number;
  };
};

export default function About() {
  const [about, setAbout] = useState<About | null>(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/about?populate=*"
        );
        const data = await response.json();
        console.log("Données récupérées:", data);
        setAbout(data.data);
      } catch (error) {
        console.error("An error occurred while fetching the about", error);
      }
    };
    fetchAbout();
  }, []);

  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  return (
    <section
      id="about"
      className="h-screen bg-background1 pt-20 font-antonio text-text1"
    >
      <div className="flex flex-col items-center justify-center px-8 pt-28 lg:flex-row lg:space-x-32 lg:px-20 xl:justify-evenly">
        <div>
          <h2 className="pb-20 text-center text-4xl md:pb-16 md:text-left md:text-5xl lg:pb-28 lg:text-7xl">
            A PROPOS
          </h2>
          {about && (
            <p className="max-w-xl pb-14 text-justify font-inter text-xs md:text-sm lg:pb-0 xl:max-w-2xl xl:text-xl">
              {about.Description}
            </p>
          )}
        </div>
        {about && (
          <figure className="w-full max-w-60 md:max-w-72 xl:max-w-sm">
            <Image
              src={`${baseURL}${about.Image.url}`}
              alt="Profile picture"
              width={about.Image.width}
              height={about.Image.height}
              className=""
            />
          </figure>
        )}
      </div>
    </section>
  );
}
