import { Link, useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import projects from "../../static/projects.json";
import { Project, ProjectStatus } from "../../static/projects.ts";

export const ProjectPage = () => {
	const { projectUniqueName } = useParams();

	const project: Project | undefined = projects
		.map((p) => ({ ...p, status: p.status as ProjectStatus }))
		.find((project) => project.uname === projectUniqueName);

	const colors = ["bg-blue-500", "bg-orange-500", "bg-green-500", "bg-violet-500"];

	console.log(project);

	return (
		<Container>
			<Header />

			<div className="flex w-full flex-col pb-14 pt-20 font-code text-zinc-400">
				<div className="flex w-full flex-col self-start px-10 sm:px-20">
					<h1 className="text-center text-2xl font-bold text-gray-300 sm:text-4xl">
						{project?.title}
					</h1>
					<p className="mt-5 max-w-[600px] self-center text-center text-lg">
						{project?.summary}
					</p>
					<p className="mt-4 text-left">
						status:{" "}
						<span
							className={`${
								project?.status === "development"
									? "rounded bg-yellow-500 px-2 py-1 text-black"
									: "rounded bg-green-500 px-2 py-1 text-black"
							}`}
						>
							{project?.status}
						</span>
					</p>

					<p className="flex flex-wrap items-center gap-2 pt-3">
						stack: [
						{project?.stack?.split(", ").map((tech, index) => (
							<span
								key={tech}
								className={`${
									colors[index % colors.length]
								} rounded-md px-2 py-1 text-white`}
							>
								{tech}
							</span>
						))}
						]
					</p>
				</div>

				<hr className="mt-10 w-11/12 self-center border-slate-800" />

				<div className="mt-6 flex w-full flex-col px-10 text-lg sm:px-24">
					{project?.details}

					<div className="mt-8 flex gap-8">
						<Link
							target="_blank"
							to={`${project?.code}`}
							className="text-xl font-bold text-green-500 underline decoration-transparent transition duration-500 ease-in-out hover:decoration-green-500"
						>
							code
						</Link>

						{project?.url ? (
							<Link
								className="text-xl font-bold text-green-500 underline decoration-transparent transition duration-500 ease-in-out hover:decoration-green-500"
								to={`${project?.url}`}
							>
								project
							</Link>
						) : (
							<h1 className="text-xl font-bold text-gray-300">nothing yet</h1>
						)}
					</div>

					{/*TODO: click the image -> zoom in*/}
					{project && project.images.length > 0 ? (
						<div className="flex flex-col">
							<h1 className="mt-12 text-2xl font-bold text-gray-300">Some images</h1>
							<div className="flex flex-wrap gap-4">
								{project.images.map((image) => (
									<img className="mt-3 rounded-xl" src={image} alt="project image" />
								))}
							</div>
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
		</Container>
	);
};
