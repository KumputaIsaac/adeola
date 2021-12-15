import "./result2.css";
import "./result.css";
import { Link } from "react-router-dom";

export default function Result2({ lan, mainusername }) {
	const current = new Date();
	const date = `${current.getDate()}/${
		current.getMonth() + 1
	}/${current.getFullYear()}`;
	console.log(date);

	const cancel = () => {
		let cover = document.querySelector(".cover");
		cover.classList.add("none");
	};
	return (
		<div>
			{lan ? (
				<div class="cover none passcode">
					<div class="content">
						<div onClick={cancel} class="cancel">
							<img src="/images/v5.png" alt="" />
						</div>
						<div class="change">
							<p>You have successfully booked this room</p>
							<p>{mainusername}</p>
							<p>{date}</p>
							<img src="/images/Frame.png" alt="" />
							<div class="cancelcontinue">
								<div class="can">
									<Link to="/">CONTINUE</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div class="cover none passcode">
					<div class="content">
						<div onClick={cancel} class="cancel">
							<img src="/images/v5.png" alt="" />
						</div>
						<div class="change">
							<p>o ti gba yara yi</p>
							<p>{mainusername}</p>
							<p>{date}</p>
							<img src="/images/Frame.png" alt="" />
							<div class="cancelcontinue">
								<div class="can">
									<Link to="/">TESIWAJU</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
