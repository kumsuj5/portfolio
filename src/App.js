import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Portfolio from './component/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from "react-router-dom";
import ContactView from './component/ContactView';
import Footer from './component/Footer';
import TopNavBar from './component/NavBar/TopNavBar';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/about' element={<About />}/>
        <Route  path='/contact' element={<Contact />}/>
        <Route  path='/portfolio' element={<Portfolio />}/>
      </Routes> */}
      <TopNavBar />
      <Home />
      {/* <HeaderImage /> */}
      <About />
     
      <Portfolio/>
      <ContactView />
      <Footer />
    </div>
  );
}

export default App;
