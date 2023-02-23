import style from './App.css';
import BoatDisplay from './components/BoatDisplay/BoatDisplay.jsx.js';
import Header from './components/Header/Header.jsx.js';

function App() {
  return (
    <div className="view_container">
      <BoatDisplay></BoatDisplay>
      <Header></Header>
    </div>
  );
}

export default App;
