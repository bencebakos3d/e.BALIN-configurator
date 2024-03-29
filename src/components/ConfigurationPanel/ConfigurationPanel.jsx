import styles from './ConfigurationPanel.module.css';
import Hajotest from '../../pages/Hajotest';
import Karpit from '../../pages/Karpit';
import { Routes, Route, NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Elektronika from '../../pages/Elektronika';
import Kiegeszitok from '../../pages/Kiegeszitok';
import Tarolas from '../../pages/Tarolas';
import Osszesites from '../../pages/Osszesites';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function ConfigurationPanel({ model }) {
  return (
    <div className={useSelector((state) => state.tura.isFullscreen) ? styles.menu_container_disabled : styles.menu_container}>
      <NavBar></NavBar>
      <div className={styles.main_frame}>
        <Routes>
          <Route exact path="/" element={<Hajotest model={model} />} />
          <Route path="karpit" element={<Karpit />} />
          <Route path="elektronika" element={<Elektronika />} />
          <Route path="kiegeszitok" element={<Kiegeszitok />} />
          <Route path="tarolas" element={<Tarolas />} />
          <Route path="osszesites" element={<Osszesites />} />
        </Routes>
        <div className={styles.page_footer}>
          <NavLink to="" className={({ isActive }) => (isActive ? styles.round_index_active : styles.round_index)} end></NavLink>
          <NavLink to="karpit" className={({ isActive }) => (isActive ? styles.round_index_active : styles.round_index)}></NavLink>
          <NavLink to="elektronika" className={({ isActive }) => (isActive ? styles.round_index_active : styles.round_index)}></NavLink>
          <NavLink to="kiegeszitok" className={({ isActive }) => (isActive ? styles.round_index_active : styles.round_index)}></NavLink>
          <NavLink to="tarolas" className={({ isActive }) => (isActive ? styles.round_index_active : styles.round_index)}></NavLink>
          <NavLink to="osszesites" className={({ isActive }) => (isActive ? styles.round_index_active : styles.round_index)}></NavLink>
        </div>
      </div>
    </div>
  );
}
