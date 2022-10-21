import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(console.log("User logged out"))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className='navbar bg-base-100'>
        <a className='btn btn-ghost normal-case text-xl relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100'>
          daisyUI
        </a>
        <Link
          className='btn btn-ghost normal-case text-xl relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100 relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100'
          to='/'>
          Home
        </Link>
        {user ? (
          <div>
            <Link
              className='btn btn-ghost normal-case text-xl relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100'
              to='/profile'>
              Profile
            </Link>
            <Link
              className='btn btn-ghost normal-case text-xl relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100'
              to='/Hidden'>
              Hidden
            </Link>

            <Link
              className='btn btn-ghost normal-case text-xl relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100'
              to='/varified'>
              Varified
            </Link>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        ) : (
          <>
            <Link
              className='btn btn-ghost normal-case text-xl relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100 relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100'
              to='/login'>
              Log in
            </Link>
            <Link
              className='btn btn-ghost normal-case text-xl relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100'
              to='/register'>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
