import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [pathname]);

  const logoutbuttonfuncation = async () => {
    try {
      await axios.post("http://localhost:5000/user/user-logout");
      localStorage.removeItem("token");
      setIsLogged(false);
      setMenuOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">
          STACKMART
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg items-center">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>

          <Link to="/products" className="hover:text-blue-400 transition">
            Products
          </Link>

          <Link to="/about" className="hover:text-blue-400 transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact Us
          </Link>

          <Link to="/addtocart" className="hover:text-blue-400 transition">
            AddToCart
          </Link>

          {isLogged ? (
            <button
              onClick={logoutbuttonfuncation}
              className="bg-red-500 px-4 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/userRegister"
              className="bg-blue-500 px-4 py-1 rounded-lg hover:bg-blue-600 transition"
            >
              User-Register
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 mt-4 p-4 rounded-lg space-y-4 text-center">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">
            Home
          </Link>

          <Link to="/products" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">
            Products
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">
            About
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">
            Contact Us
          </Link>

          <Link to="/addtocart" onClick={() => setMenuOpen(false)} className="block hover:text-blue-400">
            AddToCart
          </Link>

          {isLogged ? (
            <button
              onClick={logoutbuttonfuncation}
              className="w-full bg-red-500 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/userRegister"
              onClick={() => setMenuOpen(false)}
              className="block bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              User-Register
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
