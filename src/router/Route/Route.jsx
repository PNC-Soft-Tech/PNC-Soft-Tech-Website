import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/HomePage/Home.jsx";
import Main from "../../Layout/Main.jsx";
import NotFound from "../../pages/NotFoundPage/NoteFound.jsx";
import Contact from "../../pages/ContactPage/Contact/Contact.jsx";
import About from "../../pages/AboutPage/About/About.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/contact",
				element: <Contact></Contact>,
			},
			{
				path: "/about",
				element: <About></About>,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export default router;
