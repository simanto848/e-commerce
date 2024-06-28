import { useState } from "react";
import { Link } from "react-router-dom";
import forgotPasswordIcon from "../assest/question.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage(
        "If an account with that email exists, a password reset link has been sent."
      );
      setError("");
    } catch (err) {
      setError("An error occurred. Please try again later.");
      setMessage("");
    }
  };

  return (
    <section id="forgot-password">
      <div className="mx-auto container px-4 mt-3">
        <div className="bg-white p-5 w-full max-w-sm mx-auto rounded-lg shadow-md">
          <div className="w-20 h-20 mx-auto">
            <img src={forgotPasswordIcon} alt="forgot password icon" />
          </div>
          <h2 className="text-center text-2xl font-bold mb-6">
            Forgot Password
          </h2>
          <form className="pt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <div className="bg-slate-100 p-2 rounded-md">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter email..."
                  className="w-full h-full outline-none bg-transparent"
                  required
                />
              </div>
            </div>
            {message && <p className="text-green-600 mb-4">{message}</p>}
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:bg-red-700 hover:scale-110 transition-all mx-auto block mt-6"
            >
              Submit
            </button>
          </form>
          <p className="my-5 text-center">
            Remembered your password?{" "}
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

export default ForgotPassword;
