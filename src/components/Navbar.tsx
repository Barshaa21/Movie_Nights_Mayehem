//
import { Link } from "react-router-dom";
import Logo from "../assets/logo-main-2.png";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const hiddenPaths = [
    "/template1",
    "/template3",
    "/template2",
    "/main/template1",
    "/main/template3",
    "/main/template2",
    "/main",
    "/main/editPortfolio",
    // "/login",
  ];

  const shouldShowNavigation = !hiddenPaths.includes(location.pathname);

  return (
    <div className="z-50">
      {shouldShowNavigation && (
        <nav className="fixed top-0 w-screen mx-auto flex items-center justify-between bg-[#0a051a] p-4 ">
          <ul className="flex space-x-6  text-white">
            <li className="flex gap-3">
              <img className="w-[2rem]" src={Logo} />
              <a href="/" className="hover:text-gray-300 text-lg mr-[10rem]">
                Movie Mayhem
              </a>
            </li>
            {/* <li>
              <a
                href="/about"
                className="hover:text-gray-300 text-[1.25rem] text-center m "
              >
                About
              </a>
            </li> */}
            <li>
              <Link
                to="/movie-nights"
                className="hover:text-gray-300 text-[1.25rem] text-center"
              >
                Movie Nights
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 text-[1.25rem] text-center"
              >
                Popular Movies
              </Link>
            </li>
          </ul>
          <Link to="/login">
            <button
              type="submit"
              className="w-[5rem] mr-7 bg-white hover:bg-slate-200 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue active:bg-gray-200"
            >
              Log In
            </button>
          </Link>
        </nav>
      )}
    </div>
  );
}
