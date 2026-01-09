export function CurvedDivider({ flip = false, color = "sand" }: { flip?: boolean; color?: "sand" | "cream" | "verde" }) {
  const colors = {
    sand: "#f5f0e8",
    cream: "#fef9f3",
    verde: "#1a8754",
  };

  return (
    <div className={`w-full ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 md:h-20"
      >
        <path
          d="M0,0 C150,80 350,80 600,50 C850,20 1050,20 1200,60 L1200,120 L0,120 Z"
          fill={colors[color]}
        />
      </svg>
    </div>
  );
}

export function WaveDivider({ color = "verde" }: { color?: "verde" | "rojo" | "amarillo" }) {
  const colors = {
    verde: "#1a8754",
    rojo: "#dc2626",
    amarillo: "#fbbf24",
  };

  return (
    <div className="w-full relative h-16 sm:h-20 md:h-24">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute w-full h-full"
      >
        <path
          d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
          fill={colors[color]}
          opacity="0.1"
        />
        <path
          d="M0,70 Q300,20 600,70 T1200,70 L1200,120 L0,120 Z"
          fill={colors[color]}
          opacity="0.2"
        />
      </svg>
    </div>
  );
}

export function SlantedDivider({
  direction = "left",
  color = "sand",
}: {
  direction?: "left" | "right";
  color?: "sand" | "cream" | "verde";
}) {
  const colors = {
    sand: "#f5f0e8",
    cream: "#fef9f3",
    verde: "#1a8754",
  };

  return (
    <div className="w-full h-12 sm:h-16 md:h-20 relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: colors[color],
          transform: direction === "left" ? "skewY(-2deg)" : "skewY(2deg)",
          transformOrigin: direction === "left" ? "top left" : "top right",
        }}
      />
    </div>
  );
}

export function TextureDivider() {
  return (
    <div className="w-full h-px relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1a8754] to-transparent opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, #1a8754 0px, transparent 1px, transparent 4px, #fbbf24 5px, transparent 6px, transparent 10px)`,
          opacity: 0.1,
        }}
      />
    </div>
  );
}
