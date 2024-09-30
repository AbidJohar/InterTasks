import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [formStatus, setFormStatus] = useState(true); // true for registration, false for login
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (formStatus) {
      // if user exist then get from local storage if it not then create array 
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.find(user => user.email === data.email);
      if (existingUser) {
        alert("Email already registered. Please log in.");
        return;
      }
      
      // Add new user to the array
      users.push(data);
      // use JSON.stringify to conver the array into json forn, as we know that localstorage only stored strings
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successful! Please log in.");
      setFormStatus(false);
    } else {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );
      
      if (user) {
        // Login successful, save the username and navigate to welcome page
        localStorage.setItem("currentUser", user.username);
        navigate("/welcome");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center   justify-center min-h-screen bg-[#E9E9E9]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white sm:mx-0 mx-4 px-8 pt-0 pb-3 rounded-lg shadow-md w-96"
      >
        <div className="w-full mt-auto flex items-start justify-center">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            alt="logo"
            className="h-28 w-48 object-cover object-top"
          />
        </div>
        <h2 className="text-2xl font-bold text-center mb-2 text-black tracking-tight">
          We are the Realz Solution team
        </h2>

        <p className="text-lg font-semibold text-black/70 mb-2">
          {formStatus ? "Please register an account" : "Please login to your account"}
        </p>
        {formStatus && (
          <>
            <div className="mb-2">
              <input
                {...register("username", { required: "Username is required" })}
                className={`border-[1px] p-2 w-full rounded-sm focus:outline-none ${
                  errors.username ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                id="username"
                placeholder="Username"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>
          </>
        )}
        <div className="mb-2">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`border-[1px] p-2 w-full rounded-sm focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            type="email"
            id="email"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-2">
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`border-[1px] p-2 w-full rounded-sm focus:outline-none ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            type="password"
            id="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white p-2 rounded-sm transition duration-200"
        >
          {formStatus ? "Register" : "Login"}
        </button>
        <p className="text-gray-700 mt-2">
          {formStatus ? "Have an account?" : "Don't have an account?"}
          <a
            onClick={() => setFormStatus((pre) => !pre)}
            href="#"
            className="text-red-500 pl-4 underline"
          >
            {formStatus ? " Click here → Login" : " Click here → Register"}
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
