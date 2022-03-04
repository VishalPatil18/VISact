import { Avatar } from "./components/avatar/Avatar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Avatar size="xl" />
      <Avatar variant="img" size="xl" shape="circle" />
    </div>
  );
};

export default App;
