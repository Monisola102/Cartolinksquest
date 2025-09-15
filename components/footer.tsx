"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black/88 text-white py-4">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-2 sm:gap-4">
            <Image
              src="/logoo1.png"
              alt="logo"
              width={34}
              height={22}
              priority
              className="sm:w-[30px] sm:h-[20px] w-[25px] h-[16px]"
            />
            <span className="text-sm sm:text-md font-bold">Krea AI</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-6">
            <span className="text-sm sm:text-xl font-bold">curated by</span>
            <div className="flex items-center gap-1">
              <Image
                src="/logo3.png"
                alt="logo"
                width={35}
                height={30}
                priority
                className="sm:w-[35px] sm:h-[30px] w-[28px] h-[24px]"
              />
              <span className="text-sm sm:text-xl font-bold">MOBBIN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
