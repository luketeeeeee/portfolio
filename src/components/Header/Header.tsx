import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="flex h-12 w-full items-center justify-end gap-4 font-rubik text-zinc-400 underline decoration-teal-300 decoration-2">
			<Link className="transition duration-500 ease-in-out hover:text-zinc-200" to="/">
				work
			</Link>
			<Link
				className="transition duration-500 ease-in-out hover:text-zinc-200"
				to="/resume"
			>
				resume
			</Link>
		</header>
	);
};
