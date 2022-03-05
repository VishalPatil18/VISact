import { Chips } from "./components/chips/Chips";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Chips>basic</Chips>
      <Chips variant="dismissible">dismissible</Chips>
      <Chips shape="sharp">sharp</Chips>
      <Chips shape="square">square</Chips>
      <Chips shape="rounded">rounded</Chips>
      <Chips variant="dismissible" theme="primary">
        primary
      </Chips>
    </div>
  );
};

export default App;
