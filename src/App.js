import './App.css';
import { useState } from 'react';

function App() {
  const [currentView, setCurrentView] = useState(0);
  const handleChange = (event) => {
    setCurrentView(event.target.checked);
  };

  return (
    <div>
      <div className="configurator-wrapper">
        <div className="configurator-left">
          <div className="sidebar">
            <button onClick={() => setCurrentView(currentView - 1)} className="btn-move-left"></button>
          </div>
          <div className="img-wrapper">
            <img id="img-base" src={`data/body_000${currentView}.png`} alt=""></img>
          </div>
          <div className="sidebar">
            <button onClick={() => setCurrentView(currentView + 1)} className="btn-move-right"></button>
          </div>
        </div>
        <div className="configurator-right">
          <div className="configurator-header">
            <span>e.BALIN Túra</span>
          </div>
          <div className="dropdown">
            <div className="dropdown-header unselectable" onclick="toggleDropdown('dropdown-hajotest')">
              <span>Hajótest</span>
              <img id="dropdown-hajotest-icon" src="./data/icons/dropdown-up.png" alt=""></img>
            </div>
            <div className="dropdown-menu" id="dropdown-hajotest">
              <div className="option" databaseID="19">
                <span>Bimini</span>
                <input type="checkbox" id="bimini-input" partName="bimini"></input>
              </div>
              <div className="option" databaseID="37">
                <span>Orr korlát</span>
                <input type="checkbox" id="orrkorlat-input"></input>
              </div>
              <div className="option" databaseID="36">
                <span>Vezetőülés háttámla</span>
                <input type="checkbox" id="vezetoules-input"></input>
              </div>
              <div className="option" databaseID="42">
                <span>Kormányállás kárpit</span>
                <input type="checkbox" id="vezetoules-karpit-input"></input>
              </div>
              <div className="option" databaseID="41">
                <span>Orr korlát kárpit</span>
                <input type="checkbox" id="hatsoules-input"></input>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropdown-header unselectable" onclick="toggleDropdown('dropdown-elektronika')">
              <span>Elektronika</span>
              <img id="dropdown-elektronika-icon" src="icons/dropdown-up.png" alt=""></img>
            </div>
            <div className="dropdown-menu" id="dropdown-elektronika">
              <div className="option" databaseID="14">
                <span>Elektromos kiépítés</span>
                <input type="checkbox" id="bimini-input"></input>
              </div>
              <div className="option" databaseID="15">
                <span>360° LED helyzetjelző lámpa</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="35">
                <span>Süllyesztett akkutartó</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="16">
                <span>Azonosító chip</span>
                <input type="checkbox"></input>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropdown-header unselectable" onclick="toggleDropdown('dropdown-kiegeszitok')">
              <span>Kiegészítők</span>
              <img id="dropdown-kiegeszitok-icon" src="icons/dropdown-up.png" alt=""></img>
            </div>
            <div className="dropdown-menu" id="dropdown-kiegeszitok">
              <div className="option" databaseID="12">
                <span>Evező pár</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="13">
                <span>Pádli evező</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="24">
                <span>CANNON horgászbot tartó</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="25">
                <span>CANNON aljzat</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="26">
                <span>Telefontartó</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="27">
                <span>Hőszigetelt italtartó</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="28">
                <span>Névtábla</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="29">
                <span>Orr feliratozás</span>
                <input type="checkbox"></input>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropdown-header unselectable" onclick="toggleDropdown('dropdown-tarolas')">
              <span>Tárolás, szállítás</span>
              <img id="dropdown-tarolas-icon" src="icons/dropdown-up.png" alt=""></img>
            </div>
            <div className="dropdown-menu" id="dropdown-tarolas">
              <div className="option" databaseID="17">
                <span>Tároló ponyva</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="20">
                <span>Összecsukható horgony</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="21">
                <span>Horgony kötél</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="22">
                <span>Kikötőkötél</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="23">
                <span>Mericske</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="30">
                <span>Sólyakocsi</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="32">
                <span>Sólyakocsi 2 bolygóval</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="33">
                <span>Sólyakocsi rozsdamentes</span>
                <input type="checkbox"></input>
              </div>
              <div className="option" databaseID="31">
                <span>Vonófej</span>
                <input type="checkbox"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
