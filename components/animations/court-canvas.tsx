"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Court } from "./court";
import { AlertTriangle, X } from "lucide-react";

export function CourtCanvas() {
  const [turfColor, setTurfColor] = useState("#455b84");
  const [showDisclaimer, setShowDisclaimer] = useState(true); // NEW STATE

  const presetColors = [
    { color: "#455b84", label: "Blue" },
    { color: "#006F3C", label: "Green" },
    { color: "#C72C48", label: "Red" },
    { color: "#D56B8B", label: "Rose" },
    { color: "#1D1D1D", label: "Black" },
  ];

  return (
    <div className="flex flex-col w-full h-full">
      {/* Color Picker Section */}
      <div className="p-4 bg-gray-100 rounded-md mb-4 shadow-md">
        <div className="flex items-center mb-3">
          <label
            htmlFor="color-picker"
            className="mr-3 text-gray-700 font-medium"
          >
            Turf Color:
          </label>
          <input
            id="color-picker"
            type="color"
            value={turfColor}
            onChange={(e) => setTurfColor(e.target.value)}
            className="w-10 h-10 cursor-pointer rounded-full"
          />
        </div>

        <div className="flex space-x-2 flex-wrap justify-center sm:justify-start gap-2">
          {presetColors.map((preset) => (
            <button
              key={preset.color}
              onClick={() => setTurfColor(preset.color)}
              className="px-3 py-2 rounded-md text-sm font-medium text-white shadow-sm"
              style={{
                backgroundColor: preset.color,
                border:
                  turfColor === preset.color
                    ? "2px solid black"
                    : "1px solid transparent",
              }}
              title={preset.label}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Court Canvas Section */}
      <div className="flex-grow sm:h-96 md:h-[500px] lg:h-[600px] w-full bg-white rounded-lg overflow-hidden shadow-md relative">
        <Canvas
          camera={{
            position: [0, 5, 20],
            fov: 60,
          }}
        >
          <color attach="background" args={["#f3f4f6"]} />
          <ambientLight intensity={1} />
          <directionalLight position={[5, 10, 5]} intensity={1} />

          <Court turfColor={turfColor} />

          <OrbitControls />
        </Canvas>

        {/* Disclaimer */}
        {showDisclaimer && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-xs md:text-sm flex items-center justify-center gap-2">
            <AlertTriangle size={16} />
            <p className="text-center">
              Note: This 3D model is a simplified representation of a standard
              padel court. For a detailed view of our custom-built courts and
              completed projects, please visit our Projects section.
            </p>
            <button
              onClick={() => setShowDisclaimer(false)}
              className="text-white hover:text-gray-300"
            >
              <X size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
