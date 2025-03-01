import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormErrors {
  userName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

interface FormState {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialState = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignupForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const { email, password, userName, confirmPassword } = formData;
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    const errors: FormErrors = {};

    if (!userName.trim()) {
      errors.userName = "Username is required.";
    }

    if (!email.trim()) {
      errors.email = "Email is required.";
    }

    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match!";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const user = { userName, email, password };

      localStorage.setItem("user", JSON.stringify(user));

      console.log("User signed up:", formData);
      setLoading(false);
      navigate("/start");
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button className="text-[14px] border border-[#D6D1F8] px-12 sm:px-24 py-3 rounded-lg text-center flex items-center justify-center gap-2">
        <img src="Google.svg" alt="Google Icon" />
        Sign up with Google
      </button>

      <div className="text-center flex items-center gap-4 py-4">
        <div className="w-32 h-[1px] bg-[#D6D1F8]"></div>
        Or
        <div className="w-32 h-[1px] bg-[#D6D1F8]"></div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="sm:w-[350px] w-[300px] flex flex-col pb-4">
          <label className="font-bold pb-2 inline-block text-[15px]">
            Username
          </label>
          <input
            className="px-3 py-2.5 rounded-md placeholder:text-sm border border-[#D6D1F8] focus:outline-none"
            type="text"
            name="userName"
            placeholder="Username"
            value={userName}
            onChange={handleChange}
          />
          {formErrors.userName && (
            <p className="text-red-500 text-sm">{formErrors.userName}</p>
          )}
        </div>

        <div className="pb-4">
          <label className="font-bold pb-2 inline-block text-[15px]">
            Email
          </label>
          <input
            className="px-3 py-2.5 rounded-md w-[100%] placeholder:text-sm border border-[#D6D1F8] focus:outline-none"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm">{formErrors.email}</p>
          )}
        </div>

        <div className="pb-4">
          <label className="font-bold pb-2 inline-block text-[15px]">
            Password
          </label>
          <div className="flex items-center relative">
            <input
              className="px-3 py-2.5 rounded-md w-[100%] placeholder:text-sm border border-[#D6D1F8] focus:outline-none"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              value={password}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={faEye}
              size="1x"
              onClick={togglePasswordVisibility}
              className={`${
                !showPassword ? "text-black" : "text-grey"
              } absolute cursor-pointer right-2`}
            />
          </div>
          {formErrors.password && (
            <p className="text-red-500 text-sm">{formErrors.password}</p>
          )}
        </div>

        <div className="pb-2">
          <label className="font-bold pb-2 inline-block text-[15px]">
            Confirm Password
          </label>
          <div className="flex items-center relative">
            <input
              className="px-3 py-2.5 rounded-md w-[100%] placeholder:text-sm border border-[#D6D1F8] focus:outline-none"
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={faEye}
              size="1x"
              onClick={togglePasswordVisibility}
              className={`${
                !showPassword ? "text-black" : "text-grey"
              } absolute cursor-pointer right-2`}
            />
          </div>
          {formErrors.confirmPassword && (
            <p className="text-red-500 text-sm">{formErrors.confirmPassword}</p>
          )}
        </div>

        <div className="mt-5">
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white rounded-xl py-2 w-[100%] max-w-[400px] cursor-pointer hover:bg-white hover:text-black border duration-300"
          >
            {loading ? "Loading..." : "Create Account"}
          </button>
        </div>
      </form>
    </>
  );
}

export default SignupForm;
