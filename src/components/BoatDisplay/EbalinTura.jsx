import { useSelector } from 'react-redux';
import { useGLTF } from '@react-three/drei';

import React from 'react';

export default function EbalinTura() {
  const { nodes, materials } = useGLTF('/model/ebalin_tura2.gltf');
  // useGLTF.preload('/model/ebalin_tura2.gltf');

  return (
    <group dispose={null}>
      <mesh geometry={nodes.Algagatlo.geometry} material={materials.Algavedo} position={[0, 0.58, 0]} visible={useSelector((state) => state.tura.algagatlo)} />
      <group position={[0, 0.58, 0]} visible={useSelector((state) => state.tura.bimini)}>
        <mesh geometry={nodes.Mesh006.geometry} material={materials.Biminiplastic2} />
        <mesh geometry={nodes.Mesh006_1.geometry} material={materials.Rail_metallic} />
        <mesh geometry={nodes.Mesh006_2.geometry} material={materials.Biminiplastic} />
        <mesh geometry={nodes.Mesh006_3.geometry} material={materials.Kotel} />
        <mesh geometry={nodes.Mesh006_4.geometry} material={materials.Bimini_Top} />
      </group>
      <mesh position={[0, 0.58, 0.02]} geometry={nodes.Dorzslec.geometry} material={materials.BlackPlastic} visible={useSelector((state) => state.tura.dorzslec)} />
      <mesh geometry={nodes.El_vedo.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} visible={useSelector((state) => state.tura.orrelvedo)} />
      <group position={[0.17, 0.48, 0.67]} rotation={[-3.11, -0.44, 2.91]} visible={useSelector((state) => state.tura.italtarto)}>
        <mesh geometry={nodes.Mesh022.geometry} material={materials.Beercan_green} />
        <mesh geometry={nodes.Mesh022_1.geometry} material={materials.Beercan_top} />
        <mesh geometry={nodes.Mesh022_2.geometry} material={materials.BlackPlastic} />
      </group>
      <mesh geometry={nodes.Karpit_beige.geometry} material={materials.Upholstery_beige} position={[0, 0.58, 0]} visible={useSelector((state) => state.tura.karpitBeige)} />
      <mesh geometry={nodes.Karpit_kek.geometry} material={materials.Upholstery_blue} position={[0, 0.58, 0]} visible={useSelector((state) => state.tura.karpitKek)} />
      <mesh geometry={nodes.Karpit_korlat_beige.geometry} material={materials.Upholstery_beige} position={[0, 0.58, 0]} visible={useSelector((state) => state.tura.karpitKorlatBeige)} />
      <mesh geometry={nodes.Karpit_korlat_kek.geometry} material={materials.Upholstery_blue} position={[0, 0.58, 0]} visible={useSelector((state) => state.tura.karpitKorlatKek)} />
      <mesh geometry={nodes.Karpit_vezetoules_beige.geometry} material={materials.Upholstery_beige} position={[0, 0.59, 0]} visible={useSelector((state) => state.tura.karpitVezetoBeige)} />
      <mesh geometry={nodes.Karpit_vezetoules_kek.geometry} material={materials.Upholstery_blue} position={[0, 0.59, 0]} visible={useSelector((state) => state.tura.karpitVezetoKek)} />
      <mesh geometry={nodes.Kikotobika.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} visible={useSelector((state) => state.tura.kikotobika) > 0 && true} />
      <mesh geometry={nodes.Kikotobika001.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} visible={useSelector((state) => state.tura.kikotobika) > 1 && true} />
      <mesh geometry={nodes.Kikotobika002.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} visible={useSelector((state) => state.tura.kikotobika) > 2 && true} />
      <mesh geometry={nodes.Kikotokarika.geometry} material={materials.Rail_metallic} position={[2, 0.39, -0.02]} rotation={[-Math.PI / 2, 0, 0]} visible={useSelector((state) => state.tura.kikotokarika)} />
      <mesh geometry={nodes.Korlat_hatso.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} visible={useSelector((state) => state.tura.hatsokorlat)} />
      <mesh geometry={nodes.Korlat_orr.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} visible={useSelector((state) => state.tura.orrkorlat)} />
      <group position={[0.27, 0.66, -0.203]} rotation={[3.09, -0.05, 3.14]} visible={useSelector((state) => state.tura.elsolepcso)}>
        <mesh geometry={nodes.Mesh024.geometry} material={materials.Rail_metallic} />
        <mesh geometry={nodes.Mesh024_1.geometry} material={materials.White_plastic} />
      </group>
      <group position={[0, 0.58, 0]} visible={useSelector((state) => state.tura.hatsolepcso)}>
        <mesh geometry={nodes.Mesh018.geometry} material={materials.Rail_metallic} />
        <mesh geometry={nodes.Mesh018_1.geometry} material={materials.White_plastic} />
      </group>
      <mesh geometry={nodes.Nevtabla.geometry} material={materials.Copper} position={[0.73, 0.29, -0.01]} visible={useSelector((state) => state.tura.nevtabla)} />
      <mesh geometry={nodes.Anti_slippery.geometry} material={materials.Anti_slippery} position={[0, 0.58, 0]} />
      <mesh geometry={nodes.Boat_outer_hull001.geometry} material={materials['OuterBody.006']} position={[0, 0.58, 0]} />
      <mesh geometry={nodes.Bottom_keel001.geometry} material={materials.Base_white} position={[0, 0.58, 0]} />
      <mesh geometry={nodes.Motor_remote.geometry} material={materials.Motor_remotecontrol} position={[0, 0.58, 0]} />
      <mesh geometry={nodes.Box021.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} />
      <mesh geometry={nodes.Box022.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} />
      <group position={[0, 0.58, 0]}>
        <mesh geometry={nodes.Mesh040.geometry} material={materials.Rail_metallic} />
        <mesh geometry={nodes.Mesh040_1.geometry} material={materials.Blue_plastic} />
        <mesh geometry={nodes.Mesh040_2.geometry} material={materials.motor_Connect} />
        <mesh geometry={nodes.Mesh040_3.geometry} material={materials.motor_Lower} />
        <mesh geometry={nodes.Mesh040_4.geometry} material={materials.BlackPlastic} />
        <mesh geometry={nodes.Mesh040_5.geometry} material={materials.motor_Cover} />
      </group>
      <mesh geometry={nodes.Cylinder016.geometry} material={materials.BlackPlastic} position={[0, 0.58, 0]} />
      <mesh geometry={nodes.Front_seat_cover.geometry} material={materials.Base_white} position={[0, 0.58, 0]} />
      <mesh geometry={nodes.Line006.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} visible={useSelector((state) => state.tura.kormanyKapaszkodo)} />
      <mesh geometry={nodes.Line017.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} />
      <mesh geometry={nodes.Line019.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} />
      <mesh geometry={nodes.LockLower.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} />
      <mesh geometry={nodes.LockLower004.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} />
      <mesh geometry={nodes.LockUpper.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} />
      <mesh geometry={nodes.LockUpper001.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} />
      <mesh geometry={nodes.LockUpper003.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} />
      <mesh geometry={nodes.Middle_seat_cover.geometry} material={materials.Base_white} position={[0, 0.58, 0]} />
      <mesh geometry={nodes.NEEDBOOLEAN_Front_seat.geometry} material={materials.Base_white} position={[0, 0.58, 0]} />
      <group position={[0, 0.58, 0]}>
        <mesh geometry={nodes.Mesh031.geometry} material={materials.Rail_metallic} />
        <mesh geometry={nodes.Mesh031_1.geometry} material={materials.BlackPlastic} />
        <mesh geometry={nodes.Mesh031_2.geometry} material={materials['Material #72']} />
        <mesh geometry={nodes.Mesh031_3.geometry} material={materials.Base_white} />
      </group>
      <mesh geometry={nodes.Rear_seat_covers.geometry} material={materials.Base_white} position={[0, 0.58, 0]} />
      <group position={[0, 0.58, 0]}>
        <mesh geometry={nodes.Mesh054.geometry} material={materials.Rail_metallic} />
        <mesh geometry={nodes.Mesh054_1.geometry} material={materials.kormanymodul_Steering_outer} />
        <mesh geometry={nodes.Mesh054_2.geometry} material={materials.Mavimarelogo} />
      </group>
      <mesh geometry={nodes.Storage_lock.geometry} material={materials.WhitePlastic} position={[0, 0.58, 0]} />
      <mesh geometry={nodes.Box004.geometry} material={materials.Rail_metallic} position={[0, 0.58, 0]} visible={useSelector((state) => state.tura.hattamla)} />
    </group>
  );
}
