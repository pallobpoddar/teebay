type Option = {
  id: string;
  name: string;
};

type Props = {
  placeholder: string;
  options: Option[];
};

const Select = (props: Props) => {
  return (
    <select className="border-2 border-gray rounded-sm outline-gray p-3 w-full">
      <option>{props.placeholder}</option>
      {props.options.map((option) => (
        <option key={option.id}>{option.name}</option>
      ))}
    </select>
  );
};

export default Select;
