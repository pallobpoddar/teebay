import { Link } from "react-router-dom";
import SigninForm from "../organisms/SigninForm";

const SigninBox = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col p-12 border-2 border-gray rounded-xs">
        <h1>SIGN IN</h1>
        <SigninForm />
        Don't have an account?
        <Link to="/signup" style={{ textDecoration: "none", color: "#3e5962" }}>
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SigninBox;
