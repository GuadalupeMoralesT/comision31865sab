import React, { 
  // useState 
  useState,
  createContext 
} from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'


function App() {
  // const [page, setPage] = useState('list')
  // console.log(page)
  return (
    <div className="App" >
      {/* <NavBar />
      <div>
        <button onClick={() => setPage('list')}>List</button>
        <button onClick={() => setPage('detail')}>Detail</button>
      </div>
      {page === 'list' && <ItemListContainer greeting='Hola Coders' />}
      {page === 'detail' && <ItemDetailContainer />} 
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>*/}
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<h1>CART</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}
export default App;