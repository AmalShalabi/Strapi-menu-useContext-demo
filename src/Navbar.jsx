import { FaBars } from "react-icons/fa";
import {useGlobalContext} from "./context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className="nav-center">
      <h3 className="logo">strapi</h3>
      <button className="toggle-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      {/* navlinks later */}
    </nav>
  );
};

export default Navbar;
