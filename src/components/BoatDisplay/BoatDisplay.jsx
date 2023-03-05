import { Canvas } from '@react-three/fiber';
import styles from './BoatDisplay.module.css';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
const BoatModel = { title: 'Boat', url: './model/ebalin_tura.gltf' };

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function BoatDisplay() {
  return (
    <div className={styles.boat_display}>
      <Canvas camera={{ fov: 45, position: [2, 2, -5] }}>
        <group>
          <Model url={BoatModel.url} />
        </group>
        <OrbitControls enablePan={false} minDistance={1.8} maxDistance={8} maxPolarAngle={Math.PI / 2} enableDamping={false} />
        <Environment files="./env/kloppenheim_05_puresky_1k.hdr" />
      </Canvas>
      <div className={styles.metadata_panel}>
        <div className={styles.boat_name}>e.Balin Túra</div>
        <div className={styles.boat_metadata}>
          Végösszeg: <br />1 565 000 Ft <br />+ ÁFA
        </div>
      </div>
    </div>
  );
}
