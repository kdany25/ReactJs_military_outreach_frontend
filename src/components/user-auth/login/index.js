import React from "react";
import "./style/Loginstyle.css";

const Loginn = () => {
  return (
    <div className="cont">
    <section>
      <div className="imgBx">
        <img src="mil.jpg" />
      </div>
      <div className="contentBx">
        <div className="formBx">
          <h2>Login</h2>
          <form>
            <div className="inputBx">
              <span>Username</span>
              <input type="text" />
            </div>
            <div className="inputBx">
              <span>Password</span>
              <input type="Password" />
            </div>
            {/* <div className="remember">
              <label>
                <input type="checkbox">
                  Remember me
                </input>
              </label>
            </div> */}
            <div className="inputBx">
              <input type="submit" value="Sign in" />
            </div>
            <div className="inputBx">
              <p>
                Don't have an account?<a href="#"> Sign UP</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      </section>
      </div>
  );
};
export default Loginn;
