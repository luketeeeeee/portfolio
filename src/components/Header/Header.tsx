import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <Link to="/">work</Link>
        <Link to="/resume">resume</Link>
      </header>
    </>
  );
};
