import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./styles.css";

extend({ OrbitControls });
function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

const Controls = () => {
  const controls = useRef();

  const { camera, gl } = useThree();

  useFrame(() => {
    controls.current.update();
  });

  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
    ></orbitControls>
  );
};

export default function App() {
  return (
    <Canvas>
      <Controls />
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3}/>
      <Box />
    </Canvas>
  );
}
