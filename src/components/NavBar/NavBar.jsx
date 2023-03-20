import React from 'react';
import styles from './NavBar.module.css';
import boatBody from './icons/hajotest_icon.png';
import carpet from './icons/karpit_icon.png';
import electronics from './icons/elektronika_icon.png';
import accessories from './icons/kiegeszitok_icon.png';
import storage from './icons/tarolas_icon.png';
import summary from './icons/osszesites_icon.png';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className={styles.icons_bar}>
      <div className={styles.button_parent}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.nav_button_active : styles.nav_button)}>
          <img className={styles.image_sizing} src={boatBody} alt="" />
        </NavLink>
        <div className={styles.button_label}>Hajótest</div>
      </div>

      <div className={styles.button_parent}>
        <NavLink to="/karpit" className={({ isActive }) => (isActive ? styles.nav_button_active : styles.nav_button)}>
          <img className={styles.image_sizing} src={carpet} alt="" />
        </NavLink>
        <div className={styles.button_label}>Kárpit</div>
      </div>

      <div className={styles.button_parent}>
        <NavLink to="/elektronika" className={({ isActive }) => (isActive ? styles.nav_button_active : styles.nav_button)}>
          <img className={styles.image_sizing} src={electronics} alt="" />
        </NavLink>
        <div className={styles.button_label}>Elektronika</div>
      </div>

      <div className={styles.button_parent}>
        <NavLink to="/kiegeszitok" className={({ isActive }) => (isActive ? styles.nav_button_active : styles.nav_button)}>
          <img className={styles.image_sizing} src={accessories} alt="" />
        </NavLink>
        <div className={styles.button_label}>Kiegészítők</div>
      </div>

      <div className={styles.button_parent}>
        <NavLink to="/tarolas" className={({ isActive }) => (isActive ? styles.nav_button_active : styles.nav_button)}>
          <img className={styles.image_sizing} src={storage} alt="" />
        </NavLink>
        <div className={styles.button_label}>Tárolás</div>
      </div>

      <div className={styles.button_parent}>
        <NavLink to="/osszesites" className={({ isActive }) => (isActive ? styles.nav_button_active : styles.nav_button)}>
          <img className={styles.image_sizing} src={summary} alt="" />
        </NavLink>
        <div className={styles.button_label}>Összesítés</div>
      </div>
    </div>
  );
}
