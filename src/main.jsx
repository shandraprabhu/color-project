import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Changer from "./changer.jsx";
import TwoWayBinding from "./TwoWayBinding.jsx";
import TimerComponent from "./timer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <TwoWayBinding></TwoWayBinding> */}
    <Changer>  <Changer/>  
    
    {/*<TimerComponent></TimerComponent> */}
  </StrictMode>
);
