import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface ContentItem {
  title: string;
  description: string;
  content?: React.ReactNode;
}

interface StickyScrollProps {
  content: ContentItem[];
  contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const gradientBackgrounds = [
    "linear-gradient(to bottom right, #00bfff, #00ff00)",
    "linear-gradient(to bottom right, #ff6347, #ff4500)",
    "linear-gradient(to bottom right, #6a5acd, #483d8b)",
    "linear-gradient(to bottom right, #ff1493, #ff69b4)"
  ];

  return (
    <motion.div
      className="h-[40rem] overflow-y-auto flex flex-col md:flex-row justify-around items-start relative rounded-md p-4 md:p-10 bg-black"
      ref={ref}
    >
      <div className="flex-1 flex flex-col items-start justify-start px-4 md:px-6">
        {content.map((item, index) => (
          <div
            key={item.title + index}
            className="my-4 h-[60vh] flex justify-center flex-col"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="text-lg md:text-xl text-white mt-4 md:mt-6"
            >
              {item.description}
            </motion.p>
          </div>
        ))}

        <div className="h-40" />
      </div>
      <div
        style={{ background: gradientBackgrounds[activeCard % gradientBackgrounds.length] }}
        className={cn(
          "h-[30rem] w-[30rem] rounded-md sticky top-10 overflow-hidden bg-cover bg-center hidden md:block",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};
