import Footer from './Components/FOOTER/Footer';
import Main_bottom from './Components/Main/Main_bottom';
import Main_cards from './Components/Main/Main_cards';
import Main_hero from './Components/Main/Main_hero';
import Navbar_top from './Components/Navbar/Navbar-top';

function App() {
  return (
    <div className="App">
      <Navbar_top/>
      <Main_hero/>
      <Main_cards/>
      <Main_bottom/>
      <Footer/>
    </div>
  );
}

export default App;
