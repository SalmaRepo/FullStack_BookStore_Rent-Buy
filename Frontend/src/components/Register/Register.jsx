import "./register.css";

function Register() {
  return (
    <div className="creatusercontainer">
      <div className="createuserboxlogo">
        <div className="be-a-user-wrapper">
          <h2 className="be-a-user">Be A user</h2>
        </div>
        <div className="frame-parent4">
          <div className="embark-on-reading-bliss-wrapper">
            <div className="embark-on-reading">Embark on Reading Bliss</div>
          </div>
          <p className="join-our-bookshop-and-unlock-a-wrapper">
            <div className="join-our-bookshop">
              Join our bookshop and unlock a world of stories waiting to be
              discovered.
            </div>
          </p>
        </div>
        <img className="boocklogo-1-icon" alt="" src="/boocklogo-1@2x.png" />
        <p className="explore-literary-wonders">
          Explore literary wonders, find your next favorite book, and be part of
          a community passionate about reading
        </p>
        <p className="join-us-on">
          Join us on a journey where each page turns into an adventure. Your
          next great read awaits – join our bookshop today
        </p>
      </div>
      <div className="createuserbox">
        <div className="frame-parent5">
          <div className="login-your-account-wrapper">
            <div className="login-your-account">Create an Account</div>
          </div>
          <p className="login-your-account-container">
            <div className="login-your-account">{`Fill in the fields below to create a bn.com account and sign up for Barnes & Noble Rewards. If you already have an account, please sign in.`}</div>
          </p>
        </div>
        <div className="loginboxcontainer">
          <div className="frame-parent6">
            <input className="frame-item" type="text" />
            <input className="frame-item" type="text" />
            <input className="frame-input" type="text" />
            <input className="frame-input" type="text" />
          </div>
          <div className="by-clicking-create-account-y-parent">
            <p className="by-clicking-create-container">
              {`By clicking "Create Account" you agree to the Barnes & Noble Rewards `}
              <a
                className="terms-conditions"
                href=""
                target="_blank"
              >
                <span className="terms-conditions1">{`Terms & Conditions`}</span>
              </a>
              {` and our `}
              <a
                className="terms-conditions"
                href=""
                target="_blank"
              >
                <span className="terms-conditions1">Terms of Use</span>
              </a>
              {`. To see how we may use your information, please take a look at our `}
              <a
                className="terms-conditions"
                href=""
                target="_blank"
              >
                <span className="terms-conditions1">Privacy Policy</span>
              </a>
              .
            </p>
            <div className="frame-parent7">
              <button className="create-account-wrapper">
                <div className="create-account">Create Account</div>
              </button>
              <button className="cancel-wrapper">
                <div className="cancel">Cancel</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register