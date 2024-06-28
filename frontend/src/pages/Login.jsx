import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginIcon from "../assest/signin.gif";
import { Link, useNavigate } from "react-router-dom";
import summaryApi from "../common";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email === "" || formData.password === "") {
      alert("Please fill all the fields");
      return;
    } else {
      const dataResponse = await fetch(summaryApi.signIn.url, {
        method: summaryApi.signIn.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await dataResponse.json();

      if (dataResponse.status === 200) {
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    }
  };

  return (
    <section id="login">
      <div className="mx-auto container px-4 mt-3">
        <div className="bg-white p-5 w-full max-w-sm mx-auto rounded-lg shadow-md">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcon} alt="login icon" />
          </div>
          <form className="pt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <div className="bg-slate-100 p-2 rounded-md">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email..."
                  className="w-full h-full outline-none bg-transparent"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">
                Password:
              </label>
              <div className="bg-slate-100 p-2 rounded-md flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password..."
                  className="w-full h-full outline-none bg-transparent"
                  required
                />
                <div
                  className="cursor-pointer ml-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <Link
                to="/forgot-password"
                className="block mt-2 w-fit ml-auto hover:underline hover:text-red-600 transition-all text-sm text-gray-500"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:bg-red-700 hover:scale-110 transition-all mx-auto block mt-6"
            >
              Login
            </button>
          </form>
          <p className="my-5 text-center">
            Don&apos;t have an account?{" "}
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
