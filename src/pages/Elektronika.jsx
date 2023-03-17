import React, { useEffect, useState } from 'react';
import styles from '../components/ConfigurationPanel/ConfigurationPanel.module.css';
import entryData from '../components/ConfigurationPanel/icons/ebalin_tura.json';
import Entry from '../components/Entry/Entry';

export default function Elektronika() {
  const [data, setData] = useState(entryData);
  useEffect(() => {
    setData(entryData[1]);
  });

  return (
    <div className={styles.content_zone_wrapper}>
      <div className={styles.content_zone}>
        {data.map((item, i) => (
          <Entry title={item.title} description={item.details} key={i} handleCheck={() => handleCheck(item.price, item.ID)} image={item.image} />
        ))}
      </div>
    </div>
  );
}
