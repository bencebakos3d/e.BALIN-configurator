import styles from './styles/Header.module.css';

function NavBar() {
  return (
    <div className={styles.icons_bar}>
      <div className={styles.nav_button}>
        <img src="./placeholder.jpg" alt="" />
      </div>

      <div className={styles.nav_button}>
        <img src="./placeholder.jpg" alt="" />
      </div>

      <div className={styles.nav_button}>
        <img src="./placeholder.jpg" alt="" />
      </div>

      <div className={styles.nav_button}>
        <img src="./placeholder.jpg" alt="" />
      </div>

      <div className={styles.nav_button}>
        <img src="./placeholder.jpg" alt="" />
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className={styles.menu_container}>
      <NavBar></NavBar>
    </div>
  );
}
