import "./register.css";

export default function Login() {
	return (
		<div class="login">
			<div class="logincontent">
				<p>HILL HOTEL</p>
				<p>Create an Account to continue</p>

				<div class="inputspace">
					<div class="firstlast">
						<input type="text" placeholder="First Name" />
						<input type="text" placeholder="Last Name" />
					</div>
					<input type="email" placeholder="Email" />
					<input type="number" placeholder="Phone Number" />
					<input type="password" placeholder="Create Password" />

					<div class="loginbox try">
						<a href="/findhotel">Sign Up</a>
					</div>
					<p>
						Already have an Account? <a href="/login">Login</a>
					</p>
				</div>
			</div>
		</div>
	);
}
