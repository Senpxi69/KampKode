import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../lib/utils";
import { MobileNav } from "./MobileNav";

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() > 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-7xl w-full fixed top-10 inset-x-0 mx-auto border border-transparent bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-2 items-center justify-between rounded-lg h-20 bg-opacity-80 backdrop-blur-sm",
            "hidden sm:flex", // Hide on mobile, show on small screens and up
            className
          )}
        >
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold">
              <span className="text-[#7f56d9]">N</span>AV
              <span className="text-[#7f56d9]">B</span>AR
            </span>
          </div>

          <div className="flex space-x-8">
            <a href="#home" className="text-black hover:text-neutral-600 font-bold text-lg">Home</a>
            <a href="#product" className="text-black hover:text-neutral-600 font-bold text-lg">Product</a>
            <a href="#resource" className="text-black hover:text-neutral-600 font-bold text-lg">Resource</a>
            <a href="#pricing" className="text-black hover:text-neutral-600 font-bold text-lg">Pricing</a>
          </div>

          <div className="flex space-x-4">
            <button className="bg-[#f8f4ff] border border-[#eee3fc] text-[#7f56d9] text-lg font-medium px-4 py-2 rounded-lg">
              Login
            </button>
            <button className="bg-[#7f56d9] text-white text-lg font-medium px-4 py-2 rounded-lg">
              Sign up
            </button>
          </div>
        </motion.div>

      </AnimatePresence>
      <MobileNav className="flex sm:hidden" />
    </>
  );
};
