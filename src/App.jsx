import { useState } from 'react'
import { Homepage } from './components/Homepage'
import './styles/styles.css'
import {Imagepage} from './components/Imagepage'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path='/lemoneylemon' element={<Homepage />}/>
              <Route path='/imagepage/:id' element={<Imagepage />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
