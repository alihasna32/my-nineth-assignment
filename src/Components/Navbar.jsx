import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { Bounce, toast, ToastContainer } from "react-toastify";
const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast("Logged out successfully", {
          position: "top-center",
          autoClose: 1000,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>All Games</NavLink>
            </li>
            <li>
              <NavLink>About Store</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-end flex items-center gap-4">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>All Games</NavLink>
            </li>
            <li>
              <NavLink>About Store</NavLink>
            </li>
          </ul>
        </div>

        {user ? (
          <div className="dropdown dropdown-bottom dropdown-end">
            <img
              tabIndex={0}
              className="w-12 h-12 rounded-full"
              src={user.photoURL}
              alt="Profile"
            />
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>{user.displayName}</a>
              </li>
              <li>
                <button onClick={handleLogOut} className="btn btn-primary">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link to="/signin" className="btn">
              Sign In
            </Link>
            <Link to="/signup" className="btn">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
