import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../contexts/context";
import Login from "../Login/Login";
import LogOut from '../LogOut/LogOut'
import Register from "../Register/Register";
import SearchBar from "../SearchBar/SearchBar";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./navbar.css";

function NavBar() {
  const { user,isLogin,quant } = useContext(MyContext);
  return (
    <div className="navbar">
       <Link to="/" className="link"><img src="/bookStoreLogo.jpg" alt="" className="logo" /></Link>
      <ul className="nav">
        {/* <li>Logo</li> */}
        <li>
          <SearchBar />
        </li>
         <li>
           <Link to="/login" className='link'>{user?<LogOut/>:'Login'}</Link>
          </li>
           {user&&<li>
             <Link to="/profile" className='link'>profile</Link>
            </li>}
            <li>
                    <Link to="/cart" className='link cart'><MdOutlineShoppingCart className="cartIcon"/><div className="cartItems"><p>+{quant}</p></div></Link>
             </li>
         
      </ul>

    </div>
  );
}

export default NavBar;
