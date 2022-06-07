

import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<ItemListContainer greeting="Fans The Office " />} />
          <Route path='/category/:id' element={<ItemListContainer greeting="Fans The Office " />} />
          <Route path='/item/:id' element={<ItemDetailContainer greeting="Fans The Office"/>} /> 
          <Route path='/cart' element={<Cart greeting="Fans The Office"/>} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
