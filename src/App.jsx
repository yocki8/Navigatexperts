import './App.css';
import Footer from './Components/LandingPage/Footer/footer';
import { BsGithub } from "react-icons/bs";
import Search from './Components/Search/search';
import LandingPage from './Components/LandingPage/Header/landingpage';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h1>Navigate<span>Xperts</span></h1>
        <a href='https://github.com/anshu189' rel='noreferrer' target='_blank' className='github-icon-a'>
          <BsGithub className='navbar-icon' />
        </a>
      </div>
      {/* Define all the routes here then use it in application anywhere. */}
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}></Route>  
          <Route exact path="/search" element={<Search/>}/>
        </Routes>
      </Router>
    <Footer/>
    </div>
  );
}

export default App;
