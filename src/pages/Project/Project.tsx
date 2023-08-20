import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

type ProjectDetails = {
	id: string;
	title: string;
	name: string;
	summary: string;
	topics: Topic[];
	images: string[];
};

type Topic = {
	title: string;
	text: string;
};

export const Project = () => {
	const { projectUniqueName } = useParams();
	const [projectDetails, setProjectDetails] = useState<ProjectDetails>();
	// const projectTopics = projectDetails?.topics.slice(0);

	useEffect(() => {
		const fetchProjectDetails = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_URL}/projects/${projectUniqueName}`,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					}
				);

				if (response.ok) {
					const result = await response.json();

					setProjectDetails(result.data);
				}
			} catch (error) {
				alert(error);
			}
		};

		fetchProjectDetails();
	}, [projectUniqueName]);

	return (
		<Container>
			<Header />

			<div className="flex w-full flex-col pt-20 text-zinc-400">
				<div className="w-full self-start px-20">
					<h1 className="font-slab text-6xl font-bold text-main-white">
						{projectDetails?.title}
					</h1>
					<p className="mt-5 font-rubik text-xl">{projectDetails?.summary}</p>
				</div>

				<hr className="mt-10 w-11/12 self-center border-slate-800" />

				{/* <div className="mt-14 w-full px-20 font-rubik text-lg">
					<p>{projectDetails?.topics[0]}</p>
				</div> */}

				<div className="mt-6 w-full px-24 font-rubik text-lg">
					{projectDetails?.topics.map((topic) => (
						<>
							<h1 className="mt-12 font-slab text-4xl font-bold text-main-white">
								{topic.title}
							</h1>
							<p className="mt-6">{topic.text}</p>
						</>
					))}
				</div>
			</div>
		</Container>
	);
};
