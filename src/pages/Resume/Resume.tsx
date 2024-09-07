import portugueseCV from "../../static/portugueseCV.pdf";

export const Resume = () => {
	return (
		<div className="flex h-full w-full flex-col items-center">
			<object
				data={portugueseCV}
				type="application/pdf"
				width="100%"
				height="100%"
			></object>
		</div>
	);
};
