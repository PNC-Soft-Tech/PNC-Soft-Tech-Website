import { Link } from "react-router-dom";
import { Colors } from "../../constant/colors";
const Header = () => {
	console.log(Colors.primary);
	const elementStyle = {
		backgroundColor: Colors.secondary,
		color: Colors.textColor,
	};
	return (
		<div style={elementStyle} className={`py-5 px-5`}>
			<ul className="flex justify-between">
				<li className="">
					<Link to="/">Home</Link>
				</li>
				<li className="">
					<Link to="/contact">Contact</Link>
				</li>
				<li className="">
					<Link to="/projects">Projects</Link>
				</li>
				<li className="">
					<Link to="/about">About Us</Link>
				</li>
				<li className="">
					<Link to="/services">Services</Link>
				</li>
				<li className="">
					<Link to="/faq">FAQ</Link>
				</li>
				<li className="">
					<Link to="/project-details">Project Details</Link>
				</li>
				<li className="">
					<Link to="/team">Team</Link>
				</li>
				<li className="">
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
