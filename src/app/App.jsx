import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

import Home from '../pages/Home'
import VueCurrentEmployees from '../pages/VueCurrentEmployees'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/employee-list' element={<VueCurrentEmployees />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
