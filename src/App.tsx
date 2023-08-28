import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project/Project";
import { Resume } from "./pages/Resume";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:projectUniqueName" element={<Project />} />
				<Route path="resume" element={<Resume />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
