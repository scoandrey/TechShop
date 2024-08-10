import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    navigate(SHOP_ROUTE);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink
          style={{ color: "white" }}
          to={SHOP_ROUTE}
          className="navbar-brand"
        >
          Tech Store
        </NavLink>
        {user.isAuth ? (
          <nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            <button
              className="btn btn-outline-success "
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Admin
            </button>
            <button
              className="btn btn-outline-success ms-2"
              onClick={() => logOut()}
            >
              Log out
            </button>
          </nav>
        ) : (
          <nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            <button
              className="btn btn-primary"
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Authorization
            </button>
          </nav>
        )}
      </div>
    </nav>
  );
});

export default NavBar;
