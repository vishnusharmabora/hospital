import { ToastContainer } from "react-toastify";
import Routes from "./router/Routes";

import "react-toastify/dist/ReactToastify.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./assets/css/global.css";

import "../node_modules/pe7-icon/dist/dist/pe-icon-7-stroke.css";
import AuthContextAPI from "./ContextAPI/AuthContextAPI";

function App() {
  return (
    <>
      <AuthContextAPI>
        <Routes />
        <ToastContainer position="bottom-right" theme="colored" />
      </AuthContextAPI>
    </>
  );
}

export default App;
