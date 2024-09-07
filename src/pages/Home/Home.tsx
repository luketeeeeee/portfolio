import { projects } from "../../static/projects";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { ProjectCard } from "../../components/ProjectCard";
import { ProjectCardProps } from "../../components/ProjectCard/ProjectCard";
import profilePicture from "../../static/profile.jpeg";

export const Home = () => {
	return (
		<Container>
			<Header />
			<div className="text-zinc-400 sm:mx-10">
				<div className="flex flex-col items-center pb-20 pt-20 sm:flex-row">
					<div className="flex w-52 justify-between sm:mr-9 sm:w-96">
						<img src={profilePicture} alt="Millena Pereira" className="rounded-full" />
					</div>

					<div className="mt-5 w-80 font-rubik text-[1.05rem] xs:ml-0 xs:w-auto xs:px-0">
						<p>✌ Olá, me chamo</p>
						<h1 className="pb-5 font-slab text-6xl font-bold tracking-tight text-gray-200 rsm:text-5xl lg:text-7xl">
							Millena Pereira
						</h1>
						<p className="leading-5">
							Sou estudante de Administração na Universidade Estadual da Paraíba e estou
							sempre em busca de novos desafios que me permitam aplicar e expandir meu
							conhecimento prático em administração.
						</p>
					</div>
				</div>

				<div className="w-80 xs:ml-0 xs:w-auto">
					<div>
						<h1 className="font-slab font-bold text-gray-200 rsm:text-3xl xs:text-5xl">
							Experiências
						</h1>
						<div className="w-full">
							{projects.map((project: ProjectCardProps) => (
								<ProjectCard
									key={project.name}
									name={project.name}
									title={project.title}
									summary={project.summary}
								/>
							))}
						</div>
					</div>

					<div className="flex-col pb-12 pt-16 font-slab lg:flex lg:flex-row lg:gap-28">
						<div className="flex w-full flex-col">
							<h1 className="mb-7 flex flex-col font-bold text-gray-200 rsm:text-3xl xs:text-5xl">
								Formação
							</h1>

							<div className="flex w-full flex-col gap-5">
								<div className="flex flex-col justify-between">
									<h1 className="text-xl font-bold text-gray-200">
										Universidade Estadual da Paraíba
									</h1>
									<div className="flex w-full flex-col justify-between">
										<p>Bacharelado em Administração</p>
										<p>Agosto 2022 - Novembro 2027</p>
									</div>
								</div>

								<div className="flex flex-col justify-between">
									<h1 className="text-xl font-bold text-gray-200">SENAC</h1>
									<div className="flex w-full flex-col justify-between">
										<p>Técnico em Assistência Administrativa</p>
										<p>Maio 2022 - Março 2023</p>
									</div>
								</div>

								<div className="flex flex-col justify-between">
									<h1 className="text-xl font-bold text-gray-200">
										EECIT Lynaldo Cavalcanti de Albuquerque
									</h1>
									<div className="flex w-full flex-col justify-between">
										<p>Técnico em vendas, integrado ao Ensino Médio</p>
										<p>Fevereiro 2019 - Dezembro 2021</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
