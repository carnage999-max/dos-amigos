"use client";

import React, { useState, useId } from "react";

interface HiringButtonProps {
  className?: string;
  scale?: number;
}

const HiringButton = ({ className = "", scale = 1 }: HiringButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  
  // Create unique IDs to prevent SVG gradient conflicts between multiple instances
  const shellBottomGradId = `shellBottomGrad-${id.replace(/:/g, "")}`;
  const shellWarmLightId = `shellWarmLight-${id.replace(/:/g, "")}`;
  const shellTopGradId = `shellTopGrad-${id.replace(/:/g, "")}`;
  const shellTopGlowId = `shellTopGlow-${id.replace(/:/g, "")}`;
  const textShadowId = `textShadow-${id.replace(/:/g, "")}`;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <style jsx>{`
        .taco-btn-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: calc(320px * ${scale});
          height: calc(220px * ${scale});
          flex-shrink: 0;
          vertical-align: middle;
        }

        .taco-btn {
          width: 320px;
          height: 220px;
          transform: scale(${scale});
          transform-origin: center;
          border: 0;
          padding: 0;
          background: transparent;
          cursor: pointer;
          position: relative;
          perspective: 1200px;
          -webkit-tap-highlight-color: transparent;
          flex-shrink: 0;
        }

        .taco-btn:focus-visible {
          outline: 3px solid #c9891c;
          outline-offset: 8px;
          border-radius: 24px;
        }

        .scene {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 180ms ease;
        }

        .taco-btn:active .scene {
          transform: scale(0.985);
        }

        .shadow {
          position: absolute;
          left: 50%;
          bottom: 18px;
          width: 220px;
          height: 26px;
          transform: translateX(-50%);
          border-radius: 999px;
          background: radial-gradient(ellipse at center, rgba(70, 39, 10, 0.28) 0%, rgba(70, 39, 10, 0.12) 45%, rgba(70, 39, 10, 0) 75%);
          filter: blur(8px);
          transition: transform 0.45s ease, opacity 0.45s ease, width 0.45s ease;
          z-index: 0;
        }

        .taco-btn.open .shadow {
          width: 250px;
          opacity: 0.9;
          transform: translateX(-50%) scaleX(1.08);
        }

        .taco-wrap {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
        }

        .layer {
          position: absolute;
          inset: 0;
          will-change: transform;
        }

        .shell-bottom {
          z-index: 1;
          filter: drop-shadow(0 14px 18px rgba(64, 31, 6, 0.22));
        }

        .fillings {
          z-index: 2;
          transform-origin: 50% 75%;
          transform: translateY(0) scale(0.98);
          transition: transform 0.55s cubic-bezier(.2,.8,.2,1);
          filter: drop-shadow(0 8px 10px rgba(0,0,0,0.12));
        }

        .shell-top {
          z-index: 3;
          transform-origin: 50% 79%;
          transform-style: preserve-3d;
          transition: transform 0.65s cubic-bezier(.2,.85,.2,1);
          filter: drop-shadow(0 10px 14px rgba(0,0,0,0.13));
        }

        .shell-top svg,
        .shell-bottom svg,
        .fillings svg {
          width: 100%;
          height: 100%;
          display: block;
          overflow: visible;
        }

        .taco-btn:hover .shell-top {
          transform: rotateX(-10deg);
        }

        .taco-btn:hover .fillings {
          transform: translateY(-2px) scale(1.005);
        }

        .taco-btn.open .shell-top {
          transform: rotateX(-64deg) translateY(-16px) translateZ(12px);
        }

        .taco-btn.open .fillings {
          transform: translateY(-8px) scale(1.05);
        }

        .taco-btn.open:hover .shell-top {
          transform: rotateX(-64deg) translateY(-16px) translateZ(12px);
        }

        .hint {
          position: absolute;
          left: 50%;
          bottom: -10px;
          transform: translateX(-50%);
          font-size: 14px;
          color: #8c6640;
          letter-spacing: 0.03em;
          user-select: none;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.9);
          padding: 6px 14px;
          border-radius: 20px;
          backdrop-filter: blur(8px);
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(217, 154, 47, 0.2);
          pointer-events: none;
        }

        .status-text {
          transition: opacity 0.25s ease;
        }

        .taco-btn.open .status-text.closed {
          display: none;
          opacity: 0;
        }

        .grain {
          mix-blend-mode: multiply;
          opacity: 0.18;
        }
      `}</style>
      <div className={`taco-btn-wrapper ${className}`}>
        <button
          className={`taco-btn taco-hiring-trigger ${isOpen ? "open" : ""}`}
          aria-pressed={isOpen}
          aria-label="Now Hiring taco button"
          onClick={toggleOpen}
        >
          <div className="scene">
            <div className="shadow"></div>

            <div className="taco-wrap">
              {/* Bottom shell */}
              <div className="layer shell-bottom" aria-hidden="true">
                <svg viewBox="0 0 320 220">
                  <defs>
                    <linearGradient id={shellBottomGradId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f8d46f" />
                      <stop offset="55%" stopColor="#efbf53" />
                      <stop offset="100%" stopColor="#d99a2f" />
                    </linearGradient>

                    <radialGradient id={shellWarmLightId} cx="50%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </radialGradient>
                  </defs>

                  <path
                    d="M38 165
                       C53 96, 102 54, 160 54
                       C218 54, 267 96, 282 165
                       Q160 182, 38 165 Z"
                    fill={`url(#${shellBottomGradId})`}
                  />

                  <path
                    d="M52 160
                       C66 106, 108 70, 160 70
                       C212 70, 254 106, 268 160"
                    fill="none"
                    stroke="#c9891c"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M60 157
                       C86 145, 110 148, 134 142
                       C153 137, 169 140, 186 145
                       C211 152, 231 147, 260 156"
                    fill="none"
                    stroke="rgba(255,255,255,0.22)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  <path
                    d="M38 165
                       C53 96, 102 54, 160 54
                       C218 54, 267 96, 282 165
                       Q160 182, 38 165 Z"
                    fill={`url(#${shellWarmLightId})`}
                  />

                  {/* toasted spots */}
                  <g fill="#b97b18" opacity="0.72">
                    <circle cx="92" cy="125" r="4" />
                    <circle cx="118" cy="99" r="3.6" />
                    <circle cx="145" cy="91" r="4.2" />
                    <circle cx="173" cy="95" r="3.5" />
                    <circle cx="201" cy="106" r="4" />
                    <circle cx="228" cy="129" r="3.7" />
                    <ellipse cx="132" cy="124" rx="4.5" ry="3.2" />
                    <ellipse cx="189" cy="126" rx="4.2" ry="3" />
                  </g>

                  <g className="grain" fill="#8f5f14">
                    <circle cx="78" cy="142" r="1.2" />
                    <circle cx="106" cy="136" r="1" />
                    <circle cx="152" cy="130" r="1.1" />
                    <circle cx="208" cy="137" r="1" />
                    <circle cx="244" cy="146" r="1.1" />
                  </g>
                </svg>
              </div>

              {/* Fillings */}
              <div className="layer fillings" aria-hidden="true">
                <svg viewBox="0 0 320 220">
                  {/* meat */}
                  <g>
                    <ellipse cx="160" cy="147" rx="94" ry="23" fill="#6b3d22" />
                    <path
                      d="M76 144
                         C92 132, 108 151, 122 139
                         C136 128, 148 149, 164 140
                         C180 131, 195 151, 210 140
                         C224 130, 238 146, 248 138
                         L252 154
                         C238 162, 222 156, 209 165
                         C194 174, 179 157, 163 167
                         C147 176, 134 157, 120 167
                         C106 176, 92 162, 80 166 Z"
                      fill="#7a4729"
                    />
                    <g fill="#8c5835" opacity="0.85">
                      <circle cx="108" cy="144" r="4" />
                      <circle cx="136" cy="138" r="3.2" />
                      <circle cx="164" cy="146" r="3.8" />
                      <circle cx="192" cy="140" r="3.4" />
                      <circle cx="220" cy="145" r="3.6" />
                    </g>
                  </g>

                  {/* cheese */}
                  <g>
                    <path
                      d="M74 138
                         C90 128, 106 143, 120 133
                         C135 122, 151 142, 165 131
                         C181 120, 194 141, 209 131
                         C223 122, 236 137, 248 129
                         L247 149
                         C238 148, 232 158, 224 156
                         C214 154, 208 166, 198 163
                         C187 160, 182 171, 171 168
                         C159 165, 153 177, 141 172
                         C129 167, 121 158, 111 161
                         C96 166, 87 152, 74 154 Z"
                      fill="#f7d94b"
                    />
                  </g>

                  {/* lettuce */}
                  <g>
                    <path
                      d="M70 126
                         C80 113, 92 121, 101 109
                         C113 122, 126 111, 138 99
                         C148 114, 164 106, 173 96
                         C185 109, 198 102, 208 92
                         C221 105, 236 99, 250 88
                         L251 126
                         C238 130, 222 128, 211 132
                         C195 138, 179 132, 168 137
                         C154 143, 140 136, 127 141
                         C112 147, 98 139, 87 143
                         C79 146, 73 138, 70 140 Z"
                      fill="#67b54b"
                    />
                    <path
                      d="M76 126
                         C87 116, 98 122, 106 112
                         C116 123, 130 112, 140 104
                         C149 117, 162 109, 174 101
                         C184 113, 198 106, 210 98
                         C220 109, 233 105, 244 95"
                      fill="none"
                      stroke="#85cc68"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </g>

                  {/* tomatoes */}
                  <g>
                    <circle cx="103" cy="124" r="11" fill="#d94d3f" />
                    <circle cx="138" cy="113" r="10" fill="#d94d3f" />
                    <circle cx="178" cy="116" r="11" fill="#d94d3f" />
                    <circle cx="214" cy="121" r="10" fill="#d94d3f" />

                    <circle cx="99" cy="120" r="3" fill="#f29a90" opacity="0.7" />
                    <circle cx="135" cy="109" r="3" fill="#f29a90" opacity="0.7" />
                    <circle cx="174" cy="112" r="3" fill="#f29a90" opacity="0.7" />
                    <circle cx="210" cy="117" r="3" fill="#f29a90" opacity="0.7" />
                  </g>
                </svg>
              </div>

              {/* Top shell */}
              <div className="layer shell-top" aria-hidden="true">
                <svg viewBox="0 0 320 220">
                  <defs>
                    <linearGradient id={shellTopGradId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f9d97e" />
                      <stop offset="52%" stopColor="#f1c55a" />
                      <stop offset="100%" stopColor="#d89a31" />
                    </linearGradient>

                    <radialGradient id={shellTopGlowId} cx="50%" cy="25%" r="75%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.48)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </radialGradient>

                    <filter id={textShadowId} x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#7a4715" floodOpacity="0.28" />
                    </filter>
                  </defs>

                  <path
                    d="M38 165
                       C53 96, 102 54, 160 54
                       C218 54, 267 96, 282 165
                       Q160 180, 38 165 Z"
                    fill={`url(#${shellTopGradId})`}
                  />

                  <path
                    d="M52 160
                       C66 106, 108 70, 160 70
                       C212 70, 254 106, 268 160"
                    fill="none"
                    stroke="#c9891c"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M62 154
                       C88 144, 114 147, 137 141
                       C155 137, 173 141, 192 145
                       C214 149, 234 147, 257 154"
                    fill="none"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  <path
                    d="M38 165
                       C53 96, 102 54, 160 54
                       C218 54, 267 96, 282 165
                       Q160 180, 38 165 Z"
                    fill={`url(#${shellTopGlowId})`}
                  />

                  {/* toasted spots */}
                  <g fill="#b97b18" opacity="0.72">
                    <circle cx="88" cy="126" r="4" />
                    <circle cx="113" cy="101" r="3.5" />
                    <circle cx="142" cy="92" r="4.4" />
                    <circle cx="173" cy="96" r="3.6" />
                    <circle cx="202" cy="108" r="4" />
                    <circle cx="230" cy="130" r="3.8" />
                    <ellipse cx="125" cy="129" rx="4.2" ry="3.2" />
                    <ellipse cx="191" cy="129" rx="4.4" ry="3.1" />
                  </g>

                  {/* text on shell */}
                  <text
                    x="160"
                    y="126"
                    textAnchor="middle"
                    fontSize="24"
                    fontWeight="800"
                    letterSpacing="0.8"
                    fill="#5a2f10"
                    filter={`url(#${textShadowId})`}
                    transform="rotate(-4 160 126)"
                    style={{ pointerEvents: "none", userSelect: "none" }}
                  >
                    Now Hiring
                  </text>

                  <text
                    x="161"
                    y="145"
                    textAnchor="middle"
                    fontSize="8"
                    fontWeight="700"
                    letterSpacing="2.4"
                    fill="#8e5720"
                    transform="rotate(-4 161 145)"
                    style={{ pointerEvents: "none", userSelect: "none", textTransform: "uppercase" }}
                  >
                    TAP TO APPLY
                  </text>
                </svg>
              </div>
            </div>

            {!isOpen && (
              <div className="hint" aria-hidden="true">
                <span className="status-text closed">Tap the taco</span>
              </div>
            )}
          </div>
        </button>
      </div>
    </>
  );
};

export default HiringButton;
