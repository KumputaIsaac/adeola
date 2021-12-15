import { useState } from "react";
import "./App.css";
import Adminrooms from "./pages/adminroom/Adminrooms";
import Adminusers from "./pages/adminusers/Adminusers";
import Adminview from "./pages/adminview/Adminview";
import Findhotel from "./pages/findhotel/Findhotel";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import Room from "./pages/room/Room";
import Navbar from "./component/navbar/Navbar";

function App() {
	const [English, setEnglish] = useState(true);
	const [roomno, setroomno] = useState(0);
	const [isLoggedin, setisLoggedin] = useState(false);
	const [mainusername, setmainusername] = useState("");

	const hotelrooms = [
		{
			img: "/images/room1.jpg",
			roomNo: "1",
		},
		{
			img: "/images/room2.jpg",
			roomNo: "2",
		},
		{
			img: "/images/room3.jpg",
			roomNo: "3",
		},
		{
			img: "/images/room4.jpg",
			roomNo: "4",
		},
		{
			img: "/images/room5.png",
			roomNo: "5",
		},
		{
			img: "/images/room1.jpg",
			roomNo: "6",
		},
		{
			img: "/images/room2.jpg",
			roomNo: "7",
		},
		{
			img: "/images/room3.jpg",
			roomNo: "8",
		},
		{
			img: "/images/room4.jpg",
			roomNo: "9",
		},
		{
			img: "/images/room5.png",
			roomNo: "10",
		},
	];
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Navbar
							mainusername={mainusername}
							isLoggedin={isLoggedin}
							lan={English}
							setEnglish={setEnglish}
						/>
						<Homepage
							setroomno={setroomno}
							hotelrooms={hotelrooms}
							lan={English}
							setEnglish={setEnglish}
						/>
					</Route>
					<Route path="/adminrooms">
						<Adminrooms lan={English} />
					</Route>
					<Route path="/adminusers">
						<Adminusers lan={English} />
					</Route>
					<Route path="/adminview">
						<Adminview lan={English} />
					</Route>
					<Route path="/findhotel">
						<Navbar
							mainusername={mainusername}
							lan={English}
							setEnglish={setEnglish}
							isLoggedin={isLoggedin}
						/>
						<Findhotel
							setroomno={setroomno}
							hotelrooms={hotelrooms}
							lan={English}
						/>
					</Route>
					<Route path="/login">
						<Login
							setisLoggedin={setisLoggedin}
							lan={English}
							setmainusername={setmainusername}
						/>
					</Route>
					<Route path="/register">
						<Register lan={English} />
					</Route>
					<Route path="/room">
						<Navbar
							mainusername={mainusername}
							lan={English}
							setEnglish={setEnglish}
							isLoggedin={isLoggedin}
						/>
						<Room
							roomno={roomno}
							hotelrooms={hotelrooms}
							lan={English}
							mainusername={mainusername}
							isLoggedin={isLoggedin}
						/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
