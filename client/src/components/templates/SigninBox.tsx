import { Link } from "react-router-dom";
import SigninForm from "../organisms/SigninForm";

const SigninBox = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col p-12 border-2 border-gray rounded-xs">
        <h1 className="text-3xl text-center">SIGN IN</h1>
        <SigninForm />
        <p className="text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#3d92dc" }}
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninBox;
