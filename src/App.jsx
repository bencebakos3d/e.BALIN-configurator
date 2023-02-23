import style from './App.css';
import BoatDisplay from './components/BoatDisplay/BoatDisplay.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <div className="view_container">
      <BoatDisplay></BoatDisplay>
      <Header></Header>
    </div>
  );
}

export default App;
