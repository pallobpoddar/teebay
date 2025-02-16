import { useState } from "react";
import VisibilityIcon from "../../assets/icons/visibility-icon.svg?react";
import VisibilityOffIcon from "../../assets/icons/visibility-off-icon.svg?react";

type Props = {
  placeholder?: string;
  type?: "text" | "email" | "password" | "datetime-local";
  autocomplete?: string;
  includePasswordIcon?: boolean;
  field?: any;
};

const Input = (props: Props) => {
  const [inputType, setInputType] = useState(props.type);

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <div className="relative flex items-center">
      <input
        className="border-2 border-gray p-3 w-full rounded-sm focus:outline-purple"
        type={inputType}
        placeholder={props.placeholder}
        autoComplete={props.autocomplete}
        {...props.field}
      />
      {props.includePasswordIcon && (
        <span
          className="absolute right-3 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {inputType === "password" ? (
            <VisibilityOffIcon />
          ) : (
            <VisibilityIcon />
          )}
        </span>
      )}
    </div>
  );
};

export default Input;
