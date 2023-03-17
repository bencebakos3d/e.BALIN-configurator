import styles from './ConfigurationPanel.module.css';
import Hajotest from '../../pages/Hajotest';
import Karpit from '../../pages/Karpit';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

export default function ConfigurationPanel() {
  return (
    <Router>
      <div className={styles.menu_container}>
        <NavBar></NavBar>
        <div className={styles.main_frame}>
          <Routes>
            <Route exact path="/" element={<Hajotest />} />
            <Route path="/karpit" element={<Karpit />} />
          </Routes>
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
