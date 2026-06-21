"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
// import FooterComponents from "../component/Footer";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import {
  // HoveredLink,
  Menu,
  MenuItem,
  // ProductItem,
} from "@/components/ui/navbar-menu";
// import { FloatingDock } from "@/components/ui/floating-dock";
// import { FcInvite } from "react-icons/fc";
// import {
//   IconBrandGithub,
//   IconBrandX,
//   IconExchange,
//   IconHome,
//   IconNewSection,
//   IconTerminal2,
//   FcInvite
// } from "@tabler/icons-react";
import Link from "next/link";
import DocsPAS from "../component/doc_pas/services";

// const links = [
//   {
//     title: "Home",
//     icon: <IconHome className="h-full w-full text-white" />,
//     href: "/",
//   },

//   {
//     title: "Docs PAS",
//     icon: <FcInvite className="h-full w-full text-white" />,
//     href: "/docs_pas",
//   },
// ];

function LayananPage({ className }: { className?: string }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full bg-black/40">
      <>
        {!isMobile ? (
          <>
            <div
              className={cn(
                "fixed top-10 inset-x-0 max-w-full mx-auto z-0",
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
                    {/* <div className="flex flex-col space-y-4 text-sm">
                      <HoveredLink href="/docs_pas">
                        Docs PAS
                      </HoveredLink>
                    </div> */}
                  </MenuItem>
                </Link>
                <Link href={"/docs_pas"}>
                  <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Docs"
                  >
                    {/* <div className="text-sm grid grid-cols-2 gap-10 p-4">
                      <ProductItem
                        title="Doc PAS"
                        href="/docs_pas"
                        src="/assets/images/rpk.png"
                        description="Selengkapnya"
                      />
                    </div> */}
                  </MenuItem>
                </Link>
              </Menu>
            </div>

            <DocsPAS />
            {/* <FooterComponents /> */}
          </>
        ) : (
          <>
            <DocsPAS />
            {/* <FloatingDock
              className="bottom-0 w-full flex m-auto justify-center fixed"
              items={links}
            /> */}
          </>
        )}
      </>
    </div>
  );
}

export default LayananPage;
