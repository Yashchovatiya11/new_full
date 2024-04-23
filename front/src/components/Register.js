import { Link, useNavigate } from 'react-router-dom';
import './Css/Home.css';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './Css/Login.css';
import { MdOutlineEmail } from "react-icons/md";
import { BsShieldLockFill } from "react-icons/bs";
import { CgArrowLongRight } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";


function Register() {

  const Navigate = useNavigate('');


  let [name, setname] = useState('');
  let [email, setemail] = useState('');
  let [password, setpassword] = useState('');
  let [conformpassword, setconformpassword] = useState('');
  let [error, setError] = useState('');

  const btnhandler = () => {
    axios.post('http://localhost:5000/register', {
      name: name,
      email: email,
      password: password,
      conformpassword: conformpassword,
      error: error
    })

      .then(function (response) {
        // handle success
        console.log(response.data);
        if (response.data.status === "success") {
          Navigate("/login")
        }

        else {
          setError(response.data.status);
          // alert("please enter you data");
        }

        if (response.data.status === " ") {
          // setError(response.data.status);
          alert("please enter you data");
        }

        if (response.data.status === "check your email") {
          setError(response.data.status);
          alert("check your password");
        }

        if (response.data.status === "check your password") {
          setError(response.data.status);
          alert("check your password");
        }

        if (response.data.status === "user already registered") {
          alert("user already regiaster");
        }

      })

      .catch(function (error) {
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
                Member Register
              </span>

              <div className="wrap-input100 validate-input" >
                <input
                  type="text"
                  className="input100 mt-1"
                  onChange={(e) => { setname(e.target.value) }}
                  placeholder="Name"
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <BsPerson />
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input
                  type="email"
                  className="input100 mt-1"
                  onChange={(e) => { setemail(e.target.value) }}
                  placeholder="Email"
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
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <BsShieldLockFill />
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input
                  type="password"
                  onChange={(e) => { setconformpassword(e.target.value) }}
                  className="input100 mt-1"
                  placeholder="Re-peat Password"
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <BsShieldLockFill />
                </span>
              </div>

              <div className="container-login100-form-btn">

                <Link onClick={btnhandler} className='w-100'>
                  <button type="submit" className="login100-form-btn">
                    Register
                  </button>
                </Link>

                {/* <button className="login100-form-btn">
                  Login
                </button> */}
              </div>

              <div className="text-center pt-5">
                <Link to="/login">
                  <a className='fw-bold' href="#">
                    You have already register?
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

export default Register;