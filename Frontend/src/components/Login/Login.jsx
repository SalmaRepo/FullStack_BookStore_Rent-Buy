import "./login.css";

function Login() {
  (
    <>
      <div className="logincontainer">
        <h2 className="loginTitle">Sign in or Create an Account</h2>
        <div className="loginboxcontainer1">
          <input
            className="loginboxcontainer-child"
            placeholder="Email Address"
            type="text"
          />
          <input
            className="loginboxcontainer-child"
            placeholder="Password"
            type="text"
          />
          <div className="forgot-your-password-wrapper">
            <div className="forgot-your-password">Forgot your password?</div>
          </div>
          <button className="sign-in-continue-wrapper">
            <div className="sign-in">{`Sign In & Continue`}</div>
          </button>
          <button className="create-an-account-wrapper">
            <div className="create-an-account">
              Create an Account
            </div>
          </button>
        </div>
        <div className="signingWrapper">
          <div className="signingContainer">
            {`By signing in you are agreeing to our `}
            <a
              className="terms-of-use2"
              href=""
              target="_blank"
            >
              <span className="terms-of-use3">Terms of Use</span>
            </a>
            {` and our `}
            <a
              className="terms-of-use2"
              href=""
              target="_blank"
            >
              <span className="terms-of-use3">Privacy Policy</span>
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Login;
