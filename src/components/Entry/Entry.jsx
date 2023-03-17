import styles from './Entry.module.css';
import checked_icon from './checked_icon.png';
import { useState } from 'react';
import { toggleOption, increaseCost, decreaseCost } from '../../optionsSlice';
import { useDispatch } from 'react-redux';

export default function Entry({ handleCheck, title, description, image, price, model }) {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  function handleClick() {
    setActive(!active);
    dispatch(toggleOption(model));
    if (active) {
      dispatch(decreaseCost(price));
    } else {
      dispatch(increaseCost(price));
    }
  }

  return (
    <div className={styles.entry_mainframe}>
      <div className={styles.entry_checkbox} onClick={handleClick}>
        {active ? <img src={checked_icon} className={styles.check_image} alt="" /> : null}
      </div>
      <div className={styles.text_pair}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.image_container}>{image ? <img src={image} className={styles.entry_image} alt="" /> : null}</div>
    </div>
  );
}
