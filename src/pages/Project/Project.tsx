import { Link, useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { ProjectDetails, projects } from "../../static/projects";

export const Project = () => {
	const { projectUniqueName } = useParams();

	const projectDetails: ProjectDetails | undefined = projects.find(
		(project) => project.name === projectUniqueName
	);

	return (
		<Container>
			<Header />

			<div className="flex w-full flex-col pb-14 pt-20 text-zinc-400">
				<div className="w-full self-start px-20">
					<h1 className="font-slab text-6xl font-bold text-main-white">
						{projectDetails?.title}
					</h1>
					<p className="mt-5 font-rubik text-xl">{projectDetails?.summary}</p>
				</div>

				<hr className="mt-10 w-11/12 self-center border-slate-800" />

				<div className="mt-6 w-full px-24 font-rubik text-lg">
					{projectDetails?.topics.map((topic) => (
						<>
							<h1 className="mt-12 font-slab text-4xl font-bold text-main-white">
								{topic.title}
							</h1>
							<p className="mt-6">{topic.text}</p>
						</>
					))}

					{projectDetails && projectDetails.images.length > 0 ? (
						<div className="flex flex-col">
							<h1 className="mt-12 font-slab text-4xl font-bold text-main-white">
								Some images
							</h1>
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
						<h1 className="mt-12 font-slab text-xl font-bold text-main-white">
							You can access the project{" "}
							<Link
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
