"use client";

import Burger from "./Burger";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.svg";
import underline from "../../public/assets/Header/underline.svg";
// import paint1 from "../../public/assets/hero/Splash1.svg";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Header() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isExhibitionsOpen, setIsExhibitionsOpen] = useState(false);

  const galleryMenuRef = useRef<HTMLUListElement>(null);
  const exhibitionsMenuRef = useRef<HTMLUListElement>(null);

  const handleExhibitions = () => {
    setIsExhibitionsOpen(!isExhibitionsOpen);
  };

  const handleGallery = () => {
    setIsGalleryOpen(!isGalleryOpen);
  };

  useEffect(() => {
    if (isGalleryOpen && galleryMenuRef.current) {
      gsap.fromTo(
        galleryMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  }, [isGalleryOpen]);

  useEffect(() => {
    if (isExhibitionsOpen && exhibitionsMenuRef.current) {
      gsap.fromTo(
        exhibitionsMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  }, [isExhibitionsOpen]);

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const link = e.currentTarget;
    const underline = link.querySelector("img");
    if (underline) {
      gsap.fromTo(
        underline,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const link = e.currentTarget;
    const underline = link.querySelector("img");
    if (underline) {
      gsap.fromTo(
        underline,
        { scaleX: 1, transformOrigin: "left" },
        { scaleX: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  };
  return (
    <header
      className="sticky top-0 z-50 flex w-full items-center justify-between border-b-2 border-text1 bg-background1 px-6 py-8 sm:px-12 lg:px-20"
      role="banner"
    >
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
            <Link
              href="/"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Accueil
              <Image
                src={underline}
                alt="underline"
                className="relative bottom-0 left-0 h-1 w-full"
                style={{ transform: "scaleX(0)", transformOrigin: "left" }}
              />
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              A propos
              <Image
                src={underline}
                alt="underline"
                className="relative bottom-0 left-0 h-1 w-full"
                style={{ transform: "scaleX(0)", transformOrigin: "left" }}
              />
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={handleGallery}
            onMouseLeave={handleGallery}
          >
            <span className="cursor-pointer">Galerie</span>
            {isGalleryOpen && (
              <ul
                ref={galleryMenuRef}
                className="absolute left-0 top-full space-y-1 border-2 border-text2 bg-background1 p-4 text-base text-text1"
              >
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
              <ul
                ref={exhibitionsMenuRef}
                className="absolute left-0 top-full space-y-1 border-2 border-text2  bg-background1 p-4 text-base text-text1"
              >
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
            <Link
              href="/contact"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Contact
              <Image
                src={underline}
                alt="underline"
                className="relative bottom-0 left-0 h-1 w-full"
                style={{ transform: "scaleX(0)", transformOrigin: "left" }}
              />
            </Link>
          </li>
        </ul>
      </nav>
      <Burger />
    </header>
  );
}
