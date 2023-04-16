import React from 'react';
import styles from './Alert.module.css';
import { toggleOption } from '../../turaSlice';
import { useDispatch } from 'react-redux';

export default function Alert() {
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <div className={styles.alert_box}>
        <div>A kiegészítő hozzáadásához az alábbiak szükségesek:</div>
        <div>{useSelector((state) => state.tura.alertText)}</div>
        <div className={styles.alert_options}>
          <div>Vissza</div>
          <div
            onClick={() => {
              dispatch(toggleOption('showAlert'));
            }}
          >
            OK
          </div>
        </div>
      </div>
    </div>
  );
}
