"use client";
import { useEffect, useRef} from "react";
import { gsap } from "gsap";
import About from "../components/About";
import Image from "next/image";
import canva from "../../public/assets/hero/canva.webp";
import graffiti from "../../public/assets/hero/graffiti.svg";
import insta from "../../public/assets/hero/instagram.svg";
import facebook from "../../public/assets//hero/facebook.svg";

// import paint1 from "../../public/assets/hero/Splash1.svg";
// import paint2 from "../../public/assets/hero/Splash2.svg";



export default function Home() {

  const paint1Ref = useRef<HTMLImageElement>(null);
  const paint2Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Anim pour paint1
    gsap.fromTo(
      paint1Ref.current,
      {
        scale: 0.2,
        opacity: 0,
        filter: "blur(8px)", // Flou initial
        transformOrigin: "top right",
      },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)", // Plus net à la fin
        duration: 2,
        ease: "power3.out",
      }
    );
  

    // Anim pour paint2
    gsap.fromTo(
      paint2Ref.current,
      {
        scale: 0.2,
        opacity: 0,
        filter: "blur(4px)", // Flou initial
        transformOrigin: "left",
      },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)", // Plus net à la fin
        duration: 2,
        ease: "power2.out",
      }
    );
  }, []);
  return (
    <div>
      <section className="flex h-screen items-center justify-center bg-background1 font-antonio text-text1">
        {/* ##########################
        ## GARDER LE PB-40 ???? ##
        ########################## */}
        {/* SVG paint1 en haut à droite */}
        <div className="absolute right-0 top-24">
          <img
            src="../../assets/hero/Splash1.svg"
            alt="Paint Splash"
            ref={paint1Ref}
            className="w-44 md:w-60 lg:w-80 xl:w-96"
          />
        </div>
        {/* SVG paint2 en bas à gauche */}
        <div className="absolute -bottom-36 left-0 hidden md:block lg:-bottom-48 xl:-bottom-56">
          <img
            src="../../assets/hero/Splash2.svg"
            alt="Paint Splash"
            ref={paint2Ref}
            className="md:w-60 lg:w-80 xl:w-96"
          />
        </div>
        <div className="flex flex-col items-center space-y-20 pb-40 lg:flex-row lg:space-x-24 xl:space-x-56 2xl:space-x-80">
          <div className="flex flex-col items-start">
            <div className="flex items-center text-xs md:text-sm lg:text-lg">
              <h1 className="whitespace-nowrap">Patrick Gauvin</h1>
              <div className="mx-2 w-9 border-t border-text1 md:w-14 md:border-t-2"></div>
              <p className="whitespace-nowrap">Gallerie</p>
            </div>
            <h2 className="mt-4 text-left text-4xl md:text-5xl lg:text-7xl">
              <span>AU FIL DE l&apos;EAU</span>
              <span className="relative mt-4 block whitespace-nowrap md:mt-8">
                SUR LE FIL DU TEMPS
                <figure className="absolute -right-2 top-12 md:-right-3 md:top-14 lg:-right-3 lg:top-20">
                  <Image
                    src={graffiti}
                    alt="graffiti"
                    className="w-24 md:w-32 lg:w-44"
                  />
                </figure>
              </span>
            </h2>
          </div>
          <figure className="w-full max-w-60 md:max-w-72 xl:max-w-sm ">
            <Image
              src={canva}
              alt="canva"
              className="shadow-[0px_2px_10px_8px_rgba(255,_255,_255,_0.05)]"
            />
          </figure>
        </div>
        {/* Ancien Positionnement en SB */}
        {/* <div className="absolute bottom-36 flex space-x-4 md:bottom-4 md:left-4 md:flex md:space-x-4 lg:bottom-4 lg:left-4 lg:flex lg:space-x-4"> */}
        <div className="absolute bottom-32 flex space-x-5 md:bottom-7 md:right-7">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src={insta} alt="Instagram" className="size-7 md:size-8" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src={facebook} alt="Facebook" className="size-7 md:size-8" />
          </a>
        </div>
      </section>
      <About />
    </div>
  );
}
