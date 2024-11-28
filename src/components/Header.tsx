"use client";

import Burger from "./Burger";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.svg";
// import paint1 from "../../public/assets/hero/Splash1.svg";
import { useState } from "react";

export default function Header() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isExhibitionsOpen, setIsExhibitionsOpen] = useState(false);

  const handleExhibitions = () => {
    setIsExhibitionsOpen(!isExhibitionsOpen);
  };

  const handleGallery = () => {
    setIsGalleryOpen(!isGalleryOpen);
  };

  return (
    <header
      className="sticky top-0 z-50 flex w-full items-center justify-between border-b-2 border-text1 bg-background1 px-6 py-8 sm:px-12 lg:px-20"
      role="banner"
    >
              {/* SVG paint1 en haut à droite */}
              {/* <div className="absolute right-0 top-0 -z-10">
          <Image
            src={paint1}
            alt="Paint Splash"
            className="w-24 md:w-32 lg:w-full"
          />
        </div> */}
      <figure>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            className="w-20 sm:w-24 lg:w-28 xl:w-32"
          />
        </Link>
      </figure>
      <nav
        className="hidden font-antonio text-3xl font-semibold tracking-wide text-text1 md:block md:text-sm lg:text-lg xl:text-lg"
        aria-label="navigation"
      >
        <ul className="flex sm:gap-8 lg:gap-12 ">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/#about">A propos</Link>
          </li>
          <li
            className="relative"
            onMouseEnter={handleGallery}
            onMouseLeave={handleGallery}
          >
            <span className="cursor-pointer">Galerie</span>
            {isGalleryOpen && (
              <ul className="absolute left-0 top-full space-y-1 border-2 border-text2 bg-background1 p-4 text-base text-text1">
                <li className="hover:text-text3">
                  <Link href="/gallery/available-works">Disponible</Link>
                </li>
                <li className="hover:text-text3">
                  <Link href="/gallery/sold-works">Archives</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={handleExhibitions}
            onMouseLeave={handleExhibitions}
          >
            <span className="cursor-pointer">Expositions</span>
            {isExhibitionsOpen && (
              <ul className="absolute left-0 top-full space-y-1 border-2 border-text2  bg-background1 p-4 text-base text-text1">
                <li className="hover:text-text3">
                  <Link href="/exhibitions/upcoming">Prochainement</Link>
                </li>
                <li className="hover:text-text3">
                  <Link href="/exhibitions/past">Passées</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Burger />
    </header>
  );
}
