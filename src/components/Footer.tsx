import React from "react";
import Image from "next/image";
import LogoPage from "../../public/assets/logo.svg";
import Insta from "../../public/assets/insta.svg";
import Facebook from "../../public/assets/facebook.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between bg-background2 px-10 py-6 font-antonio text-text2 md:flex-row md:px-20 md:py-8">
      {/* Logo */}
      <div className="mb-4 flex w-48 justify-center ">
        <Image src={LogoPage} alt="Logo" />
      </div>

      {/* Copyright */}
      <div className="mb-4 text-center md:mb-0 md:flex-1 md:text-center">
        <p>© 2024 Patrick Gauvin. All rights reserved.</p>
        <div className="mx-auto mt-4 w-48 border-t-2 border-text2"></div>
      </div>

      {/* Contact et Réseaux Sociaux */}
      <div className="text-center sm:text-left">
        <div className="mb-6">
          <p className="font-semibold">Mon Email :</p>
          <p>blabla@gmail.com</p>
        </div>
        <div>
          <p className="mb-1 font-semibold">Mes réseaux :</p>
          <div className="flex justify-center space-x-4 sm:justify-start">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitez mon Instagram"
              className="transition-transform hover:scale-110"
            >
              <Image src={Insta} alt="Instagram" className="size-6" />
            </a>
            <a
              href="https://facebook.com"
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
