import "./receipt.css";

export default function Receipt() {
	return (
		<div>
			<div class="login">
				<div class="logincontent">
					<p>HIL HOTELS</p>
					<p>Login to your Account</p>

					<form class="inputspace">
						<input type="email" value placeholder="Email Address" />
						<input type="password" placeholder="password" />

						<p>
							<a href="/adminview">Forgot Password</a>
						</p>
						<button type="submit" class="loginbox">
							Login
						</button>
						<p>
							Don't have an account? <a href="/register">Sign Up</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
