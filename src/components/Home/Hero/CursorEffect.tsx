import React from "react";
import { MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  color: string;
  side: "left" | "right";
  text: string;
  icon: React.ReactNode;
  delay?: number; // Delay before animation starts
}

// Define color mappings for different styles
const colorMap: Record<string, { bg: string; text: string; fill: string; border: string }> = {
  purple: { bg: "bg-purple-200", text: "text-purple-800", fill: "fill-purple-700", border: "bg-purple-700" },
  blue: { bg: "bg-blue-200", text: "text-blue-800", fill: "fill-blue-700", border: "bg-blue-700" },
  green: { bg: "bg-green-200", text: "text-green-800", fill: "fill-green-700", border: "bg-green-700" },
  red: { bg: "bg-red-200", text: "text-red-800", fill: "fill-red-700", border: "bg-red-700" },
  yellow: { bg: "bg-yellow-200", text: "text-yellow-800", fill: "fill-yellow-700", border: "bg-yellow-700" },
  pink: { bg: "bg-pink-200", text: "text-pink-800", fill: "fill-pink-700", border: "bg-pink-700" },
  indigo: { bg: "bg-indigo-200", text: "text-indigo-800", fill: "fill-indigo-700", border: "bg-indigo-700" },
  cyan: { bg: "bg-cyan-200", text: "text-cyan-800", fill: "fill-cyan-700", border: "bg-cyan-700" },
  lime: { bg: "bg-lime-200", text: "text-lime-800", fill: "fill-lime-700", border: "bg-lime-700" },
  orange: { bg: "bg-orange-200", text: "text-orange-800", fill: "fill-orange-700", border: "bg-orange-700" },
};

// Default to purple if an unsupported color is passed
const getColorClasses = (color: string) => colorMap[color] || colorMap.purple;

const CursorEffect: React.FC<Props> = ({ className, color, side, text, icon, delay = 0 }) => {
  const { bg, text: textColor, fill, border } = getColorClasses(color);

  // Determine initial direction based on side
  const initialX = side === "right" ? 100 : -100;
  const bounceX = side === "right" ? -10 : 10; // Small bounce effect before stopping

  return (
    <div className={cn("absolute", className)}>
      <div className="relative">
        {/* Icon container */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay }}
          className={cn("p-4 rounded-full w-fit", bg, textColor)}
        >
          {icon}
        </motion.div>

        {/* Pointer & Tooltip */}
        <motion.div
          initial={{ x: initialX, opacity: 0 }}
          animate={{ x: [initialX, bounceX, 0], opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay }}
          className={cn("absolute top-[60%]", side === "right" ? "left-[70%]" : "right-[70%]")}
        >
          <div className="relative w-fit">
            {/* Pointer icon */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: [0, -5, 0], opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: delay + 0.2 }}
            >
              <MousePointer2
                className={cn(
                  "transform-origin-top",
                  fill,
                  textColor,
                  { "rotate-0": side === "right", "rotate-90": side !== "right" }
                )}
                size={33}
              />
            </motion.div>
            
            {/* Tooltip */}
            <motion.h1
              initial={{ x: initialX, opacity: 0 }}
              animate={{ x: [initialX, bounceX, 0], opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: delay + 0.3 }}
              className={cn(
                "px-3 py-2 rounded-full text-sm absolute text-nowrap top-[65%] shadow-md",
                border,
                "text-white",
                side === "right" ? "left-[100%]" : "right-[100%]"
              )}
            >
              {text}
            </motion.h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CursorEffect;
