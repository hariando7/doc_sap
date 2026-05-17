"use client";

import React from "react";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function ClientComponents() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/assets/images/percetakan.png",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/assets/images/logo.png",
    },
  ];

  return (
    <>
      {!isMobile ? (
        <>
          <section className="bg-gradient-to-b from-[#f5f5f5] via-[#f5f5f5] to-[#f5f5f5] animate-gradient">
            <div className="h-screen w-full p-20">
              <h1 className="text-primary font-bold text-4xl text-center justify-center m-auto flex mb-5">
                Klien Kami
              </h1>
              <AnimatedTestimonials testimonials={testimonials} />
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default ClientComponents;
