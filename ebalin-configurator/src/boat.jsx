import { Canvas } from '@react-three/fiber'
import  styles from './styles/boat.module.css'



export default function Boat(){

    return(
        <div className={styles.boat_display}>
            <Canvas>
            </Canvas>
        </div>
    );
}