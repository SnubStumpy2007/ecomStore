
import './index';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Routes path='/' />
          <Routes path='/cart' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
