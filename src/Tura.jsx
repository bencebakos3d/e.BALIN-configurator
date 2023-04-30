import React from 'react';
import BoatDisplay from './components/BoatDisplay/BoatDisplay';
import ConfigurationPanel from './components/ConfigurationPanel/ConfigurationPanel';
import style from './App.css';

export default function Tura() {
  return (
    <div className="view_container">
      <BoatDisplay model="tura"></BoatDisplay>
      <ConfigurationPanel model="tura"></ConfigurationPanel>
    </div>
  );
}
