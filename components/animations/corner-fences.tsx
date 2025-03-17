"use client";

// Court dimensions
const COURT_WIDTH = 20;
const COURT_LENGTH = 10;

// Wall dimensions
const WALL_HEIGHT = 3;
const WALL_THICKNESS = 0.05;
const GLASS_PANEL_WIDTH = 2.5;
const METAL_BEAM_WIDTH = 0.02;

// Fence dimensions
const FENCE_HEIGHT = 1; // 1 meter fence as requested
const FENCE_MESH_SIZE = 0.1; // Size of fence mesh squares
const CORNER_FENCE_WIDTH = GLASS_PANEL_WIDTH / 2; // Half of a glass panel width

// Corner Fences component
export const CornerFences = () => {
  // Calculate the number of mesh cells based on dimensions
  const cornerWidthCellCount = Math.ceil(CORNER_FENCE_WIDTH / FENCE_MESH_SIZE);
  const heightCellCount = Math.ceil(FENCE_HEIGHT / FENCE_MESH_SIZE);

  return (
    <group>
      {/* Front Left Corner Fence */}
      <group
        position={[
          -COURT_WIDTH / 2 + CORNER_FENCE_WIDTH / 2,
          WALL_HEIGHT + FENCE_HEIGHT / 2,
          COURT_LENGTH / 2,
        ]}
      >
        {/* Fence mesh - vertical lines */}
        {Array.from({ length: cornerWidthCellCount + 1 }).map((_, idx) => (
          <mesh
            key={`front-left-fence-vertical-${idx}`}
            position={[-CORNER_FENCE_WIDTH / 2 + idx * FENCE_MESH_SIZE, 0, 0]}
          >
            <boxGeometry args={[0.01, FENCE_HEIGHT, WALL_THICKNESS]} />
            <meshBasicMaterial color="#333333" />
          </mesh>
        ))}

        {/* Fence mesh - horizontal lines */}
        {Array.from({ length: heightCellCount + 1 }).map((_, idx) => (
          <mesh
            key={`front-left-fence-horizontal-${idx}`}
            position={[0, -FENCE_HEIGHT / 2 + idx * FENCE_MESH_SIZE, 0]}
          >
            <boxGeometry args={[CORNER_FENCE_WIDTH, 0.01, WALL_THICKNESS]} />
            <meshBasicMaterial color="#333333" />
          </mesh>
        ))}

        {/* Frame for the fence */}
        <mesh position={[0, FENCE_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[
              CORNER_FENCE_WIDTH,
              METAL_BEAM_WIDTH * 2,
              WALL_THICKNESS * 1.1,
            ]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[0, -FENCE_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[
              CORNER_FENCE_WIDTH,
              METAL_BEAM_WIDTH * 2,
              WALL_THICKNESS * 1.1,
            ]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[-CORNER_FENCE_WIDTH / 2, 0, 0]}>
          <boxGeometry
            args={[METAL_BEAM_WIDTH * 2, FENCE_HEIGHT, WALL_THICKNESS * 1.1]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[CORNER_FENCE_WIDTH / 2, 0, 0]}>
          <boxGeometry
            args={[METAL_BEAM_WIDTH * 2, FENCE_HEIGHT, WALL_THICKNESS * 1.1]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>
      </group>

      {/* Front Right Corner Fence */}
      <group
        position={[
          COURT_WIDTH / 2 - CORNER_FENCE_WIDTH / 2,
          WALL_HEIGHT + FENCE_HEIGHT / 2,
          COURT_LENGTH / 2,
        ]}
      >
        {/* Fence mesh - vertical lines */}
        {Array.from({ length: cornerWidthCellCount + 1 }).map((_, idx) => (
          <mesh
            key={`front-right-fence-vertical-${idx}`}
            position={[-CORNER_FENCE_WIDTH / 2 + idx * FENCE_MESH_SIZE, 0, 0]}
          >
            <boxGeometry args={[0.01, FENCE_HEIGHT, WALL_THICKNESS]} />
            <meshBasicMaterial color="#333333" />
          </mesh>
        ))}

        {/* Fence mesh - horizontal lines */}
        {Array.from({ length: heightCellCount + 1 }).map((_, idx) => (
          <mesh
            key={`front-right-fence-horizontal-${idx}`}
            position={[0, -FENCE_HEIGHT / 2 + idx * FENCE_MESH_SIZE, 0]}
          >
            <boxGeometry args={[CORNER_FENCE_WIDTH, 0.01, WALL_THICKNESS]} />
            <meshBasicMaterial color="#333333" />
          </mesh>
        ))}

        {/* Frame for the fence */}
        <mesh position={[0, FENCE_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[
              CORNER_FENCE_WIDTH,
              METAL_BEAM_WIDTH * 2,
              WALL_THICKNESS * 1.1,
            ]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[0, -FENCE_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[
              CORNER_FENCE_WIDTH,
              METAL_BEAM_WIDTH * 2,
              WALL_THICKNESS * 1.1,
            ]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[-CORNER_FENCE_WIDTH / 2, 0, 0]}>
          <boxGeometry
            args={[METAL_BEAM_WIDTH * 2, FENCE_HEIGHT, WALL_THICKNESS * 1.1]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[CORNER_FENCE_WIDTH / 2, 0, 0]}>
          <boxGeometry
            args={[METAL_BEAM_WIDTH * 2, FENCE_HEIGHT, WALL_THICKNESS * 1.1]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>
      </group>

      {/* Back Left Corner Fence */}
      <group
        position={[
          -COURT_WIDTH / 2 + CORNER_FENCE_WIDTH / 2,
          WALL_HEIGHT + FENCE_HEIGHT / 2,
          -COURT_LENGTH / 2,
        ]}
      >
        {/* Fence mesh - vertical lines */}
        {Array.from({ length: cornerWidthCellCount + 1 }).map((_, idx) => (
          <mesh
            key={`back-left-fence-vertical-${idx}`}
            position={[-CORNER_FENCE_WIDTH / 2 + idx * FENCE_MESH_SIZE, 0, 0]}
          >
            <boxGeometry args={[0.01, FENCE_HEIGHT, WALL_THICKNESS]} />
            <meshBasicMaterial color="#333333" />
          </mesh>
        ))}

        {/* Fence mesh - horizontal lines */}
        {Array.from({ length: heightCellCount + 1 }).map((_, idx) => (
          <mesh
            key={`back-left-fence-horizontal-${idx}`}
            position={[0, -FENCE_HEIGHT / 2 + idx * FENCE_MESH_SIZE, 0]}
          >
            <boxGeometry args={[CORNER_FENCE_WIDTH, 0.01, WALL_THICKNESS]} />
            <meshBasicMaterial color="#333333" />
          </mesh>
        ))}

        {/* Frame for the fence */}
        <mesh position={[0, FENCE_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[
              CORNER_FENCE_WIDTH,
              METAL_BEAM_WIDTH * 2,
              WALL_THICKNESS * 1.1,
            ]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[0, -FENCE_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[
              CORNER_FENCE_WIDTH,
              METAL_BEAM_WIDTH * 2,
              WALL_THICKNESS * 1.1,
            ]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[-CORNER_FENCE_WIDTH / 2, 0, 0]}>
          <boxGeometry
            args={[METAL_BEAM_WIDTH * 2, FENCE_HEIGHT, WALL_THICKNESS * 1.1]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[CORNER_FENCE_WIDTH / 2, 0, 0]}>
          <boxGeometry
            args={[METAL_BEAM_WIDTH * 2, FENCE_HEIGHT, WALL_THICKNESS * 1.1]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>
      </group>

      {/* Back Right Corner Fence */}
      <group
        position={[
          COURT_WIDTH / 2 - CORNER_FENCE_WIDTH / 2,
          WALL_HEIGHT + FENCE_HEIGHT / 2,
          -COURT_LENGTH / 2,
        ]}
      >
        {/* Fence mesh - vertical lines */}
        {Array.from({ length: cornerWidthCellCount + 1 }).map((_, idx) => (
          <mesh
            key={`back-right-fence-vertical-${idx}`}
            position={[-CORNER_FENCE_WIDTH / 2 + idx * FENCE_MESH_SIZE, 0, 0]}
          >
            <boxGeometry args={[0.01, FENCE_HEIGHT, WALL_THICKNESS]} />
            <meshBasicMaterial color="#333333" />
          </mesh>
        ))}

        {/* Fence mesh - horizontal lines */}
        {Array.from({ length: heightCellCount + 1 }).map((_, idx) => (
          <mesh
            key={`back-right-fence-horizontal-${idx}`}
            position={[0, -FENCE_HEIGHT / 2 + idx * FENCE_MESH_SIZE, 0]}
          >
            <boxGeometry args={[CORNER_FENCE_WIDTH, 0.01, WALL_THICKNESS]} />
            <meshBasicMaterial color="#333333" />
          </mesh>
        ))}

        {/* Frame for the fence */}
        <mesh position={[0, FENCE_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[
              CORNER_FENCE_WIDTH,
              METAL_BEAM_WIDTH * 2,
              WALL_THICKNESS * 1.1,
            ]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[0, -FENCE_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[
              CORNER_FENCE_WIDTH,
              METAL_BEAM_WIDTH * 2,
              WALL_THICKNESS * 1.1,
            ]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[-CORNER_FENCE_WIDTH / 2, 0, 0]}>
          <boxGeometry
            args={[METAL_BEAM_WIDTH * 2, FENCE_HEIGHT, WALL_THICKNESS * 1.1]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[CORNER_FENCE_WIDTH / 2, 0, 0]}>
          <boxGeometry
            args={[METAL_BEAM_WIDTH * 2, FENCE_HEIGHT, WALL_THICKNESS * 1.1]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>
      </group>
    </group>
  );
};
