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
			className={`mt-7 flex flex-col rounded-lg px-9 py-6 font-rubik`}
		>
			<h1 className="text-4xl font-bold text-main-white">{title}</h1>
			<p className="">{summary}</p>
		</Link>
	);
};
