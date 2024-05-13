// import React from "react";
import './Css/Login.css';
// import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { BsShieldLockFill } from "react-icons/bs";
import { CgArrowLongRight } from "react-icons/cg";


function Login() {

  const navigate = useNavigate();

  let [email, setemail] = useState('');
  let [password, setpassword] = useState('');
  let [error, setError] = useState('');

  const btnhandler = () => {
    console.log(1);


    axios.post('http://localhost:5000/login', {

      email: email,
      password: password,
      error: error

    })
      .then(function (response) {
        // handle success
        console.log(response);
        if (response.data.status == "success") {
          navigate("/home")
          alert("success")
        }

        else {
          setError(response.data.status);
          // alert("User Allready login");
          alert("User Not Found")

          // return false;
        }



        if (response.data.status === " ") {
          setError(response.data.status);
          alert("please enter your email and password");
          // return false;
        }

        if (response.data.status === "user not found") {
          setError(response.data.status);
          alert("check your password");
          // return false;
        }

        if (response.data.status === "check_password") {
          setError(response.data.status);
          alert("check your password");
          // return false;
        }

        if (response.data.status === "user already logged in") {
          setError(response.data.status);
          alert("user already logged in");
          // return false;
        }


      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }


  return (
    <>

      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt immg" data-tilt>

            </div>

            <form className="login100-form validate-form">
              <span className="login100-form-title fw-bold">
                Member Login
              </span>

              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input
                  type="email"
                  className="input100 mt-1"
                  onChange={(e) => { setemail(e.target.value) }}
                  placeholder="Email"
                  id='email'
                  name='email'
                  autoComplete="email"
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <MdOutlineEmail />
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input
                  type="password"
                  onChange={(e) => { setpassword(e.target.value) }}
                  className="input100 mt-1"
                  placeholder="Password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <BsShieldLockFill />
                </span>
              </div>

              <div className="container-login100-form-btn">

                <Link onClick={btnhandler} className='w-100'>
                  <button type="submit" className="login100-form-btn">
                    Login
                  </button>
                </Link>

                {/* <button className="login100-form-btn">
                  Login
                </button> */}
              </div>

              <div className="text-center pt-5">
                <Link to="/forgetpassword">
                  <span className="txt1">
                    Forgot
                  </span>
                  <a className="ps-2" href="#">
                    Username / Password?
                  </a>
                </Link>
              </div>

              <div className="text-center pt-5">
                <Link to="/signup">
                  <a className='fw-bold' href="#">
                    You don't have register?
                    <CgArrowLongRight className='ms-3' />
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}




export default Login;