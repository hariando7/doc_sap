"use client";

import React, { useState } from "react";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  // IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  // IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

function NavbarComponents({ className }: { className?: string }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [active, setActive] = useState<string | null>(null);

  const links = [
    {
      title: "Beranda",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Layanan",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Paket & Harga",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Testimoni",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <>
      {!isMobile ? (
        <>
          <div
            className={cn(
              "fixed top-10 inset-x-0 max-w-full mx-auto z-50",
              className
            )}
          >
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Beranda">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/web-dev">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">
                    Interface Design
                  </HoveredLink>
                  <HoveredLink href="/seo">
                    Search Engine Optimization
                  </HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Layanan">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Pernikahan"
                    href=""
                    src="/assets/images/undangan1.jpg"
                    description="Prepare for tech interviews like never before."
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Testimoni">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/hobby">Hobby</HoveredLink>
                  <HoveredLink href="/individual">Individual</HoveredLink>
                  <HoveredLink href="/team">Team</HoveredLink>
                  <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Kontak">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/hobby">Hobby</HoveredLink>
                  <HoveredLink href="/individual">Individual</HoveredLink>
                  <HoveredLink href="/team">Team</HoveredLink>
                  <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>
        </>
      ) : (
        <>
          <div className="relative h-screen w-full">
            <div className="pb-16">Mobile Device</div>
            <FloatingDock
              className="absolute bottom-0 w-full flex m-auto justify-center"
              items={links}
            />
          </div>
        </>
      )}
    </>
  );
}

export default NavbarComponents;
