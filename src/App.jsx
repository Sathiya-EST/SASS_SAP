
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Main from './pages/main'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/footer' element={<Footer />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
