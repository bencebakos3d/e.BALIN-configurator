import React from 'react';
import styles from '../components/ConfigurationPanel/ConfigurationPanel.module.css';
import entryData from '../components/ConfigurationPanel/icons/ebalin_tura.json';
import Entry from '../components/Entry/Entry';

export default function Kiegeszitok() {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.title_bar}>
        <div>Kiegészítők</div>
        <div className={styles.border_line}></div>
      </div>
      <div className={styles.entry_frame}>
        <div className={styles.content_zone_wrapper}>
          <div className={styles.content_zone}>
            {entryData['Kiegészítők'].map((item, i) => (
              <Entry title={item.title} description={item.details} key={i} image={item.image} price={item.price} model={item.ID} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
