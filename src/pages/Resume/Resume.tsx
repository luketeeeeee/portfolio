import { useState } from "react";
import englishCV from "../../static/englishCV.pdf";
import portugueseCV from "../../static/portugueseCV.pdf";

export const Resume = () => {
	const [selectedLanguage, setSelectedLanguage] = useState("enUS");

	return (
		<div className="flex h-full w-full flex-col items-center">
			<div className="flex items-center gap-3 px-10 py-2">
				<p>Select the CV language: </p>
				<button
					onClick={() => setSelectedLanguage("enUS")}
					className={`w-40 rounded py-1 transition duration-300 hover:bg-slate-700 ${
						selectedLanguage === "enUS" ? "bg-blue-500 hover:bg-blue-600" : "bg-slate-800"
					}`}
				>
					English
				</button>
				<button
					onClick={() => setSelectedLanguage("ptBR")}
					className={`w-40 rounded  py-1 transition duration-300 hover:bg-slate-700 ${
						selectedLanguage === "ptBR" ? "bg-blue-500 hover:bg-blue-600" : "bg-slate-800"
					}`}
				>
					Portuguese
				</button>
			</div>

			{selectedLanguage === "enUS" ? (
				<object
					data={englishCV}
					type="application/pdf"
					width="100%"
					height="100%"
				></object>
			) : (
				<object
					data={portugueseCV}
					type="application/pdf"
					width="100%"
					height="100%"
				></object>
			)}
		</div>
	);
};
