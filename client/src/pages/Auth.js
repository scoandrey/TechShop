import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <div className="card p-5" style={{ width: 600 }}>
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <form className="d-flex flex-column">
          <input
            className="form-control mb-3 mt-3"
            type="email"
            placeholder="Email"
          ></input>
          <input
            className="form-control mb-3"
            type="password"
            placeholder="Password"
          ></input>
          <div className="d-flex justify-content-between">
            {isLogin ? (
              <NavLink to={REGISTRATION_ROUTE}>
                <button className="btn btn-info" style={{ width: 150 }}>
                  Registration
                </button>
              </NavLink>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <button
                  className="btn btn-info align-self-end"
                  style={{ width: 150 }}
                >
                  Enter
                </button>
              </NavLink>
            )}
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: 150 }}
            >
              {isLogin ? "Login" : "Registration"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
