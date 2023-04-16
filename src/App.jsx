import style from './App.css';
import Alert from './components/Alert/Alert';
import BoatDisplay from './components/BoatDisplay/BoatDisplay.jsx';
import ConfigurationPanel from './components/ConfigurationPanel/ConfigurationPanel';
import { useSelector } from 'react-redux';

function App() {
  return (
    <div className="view_container">
      {useSelector((state) => state.tura.showAlert) ? <Alert /> : null}
      <BoatDisplay></BoatDisplay>
      <ConfigurationPanel></ConfigurationPanel>
    </div>
  );
}

export default App;
