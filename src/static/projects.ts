export type ProjectDetails = {
	title: string;
	name: string;
	summary: string;
	topics: Topic[];
	images?: string[];
	url: string;
};

type Topic = {
	title: string;
	text: string;
};

export const projects: ProjectDetails[] = [
	{
		title: "Pet Solidário",
		name: "pet-solidario",
		summary: "Animal adoption app developed during the software engineering class",
		topics: [
			{
				title: "",
				text: "As a software engineer on the project, I was responsible for selecting the technologies used in the project, as well as making decisions about the overall planning, assisting, and teaching other team members about the usage of the chosen technologies.",
			},
			{
				title: "Choosing the technologies",
				text: "The main technologies used in the development of this project were: React for the frontend (used in conjunction with TailwindCSS), Express for creating and structuring the API, and MongoDB as the database. The main reason for choosing these technologies was the team's prior familiarity.",
			},
			{
				title: "Project maintenance",
				text: "Regarding project maintenance, the initial plan is to make the code as clean as possible. The main projection for this stage is to add typing by changing the code to TypeScript (both on the frontend and backend). Another modification is related to the project's graphical interfaces, as the current screens were not designed with the purpose of being responsive. Therefore, the focus of this modification will be on adding responsiveness and fluidity to the application.",
			},
			{
				title: "Collaborators",
				text: "Ruty Silva (designer and engineer), Maria Cristiane (designer and engineer) and Cassio Urtiga (designer and engineer)",
			},
		],
		url: "https://pet-solidario.vercel.app/",
	},
];
