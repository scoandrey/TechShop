import { createRoot } from "react-dom/client";
import App from "./App";
import { createContext } from "react";
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";

export const Context = createContext(null);

const root = createRoot(document.getElementById("root"));

const containerStyle = {
  height: "100vh", 
  margin: 0,
  padding: 0,
  backgroundColor: "#f0f0f0", 
};

root.render(
  <div style={containerStyle}>
    <Context.Provider
      value={{
        user: new UserStore(),
        device: new DeviceStore(),
      }}
    >
      <App />
    </Context.Provider>
  </div>
);
