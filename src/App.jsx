import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import style from './App.css';
import Alert from './components/Alert/Alert';
import BoatDisplay from './components/BoatDisplay/BoatDisplay.jsx';
import ConfigurationPanel from './components/ConfigurationPanel/ConfigurationPanel';
import { useSelector } from 'react-redux';
import Tura from './Tura';
import Horgasz from './Horgasz';

function App() {
  return (
    <Router>
      <div className="view_container">
        <Routes>
          <Route exact path="/*" element={<Tura />} />
          <Route path="/horgasz/*" element={<Horgasz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
