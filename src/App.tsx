import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectPage } from "./pages/ProjectPage/ProjectPage";
import { Resume } from "./pages/Resume";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:projectUniqueName" element={<ProjectPage />} />
				<Route path="resume" element={<Resume />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
