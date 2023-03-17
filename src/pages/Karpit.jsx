import React, { useEffect, useState } from 'react';
import styles from '../components/ConfigurationPanel/ConfigurationPanel.module.css';
import entryData from '../components/ConfigurationPanel/icons/ebalin_tura.json';
import Entry from '../components/Entry/Entry';
import arrow_left from '../components/ConfigurationPanel/icons/arrow_left_icon.png';
import arrow_right from '../components/ConfigurationPanel/icons/arrow_right_icon.png';
import { NavLink } from 'react-router-dom';

export default function Hajotest() {
  const [data, setData] = useState(entryData);
  useEffect(() => {
    setData(entryData[1]);
  });
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.title_bar}>
        <div>Kárpit</div>
        <div className={styles.border_line}></div>
      </div>
      <div className={styles.entry_frame}>
        <NavLink to="/" className={styles.arrow_button}>
          <img className={styles.arrow_image} src={arrow_left} alt="" />
        </NavLink>
        <div className={styles.content_zone_wrapper}>
          <div className={styles.content_zone}>
            {data.map((item, i) => (
              <Entry title={item.title} description={item.details} key={i} handleCheck={() => handleCheck(item.price, item.ID)} image={item.image} />
            ))}
          </div>
        </div>
        <NavLink to="/elektronika" className={styles.arrow_button}>
          <img className={styles.arrow_image} src={arrow_right} alt="" />
        </NavLink>
      </div>
    </div>
  );
}
