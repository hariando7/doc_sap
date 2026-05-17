"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import HeroDekstop from "../component/Hero";
import ServicesComponents from "../component/Services";
// import AdvertisementComponents from "../component/Advertisement";
// import ClientComponents from "../component/Client";
import FooterComponents from "../component/Footer";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  // IconBrandGithub,
  // IconBrandX,
  // IconExchange,
  IconHome,
  // IconNewSection,
  // IconTerminal2,
} from "@tabler/icons-react";
import Link from "next/link";
import { FcInvite } from "react-icons/fc";

const links = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-white" />,
    href: "/",
  },

  {
    title: "Undangan Digital",
    icon: <FcInvite className="h-full w-full text-white" />,
    href: "/undangan-digital",
  },
];

function HomePage({ className }: { className?: string }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full bg-black/40">
      <>
        {!isMobile ? (
          <>
            <div
              className={cn(
                "fixed inset-x-0 max-w-full mx-auto z-50",
                className
              )}
            >
              <Menu setActive={setActive}>
                <Link href={"/"}>
                  <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Home"
                  >
                    <div className="flex flex-col space-y-4 text-sm">
                      <HoveredLink href="/">
                        Tentang PAS Docs
                      </HoveredLink>
                      <HoveredLink href="/undangan-digital">
                        Team PAS
                      </HoveredLink>
                    </div>
                  </MenuItem>
                </Link>
                <Link href={"/docs_pas"}>
                  <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Docs"
                  >
                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                      <ProductItem
                        title="SAP"
                        href="/undangan-digital"
                        src="/assets/images/image_sap.png"
                        description="Revisi Sepuasnya"
                      />
                      <ProductItem
                        title="PAS"
                        href="/undangan-digital"
                        src="/assets/images/image_pas.png"
                        description="Revisi Sepuasnya"
                      />
                      <ProductItem
                        title="RPK"
                        href="/undangan-digital"
                        src="/assets/images/image_rpk.png"
                        description="Revisi Sepuasnya"
                      />
                      <ProductItem
                        title="SPK"
                        href="/undangan-digital"
                        src="/assets/images/image_spk.png"
                        description="Revisi Sepuasnya"
                      />
                      <ProductItem
                        title="LKH"
                        href="/undangan-digital"
                        src="/assets/images/image_spk.png"
                        description="Revisi Sepuasnya"
                      />
                      <ProductItem
                        title="LHO"
                        href="/undangan-digital"
                        src="/assets/images/image_lho.png"
                        description="Revisi Sepuasnya"
                      />
                      <ProductItem
                        title="LHR"
                        href="/undangan-digital"
                        src="/assets/images/image_lhr.png"
                        description="Revisi Sepuasnya"
                      />
                      <ProductItem
                        title="LKB"
                        href="/undangan-digital"
                        src="/assets/images/image_spk.png"
                        description="Revisi Sepuasnya"
                      />
                      <ProductItem
                        title="SPK Mobile"
                        href="/undangan-digital"
                        src="/assets/images/image_spkmobile.png"
                        description="Revisi Sepuasnya"
                      />
                    </div>
                  </MenuItem>
                </Link>
              </Menu>
            </div>

            {/* Hero Buka */}
            <HeroDekstop />
            {/* Hero Tutup */}

            {/* Services Buka */}
            <ServicesComponents />
            {/* Services Tutup */}

            {/* Advertisement Buka*/}
            {/* <AdvertisementComponents /> */}
            {/* Advertisement Tutup*/}

            {/* Client Buka */}
            {/* <ClientComponents /> */}
            {/* Client Tutup */}

            {/* Footer Buka */}
            <FooterComponents />
            {/* Footer Tutup */}
          </>
        ) : (
          <>
            {/* <div className="relative h-screen w-full"> */}

            {/* Hero Buka */}
            <HeroDekstop />
            {/* Hero Tutup */}

            {/* Services Buka */}
            <ServicesComponents />
            {/* Services Tutup */}

            {/* Advertisement Buka*/}
            {/* <AdvertisementComponents /> */}
            {/* Advertisement Tutup*/}

            {/* Client Buka */}
            {/* <ClientComponents /> */}
            {/* Client Tutup */}

            {/* Footer Buka */}
            {/* <FooterComponents /> */}
            {/* Footer Tutup */}

            {/* Nababr buka */}
            <FloatingDock
              className="bottom-0 w-full flex m-auto justify-center fixed"
              items={links}
            />
            {/* Nababr Tutup */}

            {/* </div> */}
          </>
        )}
      </>
    </div>
  );
}

export default HomePage;
