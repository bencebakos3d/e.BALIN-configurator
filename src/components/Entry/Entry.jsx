import styles from './Entry.module.css';
import checked_icon from './checked_icon.png';
import { useState } from 'react';
import { toggleOption, increaseCost, decreaseCost } from '../../optionsSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Entry({ title, description, image, price, model }) {
  const dispatch = useDispatch();

  function handleClick(myEvent) {
    dispatch(toggleOption(model));
    if (myEvent.target.checked) {
      dispatch(increaseCost(price));
    } else {
      dispatch(decreaseCost(price));
    }
  }

  return (
    <div className={styles.entry_mainframe}>
      <input className={styles.entry_checkbox} type="checkbox" name="" id="" onChange={handleClick} checked={useSelector((state) => state.boat[model])} />

      <div className={styles.text_pair}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.image_container}>{image ? <img src={image} className={styles.entry_image} alt="" /> : null}</div>
    </div>
  );
}
