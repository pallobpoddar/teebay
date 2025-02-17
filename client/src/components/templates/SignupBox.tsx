import SignupForm from "../organisms/SignupForm";
import { Link } from "react-router-dom";

const SignupBox = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col p-12 border-2 border-gray rounded-xs">
        <h1 className="text-3xl text-center">SIGN UP</h1>
        <SignupForm />
        <p className="text-center">
          Already have an account?{" "}
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "#3d92dc" }}
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupBox;
