import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ lan, setEnglish, isLoggedin, mainusername }) {
	const handleNumber = (event) => {
		event.target.value === "eng" ? setEnglish(true) : setEnglish(false);
	};

	function clickMe() {
		console.log("worked");
		var element = document.getElementById("element");
		element.classList.toggle("move");
	}

	console.log(mainusername);
	return (
		<div class="homepage">
			<div class="navbar">
				<div class="logo">
					<Link to="/"> HILL HOTEL</Link>
				</div>
				<div class="content">
					<ul>
						<li> {lan ? "ABOUT US" : "Nipa wa"}</li>
						<li> {lan ? "CONTACT" : "Pe wa"} </li>
						<li>FAQ</li>
						<li>
							<select onChange={handleNumber} name="lan" id="">
								<option value="eng">ENG</option>
								<option value="yoruba">YOR</option>
							</select>
						</li>
					</ul>
				</div>
				{isLoggedin ? (
					<div className="loginrush">
						<div className="loginrushpic"></div>
						<div className="loginname">{mainusername}</div>
						<div className="loginmoney">100</div>
						<div className="logout">
							<a href="/login">Logout</a>
						</div>
					</div>
				) : (
					<>
						<div class="loginsignin">
							<div class="login">
								<a href="/login">LOGIN</a>
							</div>
							<div class="login">
								<a href="/register">SIGNIN</a>
							</div>
						</div>
						<div onClick={clickMe} id="button" class="icon">
							<i class="fas fa-bars"></i>
						</div>
					</>
				)}
			</div>

			<div class="hiddennav" id="element">
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="#aboutus"> About Us</a>
					</li>
					<li>
						<a href="/login">Login</a>
					</li>
					<li>
						<a href="/signin">Signin</a>
					</li>
					<li>
						<select onChange={handleNumber} name="lan" id="">
							<option value="eng">ENG</option>
							<option value="yoruba">YOR</option>
						</select>
					</li>
					<li onClick={clickMe}>Close</li>
				</ul>
			</div>
		</div>
	);
}
