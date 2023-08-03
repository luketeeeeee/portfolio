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
			<div className="mx-10 text-zinc-400">
				<div className="flex items-center pb-28 pt-20">
					<div className="mr-9 flex w-80 justify-between">
						<img src={profilePicture} alt="Lucas Henrique" className="rounded-full" />
					</div>

					<div className="font-rubik text-[1.05rem]">
						<p>✌ Hello, my name is</p>
						<h1 className="pb-5 font-slab text-7xl font-bold tracking-tight text-gray-200">
							Lucas Henrique
						</h1>
						<p className="leading-5">
							I am a software engineer and computer science student from Patos, PB,
							passionate about web development, bringing to life a wide range of ideas in
							a creative and organized manner.
						</p>
					</div>
				</div>

				<div>
					<div>
						<h1 className="font-slab text-5xl font-bold text-gray-200">Projects</h1>
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
				</div>
			</div>
		</Container>
	);
};
