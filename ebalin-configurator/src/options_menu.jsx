import  styles from './styles/options_menu.module.css'

function NavBar(){

    return (
        <div className={styles.icons_bar}>
            <div className={styles.nav_button}>
                <img src="./placeholder.jpg" alt="" />
            </div>
        </div>
        
    );
}


export default function OptionsMenu(){
    return(
        <div className={styles.menu_container}>
            <NavBar></NavBar>
        </div>
    );
}