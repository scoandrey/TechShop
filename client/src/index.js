import { createRoot } from "react-dom/client";
import App from "./App";
import { createContext } from "react";
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import 'bootstrap/dist/css/bootstrap.min.css'

export const Context = createContext(null);

const root = createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }}
  >
    <App />
  </Context.Provider>
);
