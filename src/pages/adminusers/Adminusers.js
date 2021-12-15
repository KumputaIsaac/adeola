import Left from "../../component/left/Left";
import "./adminusers.css";

export default function Adminusers({ lan }) {
	return (
		<div>
			<div class="hoteladeola">
				<div class="hotel">
					<p>Hotel</p>
					<p>Admin Page</p>
				</div>
				<div class="leftright">
					<div class="left">
						<div class="nav">
							<Left />
						</div>
					</div>
					<div class="right">
						<form class="searchusername">
							<input type="text" placeholder="Search Username" />
							<button>Submit</button>
						</form>
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
		</div>
	);
}
