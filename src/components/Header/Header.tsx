import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="flex h-12 w-full items-center justify-center gap-4 pt-5 font-code text-lg text-zinc-400 underline decoration-2">
			<Link
				className="decoration-blue-600 transition duration-500 ease-in-out hover:text-zinc-200 hover:decoration-blue-400"
				to="/"
			>
				work
			</Link>
			<Link
				className="decoration-violet-600 transition duration-500 ease-in-out hover:text-zinc-200 hover:decoration-violet-400"
				to="/resume"
			>
				resume
			</Link>
			<Link
				className="decoration-green-600 transition duration-500 ease-in-out hover:text-zinc-200 hover:decoration-green-400"
				to="https://github.com/luketeeeeee"
				target="_blank"
			>
				code
			</Link>
		</header>
	);
};
