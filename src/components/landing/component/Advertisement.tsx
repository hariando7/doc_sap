"use client";

import React from "react";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { FaMedal } from "react-icons/fa6";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";

function AdvertisementComponents() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {!isMobile ? (
        <>
          <section className="bg-gradient-to-b from-primary via-primary to-primary animate-gradient">
            <div className="pt-10 pb-10 pl-20 pr-20 flex justify-center gap-20">
              <div className="flex gap-2">
                <div className="flex m-auto justify-center items-center">
                  <FaMedal className="text-white w-8 h-8" />
                </div>
                <div className="text-white font-bold text-lg flex m-auto justify-center items-center">
                  Pelayanan Berkualitas
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex m-auto justify-center items-center">
                  <FaPeopleRoof className="text-white w-8 h-8" />
                </div>
                <div className="text-white font-bold text-lg flex m-auto justify-center items-center">
                  Tenaga Ahli Berpengalaman
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex m-auto justify-center items-center">
                  <IoMdPricetags className="text-white w-8 h-8" />
                </div>
                <div className="text-white font-bold text-lg flex m-auto justify-center items-center">
                  Harga Bersahabat
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
        </>
      )}
    </>
  );
}

export default AdvertisementComponents;
