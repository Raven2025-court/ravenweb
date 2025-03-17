"use client";

// Court dimensions
const COURT_WIDTH = 20;
const COURT_LENGTH = 10;

// Wall dimensions
const WALL_HEIGHT = 3;
const WALL_THICKNESS = 0.05;
const GLASS_PANEL_WIDTH = 2.5;
const METAL_BEAM_WIDTH = 0.02;

// Glass Walls component
export const GlassWalls = () => {
  // Calculate number of panels needed for width and length
  const widthPanelCount = Math.ceil(COURT_WIDTH / GLASS_PANEL_WIDTH);
  const lengthPanelCount = Math.ceil(COURT_LENGTH / GLASS_PANEL_WIDTH);

  return (
    <group position={[0, 0, 0]}>
      {/* Back Wall (negative Z) */}
      <group
        position={[0, WALL_HEIGHT / 2, -COURT_LENGTH / 2 - WALL_THICKNESS / 2]}
      >
        {Array.from({ length: widthPanelCount }).map((_, idx) => {
          const panelWidth =
            idx === widthPanelCount - 1
              ? COURT_WIDTH - (widthPanelCount - 1) * GLASS_PANEL_WIDTH
              : GLASS_PANEL_WIDTH;

          return (
            <group
              key={`back-panel-${idx}`}
              position={[
                -COURT_WIDTH / 2 +
                  GLASS_PANEL_WIDTH / 2 +
                  idx * GLASS_PANEL_WIDTH,
                0,
                0,
              ]}
            >
              {/* Glass Panel */}
              <mesh position={[0, 0, 0]}>
                <boxGeometry
                  args={[
                    panelWidth - METAL_BEAM_WIDTH,
                    WALL_HEIGHT,
                    WALL_THICKNESS,
                  ]}
                />
                <meshBasicMaterial
                  color="#AADDFF"
                  transparent={true}
                  opacity={0.3}
                />
              </mesh>
            </group>
          );
        })}

        {/* Horizontal Metal Beams for Back Wall */}
        <mesh position={[0, WALL_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[COURT_WIDTH, METAL_BEAM_WIDTH, WALL_THICKNESS * 1.1]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[0, -WALL_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[COURT_WIDTH, METAL_BEAM_WIDTH, WALL_THICKNESS * 1.1]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        {/* Vertical Metal Beams for Back Wall */}
        {Array.from({ length: widthPanelCount + 1 }).map((_, idx) => (
          <mesh
            key={`back-beam-${idx}`}
            position={[-COURT_WIDTH / 2 + idx * GLASS_PANEL_WIDTH, 0, 0]}
          >
            <boxGeometry
              args={[METAL_BEAM_WIDTH, WALL_HEIGHT, WALL_THICKNESS * 1.1]}
            />
            <meshBasicMaterial color="#555555" />
          </mesh>
        ))}
      </group>

      {/* Front Wall (positive Z) */}
      <group
        position={[0, WALL_HEIGHT / 2, COURT_LENGTH / 2 + WALL_THICKNESS / 2]}
      >
        {Array.from({ length: widthPanelCount }).map((_, idx) => {
          const panelWidth =
            idx === widthPanelCount - 1
              ? COURT_WIDTH - (widthPanelCount - 1) * GLASS_PANEL_WIDTH
              : GLASS_PANEL_WIDTH;

          return (
            <group
              key={`front-panel-${idx}`}
              position={[
                -COURT_WIDTH / 2 +
                  GLASS_PANEL_WIDTH / 2 +
                  idx * GLASS_PANEL_WIDTH,
                0,
                0,
              ]}
            >
              {/* Glass Panel */}
              <mesh position={[0, 0, 0]}>
                <boxGeometry
                  args={[
                    panelWidth - METAL_BEAM_WIDTH,
                    WALL_HEIGHT,
                    WALL_THICKNESS,
                  ]}
                />
                <meshBasicMaterial
                  color="#AADDFF"
                  transparent={true}
                  opacity={0.3}
                />
              </mesh>
            </group>
          );
        })}

        {/* Horizontal Metal Beams for Front Wall */}
        <mesh position={[0, WALL_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[COURT_WIDTH, METAL_BEAM_WIDTH, WALL_THICKNESS * 1.1]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[0, -WALL_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[COURT_WIDTH, METAL_BEAM_WIDTH, WALL_THICKNESS * 1.1]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        {/* Vertical Metal Beams for Front Wall */}
        {Array.from({ length: widthPanelCount + 1 }).map((_, idx) => (
          <mesh
            key={`front-beam-${idx}`}
            position={[-COURT_WIDTH / 2 + idx * GLASS_PANEL_WIDTH, 0, 0]}
          >
            <boxGeometry
              args={[METAL_BEAM_WIDTH, WALL_HEIGHT, WALL_THICKNESS * 1.1]}
            />
            <meshBasicMaterial color="#555555" />
          </mesh>
        ))}
      </group>

      {/* Left Wall (negative X) */}
      <group
        position={[-COURT_WIDTH / 2 - WALL_THICKNESS / 2, WALL_HEIGHT / 2, 0]}
      >
        {Array.from({ length: lengthPanelCount }).map((_, idx) => {
          const panelWidth =
            idx === lengthPanelCount - 1
              ? COURT_LENGTH - (lengthPanelCount - 1) * GLASS_PANEL_WIDTH
              : GLASS_PANEL_WIDTH;

          return (
            <group
              key={`left-panel-${idx}`}
              position={[
                0,
                0,
                -COURT_LENGTH / 2 +
                  GLASS_PANEL_WIDTH / 2 +
                  idx * GLASS_PANEL_WIDTH,
              ]}
            >
              {/* Glass Panel */}
              <mesh position={[0, 0, 0]}>
                <boxGeometry
                  args={[
                    WALL_THICKNESS,
                    WALL_HEIGHT,
                    panelWidth - METAL_BEAM_WIDTH,
                  ]}
                />
                <meshBasicMaterial
                  color="#AADDFF"
                  transparent={true}
                  opacity={0.3}
                />
              </mesh>
            </group>
          );
        })}

        {/* Horizontal Metal Beams for Left Wall */}
        <mesh position={[0, WALL_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[WALL_THICKNESS * 1.1, METAL_BEAM_WIDTH, COURT_LENGTH]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[0, -WALL_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[WALL_THICKNESS * 1.1, METAL_BEAM_WIDTH, COURT_LENGTH]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        {/* Vertical Metal Beams for Left Wall */}
        {Array.from({ length: lengthPanelCount + 1 }).map((_, idx) => (
          <mesh
            key={`left-beam-${idx}`}
            position={[0, 0, -COURT_LENGTH / 2 + idx * GLASS_PANEL_WIDTH]}
          >
            <boxGeometry
              args={[WALL_THICKNESS * 1.1, WALL_HEIGHT, METAL_BEAM_WIDTH]}
            />
            <meshBasicMaterial color="#555555" />
          </mesh>
        ))}
      </group>

      {/* Right Wall (positive X) */}
      <group
        position={[COURT_WIDTH / 2 + WALL_THICKNESS / 2, WALL_HEIGHT / 2, 0]}
      >
        {Array.from({ length: lengthPanelCount }).map((_, idx) => {
          const panelWidth =
            idx === lengthPanelCount - 1
              ? COURT_LENGTH - (lengthPanelCount - 1) * GLASS_PANEL_WIDTH
              : GLASS_PANEL_WIDTH;

          return (
            <group
              key={`right-panel-${idx}`}
              position={[
                0,
                0,
                -COURT_LENGTH / 2 +
                  GLASS_PANEL_WIDTH / 2 +
                  idx * GLASS_PANEL_WIDTH,
              ]}
            >
              {/* Glass Panel */}
              <mesh position={[0, 0, 0]}>
                <boxGeometry
                  args={[
                    WALL_THICKNESS,
                    WALL_HEIGHT,
                    panelWidth - METAL_BEAM_WIDTH,
                  ]}
                />
                <meshBasicMaterial
                  color="#AADDFF"
                  transparent={true}
                  opacity={0.3}
                />
              </mesh>
            </group>
          );
        })}

        {/* Horizontal Metal Beams for Right Wall */}
        <mesh position={[0, WALL_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[WALL_THICKNESS * 1.1, METAL_BEAM_WIDTH, COURT_LENGTH]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        <mesh position={[0, -WALL_HEIGHT / 2, 0]}>
          <boxGeometry
            args={[WALL_THICKNESS * 1.1, METAL_BEAM_WIDTH, COURT_LENGTH]}
          />
          <meshBasicMaterial color="#555555" />
        </mesh>

        {/* Vertical Metal Beams for Right Wall */}
        {Array.from({ length: lengthPanelCount + 1 }).map((_, idx) => (
          <mesh
            key={`right-beam-${idx}`}
            position={[0, 0, -COURT_LENGTH / 2 + idx * GLASS_PANEL_WIDTH]}
          >
            <boxGeometry
              args={[WALL_THICKNESS * 1.1, WALL_HEIGHT, METAL_BEAM_WIDTH]}
            />
            <meshBasicMaterial color="#555555" />
          </mesh>
        ))}
      </group>
    </group>
  );
};
