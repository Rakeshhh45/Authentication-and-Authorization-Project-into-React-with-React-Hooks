import { NavLink } from 'react-router-dom';
import "./Navbar"
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar(){
    return(
        <header>
    <div class="container">
      <h1 class="logo"></h1>

      <nav>
        <ul>
          <li><NavLink to="/contect">ContectUs</NavLink></li>
          <li><NavLink to="/about">AboutUs</NavLink></li>
          <li><NavLink to="/signin">SignIn</NavLink></li>
          <li><NavLink to="/signup">SignUp</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
    )
}

export default Navbar