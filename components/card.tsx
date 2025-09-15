"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import icon3 from "@/public/icon3.png";
import icon8 from "@/public/icon8.png";
import icon9 from "@/public/icon9.png";
import icon13 from "@/public/icon13.png";
import icon15 from "@/public/icon15.png";
import iconnn from "@/public/iconnn.png";
import icon2 from "@/public/iconnn.png";
import icoon4 from "@/public/icoon4.png";

interface objType {
  para1: string;
  para2?: string;
  para3: string;
  buttonContent: string;
  image: string | StaticImageData;
}

const ContentCard = ({
  para1,
  para2,
  para3,
  buttonContent,
  image,
}: objType) => (
  <div className="flex flex-col gap-3">
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <Image
          src={image}
          alt="Logo"
          width={32}
          height={32}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col w-[70%]">
        <div className="flex items-center gap-2">
          <p className="font-medium">{para1}</p>
          {para2 && (
            <span className="bg-blue-700 text-white text-xs p-[4px] rounded-full">
              {para2}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600">{para3}</p>
      </div>

      <div>
        <button
          className="
            bg-gray-100 
            p-[8px]
            rounded-full
            text-sm text-black 
            shadow-[4px_4px_8px_#d1d5db,-4px_-4px_8px_#ffffff]
            hover:shadow-[2px_2px_4px_#d1d5db,-2px_-2px_4px_#ffffff]
            active:shadow-inner
            transition-all
          "
        >
          {buttonContent}
        </button>
      </div>
    </div>
  </div>
);

const contents: objType[] = [
  {
    para1: "Image",
    para2: "New",
    para3: "Generate images with custom styles in flux and ideogram",
    buttonContent: "Open",
    image: icon8,
  },
  {
    para1: "Edit ",
    para2: "New",
    para3: "Add objects, change styles or expand photos and generations",
    buttonContent: "Open",
    image: icon9,
  },
  {
    para1: "Video ",
    para3: "Generate videos with luma and more",
    buttonContent: "Open",
    image: icon3,
  },
  {
    para1: "Video Lipsync ",
    para2: "New",
    para3: "Lipsync any video to any audio ",
    buttonContent: "Open",
    image: icoon4,
  },
  {
    para1: "Realtime",
    para3: "Realtime AI rendering on instant feedback loops",
    buttonContent: "Open",
    image: icon2,
  },
  {
    para1: "Motion Transfer",
    para2: "New",
    para3: "Transfer motions to images and animate characters",
    buttonContent: "Open",
    image: icon15,
  },
  {
    para1: "Enhancer",
    para2: "New",
    para3: "Upscale and enhance images and videos up to 22K ",
    buttonContent: "Open",
    image: iconnn,
  },
  {
    para1: "Teach",
    para2: "New",
    para3: "Teach Krea to replicate your style, products or characters",
    buttonContent: "Open",
    image: icon13,
  },
];

export default function ContentComp() {
  const [showAll, setShowAll] = useState(false);
  const cardsToShow = showAll ? contents : contents.slice(0, 4);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-2 sm:gap-0">
          <h2 className="text-md sm:text-xl font-semibold">Generate</h2>
          <button
            className="flex items-center text-sm sm:text-base font-bold text-blue-600"
            onClick={() => setShowAll(!showAll)}
          >
            <ChevronDown
              color="blue"
              size={16}
              className={`mr-1 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            />
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {cardsToShow.map((item, index) => (
            <ContentCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
