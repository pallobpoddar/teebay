import { Link } from "react-router-dom";
import { JSX } from "react";

type Props = {
  title: string;
  form: () => JSX.Element;
  text: string;
  link: string;
};

const FormBox = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col p-12 border-2 border-gray rounded-xs">
        <h1 className="text-3xl text-jet-black text-center">
          {props.title.toUpperCase()}
        </h1>
        <props.form />
        <p className="text-center">
          {props.text}{" "}
          <Link to={props.link} className="text-blue">
            {props.title}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FormBox;
