import { Canvas } from '@react-three/fiber';
import styles from './BoatDisplay.module.css';
import { OrbitControls, Environment, Loader } from '@react-three/drei';
import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrightnessContrast, EffectComposer, HueSaturation } from '@react-three/postprocessing';
import { toggleFullscreen } from '../../turaSlice';
import arrow_close from './icons/arrow_close_icon.png';
import EbalinTura from './EbalinTura';

export default function BoatDisplay() {
  const dispatch = useDispatch();

  return (
    <div className={useSelector((state) => state.tura.isFullscreen) ? styles.boat_display_fullscreen : styles.boat_display}>
      <Canvas camera={{ fov: 45, position: [2, 2, -5] }} resize={{ debounce: 0 }}>
        <Suspense fallback={null}>
          <group>
            <EbalinTura></EbalinTura>
          </group>
          <OrbitControls enablePan={false} minDistance={1.8} maxDistance={8} maxPolarAngle={Math.PI / 2} dampingFactor={0.15} />
          <Environment files="./env/lake_pier_1k.hdr" />
          <EffectComposer>
            <HueSaturation hue={0} saturation={-0.4} />
            <BrightnessContrast brightness={0.02} contrast={-0.02} />
          </EffectComposer>
        </Suspense>
      </Canvas>
      <Loader containerStyles={{ background: 'transparent' }} innerStyles={{ width: '200px', height: '10px', background: '#d3d3d3' }} barStyles={{ height: '10px', background: '#0c2d4c' }} dataStyles={{ color: '#42474f', fontSize: '16px', fontFamily: 'Poppins' }} dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`} />
      <div className={styles.metadata_panel}>
        <div className={styles.boat_name}>e.Balin Túra</div>
        <div className={styles.boat_metadata}>
          Összesen: <br />
          <span className={styles.price}>{useSelector((state) => state.tura.totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '))} Ft </span>
          <br />+ ÁFA
        </div>
      </div>
      <div
        className={styles.fullscreen_toggle}
        onClick={() => {
          dispatch(toggleFullscreen());
        }}
      >
        <img src={arrow_close} alt="" className={useSelector((state) => state.tura.isFullscreen) ? styles.arrow_close_rotate : null} />
      </div>
    </div>
  );
}
