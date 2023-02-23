import styles from './Header.module.css';

import boatBody from './icons/hajotest_icon.png';
import carpet from './icons/karpit_icon.png';
import electronics from './icons/elektronika_icon.png';
import accessories from './icons/kiegeszitok_icon.png';
import storage from './icons/tarolas_icon.png';

function NavBar() {
  return (
    <div className={styles.icons_bar}>
      <div className={styles.nav_button}>
        <img className={styles.image_sizing} src={boatBody} alt="" />
      </div>

      <div className={styles.nav_button}>
        <img className={styles.image_sizing} src={carpet} alt="" />
      </div>

      <div className={styles.nav_button}>
        <img className={styles.image_sizing} src={electronics} alt="" />
      </div>

      <div className={styles.nav_button}>
        <img className={styles.image_sizing} src={accessories} alt="" />
      </div>

      <div className={styles.nav_button}>
        <img className={styles.image_sizing} src={storage} alt="" />
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className={styles.menu_container}>
      <NavBar></NavBar>
    </div>
  );
}
