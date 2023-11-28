
import "./navbar.css"
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function NavBar() {
  

  return (
    <>
    <div className="navbar">
      <SearchBar />
      <ul className="nav">
        <li>
          <Link to="/login" >Login</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
     
    </>
  );
}

export default NavBar;
