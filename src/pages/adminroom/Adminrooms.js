import Left from "../../component/left/Left";
import "./adminrooms.css";

export default function Adminrooms() {
	return (
		<div className="adminroom">
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
						<div class="homepage">
							<div class="picturexela">
								<div class="pictext">
									<div class="pic">
										<img src="../images/room1.jpg" alt="" />
									</div>
									<p>ROOM 1</p>
									<p>Hill Hotel</p>
									<p>Available</p>
								</div>

								<div class="pictext">
									<div class="pic">
										<img src="../images/room2.jpg" alt="" />
									</div>
									<p>ROOM 2</p>
									<p>Hill Hotel</p>
									<p>Available</p>
								</div>

								<div class="pictext">
									<div class="pic">
										<img src="../images/room3.jpg" alt="" />
									</div>
									<p>ROOM 3</p>
									<p>Hill Hotel</p>
									<p>Available</p>
								</div>
							</div>

							<div class="picturexela" style={{ marginTop: "20px" }}>
								<div class="pictext">
									<div class="pic">
										<img src="../images/room4.jpg" alt="" />
									</div>
									<p>ROOM 4</p>
									<p>Hill Hotel</p>
									<p>Available</p>
								</div>

								<div class="pictext">
									<div class="pic">
										<img src="../images/room5.png" alt="" />
									</div>
									<p>ROOM 5</p>
									<p>Hill Hotel</p>
									<p>Available</p>
								</div>

								<div class="pictext">
									<div class="pic">
										<img src="../images/room1.jpg" alt="" />
									</div>
									<p>ROOM 6</p>
									<p>Hill Hotel</p>
									<p>Available</p>
								</div>
							</div>

							<div class="picturexela" style={{ marginTop: "20px" }}>
								<div class="pictext">
									<div class="pic">
										<img src="../images/room1.jpg" alt="" />
									</div>
									<p>ROOM 7</p>
									<p>Hill Hotel</p>
									<p>Available</p>
								</div>

								<div class="pictext">
									<div class="pic">
										<img src="../images/room3.jpg" alt="" />
									</div>
									<p>ROOM 8</p>
									<p>Hill Hotel</p>
									<p>Available</p>
								</div>

								<div class="pictext">
									<div class="pic">
										<img src="../images/room5.png" alt="" />
									</div>
									<p>ROOM 9</p>
									<p>Hill Hotel</p>
									<p>Available</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
