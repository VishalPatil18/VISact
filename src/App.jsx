import { Button } from "./components/button/Button";
import { Icon } from "@iconify/react";
import { icons } from "./utilities/icons";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Button size="sm">btn-sm</Button>
      <Button size="md">btn-md</Button>
      <Button size="lg">btn-lg</Button>
      <Button variant="link">Link</Button>
      <Button theme="solid-primary">
        <Icon icon={icons.login} />
        Login
      </Button>
      <Button theme="solid-primary">
        Add to Cart
        <Icon icon={icons.cart} />
      </Button>
      <Button theme="solid-primary" shape="sharp"> 
        Sharp
      </Button>
      <Button theme="solid-primary" shape="square">
        Square
      </Button>
      <Button theme="solid-primary" shape="rounded">
        Rounded
      </Button>
      <Button variant="action" theme="solid-primary">
        <Icon icon={icons.plus} />
      </Button>
      <div style={{display: "flex", gap:"var(--space-xs)"}}>
        <Button variant="action" theme="action-twitter">
          <Icon icon={icons.twitter} />
        </Button>
        <Button variant="action" theme="action-linkedin">
          <Icon icon={icons.linkedin} />
        </Button>
        <Button variant="action" theme="action-instagram">
          <Icon icon={icons.instagram} />
        </Button>
        <Button variant="action" theme="action-facebook">
          <Icon icon={icons.facebook} />
        </Button>
        <Button variant="action" theme="action-github">
          <Icon icon={icons.github} />
        </Button>
        <Button variant="action" theme="action-medium">
          <Icon icon={icons.medium} />
        </Button>
        <Button variant="action" theme="action-whatsapp">
          <Icon icon={icons.whatsapp} />
        </Button>
      </div>
      <Button theme="outline-secondary" shape="square">
        Outline Secondary
      </Button>
      <Button theme="solid-dark" shape="square">
        Solid Danger
      </Button>
      
    </div>
  );
};

export default App;
