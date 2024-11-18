import Image from "next/image";
import profile from "../../public/assets/about/Profile.webp";

export default function About() {
  return (
    <div className="h-screen bg-background1 pt-20 font-antonio text-text1">
      <div className="flex flex-col items-center justify-center px-8 pt-28 lg:flex-row lg:space-x-32 lg:px-20 xl:justify-evenly">
        <div>
          <h2 className="pb-20 text-center text-4xl md:pb-16 md:text-left md:text-5xl lg:pb-28 lg:text-7xl">
            A PROPOS
          </h2>
          <p className="max-w-xl pb-14 text-justify font-inter text-xs md:text-sm lg:pb-0 xl:max-w-2xl xl:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            vitae placeat beatae, excepturi eaque libero cupiditate atque eos
            quod. Ut voluptates iusto unde assumenda dolor repudiandae esse.
            Voluptatum, vel ipsum. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptatem vitae placeat beatae. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Voluptatem vitae
            placeat beatae.
          </p>
        </div>
        <figure className="w-full max-w-60 md:max-w-72 xl:max-w-sm">
          <Image src={profile} alt="Profile picture" className="" />
        </figure>
      </div>
    </div>
  );
}
