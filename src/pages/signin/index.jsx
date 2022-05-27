import React, { useReducer } from "react";
import "./signin.css";

import { ToastContainer, toast } from "react-toastify";
// import ClipLoader from "react-spinners/ClipLoader";
// import { usePostRequest } from "../../requests/api";
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

// login details : email = admin@admin.com, password= admin-@12345

const Index = () => {
  const reducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };
  const [state, setState] = useReducer(reducer, {});
  // const { postRequest, loading, errMsg } = usePostRequest();
  const navigate = useNavigate();

  const changeRoute = () => {
    navigate("/dashboard");
  };

  const notify = (msg) => toast(msg);

  const handleChange = (e) => {
    setState({
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.email || !state.password) {
      notify("Inputs must not be empty");
    } else {
      // console.log(state);
      // postRequest("/login", changeRoute, notify(errMsg));
      signInWithEmailAndPassword(auth, state.email, state.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          changeRoute()
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          alert(error.message)
        });
    }
  };

  return (
    <div className="report-two">
      {/* {loading && (
        <div className="signin-loader">
          <ClipLoader color="white" loading={loading} size={150} />
        </div>
      )} */}
      <div className="form-container">
        <h1 className="page-title">Login To Admin</h1>

        <form action="" className="form-box">
          <div className="input-box">
            <label htmlFor="" className="label">
              Email
            </label>

            <input
              type="email"
              className="input"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <label htmlFor="" className="label">
              Password
            </label>

            <input
              type="password"
              className="input"
              name="password"
              onChange={handleChange}
            />
          </div>

          <button className="form-btn" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Index;
