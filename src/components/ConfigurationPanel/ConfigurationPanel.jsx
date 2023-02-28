import styles from './ConfigurationPanel.module.css';

import boatBody from './icons/hajotest_icon.png';
import carpet from './icons/karpit_icon.png';
import electronics from './icons/elektronika_icon.png';
import accessories from './icons/kiegeszitok_icon.png';
import storage from './icons/tarolas_icon.png';
import arrow_left from './icons/arrow_left_icon.png';
import arrow_right from './icons/arrow_right_icon.png';

function NavBar() {
  return (
    <div className={styles.icons_bar}>
      <div className={styles.button_parent}>
        <div className={styles.nav_button}>
          <img className={styles.image_sizing} src={boatBody} alt="" />
        </div>
        <div className={styles.button_label}>
          Hajótest
        </div>
      </div>

      <div className={styles.button_parent}>
        <div className={styles.nav_button}>
          <img className={styles.image_sizing} src={carpet} alt="" />
        </div>
        <div className={styles.button_label}>
          Kárpit
        </div>
      </div>

      <div className={styles.button_parent}>
        <div className={styles.nav_button}>
          <img className={styles.image_sizing} src={electronics} alt="" />
        </div>
        <div className={styles.button_label}>
          Elektronika
        </div>
      </div>

      <div className={styles.button_parent}>
        <div className={styles.nav_button}>
          <img className={styles.image_sizing} src={accessories} alt="" />
        </div>
        <div className={styles.button_label}>
          Kiegészítők
        </div>
      </div>

      <div className={styles.button_parent}>
        <div className={styles.nav_button}>
          <img className={styles.image_sizing} src={storage} alt="" />
        </div>
        <div className={styles.button_label}>
          Tárolás
        </div>
      </div>
    </div>
  );
}

export default function ConfigurationPanel() {
  return (
    <div className={styles.menu_container}>
      <NavBar></NavBar>
      <div className={styles.main_frame}>
        <div className={styles.title_bar}>
          Meg kell irni a Scriptet
          <div className={styles.border_line}></div>
          </div>
        <div className={styles.entry_frame}>
          <div className={styles.arrow_button}>
            <img src={arrow_left} className={styles.arrow_image} alt="" />
          </div>
          <div className={styles.content_zone}>
            IDE MAJD AZ ENTRY KOMPONENS JÖN
          </div>
          <div className={styles.arrow_button}>
            <img className={styles.arrow_image} src={arrow_right} alt="" />
          </div>
        </div>
        <div className={styles.page_footer}>
          <div className={styles.round_index}></div>
          <div className={styles.round_index}></div>
          <div className={styles.round_index}></div>
        </div>
      </div>
    </div>
  );
}
