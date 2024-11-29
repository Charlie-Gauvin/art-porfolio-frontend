"use client";

import open from "../../public/assets/burgerMenu/open.svg";
import close from "../../public/assets/burgerMenu/close.svg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Burger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isExhibitionsOpen, setIsExhibitionsOpen] = useState(false);

  const handleExhibitions = () => {
    setIsExhibitionsOpen(!isExhibitionsOpen);
  };

  const handleGallery = () => {
    setIsGalleryOpen(!isGalleryOpen);
  };

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="md:hidden">
      <button
        className="flex flex-col items-center"
        onClick={handleMenu}
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <Image src={isMenuOpen ? close : open} alt="Menu" className="z-50 size-9" />
      </button>
      {isMenuOpen && (
        <nav className="fixed inset-0 flex items-center justify-center bg-background2 text-text2">
          <ul className="flex flex-col items-center space-y-6 text-4xl font-bold">
              <li>
                <Link href="/" onClick={handleMenu}>Accueil</Link>
              </li>
              <li>
                <Link href="#about" onClick={handleMenu}>A propos</Link>
              </li>
              <li>
              <button onClick={handleGallery} aria-expanded={isGalleryOpen}>
                Gallerie
              </button>
                {isGalleryOpen && (
                  <ul className="space-y-1 pt-4 text-center text-xl text-text3">
                    <li>
                      <Link href="#" onClick={handleMenu}>Disponible</Link>
                    </li>
                    <li>
                      <Link href="#" onClick={handleMenu}>Archives</Link>
                    </li>
                  </ul>
                )}     
              </li>
              <li>
              <button onClick={handleExhibitions} aria-expanded={isExhibitionsOpen}>
                Expositions
              </button>
                {isExhibitionsOpen && (
                  <ul className="space-y-1 pt-4 text-center text-xl text-text3">
                    <li>
                      <Link href="#" onClick={handleMenu}>Prochainement</Link>
                    </li>
                    <li>
                      <Link href="#" onClick={handleMenu}>Passées</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/contact" onClick={handleMenu}>Contact</Link>
              </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
