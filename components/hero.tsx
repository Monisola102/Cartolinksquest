"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroimage1 from "@/public/heroimage1.jpg";
import heroimage2 from "@/public/heroimage2.jpg";
import heroimage3 from "@/public/heroimage3.jpg";
import heroimage5 from "@/public/heroimage5.jpg";
import heroimage6 from "@/public/heroimage6.jpg";
import heroimage7 from "@/public/heroimage7.jpg";

const heroContents = [
  {
    images: [heroimage1, heroimage2, heroimage3],
    para1: "NEW IMAGE MODEL",
    para2: "WAN 2.2",
    para3: "WAN 2.2 Image Generation",
    para4:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonContent: "Try WAN 2.2",
  },
  {
    images: [heroimage5, heroimage6, heroimage7],
    para1: "NEW IMAGE MODEL",
    para2: "WAN 2.2",
    para3: "WAN 2.2 Image Generation",
    para4:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonContent: "Try WAN 2.2",
  },
];

export default function HeroSection() {
  const [currentHero, setCurrentHero] = useState(0);
  const hero = heroContents[currentHero];

  const nextHero = () => setCurrentHero((prev) => (prev + 1) % heroContents.length);
  const prevHero = () =>
    setCurrentHero((prev) => (prev - 1 < 0 ? heroContents.length - 1 : prev - 1));

  return (
    <div className="w-full mt-8">
      <div className="relative w-full rounded-3xl overflow-hidden">
        <div className="flex w-full">
          {hero.images.map((img, i) => (
            <div
              key={i}
              className="flex-1 relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] 2xl:h-[90vh]"
            >
              <Image src={img} alt={`Hero ${i}`} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-between p-4 sm:p-6 md:p-8 pointer-events-none">
          <div className="absolute top-4 left-4 pointer-events-auto">
            <p className="text-white text-xs sm:text-sm md:text-base font-light">
              {hero.para1}
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center mt-2 sm:mt-4 pointer-events-auto">
            <h1 className="tracking-widest font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center">
              {hero.para2}
            </h1>
          </div>

          <div className="absolute bottom-16 left-4 pointer-events-auto max-w-[90%] sm:max-w-md">
            <h6 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">
              {hero.para3}
            </h6>
            <p className="text-white text-xs sm:text-sm md:text-base">{hero.para4}</p>
          </div>

          <div className="absolute bottom-4 right-4 pointer-events-auto">
            <button className="bg-white text-black font-semibold py-2 px-4 rounded-full shadow-lg hover:brightness-95 hover:scale-105 transition duration-300 text-xs sm:text-sm md:text-base">
              {hero.buttonContent}
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-3 gap-3 pr-4 md:pr-6">
        <button
          onClick={prevHero}
          className="bg-gray-200 p-2 sm:p-3 rounded-full hover:bg-gray-600 transition"
        >
          <ChevronLeft size={20} color="white" />
        </button>
        <button
          onClick={nextHero}
          className="bg-gray-200 p-2 sm:p-3 rounded-full hover:bg-gray-600 transition"
        >
          <ChevronRight size={20} color="white" />
        </button>
      </div>
    </div>
  );
}
