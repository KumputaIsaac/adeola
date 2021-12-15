import { Link } from "react-router-dom";
import Left from "../../component/left/Left";
import "./adminview.css";

export default function Adminview() {
	return (
		<div class="hoteladeola">
			<div class="hotel">
				<p>Hotel</p>
				<p>
					Admin Page
					<span>
						<Link to="/login">Logout?</Link>
					</span>
				</p>
			</div>
			<div class="leftright">
				<div class="left">
					<div class="nav">
						<Left />
					</div>
				</div>
				<div class="right">
					<div class="numbers">
						<div class="total">
							<div></div>
							<div>
								<p>Total number of users</p>
								<p>10,000</p>
							</div>
						</div>
						<div class="total">
							<div></div>
							<div>
								<p>Registered Hotels</p>
								<p>3,000</p>
							</div>
						</div>
						<div class="total">
							<div></div>
							<div>
								<p>Bookings</p>
								<p>1,000</p>
							</div>
						</div>
					</div>
					<div class="useractivity">
						<p>Current User Activity</p>
						<table>
							<tr>
								<th>Username</th>
								<th>Email</th>
								<th>Phone Number</th>
								<th>Activity</th>
							</tr>
							<tr>
								<td>Ola Adedamola</td>
								<td>olaadedamola...</td>
								<td>+2348062764370</td>
								<td>+Checked In</td>
							</tr>
							<tr>
								<td>Ola Adedamola</td>
								<td>olaadedamola...</td>
								<td>+2348062764370</td>
								<td>+Checked In</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
