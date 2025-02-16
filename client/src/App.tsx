import Button from "./components/atoms/Button";
import DeleteIcon from "./assets/icons/delete-icon.svg?react";
import Input from "./components/atoms/Input";
import MultiSelect from "./components/molecules/MultiSelect";
import Select from "./components/molecules/Select";
import Modal from "./components/organisms/Modal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button variant="button-primary" onClick={() => {}}>
        REGISTER
      </Button>
      <div className="p-4"></div>
      <Button variant="button-secondary" onClick={() => {}}>
        LOGOUT
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
      <div className="p-4"></div>
      <Button variant="button-primary" onClick={handleClick}>
        Open Modal
      </Button>
      <Modal
        variant="rent"
        isOpen={isModalOpen}
        onConfirm={handleConfirm}
        onClose={handleClose}
      />
    </>
  );
}

export default App;
