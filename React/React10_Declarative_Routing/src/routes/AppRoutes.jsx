import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Cart from '../pages/Cart';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>

  );
}

export default AppRoutes;
