import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">React Query App</div>

      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/add">Add Product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
