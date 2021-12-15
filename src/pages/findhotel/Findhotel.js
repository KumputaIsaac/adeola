import "./findhotel.css";
import { Link } from "react-router-dom";

export default function Findhotel({ lan, setroomno, hotelrooms }) {
	return (
		<div>
			<div class="homepage"></div>
			<div class="findhotel">
				<div class="inputcheck">
					<div class="firstinput">
						<input type="text" value="ile-ife" placeholder="ile-ife" />
					</div>
					<div class="firstinput">
						<input type="date" placeholder="enter date" />
					</div>
					<div class="firstinput">
						<div class="checkbook">
							<div class="check">
								<a href="/room"> {lan ? "Check Hotel" : "ṣayẹwo yara"} </a>
							</div>
							<div class="check"> {lan ? "Book Hotel" : "Gba yara"} </div>
						</div>
					</div>
				</div>

				{lan ? (
					<>
						<h1> Rooms available in "Ile-Ife"</h1>
						<div class="homepage">
							<div class="picturexela">
								<div class="pictext">
									<Link onClick={() => setroomno(0)} to="/room">
										<div class="pic">
											<img src={hotelrooms[0].img} alt="" />
										</div>
										<p>Room 1</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>

								<div class="pictext">
									<Link onClick={() => setroomno(2)} to="/room">
										<div class="pic">
											<img src={hotelrooms[2].img} alt="" />
										</div>
										<p>Room 2</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>

								<div class="pictext">
									<Link onClick={() => setroomno(3)} to="/room">
										<div class="pic">
											<img src={hotelrooms[3].img} alt="" />
										</div>
										<p>Room 3</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>
							</div>

							<div class="picturexela" style={{ marginTop: "20px" }}>
								<div class="pictext">
									<Link onClick={() => setroomno(4)} to="/room">
										<div class="pic">
											<img src={hotelrooms[4].img} alt="" />
										</div>
										<p>Room 4</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>

								<div class="pictext">
									<Link onClick={() => setroomno(5)} to="/room">
										<div class="pic">
											<img src={hotelrooms[5].img} alt="" />
										</div>
										<p>Room 5</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>

								<div class="pictext">
									<Link onClick={() => setroomno(1)} to="/room">
										<div class="pic">
											<img src={hotelrooms[1].img} alt="" />
										</div>
										<p>Room 6</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>
							</div>

							<div class="picturexela" style={{ marginTop: "20px" }}>
								<div class="pictext">
									<Link onClick={() => setroomno(4)} to="/room">
										<div class="pic">
											<img src={hotelrooms[4].img} alt="" />
										</div>
										<p>Room 7</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>

								<div class="pictext">
									<Link onClick={() => setroomno(2)} to="/room">
										<div class="pic">
											<img src={hotelrooms[2].img} alt="" />
										</div>
										<p>Room 8</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>

								<div class="pictext">
									<Link onClick={() => setroomno(0)} to="/room">
										<div class="pic">
											<img src={hotelrooms[0].img} alt="" />
										</div>
										<p>Room 9</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>
							</div>

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
					</>
				) : (
					<>
						<h1>Awọn yara ti o wa ni "Ile-Ife"</h1>
						<div class="homepage">
							<div class="picturexela">
								<div class="pictext">
									<Link onClick={() => setroomno(0)} to="/room">
										<div class="pic">
											<img src={hotelrooms[0].img} alt="" />
										</div>
										<p>Yara akoko</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>

								<div class="pictext">
									<Link onClick={() => setroomno(2)} to="/room">
										<div class="pic">
											<img src={hotelrooms[2].img} alt="" />
										</div>
										<p>Yara ikeji</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>

								<div class="pictext">
									<Link onClick={() => setroomno(3)} to="/room">
										<div class="pic">
											<img src={hotelrooms[3].img} alt="" />
										</div>
										<p>Yara ikẹta</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>
							</div>

							<div class="picturexela" style={{ marginTop: "20px" }}>
								<div class="pictext">
									<Link onClick={() => setroomno(4)} to="/room">
										<div class="pic">
											<img src={hotelrooms[4].img} alt="" />
										</div>
										<p>Yara ikẹrin</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>

								<div class="pictext">
									<Link onClick={() => setroomno(5)} to="/room">
										<div class="pic">
											<img src={hotelrooms[5].img} alt="" />
										</div>
										<p>Yara ikarun</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>

								<div class="pictext">
									<Link onClick={() => setroomno(1)} to="/room">
										<div class="pic">
											<img src={hotelrooms[1].img} alt="" />
										</div>
										<p>Yara ikẹfa</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>
							</div>

							<div class="picturexela" style={{ marginTop: "20px" }}>
								<div class="pictext">
									<Link onClick={() => setroomno(4)} to="/room">
										<div class="pic">
											<img src={hotelrooms[4].img} alt="" />
										</div>
										<p>Yara ikeje</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>

								<div class="pictext">
									<Link onClick={() => setroomno(2)} to="/room">
										<div class="pic">
											<img src={hotelrooms[2].img} alt="" />
										</div>
										<p>Yara ikẹjọ</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>

								<div class="pictext">
									<Link onClick={() => setroomno(0)} to="/room">
										<div class="pic">
											<img src={hotelrooms[0].img} alt="" />
										</div>
										<p>Yara ikẹsan</p>
										<p>Ibadan Road Ile-Ife, Osun State.</p>
									</Link>
								</div>
							</div>

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
					</>
				)}
			</div>
		</div>
	);
}
