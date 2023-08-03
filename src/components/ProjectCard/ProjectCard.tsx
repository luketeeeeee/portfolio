import { Link } from "react-router-dom";

export type ProjectCardProps = {
	name: string;
	title: string;
	summary: string;
};

export const ProjectCard = ({ name, title, summary }: ProjectCardProps) => {
	return (
		<Link
			to={`/${name}`}
			className={`mt-7 flex flex-col rounded-lg bg-sky-950 px-9 py-5 font-rubik transition duration-500 ease-in-out hover:bg-sky-900`}
		>
			<h1 className="text-4xl font-bold text-gray-200">{title}</h1>
			<p className="text-zinc-400">{summary}</p>
		</Link>
	);
};
