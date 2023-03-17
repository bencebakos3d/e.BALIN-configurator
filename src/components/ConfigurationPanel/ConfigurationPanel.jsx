import styles from './ConfigurationPanel.module.css';
import { useEffect, useState } from 'react';
import arrow_left from './icons/arrow_left_icon.png';
import arrow_right from './icons/arrow_right_icon.png';
import entryData from './icons/ebalin_tura.json';
import { toggleOption, increaseCost, decreaseCost } from '../../optionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Entry from '../Entry/Entry';
import Hajotest from '../../pages/Hajotest';
import Karpit from '../../pages/Karpit';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

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
    <Router>
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

            <Routes>
              <Route exact path="/" element={<Hajotest />} />
              <Route path="/karpit" element={<Karpit />} />
            </Routes>

            <div className={styles.arrow_button} onClick={() => increasePage()}>
              <img className={styles.arrow_image} src={arrow_right} alt="" />
            </div>
          </div>

          <div className={styles.page_footer}>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.round_index_active : styles.round_index)}></NavLink>
            <NavLink to="/karpit" className={({ isActive }) => (isActive ? styles.round_index_active : styles.round_index)}></NavLink>
            <NavLink to="/elektronika" className={({ isActive }) => (isActive ? styles.round_index_active : styles.round_index)}></NavLink>
            <NavLink to="/kiegeszitok" className={({ isActive }) => (isActive ? styles.round_index_active : styles.round_index)}></NavLink>
            <NavLink to="/tarolas" className={({ isActive }) => (isActive ? styles.round_index_active : styles.round_index)}></NavLink>
            <NavLink to="/osszesites" className={({ isActive }) => (isActive ? styles.round_index_active : styles.round_index)}></NavLink>
          </div>
        </div>
      </div>
    </Router>
  );
}
