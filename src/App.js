import './app.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<ProductDetails />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  );
}

export default App;
