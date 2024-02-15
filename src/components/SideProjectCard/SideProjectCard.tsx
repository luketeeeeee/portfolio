import { Link } from "react-router-dom";

export type SideProjectCardProps = {
	name: string;
	title: string;
	summary: string;
};

export const SideProjectCard = ({ name, title, summary }: SideProjectCardProps) => {
	return (
		<Link
			to={`/${name}`}
			className={`flex w-[400px] flex-col rounded-lg bg-gray-800 px-4 py-2 font-rubik transition duration-700 ease-in-out hover:bg-gray-700`}
		>
			<h1 className="text-gray-200 rsm:text-lg xs:text-xxl">{title}</h1>
			<p className="text-zinc-400">{summary}</p>
		</Link>
	);
};
