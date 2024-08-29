import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Components/About us/AboutUs';
import  ContectUs  from './Components/Contect_us/ContectUs';
import SignIn from './Components/Sign_in/SignIn';
import SignUp from './Components/Sign_Up/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/Navbar' element={<Navbar />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contect' element={<ContectUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
