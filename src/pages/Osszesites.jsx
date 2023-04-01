import React from 'react';
import styles from '../components/ConfigurationPanel/ConfigurationPanel.module.css';
import entryData from '../components/ConfigurationPanel/icons/ebalin_tura.json';
import Entry from '../components/Entry/Entry';
import arrow_left from '../components/ConfigurationPanel/icons/arrow_left_icon.png';
import arrow_right from '../components/ConfigurationPanel/icons/arrow_right_icon.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Osszesites() {
  const summaryCategories = [];

  // Adds the enabled options to the page
  for (let i in entryData) {
    let summaryElements = [];
    for (let j = 0; j < entryData[i].length; j++) {
      if (useSelector((state) => state.boat[entryData[i][j].ID])) {
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
        <NavLink to="/tarolas" className={styles.arrow_button}>
          <img className={styles.arrow_image} src={arrow_left} alt="" />
        </NavLink>
        <div className={styles.content_zone_wrapper}>
          <div className={styles.content_zone}>
            {
              // entryData.map((item, i) => entryData[item].map((item, j) => (useSelector((state) => state.boat[entryData[item][j].ID]) ? <div>{entryData[item][j].title}</div> : null)))
              summaryCategories
            }
          </div>
        </div>
        <div className={styles.arrow_button}></div>
      </div>
    </div>
  );
}
