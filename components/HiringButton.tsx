"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
          display: flex;
          align-items: center;
          justify-content: center;
          transform-origin: center;
        }

        .taco-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15));
        }

        @keyframes soft-pulse {
          0% { transform: scale(1); filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15)); }
          50% { transform: scale(1.05); filter: drop-shadow(0 8px 12px rgba(217, 154, 47, 0.4)); }
          100% { transform: scale(1); filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15)); }
        }

        @media (hover: hover) {
          .taco-btn:hover {
            transform: rotate(-2deg);
            transition: transform 0.3s ease;
          }
        }
      `}</style>
      <motion.div 
        className={`taco-btn-wrapper ${className}`}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: scale, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.6 
        }}
      >
        <motion.button
          className="taco-btn taco-hiring-trigger"
          aria-label="Now Hiring taco button"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileTap={{ scale: 0.92 }}
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
        </motion.button>
      </motion.div>
    </>
  );
};

export default HiringButton;
