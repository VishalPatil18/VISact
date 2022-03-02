import { Alert } from "./components/alert/Alert";
import "./App.css";

import { useState } from "react";

export default function App() {
  const [alertDisplay, setToastDisplay] = useState("none");
  const alertHandler = () => {
    setToastDisplay("flex");
    setTimeout(() => {
      setToastDisplay("none");
    }, 5000);
  };

  const closeHandler = () => {
    setToastDisplay("none");
  };

  return (
    <div className="App">
      <button className="button btn-solid-primary" onClick={alertHandler}>
        Show Alert
      </button>
      {alertDisplay !== "none" && (
        <Alert
          variant="wicon"
          action="success"
          position="top-right"
          closeHandler={closeHandler}
          theme="solid-success"
        >
          Login Successful
        </Alert>
      )}
    </div>
  );
}
