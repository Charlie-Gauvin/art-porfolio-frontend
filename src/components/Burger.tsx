"use client";

import Image from "next/image";
import Link from "next/link";
import open from "../../public/assets/burgerMenu/open.svg";
import close from "../../public/assets/burgerMenu/close.svg";
import { useCallback, useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Burger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isExhibitionsOpen, setIsExhibitionsOpen] = useState(false);

  const galleryMenuRef = useRef<HTMLUListElement>(null);
  const exhibitionsMenuRef = useRef<HTMLUListElement>(null);

  const handleExhibitions = useCallback(() => {
    setIsExhibitionsOpen((prev) => !prev);
  }, []);

  const handleGallery = useCallback(() => {
    setIsGalleryOpen((prev) => !prev);
  }, []);

  const handleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setIsGalleryOpen(false);
    setIsExhibitionsOpen(false);
  }, []);

  useEffect(() => {
    if (isGalleryOpen && galleryMenuRef.current) {
      gsap.fromTo(
        galleryMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      );
    }
  }, [isGalleryOpen]);

  useEffect(() => {
    if (isExhibitionsOpen && exhibitionsMenuRef.current) {
      gsap.fromTo(
        exhibitionsMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      );
    }
  }, [isExhibitionsOpen]);

  return (
    <div className="md:hidden">
      <button
        className="flex flex-col items-center"
        onClick={handleMenu}
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <Image
          src={isMenuOpen ? close : open}
          alt="Menu"
          className="z-50 size-9"
        />
      </button>
      {isMenuOpen && (
        <nav className="fixed inset-0 flex items-center justify-center bg-background2 text-text2">
          <ul className="flex flex-col items-center space-y-6 text-4xl font-bold">
            <li>
              <Link href="/" onClick={closeMenu}>
                Accueil
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={closeMenu}>
                A propos
              </Link>
            </li>
            <li>
              <button onClick={handleGallery} aria-expanded={isGalleryOpen}>
                Gallerie
              </button>
              {isGalleryOpen && (
                <ul
                  ref={galleryMenuRef}
                  className="space-y-1 pt-4 text-center text-xl text-text3"
                >
                  <li>
                    <Link href="/gallery/available-works" onClick={closeMenu}>
                      Disponible
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery/sold-works" onClick={closeMenu}>
                      Archives
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={handleExhibitions}
                aria-expanded={isExhibitionsOpen}
              >
                Expositions
              </button>
              {isExhibitionsOpen && (
                <ul
                  ref={exhibitionsMenuRef}
                  className="space-y-1 pt-4 text-center text-xl text-text3"
                >
                  <li>
                    <Link href="/exhibitions/upcoming" onClick={closeMenu}>
                      Prochainement
                    </Link>
                  </li>
                  <li>
                    <Link href="/exhibitions/past" onClick={closeMenu}>
                      Passées
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
