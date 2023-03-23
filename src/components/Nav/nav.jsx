import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex bg-gray-400 w-full h-50 justify-center">
      <ul className="flex flex-ro m-5">
        <li className="p-5">
          <Link to="/" className="font-sans">Home</Link>
        </li>
        <li className="p-5">
          <Link to="/galeria" className="font-sans">Galeria</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
