"use client";

import React from "react";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
// import { Spotlight } from "@/components/ui/Spotlight";

function HeroComponents() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const images = [
    "/assets/images/slide_screen_3.png",
    "/assets/images/slide_screen_5.png",
    "/assets/images/slide_screen_1.jpg",
    "/assets/images/slide_screen_2.png",
    "/assets/images/slide_screen_4.jpg",
  ];
  const titleMedia = [
    {
      text: "For Administrasi SAP PAS",
      className: "font-bold",
    },
  ];
  const words = [
    "Great Giant Pineapple",
    "Plantation Application System"
  ];

  return (
    <>
      {!isMobile ? (
        <>
          <ImagesSlider className="h-screen mt-0" images={images}>
            <BackgroundBeamsWithCollision>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
              >
                {/* <Spotlight
                  className="-top-40 left-0 md:left-60 md:-top-20"
                  fill="white"
                /> */}
                <div className="max-w-7xl mx-auto relative z-10 w-full bg-black/40 p-8 rounded-lg">
                  <div className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-white">
                    <div className="font-bold drop-shadow-lg items-center flex justify-center">
                      {/* Percetakan Media */}
                      <TypewriterEffectSmooth words={titleMedia} />
                    </div>
                    <FlipWords className="text-white" words={words} />
                  </div>
                  <p className="mt-4 font-normal text-base text-white max-w-full text-center mx-auto">
                    SAP Plantation Application System (PAS) merupakan sistem SAP yang digunakan untuk mendukung kegiatan operasional di area plantation. <br /> PAS dirancang untuk mengakomodir seluruh aktivitas operasional pada wilayah kebun yang telah terintegrasi dengan sistem SAP, sehingga proses administrasi, pencatatan, dan pelaporan dapat dilakukan secara sistematis dan terpusat.
                  </p>
                </div>
              </motion.div>
            </BackgroundBeamsWithCollision>
          </ImagesSlider>
        </>
      ) : (
        <>
          <ImagesSlider className="h-screen mt-0 md:mt-20" images={images}>
            <BackgroundBeamsWithCollision>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
              >
                {/* <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                  /> */}
                <div className="max-w-sm mx-auto relative z-10 w-full">
                  <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-white">
                    <div className="font-bold drop-shadow-lg items-center flex justify-center">
                      {/* Percetakan Media */}
                      <TypewriterEffectSmooth words={titleMedia} />
                    </div>
                    <FlipWords className="text-white" words={words} />
                  </div>
                  <p className="p-4 font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-full text-center mx-auto">
                    Kami hadir untuk menjadikan setiap momen Anda lebih berkesan
                    dengan kualitas cetak terbaik. Dari undangan pernikahan
                    hingga banner promosi, Dapatkan solusi cetak yang kreatif,
                    cepat, dan berkualitas hanya di Percetakan Media!
                  </p>
                </div>
              </motion.div>
            </BackgroundBeamsWithCollision>
          </ImagesSlider>
        </>
      )}
    </>
  );
}

export default HeroComponents;
