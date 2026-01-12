import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
      : "text-gray-600 hover:text-blue-600";

  return (
    <nav className="flex items-center justify-between px-10 py-4 shadow">
      {/* Left: Logo */}
      <h1 className="text-2xl font-bold">BookVerse</h1>

      {/* Middle: Menu */}
      <div className="flex gap-8">
        <NavLink to="/" className={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/listed-books" className={linkStyle}>
          Listed Books
        </NavLink>
        <NavLink to="/pages-to-read" className={linkStyle}>
          Pages to Read
        </NavLink>
      </div>

      {/* Right: Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 border rounded">Sign In</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
