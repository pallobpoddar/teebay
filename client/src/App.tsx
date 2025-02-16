import Button from "./components/atoms/Button";
import DeleteIcon from "./assets/icons/delete-icon.svg?react";
import Input from "./components/atoms/Input";

function App() {
  return (
    <>
      <Button variant="primary" onClick={() => {}}>
        Register
      </Button>
      <div className="p-4"></div>
      <Button variant="secondary" onClick={() => {}}>
        Logout
      </Button>
      <div className="p-4"></div>
      <Button onClick={() => {}}>
        <DeleteIcon />
      </Button>
      <div className="p-4"></div>
      <Input placeholder="Email" type="email" autocomplete="on" />
      <div className="p-4"></div>
      <Input
        placeholder="Password"
        type="password"
        autocomplete="on"
        includePasswordIcon
      />
      <div className="p-4"></div>
      <Input placeholder="Password" type="password" autocomplete="on" />
    </>
  );
}

export default App;
