// src/components/shared/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          AdventureSeekers
        </div>

        {/* Desktop Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-gray-700 hover:text-red-600">Home</Link>
          <Link to="/family-trips" className="text-gray-700 hover:text-red-600">Family Trips</Link>
          <Link to="/group-trips" className="text-gray-700 hover:text-red-600">Group Trips</Link>
          <Link to="/mystery-trips" className="text-gray-700 hover:text-red-600">Mystery Trips</Link>
          <Link to="/contact" className="text-gray-700 hover:text-red-600">Contact Us</Link>
        </div>

        {/* Hamburger for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-red-600 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3">
          <Link
            to="/"
            className="block text-gray-700 hover:text-red-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/family-trips"
            className="block text-gray-700 hover:text-red-600"
            onClick={() => setMenuOpen(false)}
          >
            Family Trips
          </Link>
          <Link
            to="/group-trips"
            className="block text-gray-700 hover:text-red-600"
            onClick={() => setMenuOpen(false)}
          >
            Group Trips
          </Link>
          <Link
            to="/mystery-trips"
            className="block text-gray-700 hover:text-red-600"
            onClick={() => setMenuOpen(false)}
          >
            Mystery Trips
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-red-600"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
