import styles from './ConfigurationPanel.module.css';

import { useState } from 'react';

import boatBody from './icons/hajotest_icon.png';
import carpet from './icons/karpit_icon.png';
import electronics from './icons/elektronika_icon.png';
import accessories from './icons/kiegeszitok_icon.png';
import storage from './icons/tarolas_icon.png';
import arrow_left from './icons/arrow_left_icon.png';
import arrow_right from './icons/arrow_right_icon.png';
import bimini from './icons/bimini.png'
import checked_icon from './icons/checked_icon.png'

import entry_data from './icons/ebalin_tura.json'

function NavBar(handler) {
  return (
    <div className={styles.icons_bar}>
      <div className={styles.button_parent}>
        <div className={styles.nav_button} onClick={()=>handler.handler("body")}>
          <img className={styles.image_sizing} src={boatBody} alt="" />
        </div>
        <div className={styles.button_label}>
          Hajótest
        </div>
      </div>

      <div className={styles.button_parent}>
        <div className={styles.nav_button} onClick={()=>handler.handler("carpet")}>
          <img className={styles.image_sizing} src={carpet} alt="" />
        </div>
        <div className={styles.button_label}>
          Kárpit
        </div>
      </div>

      <div className={styles.button_parent}>
        <div className={styles.nav_button} onClick={()=>handler.handler("electronics")}>
          <img className={styles.image_sizing} src={electronics} alt="" />
        </div>
        <div className={styles.button_label}>
          Elektronika
        </div>
      </div>

      <div className={styles.button_parent}>
        <div className={styles.nav_button} onClick={()=>handler.handler("accessories")}>
          <img className={styles.image_sizing} src={accessories} alt="" />
        </div>
        <div className={styles.button_label}>
          Kiegészítők
        </div>
      </div>

      <div className={styles.button_parent}>
        <div className={styles.nav_button} onClick={()=>handler.handler("storage")}>
          <img className={styles.image_sizing} src={storage} alt="" />
        </div>
        <div className={styles.button_label}>
          Tárolás
        </div>
      </div>
    </div>
  );
}

function Entry({dataRef}){
  return(
    <div className={styles.entry_mainframe}>
      <div className={styles.checkbox_container}>
        <div className={styles.entry_checkbox}>
          <img src={checked_icon} className={styles.check_image} alt="" />
        </div>
      </div>
      <div className={styles.text_pair}>
        <div className={styles.entry_title}>
          {dataRef.title}
        </div>
        <div>
          {dataRef.details}
        </div>
      </div>
      <div className={styles.image_container}>
        <img src={bimini} className={styles.entry_image} alt="" />
      </div>
    </div>
  );
}

function generateMainPage(category_name){
  let filtered = new Array();

  for(let element of entry_data){
    if(element.category == category_name){
      filtered.push(element);
    }
  }

  return filtered.map((element,key)=>(
        <Entry dataRef={element} id={key}/>
  ))
}


export default function ConfigurationPanel() {
  const [entry_list,setList] = useState([]);
  const switchPage = (name)=>{
    console.log(entry_list);
    setList(entry_list.concat(generateMainPage(name)))
  };
  
  return (
    <div className={styles.menu_container}>
      <NavBar handler={switchPage}></NavBar>
      <div className={styles.main_frame}>
        <div className={styles.title_bar}>
          Meg kell irni a Scriptet
          <div className={styles.border_line}></div>
          </div>
        <div className={styles.entry_frame}>
          <div className={styles.arrow_button}>
            <img src={arrow_left} className={styles.arrow_image} alt="" />
          </div>
          <div className={styles.content_zone}>
            {entry_list}
          </div>
          <div className={styles.arrow_button}>
            <img className={styles.arrow_image} src={arrow_right} alt="" />
          </div>
        </div>
        <div className={styles.page_footer}>
          <div className={styles.round_index} onClick={()=>switchPage("body")}></div>
          <div className={styles.round_index} onClick={()=>switchPage("carpet")}></div>
          <div className={styles.round_index} onClick={()=>switchPage("electronics")}></div>
          <div className={styles.round_index} onClick={()=>switchPage("accessories")}></div>
          <div className={styles.round_index} onClick={()=>switchPage("storage")}></div>
        </div>
      </div>
    </div>
  );
}
