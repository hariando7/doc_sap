"use client";

import React from "react";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

function FooterComponents() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {!isMobile ? (
        <>
          <section className="bg-primary w-full p-2">
            <p className="text-center flex m-auto text-sm justify-center items-center text-primary-foreground">
              Copyright © 2026 PAS Doc by IT Plantation. Made with ❤️
              for a better web.
            </p>
          </section>
        </>
      ) : (
        <>
          <section className="bg-primary w-full p-2">
            <p className="text-center flex m-auto text-sm justify-center items-center text-primary-foreground">
              Copyright © 2026 PAS Doc by IT Plantation. Made with ❤️
              for a better web.
            </p>
          </section>
        </>
      )}
    </>
  );
}

export default FooterComponents;
