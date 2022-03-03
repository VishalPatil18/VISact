import { Alert } from "./components/alert/Alert";
import "./App.css";

import { useState } from "react";

const App = () => {
  const [alertDisplay, setAlertDisplay] = useState("none");
  const alertHandler = () => {
    setAlertDisplay("flex");
    setTimeout(() => {
      setAlertDisplay("none");
    }, 5000);
  };

  const closeHandler = () => {
    setAlertDisplay("none");
  };

  return (
    <div className="App">
      <button className="button btn-solid-primary" onClick={alertHandler}>
        Show Sample Solid Danger Alert
      </button>
      {alertDisplay !== "none" && (
        <Alert
          variant="wicon"
          action="danger"
          position="top-right"
          theme="solid-danger"
          closeHandler={closeHandler}
        >
          Login Failed
        </Alert>
      )}
    </div>
  );
};

export default App;
