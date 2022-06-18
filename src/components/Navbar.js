import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>SRH Cooking</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
