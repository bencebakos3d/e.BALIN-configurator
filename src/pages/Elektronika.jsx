import React from 'react';
import styles from '../components/ConfigurationPanel/ConfigurationPanel.module.css';
import entryData from '../components/ConfigurationPanel/icons/ebalin_tura.json';
import Entry from '../components/Entry/Entry';
// import arrow_left from '../components/ConfigurationPanel/icons/arrow_left_icon.png';
import arrow_right from '../components/ConfigurationPanel/icons/arrow_right_icon.png';
import { NavLink } from 'react-router-dom';

export default function Elektronika() {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.title_bar}>
        <div>Elektronika</div>
        <div className={styles.border_line}></div>
      </div>
      <div className={styles.entry_frame}>
        <div className={styles.arrow_button}></div>
        <div className={styles.content_zone_wrapper}>
          <div className={styles.content_zone}>
            {entryData[2].map((item, i) => (
              <Entry title={item.title} description={item.details} key={i} image={item.image} price={item.price} model={item.ID} />
            ))}
          </div>
        </div>
        <NavLink to="/karpit" className={styles.arrow_button}>
          <img className={styles.arrow_image} src={arrow_right} alt="" />
        </NavLink>
      </div>
    </div>
  );
}
