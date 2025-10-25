import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";
import { PenIcon } from "lucide-react";
const Navbar = () => {
  const { user, signOutUser, loading, updateUser, setUser } = use(AuthContext);
  const [isPhoto, setIsPhoto] = useState(false);
  const [isName, setIsName] = useState(false);
  const handleUpdate = (event) => {
    event.preventDefault();
    const name = event.target.name?.value;
    const photo = event.target.photo?.value;
    if (name && name.length <= 5) {
      toast.error("Name must be at least 6 characters long");
      return;
    }
    updateUser(name || user.displayName, photo || user.photoURL)
      .then(() => {
        setUser({
          ...user,
          displayName: name || user.displayName,
          photoURL: photo || user.photoURL,
        });
        setIsName(false);
        setIsPhoto(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update user info.");
      });
  };

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
    <div className="navbar bg-base-300 shadow-sm px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer mr-7  lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
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
              <NavLink to="/aboutgameHub">About GameHub</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl">
          <img className="w-16" src="/Logo.png" alt="" />
        </Link>
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
              <NavLink to="/aboutgameHub">About GameHub</NavLink>
            </li>
          </ul>
        </div>

        {user ? (
          <div className="flex gap-5">
            <title>Profile</title>
            <img
              onClick={() => document.getElementById("my_modal_1").showModal()}
              tabIndex={0}
              className="w-12 h-12 border rounded-full cursor-pointer"
              src={user.photoURL}
              alt="Profile"
            />
            <dialog id="my_modal_1" className="modal">
              <form className="modal-box" onSubmit={handleUpdate}>
                <div className="">
                  <div className="flex justify-center mt-6 relative">
                    <img
                      tabIndex={0}
                      className="w-40 h-40 rounded-full object-cover border-4 border-accent shadow-md"
                      src={user.photoURL}
                      alt="Profile"
                    />
                    <PenIcon
                      onClick={() => setIsPhoto(true)}
                      className="absolute right-43 top-8 w-8 h-8 cursor-pointer fill-black hover:text-accent transition"
                    />
                    {isPhoto && (
                      <input
                        type="text"
                        name="photo"
                        className="input bg-base-300 mt-3 h-13"
                        placeholder="Photo URL"
                      />
                    )}
                  </div>

                  <div className="flex justify-center items-center text-2xl mt-4 gap-3">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user.displayName}
                      className="input bg-base-300"
                    />
                  </div>

                  <div className="modal-action flex justify-between">
                    <button
                      type="submit"
                      className="w-screen border py-2 rounded-2xl px-14 bg-base-300"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <button
              onClick={handleLogOut}
              className="border btn bg-base-100 rounded-xl font-semibold"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center sm:flex-row gap-4">
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
