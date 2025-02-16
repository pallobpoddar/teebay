import Button from "./components/atoms/Button";
import DeleteIcon from "./assets/icons/delete-icon.svg?react";

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
    </>
  );
}

export default App;
