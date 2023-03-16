import styles from './Entry.module.css';
import checked_icon from './checked_icon.png';

export default function Entry({ handleCheck, title, description, image }) {
  return (
    <div className={styles.entry_mainframe}>
      <div className={styles.entry_checkbox} onClick={handleCheck}>
        <img src={checked_icon} className={styles.check_image} alt="" />
      </div>
      <div className={styles.text_pair}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.image_container}>{image ? <img src={image} className={styles.entry_image} alt="" /> : null}</div>
    </div>
  );
}
