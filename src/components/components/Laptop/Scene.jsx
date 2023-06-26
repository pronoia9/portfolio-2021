import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a as three } from '@react-spring/three';
import { a as web } from '@react-spring/web';
import { keyframes, styled } from 'styled-components';

import { Laptop } from '../..';
import { dataStore } from '../../../store/dataStore';

export const Scene = () => {
  return (
    <Container>
      <Canvas dpr={[1, 2]} camera={{ position: [22.5, 13, -37], fov: 35 }} >
        <SceneContents />
      </Canvas>
    </Container>
  );
};

export const SceneContents = () => {
  const { laptopOpen, toggleLaptopOpen } = dataStore((state) => ({
    laptopOpen: state.laptopOpen,
    toggleLaptopOpen: state.toggleLaptopOpen,
  }));
  const props = useSpring({ open: Number(laptopOpen), config: { duration: 1500 } });

  return (
    <>
      <three.pointLight position={[10, 10, 10]} intensity={1.5} color={props.open.to([0, 1], ['#f0f0f0', '#d25578'])} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} onClick={(e) => (e.stopPropagation(), toggleLaptopOpen())}>
          <Laptop hinge={props.open.to([0, 1], [-3.109, -4.7])} scale={6} position={[0, -4, 0]} />
        </group>
        <Environment preset='city' />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
      <OrbitControls />
    </>
  );
};

const bgAnimation = keyframes`
  0% {  background-position: left; }
  100% {  background-position: right; }
`;

const Container = styled(web.main)`
  width: 100vw;
  min-width: 100vw;
  height: 10vh;
  min-height: 100vh;
  background: var(--c-bg);
  background-image: linear-gradient(45deg, var(--c-accent-1), var(--c-accent-2), var(--c-accent-3), var(--c-accent-4), var(--c-accent-5));
  background-size: 400%;
  animation: ${bgAnimation} 20s infinite alternate;
`;
