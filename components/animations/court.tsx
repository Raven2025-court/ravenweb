"use client";

import * as THREE from "three";
import { Net } from "./net";
import { Fence } from "./fence";
import { GlassWalls } from "./glass-walls";

// Court dimensions
const COURT_WIDTH = 20;
const COURT_LENGTH = 10;
const LINE_WIDTH = 0.05;
const COURT_THICKNESS = 0.05;

export const Court = ({ turfColor = "#455b84" }) => {
  return (
    <group>
      {/* Court Floor/Turf - Top (green) surface */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[COURT_WIDTH, COURT_LENGTH]} />
        <meshBasicMaterial color={turfColor} side={THREE.FrontSide} />
      </mesh>

      {/* Court Floor/Turf - Bottom (black) surface */}
      <mesh position={[0, -COURT_THICKNESS, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[COURT_WIDTH, COURT_LENGTH]} />
        <meshBasicMaterial color="#000000" side={THREE.FrontSide} />
      </mesh>
      {/* 15% Vertical Line */}
      <mesh
        position={[-COURT_WIDTH * 0.35, 0.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[LINE_WIDTH, COURT_LENGTH]} />
        <meshBasicMaterial color="white" />
      </mesh>

      {/* 85% Vertical Line */}
      <mesh
        position={[COURT_WIDTH * 0.35, 0.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[LINE_WIDTH, COURT_LENGTH]} />
        <meshBasicMaterial color="white" />
      </mesh>

      {/* Horizontal Line from 15% to 85% */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[COURT_WIDTH * 0.7, LINE_WIDTH]} />
        <meshBasicMaterial color="white" />
      </mesh>

      {/* Add the Net */}
      <Net />
      {/* Add the Glass Walls */}
      <GlassWalls />
      {/* Add the Fence on top of the back and front walls */}
      <Fence />
    </group>
  );
};
