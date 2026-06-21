"use client";

import { useState, forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
// import { useMediaQuery } from "@/app/hooks/useMediaQuery";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

export type TabsPASDocsHandle = {
  switchTab: (value: string) => void;
};

export const TabsPASDocs = forwardRef<
  TabsPASDocsHandle,
  {
    tabs: Tab[];
    tabsCard: Tab[];
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
  }
>(function TabsPASDocs(
  {
    tabs: propTabs,
    tabsCard: propTabsCard,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName,
  },
  ref
) {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [activeCard, setActiveCard] = useState<Tab>(propTabsCard[0]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  // Ganti tab aktif langsung by value — tidak bergantung pada urutan array
  const selectTabByValue = (value: string) => {
    const tab = propTabs.find((t) => t.value === value);
    const card = propTabsCard.find((t) => t.value === value);
    if (tab) setActive(tab);
    if (card) setActiveCard(card);
  };

  // Tetap dipakai saat klik tombol tab (pakai idx dari propTabs yang stabil)
  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);

    const newTabsCard = [...propTabsCard];
    const selectedCard = newTabsCard.splice(idx, 1);
    newTabsCard.unshift(selectedCard[0]);
    setActiveCard(newTabsCard[0]);
  };

  // Expose switchTab — langsung set by value, tidak pakai index
  useImperativeHandle(ref, () => ({
    switchTab: (value: string) => {
      selectTabByValue(value);
    },
  }));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hovering, setHovering] = useState(false);

  // const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Sidebar Tab */}
        {/* ================= MOBILE TAB ================= */}
        <div className="lg:hidden">
          <div
            className="
      flex gap-2
      overflow-x-auto
      pb-2
      scrollbar-hide
    "
          >
            {propTabs.map((tab, idx) => (
              <button
                key={tab.value}
                onClick={() => {
                  moveSelectedTabToTop(idx);
                  setActiveCard(propTabsCard[idx]);
                }}
                className={cn(
                  `
          flex-shrink-0
          px-4
          py-3
          rounded-2xl
          text-sm
          font-medium
          transition-all
          duration-300
          border
          `,
                  active.value === tab.value
                    ? `
              bg-gradient-to-r
              from-green-500
              to-emerald-600
              text-white
              border-transparent
              shadow-lg
            `
                    : `
              bg-white
              border-slate-200
              text-slate-700
            `
                )}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP SIDEBAR ================= */}
        <div
          className={cn(
            "hidden lg:block w-full lg:w-72 shrink-0 rounded-xl",
            containerClassName
          )}
        >
          <div
            className="
      sticky top-6
      bg-white/90
      backdrop-blur-xl
      border border-slate-200
      rounded-3xl
      p-4
      h-[620px]
      shadow-[0_8px_30px_rgb(0,0,0,0.06)]
    "
          >
            {propTabs.map((tab, idx) => (
              <button
                key={tab.value}
                onClick={() => {
                  moveSelectedTabToTop(idx);
                  setActiveCard(propTabsCard[idx]);
                }}
                className={cn(
                  `
          relative
          w-full
          text-left
          px-4
          py-3
          rounded-2xl
          transition-all
          duration-300
          mb-2
          `,
                  active.value === tab.value
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                    : "hover:bg-slate-100 text-slate-700"
                )}
              >
                {active.value === tab.value && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="
              absolute
              left-0
              top-2
              bottom-2
              w-1
              rounded-full
              bg-white
            "
                  />
                )}

                <span className="relative z-10 font-medium">
                  {tab.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <FadeInDivCard
            tabsCard={propTabsCard}
            activeCard={activeCard}
            className={cn("", contentClassName)}
          />
        </div>
      </div>
    </>
  );
});

export const FadeInDiv = ({
  className,
  tabs,
  active,
  hovering,
}: {
  className?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => tab.value === active.value;

  return (
    <div className="relative w-1/2 h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            left: hovering ? idx * 0 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 5 : 0,
          }}
          animate={{ y: isActive(tab) ? [0, 40, 0] : 0 }}
          className={cn(
            "w-full h-full absolute top-0 left-0 items-start justify-start",
            className
          )}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};

export const FadeInDivCard = ({
  className,
  tabsCard,
  activeCard,
}: {
  className?: string;
  tabsCard: Tab[];
  activeCard: Tab;
}) => {
  return (
    <div className="w-full">
      {tabsCard.map((tab) =>
        tab.value === activeCard.value ? (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "w-full bg-white rounded-3xl border border-slate-200 shadow-lg",
              className
            )}
          >
            {tab.content}
          </motion.div>
        ) : null
      )}
    </div>
  );
};