import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-purple-500 sticky top-0 z-10">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to={'/'}>
            <span className="text-2xl text-white font-semibold">Ace</span> 
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <Link to='/' exact activeClassName="text-red-600">
                    Home
                    </Link>
                </li>
                <li  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to='/service'>
                    Services
                    </Link>
                </li>
                <li  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to='/about'>
                    About
                    </Link>
                </li>
                <li  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to='/contact'>
                    Contact Us
                    </Link>
                </li>
                <li>
                <Button className="bg-white text-purple-500 ml-4 ">
                <Link to='/login'>Log In
                </Link>
                </Button>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
