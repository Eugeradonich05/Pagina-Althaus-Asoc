import './Screens/Benefits'
import './Screens/Contact'
import './Screens/Home'
import './Screens/HowWeWork'
import './Screens/Services'
import Home from './Screens/Home';
import Services from './Screens/Services';
import HowWeWork from './Screens/HowWeWork';
import Benefits from './Screens/Benefits';
import Contact from './Screens/Contact';
import NavBar from './Components/NavBar';
import Footer from './Screens/Footer'

function App() {
  return  <div className="App">
      <NavBar/>
      <Home/>
      <Services/>
      <HowWeWork/>
      <Benefits/>
      <Contact/>
      <Footer/>
  </div>;
}

export default App;
