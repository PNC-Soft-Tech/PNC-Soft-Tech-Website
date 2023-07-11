import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/Route/Route";

function App() {
	return (
		<div className="m-5 ">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
