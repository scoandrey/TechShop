import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./http/userApi";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(true); 
        user.setIsAuth(true);
      })
      .catch((error) => {
        console.error("Error checking auth:", error);
      }) 
      .finally(() => setLoading(false));
  }, [user]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="grow" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;