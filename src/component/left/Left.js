import React from "react";
import { Link } from "react-router-dom";

export default function Left() {
	return (
		<ul>
			<li>
				<Link to="/adminview">Overview</Link>
			</li>
			<li>
				<Link to="/adminrooms">Rooms</Link>
			</li>
			<li>
				<Link to="/adminusers">Users</Link>
			</li>
		</ul>
	);
}
