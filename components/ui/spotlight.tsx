import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
  direction?: "left-to-right" | "right-to-left";
};

export const Spotlight = ({ className, fill, direction = "left-to-right" }: SpotlightProps) => {
  // Original transform for left-to-right
  const leftToRight = "matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)";
  // Flipped transform for right-to-left
  const rightToLeft = "matrix(0.822377 -0.568943 0.568943 0.822377 155.12 2291.09)";

  return (
      <svg
          className={cn(
              "animate-spotlight pointer-events-none absolute z-1 h-[169%] w-[138%] lg:w-[84%] opacity-0",
              className
          )}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3787 2842"
          fill="none"
      >
        <g filter="url(#filter)">
          <ellipse
              cx="1924.71"
              cy="273.501"
              rx="1924.71"
              ry="273.501"
              transform={direction === "right-to-left" ? rightToLeft : leftToRight}
              fill={fill || "white"}
              fillOpacity="0.21"
          ></ellipse>
        </g>
        <defs>
          <filter
              id="filter"
              x="0.860352"
              y="0.838989"
              width="3785.16"
              height="2840.26"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
            ></feBlend>
            <feGaussianBlur
                stdDeviation="151"
                result="effect1_foregroundBlur_1065_8"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
  );
};