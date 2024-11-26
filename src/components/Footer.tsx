import React from "react";
import Image from "next/image";
import LogoPage from "../../public/assets/logo.svg";
import Insta from "../../public/assets/insta.svg";
import Facebook from "../../public/assets/facebook.svg";

const Footer = () => {
  return (

    <footer className="flex flex-col items-center justify-between border-t border-text1 bg-background1 px-10 py-6 font-antonio text-text1 md:flex-row md:px-20 md:py-8">

            {/* Logo */}
            <div className="order-2 flex w-20 justify-center sm:w-24 md:order-none lg:w-28 xl:w-32">

        <Image src={LogoPage} alt="Logo" />
      </div>

      {/* Copyright */}
      <div className="order-3 mb-4 text-center text-xs md:order-none md:mb-0 md:flex-1 md:text-center md:text-sm">
        <p>© 2024 Patrick Gauvin. All rights reserved.</p>
        <div className="mx-auto mt-3 w-28 border-t md:mt-4 md:border-t-2"></div>
      </div>
      {/* Contact et Réseaux Sociaux */}

      <div className="order-1 mb-6 text-center text-xs sm:text-left md:order-none md:text-sm">
        <div className="mb-6">
          <p className="pb-2 font-semibold">Mon Email :</p>

          <p>blabla@gmail.com</p>
        </div>
        <div>
          <p className="pb-2 font-semibold">Mes réseaux :</p>
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
