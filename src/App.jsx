import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Symbols from './pages/Symbols'
import LoadingImage from './components/LoadingImage'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import { LoadingContext } from './context/Context'
import CategoryProductList from './components/ProductList'
import CategoryNecklaces from './pages/CategoryNecklaces'
import CategoryDreamcatchers from './pages/CategoryDreamcatchers'
import CategoryJewelry from './pages/CategoryJewelry'
import CategoryDecor from './pages/CategoryDecor'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
    <LoadingContext.Provider value={{loading, setLoading}}>
        {loading ? (
          <LoadingImage/>
        ) : (

        <BrowserRouter>
          <Header>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/shop' element={<Shop/>} />
              <Route path='/shop/category/jewelry' element={ <CategoryJewelry/>} />
              <Route path='/shop/category/jewelry/necklaces' element={ <CategoryNecklaces/>} />
              <Route path='/shop/category/decor' element={ <CategoryDecor/>} />
              <Route path='/shop/category/decor/dreamcatchers' element={ <CategoryDreamcatchers/>} />
              <Route path='/symbols' element={<Symbols/>} />
            </Routes>
          </Header>
        </BrowserRouter>

        )}
    </LoadingContext.Provider>
    </>
  )
}

export default App