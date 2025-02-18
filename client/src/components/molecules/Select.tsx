type Props = {
  placeholder: string;
  options: string[];
  onChange: (value: string) => void;
};

const Select = (props: Props) => {
  return (
    <select
      className="border-2 border-gray rounded-sm outline-gray p-3 w-full"
      onChange={(e) => props.onChange(e.target.value)}
    >
      <option>{props.placeholder}</option>
      {props.options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
};

export default Select;
