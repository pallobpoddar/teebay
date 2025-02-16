type Props = {
  variant?: "primary" | "secondary";
  onClick: () => void;
  children?: React.ReactNode;
};

const Button = (props: Props) => {
  const baseStyle = "px-4 py-2 rounded-md text-white uppercase";
  const primary = "bg-purple";
  const secondary = "bg-raspberry";

  return (
    <button
      className={
        props.variant &&
        `${baseStyle} ${props.variant === "primary" ? primary : secondary}`
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
