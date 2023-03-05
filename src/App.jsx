import style from './App.css';
import BoatDisplay from './components/BoatDisplay/BoatDisplay.jsx';
import ConfigurationPanel from './components/ConfigurationPanel/ConfigurationPanel';

function App() {
  return (
    <div className="view_container">
      <BoatDisplay></BoatDisplay>
      <ConfigurationPanel></ConfigurationPanel>
      <img src="images/bottom_gradient.png" className="bottom-gradient" />
    </div>
  );
}

export default App;
