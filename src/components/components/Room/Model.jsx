/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 brunos-room-v1.glb --transform
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/src/components/components/Room/brunos-room-v1-transformed.glb');

  return (
    <group {...props} dispose={null}>
      <mesh name='Room' geometry={nodes.Room.geometry} material={nodes.Room.material} position={[0, 3.15, -4.87]} rotation={[Math.PI, 0, Math.PI]} />
      {/* <mesh name='Cube' geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[0, 2.98, 0]} scale={[5.03, 3.42, 5.03]} /> */}
      <mesh
        name='Bookshelf'
        geometry={nodes.Bookshelf.geometry}
        material={nodes.Bookshelf.material}
        position={[0, 3.15, -4.87]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh name='Elephants' geometry={nodes.Elephants.geometry} material={nodes.Elephants.material} />
      </mesh>
      <mesh name='Chair' geometry={nodes.Chair.geometry} material={nodes.Chair.material} position={[0, 3.15, -4.87]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          name='Chair_Top'
          geometry={nodes.Chair_Top.geometry}
          material={nodes.Chair_Top.material}
          position={[1, -1.72, -4.74]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
      </mesh>
      <mesh
        name='CoffeeTable'
        geometry={nodes.CoffeeTable.geometry}
        material={nodes.CoffeeTable.material}
        position={[0, 3.15, -4.87]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name='Console'
        geometry={nodes.Console.geometry}
        material={nodes.Console.material}
        position={[0, 3.15, -4.87]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name='Controller'
        geometry={nodes.Controller.geometry}
        material={nodes.Controller.material}
        position={[0, 3.15, -4.87]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name='Couch'
        geometry={nodes.Couch.geometry}
        material={nodes.Couch.material}
        position={[0, 3.15, -4.87]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh name='Desk' geometry={nodes.Desk.geometry} material={nodes.Desk.material} position={[0, 3.15, -4.87]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          name='Coffee_Steam'
          geometry={nodes.Coffee_Steam.geometry}
          material={nodes.Coffee_Steam.material}
          position={[2.89, -0.49, -6.26]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          name='Elgato_Light'
          geometry={nodes.Elgato_Light.geometry}
          material={nodes.Elgato_Light.material}
          position={[4.03, 1.44, -4.93]}
          rotation={[1.67, 0.25, 1.2]}
          scale={1.1}
        />
      </mesh>
      <mesh
        name='GoogleHome'
        geometry={nodes.GoogleHome.geometry}
        material={nodes.GoogleHome.material}
        position={[0, 3.15, -4.87]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          name='Google_Home_Leds001'
          geometry={nodes.Google_Home_Leds001.geometry}
          material={nodes.Google_Home_Leds001.material}
          position={[-1.57, -2.03, -3.84]}
          rotation={[0, 0, 0.12]}
          scale={0.02}
        />
        <mesh
          name='Google_Home_Leds002'
          geometry={nodes.Google_Home_Leds002.geometry}
          material={nodes.Google_Home_Leds002.material}
          position={[-1.45, -2.03, -3.84]}
          rotation={[-Math.PI, 0, -3.02]}
          scale={0.02}
        />
        <mesh
          name='Google_Home_Leds003'
          geometry={nodes.Google_Home_Leds003.geometry}
          material={nodes.Google_Home_Leds003.material}
          position={[-1.49, -2.03, -3.84]}
          rotation={[-Math.PI, 0, -3.1]}
          scale={0.02}
        />
        <mesh
          name='Google_Home_Leds004'
          geometry={nodes.Google_Home_Leds004.geometry}
          material={nodes.Google_Home_Leds004.material}
          position={[-1.53, -2.03, -3.84]}
          rotation={[0, 0, 0.04]}
          scale={0.02}
        />
      </mesh>
      <mesh
        name='Guitar'
        geometry={nodes.Guitar.geometry}
        material={nodes.Guitar.material}
        position={[0, 3.15, -4.87]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name='Macbook'
        geometry={nodes.Macbook.geometry}
        material={nodes.Macbook.material}
        position={[0, 3.15, -4.87]}
        rotation={[Math.PI, 0, Math.PI]}
      >
        <mesh
          name='Screen_(Mac)'
          geometry={nodes['Screen_(Mac)'].geometry}
          material={nodes['Screen_(Mac)'].material}
          position={[3.77, -0.53, -2.64]}
          rotation={[1.59, -0.05, 1.87]}
        />
      </mesh>
      <mesh
        name='Nintendo_Switch'
        geometry={nodes.Nintendo_Switch.geometry}
        material={nodes.Nintendo_Switch.material}
        position={[0, 3.15, -4.87]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name='Octopus'
        geometry={nodes.Octopus.geometry}
        material={nodes.Octopus.material}
        position={[0, 3.15, -4.87]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh name='PC' geometry={nodes.PC.geometry} material={nodes.PC.material} position={[0, 3.15, -4.87]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          name='Screen_(PC)'
          geometry={nodes['Screen_(PC)'].geometry}
          material={nodes['Screen_(PC)'].material}
          position={[4.06, 0.21, -4.56]}
          rotation={[0, 0, -Math.PI / 2]}
        />
      </mesh>
      <mesh
        name='Pet_Bed'
        geometry={nodes.Pet_Bed.geometry}
        material={nodes.Pet_Bed.material}
        position={[0, 3.15, -4.87]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name='Plant_(TV_Unit)'
        geometry={nodes['Plant_(TV_Unit)'].geometry}
        material={nodes['Plant_(TV_Unit)'].material}
        position={[0, 3.15, -4.87]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh name='PS5' geometry={nodes.PS5.geometry} material={nodes.PS5.material} position={[0, 3.15, -4.87]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh name='TV' geometry={nodes.TV.geometry} material={nodes.TV.material} position={[0, 3.15, -4.87]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh name='Screen_(TV)' geometry={nodes['Screen_(TV)'].geometry} material={nodes['Screen_(TV)'].material} />
      </mesh>
      <mesh
        name='TV_Unit'
        geometry={nodes.TV_Unit.geometry}
        material={nodes.TV_Unit.material}
        position={[0, 3.15, -4.87]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh name='VR' geometry={nodes.VR.geometry} material={nodes.VR.material} position={[0, 3.15, -4.87]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh
        name='Window'
        geometry={nodes.Window.geometry}
        material={nodes.Window.material}
        position={[0, 3.15, -4.87]}
        rotation={[Math.PI, 0, Math.PI]}
      />
    </group>
  );
}

useGLTF.preload('/src/components/components/Room/brunos-room-v1-transformed.glb');
