import { Link } from "react-router-dom";

export type ProjectCardProps = {
	title: string;
	status: string;
	uname: string;
	summary: string;
	stack: string;
};

export const ProjectCard = ({ uname, title, summary }: ProjectCardProps) => {
	return (
		<Link
			to={`/${uname}`}
			className={`mt-7 flex w-full flex-col rounded-lg border-2 border-slate-800 bg-slate-800 py-4 font-code transition duration-500 ease-in-out hover:border-2 hover:border-green-600 hover:bg-slate-900 rsm:px-6 lg:max-w-[460px]`}
		>
			<h1 className="font-bold text-gray-200 rsm:text-xl xs:text-2xl">{title}</h1>
			<p className="text-zinc-400">{summary}</p>
		</Link>
	);
};
