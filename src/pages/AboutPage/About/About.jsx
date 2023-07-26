import Banner from "../../../Shared/Banner/Banner";
import ChooseSection from "../ChooseSection/ChooseSection";
import PointSection from "../PointSection/PointSection";
import ProjectSection from "../ProjectSection/ProjectSection";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamMembers from "../TeamMembers/TeamMembers";
import Feedbacks from "../Feedbacks/Feedbacks";

const About = () => {
	return (
		<div>
			<Banner title="About Us" linkText="About" />
			<WelcomeSection />
			<ChooseSection />
			<ProjectSection />
			<PointSection />
			<Feedbacks />
			<TeamMembers />
		</div>
	);
};

export default About;
