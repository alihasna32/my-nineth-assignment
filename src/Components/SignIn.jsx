import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../Contexts/AuthContext";
import { GrGoogle } from "react-icons/gr";
import { GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
  const { signinWithAndPass, signInWithGoogle } = use(AuthContext);

  const provider = new GoogleAuthProvider();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    setError("");
    setSuccess(false);

    signinWithAndPass(email, password)
      .then((result) => {
        setSuccess(result.user);
        toast("Successfully logged in!", {
          position: "top-center",
          autoClose: 1000,
        });
        event.target.reset();
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
      });
  };

  const handleGoogleSignIn = (event) => {
    event.preventDefault();

    signInWithGoogle(provider)
      .then(() => {
        toast.success("Sign in successfully with google");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left mb-4">
          <h1 className="text-4xl font-bold">Login your account!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />

                <button type="submit" className="btn btn-neutral mt-4 w-full">
                  Login
                </button>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn bg-white text-black border-[#e5e5e5]"
                >
                  <GrGoogle></GrGoogle>
                  Login with Google
                </button>

                <p className="text-center mt-3">
                  Already have an account?{" "}
                  <Link className="text-blue-500" to="/signup">
                    Register
                  </Link>
                </p>
              </fieldset>
              {success && (
                <p className="text-green-400 mt-3 text-center">
                  Login successfull!
                </p>
              )}
              {error && (
                <p className="text-red-400 mt-3 text-center">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
