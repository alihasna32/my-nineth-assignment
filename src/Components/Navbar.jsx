import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-end h-screen items-start p-4">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
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
    <div className="navbar bg-base-300 shadow-sm">
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
            className="menu menu-sm dropdown-content gap-4 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allgames">All Games</NavLink>
            </li>
            <li>
              <NavLink to="/aboutstore">About Store</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-end flex items-center gap-4">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allgames">All Games</NavLink>
            </li>
            <li>
              <NavLink to="/aboutstore">About Store</NavLink>
            </li>
          </ul>
        </div>

        {user ? (
          <div className="dropdown  dropdown-bottom dropdown-end">
            <img
              tabIndex={0}
              className="w-12 h-12 rounded-full"
              src={user.photoURL}
              alt="Profile"
            />
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Name: {user.displayName}</a>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="border bg-base-100 p-1.5 rounded-xl font-semibold flex justify-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-4">
            <li className="list-none">
              <Link
                to="/signin"
                className="border bg-base-100 p-1.5 rounded-xl font-semibold"
              >
                Sign In
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/signup"
                className="border bg-base-100 p-1.5 rounded-xl font-semibold"
              >
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
