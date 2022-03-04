import { Badge } from "./components/badge/Badge";
import { Avatar } from "./components/avatar/Avatar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <button className="badge-container">
        Button
        <Badge variant="numeric" value="12+" />
      </button>

      <div className="badge-container">
        <Avatar variant="img" />
        <Badge variant="solid" themeColor="success" />
      </div>

      <div className="badge-container">
        <Avatar variant="img" />
        <Badge variant="outline" themeColor="danger" />
      </div>
    </div>
  );
};

export default App;
