import { Link } from "react-router-dom";
import Logo from "../assets/logo-main-2.png";

export default function Navbar() {
  return (
    <div className="z-[10000] fixed">
      <nav className="fixed top-0 w-screen mx-auto flex items-center justify-between bg-[#0a051a] p-4 ">
        <ul className="flex space-x-6  text-white">
          <li className="flex gap-3">
            <img className="w-[2rem]" src={Logo} />
            <Link
              to="/"
              className="hover:text-gray-300 text-2xl text-[#] mr-[2rem]"
            >
              𝕄𝕠𝕧𝕚𝕖𝕤 𝕄𝕒𝕪𝕙𝕖𝕞
            </Link>
          </li>
          <li>
            <Link
              to="/movie-nights"
              className="hover:text-gray-300 font-bold text-[1.25rem] text-center"
            >
              Movie Nights
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
