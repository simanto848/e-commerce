import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import loginIcon from "../assest/signin.gif";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section id="login">
      <div className="mx-auto container px-4 mt-3">
        <div className="bg-white p-2 py-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcon} alt="login icon" />
          </div>
          <form className="pt-6">
            <div className="grid">
              <label htmlFor="">Email:</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Enter email..."
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="">Password:</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password..."
                  className="w-full h-full outline-none bg-transparent"
                />
                <div className="cursor-pointer">
                  <span>
                    {showPassword ? (
                      <FaEyeSlash
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <FaEye onClick={() => setShowPassword(!showPassword)} />
                    )}
                  </span>
                </div>
              </div>
              <Link
                to="/forgot-password"
                className="block mt-2 w-fit ml-auto hover:underline hover:text-red-600 transition-all text-sm text-gray-500"
              >
                Forgot Password ?
              </Link>
            </div>

            <button className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:bg-red-700 hover:scale-110 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>
          <p className="my-5">
            Don&apos;t have account ?{" "}
            <Link
              to="/sign-up"
              className="text-red-600 hover:text-red-700 hover:underline transition-all"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
