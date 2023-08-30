'use client';

import { Environment, Stars, Sky, Cloud } from '@react-three/drei';

import { dataStore, isDarkTheme } from '@/utils';

export const Effects = () => {
  const { theme } = dataStore((state) => ({ theme: state.theme }));

  return (
    <>
      <group key={`scene_effects-${theme}`}>
        {isDarkTheme(theme) ? (
          <>
            <color attach='background' args={['#1e1e28']} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          </>
        ) : (
          <>
            <Sky sunPosition={[100, 20, 100]} />
            <group position={[-9.1, -4.1, -14.1]} /*{...useControls({ position: { value: [-7, -3.5, -10], step: 0.1 } })}*/>
              <Cloud opacity={0.5} speed={0.25} width={10} depth={2.5} segments={20} />
            </group>
          </>
        )}
      </group>

      <Environment files='/3d/christmas_photo_studio_04_1k.hdr' />
    </>
  );
};