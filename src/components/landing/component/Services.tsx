"use client";

import React from "react";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid-home";
import {
  IconArrowWaveRightUp,
  // IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Link from "next/link";

function ServicesComponents() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const tabs = [
    {
      title: "Semua",
      value: "Semua Kategori",
      content: (
        <>
          <div className="">
            <Image
              src="/assets/images/newLogo-removebg.png"
              width={300}
              height={200}
              alt="Great Giant Foods"
              className=""
            />
          </div>
          <div className="w-full h-[340px] relative overflow-hidden rounded-xl mt-4 p-6 md:p-10 bg-gradient-to-br from-primary/80 via-primary to-primary shadow-lg border border-primary transition-transform hover:scale-105 hover:shadow-2xl">
            <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
              Semua
            </p>
            <Image
              src="/assets/images/slide_screen_3.png"
              alt="dummy image"
              width="500"
              height="500"
              className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
            />
          </div>
        </>
      ),
    },
    {
      title: "SAP",
      value: "DocSAP",
      content: (
        <>
          <div className="">
            <Image
              src="/assets/images/newLogo-removebg.png"
              width={300}
              height={200}
              alt="Great Giant Foods"
              className=""
            />
          </div>
          <div className="w-full h-[340px] relative overflow-hidden rounded-xl mt-4 p-6 md:p-10 bg-gradient-to-br from-primary/80 via-primary to-primary shadow-lg border border-primary transition-transform hover:scale-105 hover:shadow-2xl">
            <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
              SAP
            </p>
            <Image
              src="/assets/images/image_sap.png"
              alt="dummy image"
              width="500"
              height="500"
              className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
            />
          </div>
        </>
      ),
    },
    {
      title: "PAS",
      value: "DocPAS",
      content: (
        <>
          <div className="">
            <Image
              src="/assets/images/newLogo-removebg.png"
              width={300}
              height={200}
              alt="Great Giant Foods"
              className=""
            />
          </div>
          <div className="w-full h-[340px] relative overflow-hidden rounded-xl mt-4 p-6 md:p-10 bg-gradient-to-br from-primary/80 via-primary to-primary shadow-lg border border-primary transition-transform hover:scale-105 hover:shadow-2xl">
            <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
              PAS
            </p>
            <Image
              src="/assets/images/image_pas.png"
              alt="dummy image"
              width="500"
              height="500"
              className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
            />
          </div>
        </>
      ),
    },
    {
      title: "RPK",
      value: "DocRPK",
      content: (
        <>
          <div className="">
            <Image
              src="/assets/images/newLogo-removebg.png"
              width={300}
              height={200}
              alt="Great Giant Foods"
              className=""
            />
          </div>
          <div className="w-full h-[340px] relative overflow-hidden rounded-xl mt-4 p-6 md:p-10 bg-gradient-to-br from-primary/80 via-primary to-primary shadow-lg border border-primary transition-transform hover:scale-105 hover:shadow-2xl">
            <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
              RPK
            </p>
            <Image
              src="/assets/images/image_rpk.png"
              alt="dummy image"
              width="500"
              height="500"
              className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
            />
          </div>
        </>
      ),
    },
    {
      title: "SPK",
      value: "Docrpk",
      content: (
        <>
          <div className="">
            <Image
              src="/assets/images/newLogo-removebg.png"
              width={300}
              height={200}
              alt="Great Giant Foods"
              className=""
            />
          </div>
          <div className="w-full h-[340px] relative overflow-hidden rounded-xl mt-4 p-6 md:p-10 bg-gradient-to-br from-primary/80 via-primary to-primary shadow-lg border border-primary transition-transform hover:scale-105 hover:shadow-2xl">
            <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
              SPK
            </p>
            <Image
              src="/assets/images/image_spk.png"
              alt="dummy image"
              width="500"
              height="500"
              className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
            />
          </div>
        </>
      ),
    },
    {
      title: "LKH",
      value: "DocLKH",
      content: (
        <>
          <div className="">
            <Image
              src="/assets/images/newLogo-removebg.png"
              width={300}
              height={200}
              alt="Great Giant Foods"
              className=""
            />
          </div>
          <div className="w-full h-[340px] relative overflow-hidden rounded-xl mt-4 p-6 md:p-10 bg-gradient-to-br from-primary/80 via-primary to-primary shadow-lg border border-primary transition-transform hover:scale-105 hover:shadow-2xl">
            <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
              LKH
            </p>
            <Image
              src="/assets/images/image_spk.png"
              alt="dummy image"
              width="500"
              height="500"
              className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
            />
          </div>
        </>
      ),
    },
    {
      title: "LHO",
      value: "DocLHO",
      content: (
        <>
          <div className="">
            <Image
              src="/assets/images/newLogo-removebg.png"
              width={300}
              height={200}
              alt="Great Giant Foods"
              className=""
            />
          </div>
          <div className="w-full h-[340px] relative overflow-hidden rounded-xl mt-4 p-6 md:p-10 bg-gradient-to-br from-primary/80 via-primary to-primary shadow-lg border border-primary transition-transform hover:scale-105 hover:shadow-2xl">
            <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
              LHO
            </p>
            <Image
              src="/assets/images/image_lho.png"
              alt="dummy image"
              width="500"
              height="500"
              className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
            />
          </div>
        </>
      ),
    },
    {
      title: "LHR",
      value: "DocLHR",
      content: (
        <>
          <div className="">
            <Image
              src="/assets/images/newLogo-removebg.png"
              width={300}
              height={200}
              alt="Great Giant Foods"
              className=""
            />
          </div>
          <div className="w-full h-[340px] relative overflow-hidden rounded-xl mt-4 p-6 md:p-10 bg-gradient-to-br from-primary/80 via-primary to-primary shadow-lg border border-primary transition-transform hover:scale-105 hover:shadow-2xl">
            <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
              LHR
            </p>
            <Image
              src="/assets/images/image_lhr.png"
              alt="dummy image"
              width="500"
              height="500"
              className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
            />
          </div>
        </>
      ),
    },
    {
      title: "LKB",
      value: "DocLKB",
      content: (
        <>
          <div className="">
            <Image
              src="/assets/images/newLogo-removebg.png"
              width={300}
              height={200}
              alt="Great Giant Foods"
              className=""
            />
          </div>
          <div className="w-full h-[340px] relative overflow-hidden rounded-xl mt-4 p-6 md:p-10 bg-gradient-to-br from-primary/80 via-primary to-primary shadow-lg border border-primary transition-transform hover:scale-105 hover:shadow-2xl">
            <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
              LKB
            </p>
            <Image
              src="/assets/images/image_spk.png"
              alt="dummy image"
              width="500"
              height="500"
              className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
            />
          </div>
        </>
      ),
    },
    {
      title: "SPK Mobile",
      value: "DocrpkMobile",
      content: (
        <>
          <div className="">
            <Image
              src="/assets/images/newLogo-removebg.png"
              width={300}
              height={200}
              alt="Great Giant Foods"
              className=""
            />
          </div>
          <div className="w-full h-[340px] relative overflow-hidden rounded-xl mt-4 p-6 md:p-10 bg-gradient-to-br from-primary/80 via-primary to-primary shadow-lg border border-primary transition-transform hover:scale-105 hover:shadow-2xl">
            <p className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide">
              SPK Mobile
            </p>
            <Image
              src="/assets/images/image_spkmobile.png"
              alt="dummy image"
              width="500"
              height="500"
              className="absolute inset-x-0 bottom-0 mx-auto h-[250px] w-full max-w-md md:max-w-lg rounded-xl object-cover border-[3px] border-white shadow-md transition-transform hover:scale-110 ml-10"
            />
          </div>
        </>
      ),
    },
  ];

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );

  const semuakategori = [
    {
      title: "SAP",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: (
        <>
          <Image
            src="/assets/images/image_sap.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      link: "/sap",
    },
    {
      title: "PAS",
      description: "Dive into the transformative power of technology.",
      header: (
        <>
          <Image
            src="/assets/images/image_pas.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
      link: "/sap",
    },
    {
      title: "RPK",
      description: "Discover the beauty of thoughtful and functional design.",
      header: (
        <>
          <Image
            src="/assets/images/image_sap.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      link: "/sap",
    },
    {
      title: "SPK",
      description:
        "Understand the impact of effective communication in our lives.",
      header: (
        <>
          <Image
            src="/assets/images/image_spk.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      link: "/sap",
    },
    {
      title: "LKH",
      description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
      link: "/sap",
    },
    {
      title: "LHO",
      description: "Experience the thrill of bringing ideas to life.",
      header: (
        <>
          <Image
            src="/assets/images/image_sap.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
      link: "/sap",
    },
    {
      title: "LHR",
      description: "Experience the thrill of bringing ideas to life.",
      header: (
        <>
          <Image
            src="/assets/images/image_pas.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
      link: "/sap",
    },
    {
      title: "LKB",
      description: "Experience the thrill of bringing ideas to life.",
      header: (
        <>
          <Image
            src="/assets/images/image_sap.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
      link: "/sap",
    },
    {
      title: "SPK Mobile",
      description: "Experience the thrill of bringing ideas to life.",
      header: (
        <>
          <Image
            src="/assets/images/image_spkmobile.png"
            alt="dummy image"
            width="500"
            height="500"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100"
          />
        </>
      ),
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
      link: "/sap",
    },
  ];

  const docsap = [
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div
            className="div"
            onClick={() =>
            (window.location.href =
              "https://wa.me/62895637316999?text=Halo%YAYA%,%20saya%20ingin%20bertanya%20tentang%20Produk%201,%20harga%20dan%20lain-lain")
            }
          >
            Kontak saya
          </div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
  ];

  const docpas = [
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div
            className="div"
            onClick={() =>
            (window.location.href =
              "https://wa.me/62895637316999?text=Halo%YAYA%,%20saya%20ingin%20bertanya%20tentang%20Produk%201,%20harga%20dan%20lain-lain")
            }
          >
            Kontak saya
          </div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
  ];

  const docrpk = [
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div
            className="div"
            onClick={() =>
            (window.location.href =
              "https://wa.me/62895637316999?text=Halo%YAYA%,%20saya%20ingin%20bertanya%20tentang%20Produk%201,%20harga%20dan%20lain-lain")
            }
          >
            Kontak saya
          </div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Dawn of Innovation",
      description: (
        <>
          <div className="div">Kontak saya</div>
        </>
      ),
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
  ];

  const tabsCard = [
    {
      title: "SemuaKategori",
      value: "SemuaKategori",
      content: (
        <BentoGrid className="max-w-4xl mx-auto">
          {semuakategori.map((item, i) => (
            <Link key={i} href={item.link}>
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
                // icon={item.icon}
                className={
                  i === 1 || i === 8
                    ? "md:col-span-1 cursor-pointer"
                    : "bg-white cursor-pointer"
                }
              />
            </Link>
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "docsap",
      value: "docsap",
      content: (
        <BentoGrid className="max-w-4xl mx-auto">
          {docsap.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "docpas",
      value: "docpas",
      content: (
        <BentoGrid className="max-w-4xl mx-auto">
          {docpas.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
    {
      title: "docrpk",
      value: "docrpk",
      content: (
        <BentoGrid className="max-w-4xl mx-auto">
          {docrpk.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // icon={item.icon}
              className={i === 1 || i === 8 ? "md:col-span-1" : "bg-white"}
            />
          ))}
        </BentoGrid>
      ),
    },
  ];

  return (
    <>
      {!isMobile ? (
        <>
          <section className="bg-gradient-to-b from-white via-white to-white animate-gradient">
            <div className="h-[900px] w-full p-10 flex justify-between [perspective:1000px] relative flex-col max-w-7xl mx-auto items-start">
              <h1 className="text-primary hover:text-secondary font-bold text-4xl text-center justify-center m-auto flex mb-10 pt-10">
                <i className="fas fa-leaf">Plantation Aplication System Docs</i>
              </h1>
              <Tabs tabs={tabs} tabsCard={tabsCard} />
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="bg-gradient-to-b from-white via-white to-white animate-gradient">
            <div className="h-[1500px] md:h-[900px] w-full p-10 md:p-10 flex justify-between [perspective:1000px] relative flex-col max-w-7xl mx-auto items-start">
              <h1 className="text-primary hover:text-secondary font-bold text-center justify-center m-auto flex mb-6 pt-4 md:mb-10 md:pt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                PAS Docs
              </h1>
              <Tabs tabs={tabs} tabsCard={tabsCard} />
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default ServicesComponents;
