import { CareerStepProps } from "../types/types";

export default function CareerStep({ title, year, description }: CareerStepProps) {
    return (
      <div className="flex flex-col sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:size-4 sm:before:rounded-full sm:before:bg-text3">
        <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
        <time className="text-xs uppercase tracking-wide dark:text-gray-600">{year}</time>
        <p className="mt-3 text-justify">{description}</p>
      </div>
    );
  }