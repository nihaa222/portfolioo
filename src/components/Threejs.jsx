import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import styled from "styled-components";
import Cube from "./cube";
import About from "../Sections/About";

const Container = styled.div`
  height: 100vh;
  width: 100vw; // Fix the width unit
  scroll-snap-align: center;
`;
About;
const Threejs = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube />
      </Canvas>
    </Container>
  );
};

export default Threejs;
