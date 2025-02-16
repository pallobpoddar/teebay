import Button from "./components/atoms/Button";
import DeleteIcon from "./assets/icons/delete-icon.svg?react";
import Input from "./components/atoms/Input";
import MultiSelect from "./components/molecules/MultiSelect";
import Select from "./components/molecules/Select";

function App() {
  return (
    <>
      <Button variant="button-primary" onClick={() => {}}>
        Register
      </Button>
      <div className="p-4"></div>
      <Button variant="button-secondary" onClick={() => {}}>
        Logout
      </Button>
      <div className="p-4"></div>
      <Button className="cursor-pointer" onClick={() => {}}>
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
      <div className="p-4"></div>
      <MultiSelect
        placeholder="Select a category"
        options={[
          { id: "1", name: "Electronics" },
          { id: "2", name: "Clothing" },
          { id: "3", name: "Home" },
          { id: "4", name: "Garden" },
          { id: "5", name: "Toys" },
        ]}
      />
      <div className="p-4"></div>
      <Select
        placeholder="Select a category"
        options={[
          { id: "1", name: "Electronics" },
          { id: "2", name: "Clothing" },
          { id: "3", name: "Home" },
          { id: "4", name: "Garden" },
          { id: "5", name: "Toys" },
        ]}
      />
    </>
  );
}

export default App;
