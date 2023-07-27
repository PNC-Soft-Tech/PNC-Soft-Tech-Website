/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { Colors } from "../../constant/colors";
import Tittle from "./Title";
import NavBar from "./Navbar";
const Header = () => {
	console.log(Colors.primary);
	const elementStyle = {
		backgroundColor: Colors.secondary,
		color: Colors.textColor,
	};
	return (
		<div className={`relative`}>
			<Tittle />
            <NavBar />
		</div>
	);
};

export default Header;


