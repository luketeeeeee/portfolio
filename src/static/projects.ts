export type Project = {
	title: string;
	status: string;
	uname: string;
	summary: string;
	stack: string;
	details: string;
	url: string;
	code: string;
	images: string[];
};

// export const projects: Project[] = [
// 	{
// 		title: "F1 API",
// 		name: "f1-api",
// 		summary: "An API containing historic data about Formula 1",
// 		topics: [
// 			{
// 				title: "",
// 				text: "",
// 			},
// 			{
// 				title: "",
// 				text: "",
// 			},
// 		],
// 		images: [],
// 		url: "https://f1api.vercel.app",
// 	},
// 	{
// 		title: "Luk Modules",
// 		name: "luk-modules",
// 		summary: "My CLI to create my own modules",
// 		topics: [
// 			{
// 				title: "",
// 				text: "The main reason for creating this npm package comes from the way I try to modularize my web applications, both on the front-end and the back-end. While developing these applications, I noticed that I was spending time creating folder and file structures for these modules manually. So, I thought, 'Why not do this automatically?' That's when I created the luk-modules package.",
// 			},
// 			{
// 				title: "",
// 				text: "Alright, perhaps it's not a fully automatic process since it involves running a CLI with the command 'npx luk-modules' and answering some questions about the project being developed. However, it does save some time in creating these modules.",
// 			},
// 			{
// 				title: "The sequence of questions",
// 				text: "1. What type of project are you currently developing? (This question has two alternatives, front-end or back-end. Depending on the answer, the module's structure may vary, as can be seen in the 'Module Structure' section.)",
// 			},
// 			{
// 				title: "",
// 				text: "2. Are you using TypeScript? (2. Are you currently using TypeScript? (As you might guess, this question also has two alternatives, yes or no, and it will determine the extension with which the module or component files will be created, whether they will be .js or .ts))",
// 			},
// 			{
// 				title: "",
// 				text: "3. Type the name of the module (here, the user will write the name of the module or component they are creating).",
// 			},
// 			{
// 				title: "",
// 				text: "4. Type the route to create the module. (The user should inform the directory route within the project where the module or component should be created.)",
// 			},
// 			{
// 				title: "The module or component folder structure",
// 				text: "After the questions, a boiler plate component/module structure will be created on the informed route. You can check an example of the final results below.",
// 			},
// 		],
// 		images: [
// 			"https://res.cloudinary.com/dpndt3b4p/image/upload/v1709923946/vekztrrf5htrcprqtdxo.png",
// 			"https://res.cloudinary.com/dpndt3b4p/image/upload/v1709923946/z01ay4kow2fpgp9rcmyl.png",
// 			"https://res.cloudinary.com/dpndt3b4p/image/upload/v1709923946/scutwx2un2b1wogqavuz.png",
// 			"https://res.cloudinary.com/dpndt3b4p/image/upload/v1709923946/nrovvngbuzmcu02x1y0s.png",
// 		],
// 		url: "https://github.com/luketeeeeee/luk-modules",
// 	},
// ];
//
// export const sideProjects: ProjectDetails[] = [
// 	{
// 		title: "Pet Solidário",
// 		name: "pet-solidario",
// 		summary: "Animal adoption app developed during the software engineering classes",
// 		topics: [
// 			{
// 				title: "",
// 				text: "As a software engineer on the project, I was responsible for selecting the technologies used in the project, as well as making decisions about the overall planning, assisting, and teaching other team members about the usage of the chosen technologies.",
// 			},
// 			{
// 				title: "Choosing the technologies",
// 				text: "The main technologies used in the development of this project were: React for the frontend (used in conjunction with TailwindCSS), Express for creating and structuring the API, and MongoDB as the database. The main reason for choosing these technologies was the team's prior familiarity.",
// 			},
// 			{
// 				title: "Project maintenance",
// 				text: "Regarding project maintenance, the initial plan is to make the code as clean as possible. The main projection for this stage is to add typing by changing the code to TypeScript (both on the frontend and backend). Another modification is related to the project's graphical interfaces, as the current screens were not designed with the purpose of being responsive. Therefore, the focus of this modification will be on adding responsiveness and fluidity to the application.",
// 			},
// 			{
// 				title: "Collaborators",
// 				text: "Ruty Silva (designer and engineer), Maria Cristiane (designer and engineer) and Cassio Urtiga (designer and engineer)",
// 			},
// 			{
// 				title: "Current State",
// 				text: "The project is not online anymore, i'm currently working on an update to add responsivity and switch to TypeScript.",
// 			},
// 		],
// 		url: "https://github.com/luketeeeeee/pet-solidario",
// 		images: [],
// 	},
// 	{
// 		title: "Next Calculator",
// 		name: "next-calculator",
// 		summary: "A calculator developed with Next and TypeScript",
// 		topics: [
// 			{
// 				title: "",
// 				text: "The main reason for me to have used Next.js and TypeScript in this application is simply because I wanted to test both and also wanted to review the concepts of state and props in React.",
// 			},
// 			{
// 				title: "Technologies used",
// 				text: "As mentioned earlier, the main technologies used in the project were Next.js in conjunction with TypeScript, but it's also important to highlight the use of Styled Components for styling the application. It's worth noting that this was the first time I used TypeScript in an application developed entirely by myself, so I consider this application to be a significant step in my understanding of how this technology works.",
// 			},
// 		],
// 		url: "https://github.com/luketeeeeee/calculadora-next",
// 		images: [
// 			"https://res.cloudinary.com/dpndt3b4p/image/upload/v1694393215/calculadora_u0bbts.png",
// 		],
// 	},
// 	{
// 		title: "Kanban Board",
// 		name: "kanban-board",
// 		summary: "A Kanban board application for task management",
// 		topics: [
// 			{
// 				title: "",
// 				text: "I developed this application to apply the technologies provided by the dnd-kit library in practice. The project is entirely built in React, using TypeScript as the base language.",
// 			},
// 			{
// 				title: "The dnd-kit library",
// 				text: "It is indeed a very interesting library, with a relatively simple implementation that can be easily integrated into any React project, and it has accessible documentation.",
// 			},
// 			{
// 				title: "Project maintenance",
// 				text: "I plan to implement new features to the project, mainly regarding data persistence, which can be done by adding a database layer to the project. Another possible feature that can be added is a user authentication system, where each user has their own unique Kanban board.",
// 			},
// 		],
// 		url: "https://github.com/luketeeeeee/dnd-kanban-app",
// 		images: [
// 			"https://res.cloudinary.com/dpndt3b4p/image/upload/v1706550812/b14gq1s1ewtgapk4x78c.png",
// 		],
// 	},
// ];
