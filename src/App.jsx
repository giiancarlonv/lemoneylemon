import { React, useState } from 'react'
import { Homepage } from './components/Homepage'
import './styles/styles.css'
import { BrowserRouter, Outlet, Route, Routes, } from 'react-router-dom'
import sunIcon from './assets/icons/icon-sun.svg';
import moonIcon from './assets/icons/icon-moon.svg';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ImagePreview } from './hooks/ImagePreview'
import { LandingPage } from './components/LandingPage';
import { Errorpage } from './components/Errorpage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = (e) =>{
    setDarkMode(current => !current);
  }
  const bodyBG = document.body;
  darkMode ? bodyBG.classList.add('darkmode') : bodyBG.classList.remove('darkmode');

  return (
    <> 
      <BrowserRouter>
        <Navbar className={darkMode ? 'darkmode' : ''} onClick={handleClick} image={darkMode ? sunIcon : moonIcon}/>
          <Routes>
            <Route path='/lemoneylemon/' element={<Homepage  />}/> 
              <Route path='/lemoneylemon/:id' element={<ImagePreview className={darkMode ? 'darkmode' : ''} />} />
            <Route path="*" element={<Errorpage className={darkMode ? 'darkmode' : ''} />} />
          </Routes>
          <Footer className={darkMode?'footer dark':'footer'}/>
      </BrowserRouter>
    </>
  )
}
export default App
