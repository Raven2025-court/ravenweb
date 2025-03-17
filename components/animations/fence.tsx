"use client";

// Court dimensions
const COURT_WIDTH = 20;
const COURT_LENGTH = 10;

// Wall dimensions
const WALL_HEIGHT = 3;
const WALL_THICKNESS = 0.05;
const METAL_BEAM_WIDTH = 0.02;

// Fence dimensions
const FENCE_HEIGHT = 1; // 1 meter fence as requested
const FENCE_MESH_SIZE = 0.1; // Size of fence mesh squares

// Fence component for left and right walls
export const Fence = () => {
  // Calculate the number of mesh cells based on dimensions
  const lengthCellCount = Math.ceil(COURT_LENGTH / FENCE_MESH_SIZE);
  const heightCellCount = Math.ceil(FENCE_HEIGHT / FENCE_MESH_SIZE);

  return (
    <group>
      {/* Left Wall Fence (negative X) */}
      <group
        position={[
          -COURT_WIDTH / 2 - WALL_THICKNESS / 2,
          WALL_HEIGHT + FENCE_HEIGHT / 2,
          0,
        ]}
      >
        {/* Fence mesh - vertical lines */}
        {Array.from({ length: lengthCellCount + 1 }).map((_, idx) => (
          <mesh
            key={`left-fence-vertical-${idx}`}
            position={[0, 0, -COURT_LENGTH / 2 + idx * FENCE_MESH_SIZE]}
          >
            <boxGeometry args={[WALL_THICKNESS, FENCE_HEIGHT, 0.01]} />
            <meshBasicMaterial color="#333333" />
          </mesh>
        ))}

        {/* Fence mesh - horizontal lines */}
        {Array.from({ length: heightCellCount + 1 }).map((_, idx) => (
          <mesh
            key={`left-fence-horizontal-${idx}`}
            position={[0, -FENCE_HEIGHT / 2 + idx * FENCE_MESH_SIZE, 0]}
          >
            <boxGeometry args={[WALL_THICKNESS, 0.01, COURT_LENGTH]} />
            <meshBasicMaterial color="#333333" />
          </mesh>
        ))}

        {/* Frame for the fence */}
        <mesh position={[0, FENCE_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[WALL_THICKNESS * 1.1, METAL_BEAM_WIDTH * 2, COURT_LENGTH]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[0, -FENCE_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[WALL_THICKNESS * 1.1, METAL_BEAM_WIDTH * 2, COURT_LENGTH]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[0, 0, -COURT_LENGTH / 2]}>
          <boxGeometry
            args={[WALL_THICKNESS * 1.1, FENCE_HEIGHT, METAL_BEAM_WIDTH * 2]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[0, 0, COURT_LENGTH / 2]}>
          <boxGeometry
            args={[WALL_THICKNESS * 1.1, FENCE_HEIGHT, METAL_BEAM_WIDTH * 2]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>
      </group>

      {/* Right Wall Fence (positive X) */}
      <group
        position={[
          COURT_WIDTH / 2 + WALL_THICKNESS / 2,
          WALL_HEIGHT + FENCE_HEIGHT / 2,
          0,
        ]}
      >
        {/* Fence mesh - vertical lines */}
        {Array.from({ length: lengthCellCount + 1 }).map((_, idx) => (
          <mesh
            key={`right-fence-vertical-${idx}`}
            position={[0, 0, -COURT_LENGTH / 2 + idx * FENCE_MESH_SIZE]}
          >
            <boxGeometry args={[WALL_THICKNESS, FENCE_HEIGHT, 0.01]} />
            <meshBasicMaterial color="#333333" />
          </mesh>
        ))}

        {/* Fence mesh - horizontal lines */}
        {Array.from({ length: heightCellCount + 1 }).map((_, idx) => (
          <mesh
            key={`right-fence-horizontal-${idx}`}
            position={[0, -FENCE_HEIGHT / 2 + idx * FENCE_MESH_SIZE, 0]}
          >
            <boxGeometry args={[WALL_THICKNESS, 0.01, COURT_LENGTH]} />
            <meshBasicMaterial color="#333333" />
          </mesh>
        ))}

        {/* Frame for the fence */}
        <mesh position={[0, FENCE_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[WALL_THICKNESS * 1.1, METAL_BEAM_WIDTH * 2, COURT_LENGTH]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[0, -FENCE_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[WALL_THICKNESS * 1.1, METAL_BEAM_WIDTH * 2, COURT_LENGTH]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[0, 0, -COURT_LENGTH / 2]}>
          <boxGeometry
            args={[WALL_THICKNESS * 1.1, FENCE_HEIGHT, METAL_BEAM_WIDTH * 2]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[0, 0, COURT_LENGTH / 2]}>
          <boxGeometry
            args={[WALL_THICKNESS * 1.1, FENCE_HEIGHT, METAL_BEAM_WIDTH * 2]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>
      </group>
    </group>
  );
};
