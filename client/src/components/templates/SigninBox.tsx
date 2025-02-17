import { Link } from "react-router-dom";
import SigninForm from "../organisms/SigninForm";

const SigninBox = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col p-12 border-2 border-gray rounded-xs">
        <h1 className="text-3xl text-jet-black text-center">SIGN IN</h1>
        <SigninForm />
        <p className="text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninBox;
