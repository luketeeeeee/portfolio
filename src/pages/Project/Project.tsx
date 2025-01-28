import { Link, useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { ProjectDetails, projects, sideProjects } from "../../static/projects";

export const Project = () => {
	const { projectUniqueName } = useParams();

	const allProjects = projects.concat(sideProjects);

	const projectDetails: ProjectDetails | undefined = allProjects.find(
		(project) => project.name === projectUniqueName
	);

	return (
		<Container>
			<Header />

			<div className="flex w-full flex-col pb-14 pt-20 font-code text-zinc-400">
				<div className="w-full self-start px-10 sm:px-20">
					<h1 className="text-4xl font-bold text-main-white sm:text-6xl">
						{projectDetails?.title}
					</h1>
					<p className="mt-5 text-lg xs:text-xl">{projectDetails?.summary}</p>
				</div>

				<hr className="mt-10 w-11/12 self-center border-slate-800" />

				<div className="mt-6 w-full px-10 text-lg sm:px-24">
					{projectDetails?.topics.map((topic) => (
						<>
							<h1 className="mt-12 text-4xl font-bold text-main-white">{topic.title}</h1>
							<p className="mt-6 font-rubik">{topic.text}</p>
						</>
					))}

					{projectDetails && projectDetails.images.length > 0 ? (
						<div className="flex flex-col">
							<h1 className="mt-12 text-4xl font-bold text-main-white">Some images</h1>
							<div className="flex flex-wrap">
								{projectDetails.images.map((image) => (
									<img className="mt-5 rounded-xl" src={image} alt="project image" />
								))}
							</div>
						</div>
					) : (
						<></>
					)}

					<>
						<h1 className="mt-12 text-xl font-bold text-main-white">
							You can access the project{" "}
							<Link
								target="_blank"
								to={`${projectDetails?.url}`}
								className="text-lime-500 underline decoration-transparent transition duration-500 ease-in-out hover:decoration-lime-500"
							>
								here
							</Link>
						</h1>
					</>
				</div>
			</div>
		</Container>
	);
};
