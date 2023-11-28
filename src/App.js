import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
          <Routes path='/' element={Shop} />
          <Routes path='/cart' element={Cart} />
      </Router>
    </div>
  );
}

export default App;
