import React from "react";
import "./style/signup.css";

const SignUp = () => {
  return (
    <div className="cont">
      <section>
        <div className="imgBx">
          <img src="mil.jpg" />
        </div>
        <div className="contentBx">
          <div className="formBx">
            <h2>SignUp</h2>
            <form>
              <div className="inputBx">
                <span>First Name</span>
                <input type="text" />
              </div>
              <div className="inputBx">
                <span>Last Name</span>
                <input type="text" />
              </div>
              <div className="inputBx">
                <span>Email</span>
                <input type="text" />
              </div>
              {/* <div className="inputBx">
                <span>Phone</span>
                <input type="text" />
              </div> */}
              <div className="inputBx">
                <span>Password</span>
                <input type="password" />
              </div>
              <div className="inputBx">
                <span>Gender</span>
                <input type="text" />
              </div>
              <div className="inputBx">
                <span>DoB</span>
                <input type="text" />
              </div>
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
export default SignUp;
