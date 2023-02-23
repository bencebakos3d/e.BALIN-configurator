import { Canvas } from '@react-three/fiber';
import styles from './BoatDisplay.module.css';

export default function BoatDisplay() {
  return (
    <div className={styles.boat_display}>
      <Canvas></Canvas>
    </div>
  );
}
