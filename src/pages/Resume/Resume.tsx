import file from "../../static/cv.pdf";

export const Resume = () => {
	return (
		<>
			<object data={file} type="application/pdf" width="100%" height="100%"></object>
		</>
	);
};
