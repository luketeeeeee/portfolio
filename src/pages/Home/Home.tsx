import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { ProjectCard } from "../../components/ProjectCard";
import { ProjectCardProps } from "../../components/ProjectCard/ProjectCard";
import profilePicture from "../../static/profile.jpeg";

export const Home = () => {
	const [allProjects, setAllProjects] = useState([]);

	useEffect(() => {
		const fetchPets = async () => {
			try {
				const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});

				if (response.ok) {
					const result = await response.json();

					setAllProjects(result.data);
				}
			} catch (error) {
				alert(error);
			}
		};

		fetchPets();
	}, []);

	return (
		<Container>
			<Header />
			<div className="text-zinc-400 sm:mx-10">
				<div className="flex flex-col items-center pb-28 pt-20 sm:flex-row">
					<div className="flex w-52 justify-between sm:mr-9 sm:w-96">
						<img src={profilePicture} alt="Lucas Henrique" className="rounded-full" />
					</div>

					<div className="mt-5 w-80 font-rubik text-[1.05rem] xs:ml-0 xs:w-auto xs:px-0">
						<p>✌ Hello, my name is</p>
						<h1 className="pb-5 font-slab text-6xl font-bold tracking-tight text-gray-200 rsm:text-5xl lg:text-7xl">
							Lucas Henrique
						</h1>
						<p className="leading-5">
							I am a software engineer and computer science student from Patos, PB,
							passionate about web development, bringing to life a wide range of ideas in
							a creative and organized manner.
						</p>
					</div>
				</div>

				<div className="w-80 xs:ml-0 xs:w-auto">
					<div>
						<h1 className="font-slab font-bold text-gray-200 rsm:text-3xl xs:text-5xl">
							Projects
						</h1>
						<div className="w-full">
							{allProjects.map((project: ProjectCardProps) => (
								<ProjectCard
									key={project.name}
									name={project.name}
									title={project.title}
									summary={project.summary}
								/>
							))}
						</div>
					</div>

					<div className="pb-12 pt-20 font-slab">
						<h1 className="mb-7 font-bold text-gray-200 rsm:text-3xl xs:text-5xl">
							Background
						</h1>

						<div className="flex flex-col gap-5 sm:w-96">
							<div className="flex flex-col justify-between">
								<h1 className="text-xl font-bold text-gray-200">Splendore Digital</h1>
								<div className="flex w-full justify-between rsm:flex-col xs:flex-row">
									<p>Web Development Intern</p>
									<p>2023 - Present</p>
								</div>
							</div>

							<div className="flex flex-col justify-between sm:w-96">
								<h1 className="text-xl font-bold text-gray-200">PrestContas</h1>
								<div className="flex w-full justify-between rsm:flex-col xs:flex-row">
									<p>Web Development Intern</p>
									<p>2022 - 2023</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
