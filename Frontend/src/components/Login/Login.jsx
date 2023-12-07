import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../contexts/context";
import Register from "../Register/Register";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./login.css";

export default function Login() {
  const { user, setUser,isLogin,setisLogin } = useContext(MyContext);
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    const loginInfo = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => {
        const token = res.headers.get("token");
        if (token) {
          localStorage.setItem("token", token);
        }
        return res.json();
      })
      .then((result) => {
        if (result.success) {
          setUser(result.data);
         
            navigate("/") 


        } else {
          console.log(result.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="loginPage">
      <NavBar />

      <main className="loginContainer-content">
        <h2>Sign in or Create an Account</h2>

        <form
          className="loginContainer-content form"
          action=""
          onSubmit={loginUser}>
          {/* <label htmlFor="email">Email : </label> */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
          />
          {/* <label htmlFor="password">Password : </label> */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <button className="singIn">Sign In & Continue</button>
        <p>Dont have an Account, please Register. </p>
        <Link to="/register">Create an Account</Link>
        </form>
        
      </main>
    </div>
  );
}
