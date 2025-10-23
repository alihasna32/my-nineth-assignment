import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
const SignUp = () => {
  const { signupWithEmailAndPass, updateUser, setUser } = use(AuthContext);

  const navigate = useNavigate()

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Reset messages first
    setError("");
    setSuccess(false);
    setNameError("");

    // Name validation
    if (name.length <= 5) {
      setNameError("Name must be at least 6 characters long");
      return;
    }

    // Password validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 6 characters long, include at least one uppercase, one lowercase, and one special character."
      );
      return;
    }

    // Create account
    signupWithEmailAndPass(email, password)
      .then((result) => {
        const user = result.user
        setSuccess(true);
        updateUser(name, photo)
        .then(() => {
          setUser({...user, displayName:name, photoURl: photo})
          navigate("/")
        })
        .catch((error) => {
          console.log(error) 
          setUser(user)
        })
        event.target.reset();
      })
      .catch((err) => {
        setError(err.message);
        setSuccess(false);
      });
  };

  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left mb-4">
          <h1 className="text-4xl font-bold">Register your account!</h1>
        </div>

        <div className="card bg-base-300 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                  required
                />
                {nameError && (
                  <p className="text-red-400">
                    Atleast 6 or upper letters can be valid
                  </p>
                )}

                <label className="label">Photo URL</label>
                <input
                  type="photo"
                  name="photo"
                  className="input"
                  placeholder="Photo URL"
                  required
                />

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

                <button type="submit" className="py-1.5 rounded-md text-[18px] mt-4 bg-base-100 w-full shadow-sm shadow-amber-900">
                  Register
                </button>

                <p className="text-center mt-3">
                  Already have an account?{" "}
                  <Link className="font-bold" to="/signin">
                    Log in
                  </Link>
                </p>
              </fieldset>

              {success && (
                <p className="text-green-400 mt-3 text-center">
                  Successfully created! Please log in
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

export default SignUp;
