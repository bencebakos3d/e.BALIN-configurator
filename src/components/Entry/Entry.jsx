import styles from './Entry.module.css';
import { toggleOption, increaseCost, decreaseCost, changeOptionCount } from '../../optionsSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Entry({ title, description, image, price, model, countable, count }) {
  const dispatch = useDispatch();

  function handleClick(myEvent) {
    dispatch(toggleOption(model));
    if (myEvent.target.checked) {
      dispatch(increaseCost(price));
    } else {
      dispatch(decreaseCost(price));
    }
  }
  function addCount(number) {
    console.log('valami');
    dispatch(changeOptionCount([model, number]));
  }

  return (
    <div className={styles.entry_mainframe}>
      {countable ? (
        <div className={styles.counter_wrapper}>
          <div className={styles.counter_button} onClick={() => addCount(1)}>
            +
          </div>
          <div>{useSelector((state) => state.boat[model])}</div>
          <div className={styles.counter_button} onClick={() => addCount(-1)}>
            -
          </div>
        </div>
      ) : (
        <input className={styles.entry_checkbox} type="checkbox" name="" id="" onChange={handleClick} checked={useSelector((state) => state.boat[model])} />
      )}
      <div className={styles.text_pair}>
        <div className={styles.title}>{title} </div>
        <div className={styles.description}>{description}</div>
        <div>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Ft</div>
      </div>
      <div className={styles.image_container}>{image ? <img src={image} className={styles.entry_image} alt="" /> : null}</div>
    </div>
  );
}
