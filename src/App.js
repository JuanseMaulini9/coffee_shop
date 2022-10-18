import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>)
}

export default App;
