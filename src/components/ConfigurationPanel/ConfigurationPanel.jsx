import styles from './ConfigurationPanel.module.css';

import boatBody from './icons/hajotest_icon.png';
import carpet from './icons/karpit_icon.png';
import electronics from './icons/elektronika_icon.png';
import accessories from './icons/kiegeszitok_icon.png';
import storage from './icons/tarolas_icon.png';
import arrow_left from './icons/arrow_left_icon.png';
import arrow_right from './icons/arrow_right_icon.png';
import bimini from './icons/bimini.png'
import checked_icon from './icons/checked_icon.png'

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

function Entry(){
  return(
    <div className={styles.entry_mainframe}>
      <div className={styles.checkbox_container}>
        <div className={styles.entry_checkbox}>
          <img src={checked_icon} className={styles.check_image} alt="" />
        </div>
      </div>
      <div className={styles.text_pair}>
        <div className={styles.entry_title}>
          Bimini
        </div>
        <div>
          Ideális nap és egyéb időjárási körülmények ellen.
        </div>
      </div>
      <div className={styles.image_container}>
        <img src={bimini} className={styles.entry_image} alt="" />
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
            <Entry></Entry>
          </div>
          <div className={styles.arrow_button}>
            <img className={styles.arrow_image} src={arrow_right} alt="" />
          </div>
        </div>
        <div className={styles.page_footer}>
          <div className={styles.round_index}></div>
          <div className={styles.round_index}></div>
          <div className={styles.round_index}></div>
          <div className={styles.round_index}></div>
          <div className={styles.round_index}></div>
          <div className={styles.round_index}></div>
        </div>
      </div>
    </div>
  );
}
