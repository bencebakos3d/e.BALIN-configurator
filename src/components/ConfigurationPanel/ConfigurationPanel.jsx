import styles from './ConfigurationPanel.module.css';
import { useEffect, useState } from 'react';
import boatBody from './icons/hajotest_icon.png';
import carpet from './icons/karpit_icon.png';
import electronics from './icons/elektronika_icon.png';
import accessories from './icons/kiegeszitok_icon.png';
import storage from './icons/tarolas_icon.png';
import summary from './icons/osszesites_icon.png';
import arrow_left from './icons/arrow_left_icon.png';
import arrow_right from './icons/arrow_right_icon.png';
import entryData from './icons/ebalin_tura.json';
import { toggleOption, increaseCost, decreaseCost } from '../../optionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Entry from '../Entry/Entry';

function NavBar(handler) {
  return (
    <div className={styles.icons_bar}>
      <div className={styles.button_parent}>
        <div className={styles.nav_button} onClick={() => handler.handler('body')}>
          <img className={styles.image_sizing} src={boatBody} alt="" />
        </div>
        <div className={styles.button_label}>Hajótest</div>
      </div>

      <div className={styles.button_parent}>
        <div className={styles.nav_button} onClick={() => handler.handler('carpet')}>
          <img className={styles.image_sizing} src={carpet} alt="" />
        </div>
        <div className={styles.button_label}>Kárpit</div>
      </div>

      <div className={styles.button_parent}>
        <div className={styles.nav_button} onClick={() => handler.handler('electronics')}>
          <img className={styles.image_sizing} src={electronics} alt="" />
        </div>
        <div className={styles.button_label}>Elektronika</div>
      </div>

      <div className={styles.button_parent}>
        <div className={styles.nav_button} onClick={() => handler.handler('accessories')}>
          <img className={styles.image_sizing} src={accessories} alt="" />
        </div>
        <div className={styles.button_label}>Kiegészítők</div>
      </div>

      <div className={styles.button_parent}>
        <div className={styles.nav_button} onClick={() => handler.handler('storage')}>
          <img className={styles.image_sizing} src={storage} alt="" />
        </div>
        <div className={styles.button_label}>Tárolás</div>
      </div>

      <div className={styles.button_parent}>
        <div className={styles.nav_button} onClick={() => handler.handler('storage')}>
          <img className={styles.image_sizing} src={summary} alt="" />
        </div>
        <div className={styles.button_label}>Összesítés</div>
      </div>
    </div>
  );
}

export default function ConfigurationPanel() {
  const [pageIndex, setPageIndex] = useState(0);
  const [data, setData] = useState(entryData);
  const dispatch = useDispatch();

  function decreasePage() {
    console.log('decreasing page');
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  }
  function increasePage() {
    console.log('increasing page');
    if (pageIndex < 4) {
      setPageIndex(pageIndex + 1);
    }
  }

  function handleCheck(price, model) {
    dispatch(toggleOption(model));
    dispatch(increaseCost(price));
  }

  useEffect(() => {
    setData(entryData[pageIndex]);
  });

  return (
    <div className={styles.menu_container}>
      <NavBar></NavBar>
      <div className={styles.main_frame}>
        <div className={styles.title_bar}>
          <div>Hajótest</div>
          <div className={styles.border_line}></div>
        </div>

        <div className={styles.entry_frame}>
          <div className={styles.arrow_button} onClick={() => decreasePage()}>
            {pageIndex !== 0 ? <img src={arrow_left} className={styles.arrow_image} alt="" /> : <div></div>}
          </div>
          <div className={styles.content_zone_wrapper}>
            <div className={styles.content_zone}>
              {data.map((item, i) => (
                <Entry title={item.title} description={item.details} key={i} handleCheck={() => handleCheck(item.price, item.ID)} image={item.image} />
              ))}
            </div>
          </div>

          <div className={styles.arrow_button} onClick={() => increasePage()}>
            <img className={styles.arrow_image} src={arrow_right} alt="" />
          </div>
        </div>

        <div className={styles.page_footer}>
          <div className={styles.round_index} onClick={() => setPageIndex(0)}></div>
          <div className={styles.round_index} onClick={() => setPageIndex(1)}></div>
          <div className={styles.round_index} onClick={() => setPageIndex(2)}></div>
          <div className={styles.round_index} onClick={() => setPageIndex(3)}></div>
          <div className={styles.round_index} onClick={() => setPageIndex(4)}></div>
          <div className={styles.round_index} onClick={() => setPageIndex(5)}></div>
        </div>
      </div>
    </div>
  );
}
