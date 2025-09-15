"use client";

import Logo from "./logo";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { GoHomeFill } from "react-icons/go";
import { RiGalleryFill, RiPhoneCameraFill } from "react-icons/ri";
import { BsCameraVideoFill, BsBrightnessHighFill } from "react-icons/bs";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { TbUserEdit } from "react-icons/tb";
import { GiBoltCutter } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { HiOutlineMenu, HiX } from "react-icons/hi";

interface Option {
  value: string;
  label: string;
  short: string;
}

export default function Header() {
  const options: Option[] = [
    { value: "selected", label: "Selected — Fast delivery", short: "Sel" },
    { value: "save", label: "Save for later", short: "Save" },
    { value: "gift", label: "Gift wrap", short: "Gift" },
  ];

  const [value, setValue] = useState<string>(options[0].value);
  const [toggleActive, setToggleActive] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const middleIcons = [
    GoHomeFill,
    RiGalleryFill,
    BsCameraVideoFill,
    FaWandMagicSparkles,
    RiPhoneCameraFill,
    TbUserEdit,
    GiBoltCutter,
  ];

  return (
    <header className="w-full flex items-center justify-between px-4 sm:px-8 py-2 relative">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-200 transition"
          onClick={() => setSidebarOpen(true)}
        >
          <HiOutlineMenu size={24} />
        </button>

        <Logo />
        <div className="relative">
          <div
            className="absolute left-2 top-1/2 -translate-y-1/2 
                       w-7 h-7 rounded-full 
                       bg-gradient-to-r from-pink-200 via-blue-200 to-green-200
                       shadow-[4px_4px_8px_#d1d5db,-4px_-4px_8px_#ffffff]
                       pointer-events-none"
          />
          <ChevronDown
            size={14}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="
              text-[9px] sm:text-[10px] md:text-xs
              w-full pl-12 pr-8 py-2
              rounded-full
              bg-gray-100 text-gray-700
              shadow-[4px_4px_8px_#d1d5db,-4px_-4px_8px_#ffffff]
              focus:outline-none focus:ring-0
              appearance-none
            "
          >
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                <span className="hidden md:inline">{o.label}</span>
                <span className="inline md:hidden">{o.short}</span>
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-1 lg:gap-4 bg-gray-100 rounded-full px-2 py-1">
        {middleIcons.map((Icon, i) => (
          <div
            key={i}
            className="p-1 md:p-2 rounded-full hover:bg-white cursor-pointer transition-colors duration-200 flex items-center justify-center"
          >
            <Icon className="md:text-[18px] lg:text-[20px]" />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="hidden sm:flex items-center gap-1 p-2 bg-gray-100 rounded-full hover:bg-white transition-colors duration-200 cursor-pointer">
          <GrGallery />
          <p className="text-sm">Gallery</p>
        </div>

        <div className="hidden sm:flex items-center gap-1 p-2 bg-gray-100 rounded-full hover:bg-white transition-colors duration-200 cursor-pointer">
          <BiSupport />
          <p className="text-sm">Support</p>
        </div>

        <div className="p-2 bg-gray-100 rounded-full hover:bg-white transition-colors duration-200 cursor-pointer">
          <IoNotifications className="text-[20px]" />
        </div>

        <div className="p-2 bg-gray-100 rounded-full hover:bg-white transition-colors duration-200 cursor-pointer">
          <BsBrightnessHighFill className="text-[20px]" />
        </div>

        <div
          onClick={() => setToggleActive(!toggleActive)}
          className={`ml-2 w-7 h-7 rounded-full cursor-pointer
                bg-gradient-to-r from-pink-200 via-blue-200 to-green-200
                shadow-[${toggleActive
                  ? "inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff"
                  : "4px_4px_8px_#d1d5db,-4px_-4px_8px_#ffffff"}]
                transition-shadow duration-200`}
        />
      </div>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-50">
          <div className="absolute top-0 left-0 w-60 h-full bg-white p-4 shadow-lg flex flex-col gap-3">
            <button
              className="self-end p-1 rounded-full hover:bg-gray-200 transition"
              onClick={() => setSidebarOpen(false)}
            >
              <HiX size={24} />
            </button>
            {middleIcons.map((Icon, i) => (
              <div
                key={i}
                className="p-2 rounded-full hover:bg-gray-100 cursor-pointer transition-colors duration-200 flex items-center justify-center"
              >
                <Icon size={22} />
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
