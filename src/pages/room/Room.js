import "./room.css";
import Result2 from "../../component/result/Result2";

export default function Room({
	roomno,
	hotelrooms,
	lan,
	isLoggedin,
	mainusername,
}) {
	const showresult = () => {
		if (isLoggedin) {
			let cover = document.querySelector(".cover");
			cover.classList.remove("none");
		} else {
			alert("You're not logged in");
		}
	};
	return (
		<div>
			<div class="room">
				<div class="roompic">
					<img src={hotelrooms[roomno].img} alt="" />
				</div>

				<div class="ifegrand">
					<div class="talk">
						<p>Hills Grand Hotel</p>
						<p>Ibadan road, Ile-Ife, Osun State</p>
					</div>
					<div class="shape">
						<div class="book">
							<div class="four" onClick={showresult}>
								Book a room
							</div>
							<div class="four">See all pictures</div>
						</div>
						<div class="book">
							<div class="four">Share</div>
							<div class="four">Directions</div>
						</div>
					</div>
				</div>

				<div class="checkhotel">
					<div class="check">
						<div class="chacn">
							<p>Input card details</p>
							<div class="button">Add money</div>
						</div>
						<div class="inputcheck">
							<input placeholder="Enter Card No" maxLength="11" type="number" />
							<input placeholder="" type="number" />
						</div>
					</div>
					<div class="hotel"></div>
				</div>
			</div>

			<div class="homepage">
				<div class="footer">
					<div class="contactus">
						<p>Contact Us</p>
						<li>Twitter</li>
						<li>Facebook</li>
						<li>Instagram</li>
						<li>+234 802 625 1651</li>
						<li>Hotel@info.com</li>
					</div>
					<div class="contactus">
						<p>Company</p>
						<li>About us</li>
						<li>Contact us</li>
						<li>Address</li>
					</div>
					<div class="contactus">
						<p>Help center</p>
						<li>Condition</li>
						<li>Privacy</li>
						<li>Quality Policy</li>
					</div>
					<div class="contactus">
						<p>Partner with Us</p>
						<li>Hotel Partner</li>
						<li>Others</li>
					</div>
				</div>
			</div>
			<Result2 mainusername={mainusername} lan={lan} />
		</div>
	);
}
