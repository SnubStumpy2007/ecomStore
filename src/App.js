import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
          <Routes path='/' />
          <Routes path='/cart' />
      </Router>
    </div>
  );
}

export default App;
