import React from 'react';
import styles from '../components/ConfigurationPanel/ConfigurationPanel.module.css';
import entryData from '../components/ConfigurationPanel/icons/ebalin_tura.json';
import Entry from '../components/Entry/Entry';

export default function Hajotest({ model }) {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.title_bar}>
        <div>Hajótest {model}</div>
        <div className={styles.border_line}></div>
      </div>
      <div className={styles.entry_frame}>
        <div className={styles.content_zone_wrapper}>
          <div className={styles.content_zone}>
            {entryData['Hajótest'].map((item, i) => (
              <Entry title={item.title} description={item.details} key={i} image={item.image} price={item.price} model={item.ID} countable={item.countable} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
