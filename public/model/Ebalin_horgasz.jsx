/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ebalin_horgasz.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ebalin_horgasz.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Kikotokarika001.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Karpit_vezetoules.geometry} material={materials['Upholstery_beige.001']} />
      <mesh geometry={nodes.Karpit.geometry} material={materials.Upholstery_blue} />
      <mesh geometry={nodes.Upholstery_beige_back.geometry} material={materials.Upholstery_beige} />
      <mesh geometry={nodes.Dorzslec.geometry} material={materials.BlackPlastic} />
      <mesh geometry={nodes.Hatso_korlat.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Kozep_korlat.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Orrelvedo.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Korlat_orr001.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Hattamla.geometry} material={materials['Rail_metallic.001']} />
      <mesh geometry={nodes.Kikotobika003.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Kikotobika004.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Kikotobika005.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Anti_slippery001.geometry} material={materials.Anti_slippery} />
      <mesh geometry={nodes.Boat_inner_hull001.geometry} material={materials.Base_white} />
      <mesh geometry={nodes.Box022001.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Cylinder016001.geometry} material={materials.BlackPlastic} />
      <mesh geometry={nodes.LockLower001.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Middle_seat_cover001.geometry} material={materials.Base_white} />
      <mesh geometry={nodes.Steering_module001.geometry} material={materials.Base_white} />
      <mesh geometry={nodes.Front_Storage_Body.geometry} material={nodes.Front_Storage_Body.material} />
      <mesh geometry={nodes.Cube001.geometry} material={materials.Anti_slippery} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Mesh085.geometry} material={materials.Biminiplastic2} />
      <mesh geometry={nodes.Mesh085_1.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Mesh085_2.geometry} material={materials.Bimini_Top} />
      <mesh geometry={nodes.Mesh085_3.geometry} material={materials.Biminiplastic} />
      <mesh geometry={nodes.Mesh085_4.geometry} material={materials.Kotel} />
      <mesh geometry={nodes.BezierCurve.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.BezierCurve_1.geometry} material={materials.BlackPlastic} />
      <mesh geometry={nodes.BezierCurve_2.geometry} material={materials.Base_white} />
      <mesh geometry={nodes.Mesh094.geometry} material={materials.BlackPlastic} />
      <mesh geometry={nodes.Mesh094_1.geometry} material={materials.Beercan_green} />
      <mesh geometry={nodes.Mesh094_2.geometry} material={materials.Beercan_top} />
      <mesh geometry={nodes.Mesh100.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Mesh100_1.geometry} material={materials.White_plastic} />
      <mesh geometry={nodes.Mesh012.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Mesh012_1.geometry} material={materials.Blue_plastic} />
      <mesh geometry={nodes.Mesh012_2.geometry} material={materials.motor_Connect} />
      <mesh geometry={nodes.Mesh012_3.geometry} material={materials.motor_Lower} />
      <mesh geometry={nodes.Mesh012_4.geometry} material={materials.BlackPlastic} />
      <mesh geometry={nodes.Mesh012_5.geometry} material={materials.motor_Cover} />
      <mesh geometry={nodes.Mesh019.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Mesh019_1.geometry} material={materials.White_plastic} />
      <mesh geometry={nodes.Mesh125.geometry} material={materials['OuterBody.006']} />
      <mesh geometry={nodes.Mesh125_1.geometry} material={materials.Algavedo} />
      <mesh geometry={nodes.Mesh127.geometry} material={materials.Motor_remotecontrol} />
      <mesh geometry={nodes.Mesh127_1.geometry} material={materials.Blue_plastic} />
      <mesh geometry={nodes.Mesh151.geometry} material={materials.Mavimarelogo} />
      <mesh geometry={nodes.Mesh151_1.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Mesh151_2.geometry} material={materials.kormanymodul_Steering_outer} />
      <mesh geometry={nodes.Mesh159.geometry} material={materials.Rail_metallic} />
      <mesh geometry={nodes.Mesh159_1.geometry} material={materials.BlackPlastic} />
      <mesh geometry={nodes.Mesh159_2.geometry} material={materials['Material #72']} />
    </group>
  )
}

useGLTF.preload('/ebalin_horgasz.gltf')
