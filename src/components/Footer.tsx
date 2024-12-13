import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoPage from "../../public/assets/logo.svg";
import Insta from "../../public/assets/insta.svg";
import Facebook from "../../public/assets/facebook.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between border-t border-text1 bg-background1 px-10 py-6 font-antonio text-text1 md:flex-row md:px-14 md:py-6">
      {/* Logo */}
      <div className="order-2 flex w-20 justify-center pb-4 sm:w-24 md:order-none md:pb-0 lg:w-28 xl:w-32">
        <Link href="/">
        <Image src={LogoPage} alt="Logo" />
        </Link>
      </div>

      {/* Copyright */}
      <div className="order-3 mb-4 text-center text-xs md:order-none md:mb-0 md:flex-1 md:text-center md:text-sm">
        <p>© 2024 Patrick Gauvin. All rights reserved.</p>
        <div className="mx-auto mt-3 hidden w-32 border-t md:mt-4 md:block"></div>
      </div>
      {/* Contact et Réseaux Sociaux */}
      <div className="order-1 mb-6 flex gap-20 text-center text-xs sm:text-center md:order-none md:flex-col md:gap-0 md:text-sm">
        <div className="mb-6">
          <p className="pb-2 font-semibold">Mon Email :</p>
          <p>patrickgauvin.art@gmail.com</p>
        </div>
        <div>
          <p className="pb-2 font-semibold">Mes réseaux :</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/patrick_gauvin_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitez mon Instagram"
              className="transition-transform hover:scale-110"
            >
              <Image src={Insta} alt="Instagram" className="size-6" />
            </a>
            <a
              href="https://www.facebook.com/people/Patrick-Gauvin/pfbid02XQ1u1dXHwJjfxYinJt43p43FWguDw5NDUJaPXkigCk8akDUqFj9ett5kNKK3SUkCl/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitez mon Facebook"
              className="transition-transform hover:scale-110"
            >
              <Image src={Facebook} alt="Facebook" className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
