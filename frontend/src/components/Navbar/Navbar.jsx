// components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-8 w-full top-0 z-50 fixed">
      <div className="max-w-5xl mx-auto flex gap-6 text-sm font-medium justify-around">
        <Link to="/" className="hover:text-gray-300 text-xl">Profile</Link>
        <Link to="/skills" className="hover:text-gray-300 text-xl">Skills</Link>
        <Link to="/projects" className="hover:text-gray-300 text-xl">Projects</Link>
        <Link to="/admin" className="hover:text-gray-300 text-xl">Admin</Link>
      </div>
    </nav>
  );
}
 