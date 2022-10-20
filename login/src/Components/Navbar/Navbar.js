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
        <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
        <Link className='btn btn-ghost normal-case text-xl' to='/'>
          Home
        </Link>

        <Link className='btn btn-ghost normal-case text-xl' to='/login'>
          Log in
        </Link>
        <Link className='btn btn-ghost normal-case text-xl' to='/register'>
          Register
        </Link>
        <Link className='btn btn-ghost normal-case text-xl' to='/Hidden'>
          Hidden
        </Link>
        <Link className='btn btn-ghost normal-case text-xl' to='/profile'>
          Profile
        </Link>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
