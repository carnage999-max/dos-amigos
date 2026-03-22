"use client";

import React from "react";
import Image from "next/image";

interface HiringButtonProps {
  className?: string;
  scale?: number;
}

const HiringButton = ({ className = "", scale = 1 }: HiringButtonProps) => {
  return (
    <>
      <style jsx>{`
        .taco-btn-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: calc(180px * ${scale});
          height: calc(120px * ${scale});
          flex-shrink: 0;
          vertical-align: middle;
        }

        .taco-btn {
          width: 180px;
          height: 120px;
          border: 0;
          padding: 0;
          background: transparent;
          cursor: pointer;
          position: relative;
          -webkit-tap-highlight-color: transparent;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(${scale});
          transform-origin: center;
        }

        .taco-btn:hover {
          transform: scale(${scale * 1.15}) rotate(-2deg);
        }

        .taco-btn:active {
          transform: scale(${scale * 0.92});
        }

        .taco-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
          transition: filter 0.3s ease;
        }

        .taco-btn:hover .taco-image-container {
          filter: drop-shadow(0 8px 12px rgba(217, 154, 47, 0.3));
        }

        .taco-hiring-trigger {
          /* This class is used by the widget script globally */
        }
      `}</style>
      <div className={`taco-btn-wrapper ${className}`}>
        <button
          className="taco-btn taco-hiring-trigger"
          aria-label="Now Hiring taco button"
        >
          <div className="taco-image-container">
            <Image
              src="/Now-hiring-button.png"
              alt="Now Hiring"
              fill
              className="object-contain"
              priority
            />
          </div>
        </button>
      </div>
    </>
  );
};

export default HiringButton;
