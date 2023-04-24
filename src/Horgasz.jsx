import React from 'react';
import BoatDisplay from './components/BoatDisplay/BoatDisplay';
import ConfigurationPanel from './components/ConfigurationPanel/ConfigurationPanel';
import style from './App.css';

export default function Horgasz() {
  return (
    <div className="view_container">
      <BoatDisplay model="horgasz"></BoatDisplay>
      <ConfigurationPanel model="horgasz"></ConfigurationPanel>
    </div>
  );
}
