import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../contexts/context";
import Login from "../Login/Login";
import Register from "../Register/Register";
import SearchBar from "../SearchBar/SearchBar";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./navbar.css";

function NavBar() {
  const { user } = useContext(MyContext);
  return (
    <div className="navbar">
      {/* <div>Logo</div> */}
      <ul className="nav">
        {/* <li>Logo</li> */}
        <li>
          <SearchBar />
        </li>
        <li>
          <Link to="/login" className="link">
            Login
          </Link>
        </li>
        {user && (
          <li>
            <Link to="/profile" className="link">
              profile
            </Link>
          </li>
        )}
        <li>
          <Link to="/cart" className="link">
            <MdOutlineShoppingCart />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
