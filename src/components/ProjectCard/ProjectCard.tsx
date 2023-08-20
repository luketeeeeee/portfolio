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
			className={`mt-7 flex flex-col rounded-lg bg-sky-950 py-7 font-rubik transition duration-700 ease-in-out hover:bg-sky-900 rsm:px-6 xs:px-9`}
		>
			<h1 className="font-bold text-gray-200 rsm:text-xl xs:text-4xl">{title}</h1>
			<p className="text-zinc-400">{summary}</p>
		</Link>
	);
};
