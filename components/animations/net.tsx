"use client";

import { Text } from "@react-three/drei";

// Court dimensions
const COURT_LENGTH = 10;

// Net dimensions
const NET_HEIGHT = 0.92;
const NET_THICKNESS = 0.03;
const SPONSOR_BANNER_HEIGHT = 0.1;
const NET_GRID_SIZE = 0.1;

// Sponsor text properties
const SPONSOR_TEXT = "RAVEN PADEL";
const SPONSOR_TEXT_SIZE = 0.08;
const SPONSOR_SPACING = 0.8; // Space between repeated sponsor texts

// Net component
export const Net = () => {
  // Calculate number of sponsor texts to display
  const numRepeats = Math.floor(COURT_LENGTH / SPONSOR_SPACING);

  return (
    <group position={[0, 0, 0]}>
      {/* Net base structure */}
      <mesh position={[0, NET_HEIGHT / 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[COURT_LENGTH, NET_HEIGHT, NET_THICKNESS]} />
        <meshBasicMaterial
          color="#000000"
          wireframe={true}
          wireframeLinewidth={0.1}
        />
      </mesh>

      {/* Creating a grid pattern for the net */}
      {Array.from({ length: Math.floor(COURT_LENGTH / NET_GRID_SIZE) + 1 }).map(
        (_, idx) => (
          <mesh
            key={`vertical-${idx}`}
            position={[
              0,
              NET_HEIGHT / 2,
              -COURT_LENGTH / 2 + idx * NET_GRID_SIZE,
            ]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <boxGeometry args={[0.01, NET_HEIGHT, NET_THICKNESS]} />
            <meshBasicMaterial color="black" />
          </mesh>
        )
      )}

      {Array.from({ length: Math.floor(NET_HEIGHT / NET_GRID_SIZE) + 1 }).map(
        (_, idx) => (
          <mesh
            key={`horizontal-${idx}`}
            position={[0, idx * NET_GRID_SIZE, 0]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <boxGeometry args={[COURT_LENGTH, 0.01, NET_THICKNESS]} />
            <meshBasicMaterial color="black" />
          </mesh>
        )
      )}

      {/* Sponsor banner at the top of the net */}
      <mesh
        position={[0, NET_HEIGHT + SPONSOR_BANNER_HEIGHT / 2, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxGeometry
          args={[COURT_LENGTH, SPONSOR_BANNER_HEIGHT, NET_THICKNESS * 1.2]}
        />
        <meshBasicMaterial color="white" />
      </mesh>

      {/* Front side sponsor texts */}
      {Array.from({ length: numRepeats }).map((_, idx) => (
        <Text
          key={`sponsor-front-${idx}`}
          position={[
            0,
            NET_HEIGHT + SPONSOR_BANNER_HEIGHT / 2,
            -COURT_LENGTH / 2 + idx * SPONSOR_SPACING + SPONSOR_SPACING / 2,
          ]}
          rotation={[0, Math.PI / 2, 0]}
          fontSize={SPONSOR_TEXT_SIZE}
          color="#1a1a1a"
          anchorX="center"
          anchorY="middle"
        >
          {SPONSOR_TEXT}
        </Text>
      ))}

      {/* Back side sponsor texts */}
      {Array.from({ length: numRepeats }).map((_, idx) => (
        <Text
          key={`sponsor-back-${idx}`}
          position={[
            0,
            NET_HEIGHT + SPONSOR_BANNER_HEIGHT / 2,
            -COURT_LENGTH / 2 + idx * SPONSOR_SPACING + SPONSOR_SPACING / 2,
          ]}
          rotation={[0, -Math.PI / 2, 0]}
          fontSize={SPONSOR_TEXT_SIZE}
          color="#1a1a1a"
          anchorX="center"
          anchorY="middle"
        >
          {SPONSOR_TEXT}
        </Text>
      ))}
    </group>
  );
};
