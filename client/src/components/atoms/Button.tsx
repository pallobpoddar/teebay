type Props = {
  variant?: "button-primary" | "button-secondary";
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
};

const Button = (props: Props) => {
  return (
    <button
      className={`${props.variant} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
