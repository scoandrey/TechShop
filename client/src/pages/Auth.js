import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async (event) => {
    try {
      event.preventDefault();
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
        console.log(data);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-control mb-3"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="d-flex justify-content-between">
            {isLogin ? (
              <NavLink to={REGISTRATION_ROUTE}>
                <button
                  className="btn btn-info"
                  type="button"
                  style={{ width: 150 }}
                >
                  Registration
                </button>
              </NavLink>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <button
                  className="btn btn-info align-self-end"
                  type="button"
                  style={{ width: 150 }}
                >
                  Enter
                </button>
              </NavLink>
            )}
            <button
              onClick={click}
              className="btn btn-primary"
              style={{ width: 150 }}
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default Auth;
