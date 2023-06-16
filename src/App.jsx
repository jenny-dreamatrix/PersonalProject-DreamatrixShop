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