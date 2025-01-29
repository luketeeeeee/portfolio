import { Link, useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import projects from "../../static/projects.json";
import { Project } from "../../static/projects.ts";

export const ProjectPage = () => {
	const { projectUniqueName } = useParams();

	const project: Project | undefined = projects.find(
		(project) => project.uname === projectUniqueName
	);

	return (
		<Container>
			<Header />

			<div className="flex w-full flex-col pb-14 pt-20 font-code text-zinc-400">
				<div className="w-full self-start px-10 sm:px-20">
					<h1 className="text-center text-2xl font-bold text-gray-300 sm:text-4xl">
						{project?.title}
					</h1>
					<p className="mt-5 text-center text-lg">{project?.summary}</p>
				</div>

				<hr className="mt-10 w-11/12 self-center border-slate-800" />

				<div className="mt-6 flex w-full flex-col px-10 text-lg sm:px-24">
					{project?.details}

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

					<div className="mt-12">
						<Link
							target="_blank"
							to={`${project?.code}`}
							className="text-xl font-bold text-green-500 underline decoration-transparent transition duration-500 ease-in-out hover:decoration-green-500"
						>
							code
						</Link>

						{project?.url ? (
							<h1 className="text-xl font-bold text-gray-300">nothing yet</h1>
						) : (
							<Link
								className="text-xl font-bold text-green-500 underline decoration-transparent transition duration-500 ease-in-out hover:decoration-green-500"
								to={`${project?.url}`}
							></Link>
						)}
					</div>
				</div>
			</div>
		</Container>
	);
};
