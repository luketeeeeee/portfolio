import { Link } from "react-router-dom";
import { Project } from "../../static/projects";
// TODO: export this components from the same file
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { ProjectCard } from "../../components/ProjectCard";
import { ProjectCardProps } from "../../components/ProjectCard/ProjectCard";
import profilePicture from "../../static/profile.jpeg";
import projectsJson from "../../static/projects.json";

export const Home = () => {
	const projects: Project[] = projectsJson;

	return (
		<Container>
			<Header />
			<div className="font-code text-zinc-400 sm:mx-0">
				<div className="flex flex-col items-center justify-center py-14 sm:flex-row">
					<div className="flex w-28 justify-between sm:mr-9">
						<img src={profilePicture} alt="Lucas Henrique" className="rounded-full" />
					</div>

					<div className="mt-5 w-80 text-[1.05rem] xs:ml-0 xs:w-auto xs:px-0">
						<p>hello, my name is</p>
						<h1 className="pb-3 text-3xl font-bold tracking-tight text-gray-200 rsm:text-3xl lg:text-4xl">
							Lucas Henrique
						</h1>
						<p className="leading-5">i like having ideas and coding them</p>
					</div>
				</div>

				<div className="w-80 xs:ml-0 xs:w-auto">
					<div>
						<h1 className="text-center font-bold text-gray-200 rsm:text-2xl xs:text-3xl sm:text-left">
							projects
						</h1>
						<div className="mt-[-10px] flex w-full flex-col gap-0 lg:grid lg:grid-cols-2 lg:gap-4">
							{projects.map((project: ProjectCardProps) => (
								<ProjectCard
									key={project.uname}
									uname={project.uname}
									title={project.title}
									summary={project.summary}
									status={project.status}
									stack={project.stack}
								/>
							))}
						</div>
					</div>

					<div className="flex-col pb-12 pt-20 lg:flex lg:flex-row lg:gap-24">
						<div className="mb-10 w-[400px] lg:mb-0">
							<h1 className="mb-5 text-center font-bold text-gray-200 rsm:text-left rsm:text-2xl xs:text-3xl">
								goals for this year
							</h1>

							<div className="text-md flex flex-col gap-4">
								<p className="flex items-start">
									<input type="checkbox" disabled className="mr-2 h-5 w-5" /> get a job
								</p>
								<p className="flex items-start">
									<input type="checkbox" disabled className="mr-2 h-5 w-5" /> build and
									maintain at least two projects
								</p>
								<p className="flex items-start">
									<input type="checkbox" disabled className="mr-2 h-5 w-5" /> learn a new
									programming language
								</p>
							</div>
						</div>

						<div>
							<h1 className="mb-7 text-center font-bold text-gray-200 rsm:text-2xl xs:text-3xl sm:text-left">
								background
								<p className="mt-0 text-sm text-gray-500">
									(i'm currently looking for a job)
								</p>
							</h1>

							<div className="flex flex-col gap-3 sm:w-96">
								<div className="flex flex-col justify-between">
									<h1 className="text-lg font-bold text-gray-200">Telcomanager</h1>
									<div className="flex w-full justify-between rsm:flex-col xs:flex-row">
										<p>Web Development Intern</p>
										<p>2024</p>
									</div>
								</div>
								<div className="flex flex-col justify-between">
									<h1 className="text-lg font-bold text-gray-200">Splendore Digital</h1>
									<div className="flex w-full justify-between rsm:flex-col xs:flex-row">
										<p>Web Development Intern</p>
										<p>2023 - 2024</p>
									</div>
								</div>
								<div className="flex flex-col justify-between sm:w-96">
									<h1 className="text-lg font-bold text-gray-200">PrestContas</h1>
									<div className="flex w-full justify-between rsm:flex-col xs:flex-row">
										<p>Web Development Intern</p>
										<p>2022 - 2023</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<p className="">
						other stuff that i made: [
						<Link
							to="https://github.com/luketeeeeee/luk-modules"
							className="text-green-500 hover:underline hover:decoration-green-500"
						>
							luk modules
						</Link>
						,{" "}
						<Link
							to="https://github.com/luketeeeeee/pet-solidario"
							className="text-green-500 hover:underline hover:decoration-green-500"
						>
							pet solidario
						</Link>
						,{" "}
						<Link
							to="https://github.com/luketeeeeee/kanban-board"
							className="text-green-500 hover:underline hover:decoration-green-500"
						>
							kanban board
						</Link>
						,{" "}
						<Link
							to="https://github.com/luketeeeeee/advent-of-code-2024"
							className="text-green-500 hover:underline hover:decoration-green-500"
						>
							advent of code (2024)
						</Link>
						]
					</p>
					<p>(this ones are just for study/exploring technologies purpose)</p>
				</div>
			</div>
		</Container>
	);
};
