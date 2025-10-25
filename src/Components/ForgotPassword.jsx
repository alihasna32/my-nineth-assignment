import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { passwordReset } = use(AuthContext);
  const handleResetPassword = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    passwordReset(email)
      .then((result) => {
        toast.success("Check Your Email", {
          position: "top-center",
          autoClose: 1000,
        });
        setTimeout(() => {
          window.location.href = "https://mail.google.com/";
        }, 1200);
      })

      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="hero bg-base-100 min-h-screen">
    <title>Forgot password</title>
      <form
        onSubmit={handleResetPassword}
        className="card bg-base-300 w-full max-w-sm shadow-2xl card-body"
      >
        <label className="label">Enter your valid email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          required
        />
        <button
          type="submit"
          className="py-1.5 rounded-md text-[18px] mt-4 bg-base-100 max-w-[320px] shadow-sm shadow-amber-900 cursor-pointer"
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
