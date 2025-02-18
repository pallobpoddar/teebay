type Props = {
  field?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  error?: boolean;
};

const TextArea = (props: Props) => {
  return (
    <textarea
      className={`w-full rounded-sm ${
        props.error
          ? `border border-red-500 focus:outline-red-500`
          : `focus:outline-purple border-2 border-gray`
      } `}
      {...props.field}
    ></textarea>
  );
};

export default TextArea;
