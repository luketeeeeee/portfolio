import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="flex h-12 w-full items-center justify-end gap-3 font-rubik text-main-white underline decoration-main-blue decoration-2">
			<Link to="/">work</Link>
			<Link to="/resume">resume</Link>
		</header>
	);
};
