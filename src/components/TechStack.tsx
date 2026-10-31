import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  CuboidCollider,
  RapierRigidBody,
} from "@react-three/rapier";
import "./styles/TechStack.css";

const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  "/images/tech-python.png",
  "/images/tech-photoshop.png",
  "/images/tech-illustrator.png",
  "/images/tech-gemini.png",
  "/images/tech-flow.png",
  "/images/tech-ml.png",
  "/images/tech-wordpress.png",
  "/images/tech-mysql.png",
];
const textures = imageUrls.map((url) => textureLoader.load(url));

const techPills = [
  { name: "Python", category: "Data & ML" },
  { name: "Google Gemini", category: "Generative AI" },
  { name: "Google Flow", category: "Visual AI" },
  { name: "Photoshop", category: "Design" },
  { name: "Illustrator", category: "Vector" },
  { name: "Machine Learning", category: "Data Science" },
  { name: "WordPress", category: "Web Dev" },
  { name: "MySQL", category: "Database" },
];

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = [...Array(20)].map(() => ({
  scale: [0.8, 0.95, 1, 1.05, 0.85][Math.floor(Math.random() * 5)],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive || !api.current) return;
    delta = Math.min(0.05, delta);
    const pos = api.current.translation();
    const impulse = vec.set(
      -pos.x * 12 * delta * scale,
      -pos.y * 14 * delta * scale,
      -pos.z * 12 * delta * scale
    );
    api.current.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.85}
      angularDamping={0.3}
      friction={0.25}
      restitution={0.65}
      position={[r(10), r(4), r(3)]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.1 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive || !ref.current) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.25
    );
    ref.current.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.25,
          metalness: 0.45,
          roughness: 0.7,
          clearcoat: 0.15,
        })
    );
  }, []);

  return (
    <section className="techstack-section" id="techstack" ref={containerRef}>
      <div className="techstack-container">
        <div className="techstack-header">
          <h2>
            My <span>Techstack</span>
          </h2>
          <p className="techstack-subtitle">
            Core technologies, creative platforms & interactive 3D physics simulation
          </p>
        </div>

        <div className="techstack-stage">
          <div className="techstack-stage-hint">
            <span>● Move cursor to interact</span>
          </div>

          <Canvas
            shadows
            gl={{ alpha: true, stencil: false, depth: false, antialias: true }}
            camera={{ position: [0, 0, 18], fov: 32, near: 1, far: 100 }}
            onCreated={(state) => (state.gl.toneMappingExposure = 1.4)}
            className="tech-canvas"
          >
            <ambientLight intensity={1.2} />
            <spotLight
              position={[20, 20, 25]}
              penumbra={1}
              angle={0.25}
              color="white"
              castShadow
              shadow-mapSize={[512, 512]}
            />
            <directionalLight position={[0, 6, -4]} intensity={2.2} />
            <Physics gravity={[0, 0, 0]}>
              {/* Invisible Boundaries strictly inside the 460px stage */}
              <CuboidCollider position={[0, -5, 0]} args={[16, 0.5, 8]} />
              <CuboidCollider position={[0, 5, 0]} args={[16, 0.5, 8]} />
              <CuboidCollider position={[-12, 0, 0]} args={[0.5, 10, 8]} />
              <CuboidCollider position={[12, 0, 0]} args={[0.5, 10, 8]} />
              <CuboidCollider position={[0, 0, -5]} args={[16, 10, 0.5]} />
              <CuboidCollider position={[0, 0, 5]} args={[16, 10, 0.5]} />

              <Pointer isActive={isActive} />
              {spheres.map((props, i) => (
                <SphereGeo
                  key={i}
                  {...props}
                  material={materials[i % materials.length]}
                  isActive={isActive}
                />
              ))}
            </Physics>
            <Environment
              files="/models/char_enviorment.hdr"
              environmentIntensity={0.4}
              environmentRotation={[0, 4, 2]}
            />
            <EffectComposer enableNormalPass={false}>
              <N8AO color="#0f002c" aoRadius={2} intensity={1.1} />
            </EffectComposer>
          </Canvas>
        </div>

        <div className="techstack-pills">
          {techPills.map((pill, idx) => (
            <div className="tech-pill-badge" key={idx}>
              <span className="pill-dot"></span>
              <span className="pill-name">{pill.name}</span>
              <span className="pill-cat">{pill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
