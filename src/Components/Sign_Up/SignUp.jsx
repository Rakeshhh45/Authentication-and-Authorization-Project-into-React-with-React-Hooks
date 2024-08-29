import './SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { json, NavLink } from 'react-router-dom';


function SignUp() {

	const [email, setEmail] = useState("");

	const [fullname, setFullname] = useState();

	const [password, setPassword] = useState();

	const [cpassword, setCpassword] = useState();

	const [signup, setSignup] = useState(false);

	const handleClick = () => {

		if (email && fullname && password && cpassword) {
			localStorage.setItem("email", email)
			localStorage.setItem("fullname", fullname)
			localStorage.setItem("password", password)
			localStorage.setItem("cpassword", cpassword)
			localStorage.setItem("signup", email)
			alert("Account is created successfully !!")
			setSignup(true)

		}
	}

	return (
		<div class="wrapper bg-white">
			<div class="h2 text-center">Ragistration HERE</div>
			<div class="h4 text-muted text-center pt-2">Enter your Ragistration details</div>
			<form class="pt-3">
				<div class="form-group py-2">
					<div class="input-field"> <span class="far fa-user p-2"></span> <input type="text" name='email' placeholder="Username or Email Address" required class="" onChange={(e) => { setEmail(e.target.value) }} /> </div>
				</div>
				<div class="form-group py-2">
					<div class="input-field"> <span class="far fa-user p-2"></span> <input type="text" name='fullname' placeholder="FullName" required class="" onChange={(e) => { setFullname(e.target.value) }} /> </div>
				</div>
				<div class="form-group py-1 pb-2">
					<div class="input-field"> <span class="fas fa-lock p-2"></span> <input type="text" name='password' placeholder="Enter your Password" required class="" onChange={(e) => { setPassword(e.target.value) }} /> <button class="btn bg-white text-muted"> <span class="far fa-eye-slash"></span> </button> </div>
				</div>
				<div class="form-group py-1 pb-2">
					<div class="input-field"> <span class="fas fa-lock p-2"></span> <input type="text" name='confirmpassword' placeholder="Enter your Confirm Password" required class="" onChange={(e) => { setCpassword(e.target.value) }} /> <button class="btn bg-white text-muted"> <span class="far fa-eye-slash"></span> </button> </div>
				</div>
				<div class="d-flex align-items-start">
					<div class="remember"> <label class="option text-muted"> Remember me <input type="radio" name="radio" /> <span class="checkmark"></span> </label> </div>
					<div class="ml-auto"> <a href="#" id="forgot">Forgot Password?</a> </div>
				</div>
				<button class="btn btn-block text-center my-3" onClick={() => handleClick()}>Sign up</button>
				<div class="text-center pt-3 text-muted">Already Have An Account? <NavLink to="Sign_Up/SignUp.jsx">Sign_In</NavLink></div>
			</form>
		</div>

	)
}

export default SignUp