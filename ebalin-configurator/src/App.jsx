import mainstyle from './styles/app.module.css'
import Boat from './boat.jsx'
import  OptionsMenu from './options_menu.jsx'


function App() {

  return (
    <div className={mainstyle.view_container}>
      <Boat></Boat>
      <OptionsMenu></OptionsMenu>
    </div>
  )
}

export default App
