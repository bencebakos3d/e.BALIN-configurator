import React from 'react';
import styles from '../components/ConfigurationPanel/ConfigurationPanel.module.css';
import entryData from '../components/ConfigurationPanel/icons/ebalin_tura.json';
import { useSelector } from 'react-redux';

export default function Osszesites() {
  const summaryCategories = [];

  // Adds the enabled options to the page
  for (let i in entryData) {
    let summaryElements = [];
    for (let j = 0; j < entryData[i].length; j++) {
      if (useSelector((state) => state.tura[entryData[i][j].ID])) {
        summaryElements.push(
          <div>
            <div>{entryData[i][j].title}</div>
            <div>{entryData[i][j].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' Ft'}</div>
          </div>
        );
      }
    }
    if (summaryElements.length > 0) {
      summaryCategories.push(
        <div>
          <div className={styles.summary_category}>{i}</div>
          <div className={styles.summary_elements}>{summaryElements}</div>
        </div>
      );
    }
  }

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.title_bar}>
        <div>Összesítés</div>
        <div className={styles.border_line}></div>
      </div>
      <div className={styles.entry_frame}>
        <div className={styles.content_zone_wrapper}>
          <div className={styles.content_zone}>{summaryCategories}</div>
        </div>
      </div>
    </div>
  );
}
