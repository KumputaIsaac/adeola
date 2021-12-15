import { Link } from "react-router-dom";
import "./homepage.css";

export default function Homepage({ lan, setroomno, hotelrooms }) {
	return (
		<div>
			<div class="homepage">
				{/* <Navbar lan={lan} setEnglish={setEnglish} /> */}

				<div
					class="backgroundbring"
					style={{
						background: `url('${process.env.PUBLIC_URL}/images/group 49.png')`,
					}}
				>
					<div class="bringhotel">
						<p>
							{lan
								? "Bring you closer to your Next Vacation"
								: "Mu ọ sunmọ Isinmi Rẹ ti nbọ"}
						</p>
						<p>
							{lan
								? "Search through 3,005 Rooms in Our hotel"
								: "Wa nipasẹ awọn yara 3,005 ni hotẹẹli wa"}
						</p>
					</div>
					<div class="bringhotel">
						<div class="findhotel">
							<p>
								{lan
									? "Find and book Room in our Hotel"
									: "Wa ki o gba Yara ninu Hotẹẹli wa"}
							</p>
							<input
								type="text"
								placeholder={lan ? "Search room" : "Wa yara"}
							/>
							<br />
							<input type="date" placeholder="Enter Date" />
							<div class="checknow">
								<Link to="/findhotel"> Check Now</Link>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- bringing navbar in  --> */}
				{/* <div class="hiddennav" id="element">
					<ul>
						<li>
							<a href="#home"></a> Home
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
					</ul>
				</div> */}

				<div class="suggestedbox">
					<div class="suggested">
						<p> {lan ? "Our Other Branches" : "Awọn Ẹka Wa Miiran"} </p>
						<p>
							{lan
								? "See our most visited hotels across the country"
								: "Wo awọn hotẹẹli wa ti o ṣabẹwo julọ ni gbogbo orilẹ-ede naa"}
						</p>
					</div>
					<div class="box">
						<div class="insidebox">
							<Link to="/findhotel">
								<div class="state">
									<p>Ile-Ife</p>
									<p>
										{lan
											? " Hotel in Ile-Ife Osun State"
											: "Hotẹẹli wa ni Ile-ife"}
									</p>
								</div>
								<div class="state">
									<p>30</p>
									<p> {lan ? "Rooms available" : "Awọn yara ti o wa"}</p>
								</div>
							</Link>
						</div>
						<div class="insidebox">
							<div class="state">
								<p>Lagos</p>
								<p>{lan ? " Hotel in Lagos, Nigeria" : "Hotẹẹli wa ni Eko"}</p>
							</div>
							<div class="state">
								<p>2,320</p>
								<p> {lan ? "Rooms available" : "Awọn yara ti o wa"}</p>
							</div>
						</div>
						<div class="insidebox">
							<div class="state">
								<p>Ibadan</p>
								<p>
									{lan ? "Hotel in Ibadan, Oyo State" : "Hotẹẹli wa ni Ibadan"}
								</p>
							</div>
							<div class="state">
								<p>1,087</p>
								<p> {lan ? "Rooms available" : "Awọn yara ti o wa"}</p>
							</div>
						</div>
						<div class="insidebox">
							<div class="state">
								<p>Kaduna</p>
								<p>{lan ? "Hotel in Kaduna State" : "Hotẹẹli wa ni Kaduna"}</p>
							</div>
							<div class="state">
								<p>300</p>
								<p> {lan ? "Rooms available" : "Awọn yara ti o wa"}</p>
							</div>
						</div>
					</div>
				</div>
				{lan ? (
					<>
						<div class="spg">
							<div class="safe">
								<div class="icon">
									<i class="fas fa-home"></i>
								</div>
								<p>Safe and convenient</p>
								<p>
									Our services are created to give you a seamless and safe
									usability.
								</p>
							</div>
							<div class="safe">
								<div class="icon">
									<i class="fas fa-users"></i>
								</div>
								<p>Premium Hotels</p>
								<p>
									The rooms and services available are top notch and very
									competitive
								</p>
							</div>
							<div class="safe">
								<div class="icon">
									<i class="fas fa-comments"></i>
								</div>
								<p>Get Help when needed</p>
								<p>
									Our customer services is the best in the country as we've been
									awarded the best hotel serverally
								</p>
							</div>
						</div>

						<div class="todaysdeal">
							<p>Today's Top Rooms Deals</p>
							<p>View the rooms available today</p>
							<div class="pichotel"></div>
						</div>

						<div class="picturexela">
							<div class="pictext">
								<Link onClick={() => setroomno(0)} to="/room">
									{/* <a href="/room"> */}
									<div class="pic">
										<img src={hotelrooms[0].img} alt="" />
									</div>
									<p>Room 1</p>
									<p>Ibadan Road Ile-Ife, Osun State.</p>
									{/* </a> */}
								</Link>
							</div>

							<div class="pictext">
								<Link onClick={() => setroomno(6)} to="/room">
									{/* <a href="/room"> */}
									<div class="pic">
										<img src={hotelrooms[6].img} alt="" />
									</div>
									<p>Room 5</p>
									<p>Ibadan Road Ile-Ife, Osun State.</p>
									{/* </a> */}
								</Link>
							</div>

							<div class="pictext">
								<Link onClick={() => setroomno(8)} to="/room">
									<div class="pic">
										<img src={hotelrooms[8].img} alt="" />
									</div>
									<p>Room 7</p>
									<p>Ibadan Road Ile-Ife, Osun State.</p>
								</Link>
							</div>
						</div>
					</>
				) : (
					<>
						<div class="spg">
							<div class="safe">
								<div class="icon">
									<i class="fas fa-home"></i>
								</div>
								<p>Ailewu ati ki o rọrun</p>
								<p>
									Awọn iṣẹ wa ni a ṣẹda lati fun ọ ni ailopin ati ailewu lilo.
								</p>
							</div>
							<div class="safe">
								<div class="icon">
									<i class="fas fa-users"></i>
								</div>
								<p>Ere Hotels</p>
								<p>
									Awọn yara ati awọn iṣẹ ti o wa ni ipo giga ati ifigagbaga pupọ
								</p>
							</div>
							<div class="safe">
								<div class="icon">
									<i class="fas fa-comments"></i>
								</div>
								<p>Gba Iranlọwọ nigbati o nilo</p>
								<p>
									Awọn iṣẹ alabara wa dara julọ ni orilẹ-ede bi a ti fun wa ni
									olupin hotẹẹli ti o dara julọ
								</p>
							</div>
						</div>

						<div class="todaysdeal">
							<p>Yara ti o dara loni</p>
							<p>Wo awọn yara ti o wa loni</p>
							<div class="pichotel"></div>
						</div>

						<div class="picturexela">
							<div class="pictext">
								<Link onClick={() => setroomno(0)} to="/room">
									{/* <a href="/room"> */}
									<div class="pic">
										<img src={hotelrooms[0].img} alt="" />
									</div>
									<p>Yara 1</p>
									<p>Ibadan Road Ile-Ife, Osun State.</p>
									{/* </a> */}
								</Link>
							</div>

							<div class="pictext">
								<Link onClick={() => setroomno(6)} to="/room">
									{/* <a href="/room"> */}
									<div class="pic">
										<img src={hotelrooms[6].img} alt="" />
									</div>
									<p>Yara 5</p>
									<p>Ibadan Road Ile-Ife, Osun State.</p>
									{/* </a> */}
								</Link>
							</div>

							<div class="pictext">
								<Link onClick={() => setroomno(8)} to="/room">
									<div class="pic">
										<img src={hotelrooms[8].img} alt="" />
									</div>
									<p>Yara 7</p>
									<p>Ibadan Road Ile-Ife, Osun State.</p>
								</Link>
							</div>
						</div>
					</>
				)}

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
		</div>
	);
}
