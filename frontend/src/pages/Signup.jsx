import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginIcon from "../assest/signin.gif";
import { Link, useNavigate } from "react-router-dom";
import summaryApi from "../common";
import { toast } from "react-toastify";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Password and confirm password do not match");
    } else {
      const dataResponse = await fetch(summaryApi.signUp.url, {
        method: summaryApi.signUp.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.full_name,
          phone_number: formData.phone,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await dataResponse.json();
      if (dataResponse.ok && dataResponse.status === 201) {
        toast.success(data.message);
        setFormData({
          full_name: "",
          phone: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    }
  };

  return (
    <section id="signup">
      <div className="mx-auto container px-4 mt-3">
        <div className="bg-white p-5 w-full max-w-sm mx-auto rounded-lg shadow-md">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcon} alt="signup icon" />
          </div>
          <form className="pt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="full_name" className="block mb-2">
                Full Name
              </label>
              <div className="bg-slate-100 p-2 rounded-md">
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Enter first name..."
                  className="w-full h-full outline-none bg-transparent"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2">
                Phone
              </label>
              <div className="bg-slate-100 p-2 rounded-md">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number..."
                  className="w-full h-full outline-none bg-transparent"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
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
                Password
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
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block mb-2">
                Confirm Password
              </label>
              <div className="bg-slate-100 p-2 rounded-md flex items-center">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password..."
                  className="w-full h-full outline-none bg-transparent"
                  required
                />
                <div
                  className="cursor-pointer ml-2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:bg-red-700 hover:scale-110 transition-all mx-auto block mt-6"
            >
              Sign Up
            </button>
          </form>
          <p className="my-5 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-red-600 hover:text-red-700 hover:underline transition-all"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
