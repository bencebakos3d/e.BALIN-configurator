import styles from './Option.module.css';
import checked_icon from './checked_icon.png';

export default function Option({ handleCheck, title, description, image }) {
  return (
    <div className={styles.entry_mainframe}>
      <div className={styles.checkbox_container}>
        <div className={styles.entry_checkbox} onClick={handleCheck}>
          <img src={checked_icon} className={styles.check_image} alt="" />
        </div>
      </div>
      <div className={styles.text_pair}>
        <div className={styles.entry_title}>{title}</div>
        <div>{description}</div>
      </div>

      {image ? <img src={image} className={styles.entry_image} alt="" /> : null}
    </div>
  );
}
