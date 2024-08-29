import './SignIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const handleLogin = () => {
        let e = localStorage.getItem("email");
        let p = localStorage.getItem("password");
        if (email === e && password === p) {
            alert("Login successfully !!")
            setLogin(true)
        }
        else {
            alert("username password incorrect !!")
        }
    }

    return (
        <div class="wrapper bg-white">
            <div class="h2 text-center">LOGIN HERE</div>
            <div class="h4 text-muted text-center pt-2">Enter your login details</div>
            <form class="pt-3" >
                <div class="form-group py-2">
                    <div class="input-field"> <span class="far fa-user p-2"></span> <input type="text" placeholder="Username or Email Address" required class="" onChange={(e) => { setEmail(e.target.value) }} /> </div>
                </div>
                <div class="form-group py-1 pb-2">
                    <div class="input-field"> <span class="fas fa-lock p-2"></span> <input type="text" placeholder="Enter your Password" required class="" onChange={(e) => { setPassword(e.target.value) }} /> <button class="btn bg-white text-muted"> <span class="far fa-eye-slash"></span> </button> </div>
                </div>
                <div class="d-flex align-items-start">
                    <div class="remember"> <label class="option text-muted"> Remember me <input type="radio" name="radio" /> <span class="checkmark"></span> </label> </div>
                    <div class="ml-auto"> <a href="#" id="forgot">Forgot Password?</a> </div>
                </div> <button class="btn btn-block text-center my-3" onClick={handleLogin} >Log in</button>
                <div class="text-center pt-3 text-muted">Not a member? <NavLink to="Sign_Up/SignUp.jsx">Sign_Up</NavLink></div>
            </form>
        </div>
    )
}

export default SignIn