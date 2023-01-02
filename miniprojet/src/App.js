import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
  import './App.css';
  import Home from './Home';
  import Contact from './Contact';
  import Blog from './Blog';
 
  
  function App() {
  return (
    <div className="App">
    <Router>
     
    <nav>
       <Link className="App-link" to="/"> Home Page &nbsp;&nbsp;&nbsp; </Link> 
       <Link className="App-link" to="contact"> Contacts &nbsp;&nbsp;&nbsp;&nbsp; </Link>
       <Link className="App-link" to="blog"> Blog </Link>
       </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
        </Routes>

        </Router>
    </div>
  );
  }
  
  export default App;
  



/*
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='rn.jpg' className="App-logo" alt="logo" />
        <p>
          WELCOME to RAYENE & NOUR Single Page Application
        </p>
        <br></br>
        
        <a className="App-link" href="" target="_blank" > Contact </a> 
        <a className="App-link" href="" target="_blank" > Blog </a>
      </header>
    </div>
  );
}

export default App;
*/
