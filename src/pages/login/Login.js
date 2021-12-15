import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

export default function Login({ setisLoggedin, setmainusername }) {
	const history = useHistory();

	const [username, setusername] = useState("");
	const [password, setpassword] = useState("");
	const [isadmin, setisadmin] = useState(false);

	const admindetails = {
		email: "admin@gmail.com",
		password: "admin",
	};

	const handlechange = (e) => {
		setusername(e.target.value);
	};
	const handlechangepassword = (e) => {
		setpassword(e.target.value);
	};
	const handlechangeadmin = (e) => {
		e.target.value === "admin" ? setisadmin(true) : setisadmin(false);
	};

	const handlesubmit = (e) => {
		e.preventDefault();
		if (
			username === admindetails.email &&
			password === admindetails.password &&
			isadmin === true
		) {
			console.log("correct");
			history.push("/adminview");
		} else if (isadmin === false) {
			history.push("/findhotel");
			setisLoggedin(true);
			setmainusername(username);
		}
	};

	return (
		<div class="login">
			<div class="logincontent">
				<p>HIL HOTELS</p>
				<p>Login to your Account</p>

				<form onSubmit={handlesubmit} class="inputspace">
					<input
						type="email"
						required
						onChange={handlechange}
						placeholder="Email Address"
					/>
					<input
						type="password"
						onChange={handlechangepassword}
						required
						placeholder="password"
					/>
					<select onChange={handlechangeadmin} name="" id="">
						<option value="visitor">Visitor</option>
						<option value="admin">Admin</option>
					</select>
					<p>Forgot Password</p>
					<button type="submit" class="loginbox">
						Login
					</button>
					<p>
						Don't have an account? <a href="/register">Sign Up</a>
					</p>
				</form>
			</div>
		</div>
	);
}
