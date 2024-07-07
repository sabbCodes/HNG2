import './app.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
