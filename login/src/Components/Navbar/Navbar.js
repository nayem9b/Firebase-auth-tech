import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      </div>
    </div>
  );
};

export default Navbar;
