import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="flex h-12 w-full items-center justify-center gap-4 pt-5 font-rubik text-zinc-400 underline decoration-2 sm:justify-end">
			<Link
				className="decoration-teal-300 transition duration-500 ease-in-out hover:text-zinc-200"
				to="/"
			>
				work
			</Link>
			<Link
				className="decoration-violet-500 transition duration-500 ease-in-out hover:text-zinc-200"
				to="/resume"
			>
				resume
			</Link>
			<Link
				className="decoration-lime-500 transition duration-500 ease-in-out hover:text-zinc-200"
				to="https://github.com/luketeeeeee"
			>
				code
			</Link>
		</header>
	);
};
