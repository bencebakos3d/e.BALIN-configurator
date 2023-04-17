import React from 'react';
import styles from '../components/ConfigurationPanel/ConfigurationPanel.module.css';
import entryData from '../components/ConfigurationPanel/icons/ebalin_tura.json';
import Entry from '../components/Entry/Entry';
import { useDispatch, useSelector } from 'react-redux';
import { setKarpitColor } from '../turaSlice';
import BeigeKarpit from './images/upholstery_beige.webp';
import BlueKarpit from './images/upholstery_blue.webp';

export default function Karpit() {
  const dispatch = useDispatch();

  function pickColor(color) {
    dispatch(setKarpitColor(color));
  }

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.title_bar}>
        <div>Kárpit</div>
        <div className={styles.border_line}></div>
      </div>
      <div className={styles.entry_frame}>
        <div className={styles.content_zone_wrapper}>
          <div className={styles.content_zone}>
            <div className={styles.color_category}>Kárpit színek:</div>
            <div className={styles.color_picker}>
              <div className={useSelector((state) => state.tura.karpitColor) === 'blue' ? styles.color_active : styles.color_option} onClick={() => pickColor('blue')}>
                <img src={BlueKarpit} alt="" className={styles.color_background} />
                <div className={styles.color_text}>Tengerkék</div>
              </div>
              <div className={useSelector((state) => state.tura.karpitColor) === 'beige' ? styles.color_active : styles.color_option} onClick={() => pickColor('beige')}>
                <img src={BeigeKarpit} alt="" className={styles.color_background} />
                <div className={styles.color_text}>Beige</div>
              </div>
            </div>
            {entryData['Kárpit'].map((item, i) => (
              <Entry title={item.title} description={item.details} key={i} image={item.image} price={item.price} model={item.ID} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
