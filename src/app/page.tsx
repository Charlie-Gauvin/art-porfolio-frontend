import About from "../components/About";
import Image from "next/image";
import canva from "../../public/assets/hero/canva.webp";
import graffiti from "../../public/assets/hero/graffiti.svg";
import insta from "../../public/assets/hero/instagram.svg";
import facebook from "../../public/assets//hero/facebook.svg";

export default function Home() {
  return (
    <div>
      <section className="flex h-screen items-center justify-center bg-background1 font-antonio text-text1">
        {/* ##########################
        ## GARDER LE PB-40 ???? ##
        ########################## */}
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
                <figure className="absolute -right-2 top-3 lg:-right-4 lg:top-5">
                  <Image
                    src={graffiti}
                    alt="graffiti"
                    className="w-24 md:w-32 lg:w-48"
                  />
                </figure>
              </span>
            </h2>
          </div>
          <figure className="w-full max-w-60 md:max-w-72 xl:max-w-sm">
            <Image src={canva} alt="canva" className="" />
          </figure>
        </div>
        <div className="absolute bottom-36 flex space-x-4 md:bottom-4 md:left-4 md:flex md:space-x-4 lg:bottom-4 lg:left-4 lg:flex lg:space-x-4">
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
