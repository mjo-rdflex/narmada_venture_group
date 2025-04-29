
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-brand-500 font-bold text-2xl">Narmada</span>
            <span className="text-gray-700 font-semibold">Ventures Group</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-brand-500"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-500 font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-brand-500 font-medium">
              Services
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-brand-500 font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-500 font-medium">
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 flex flex-col space-y-4 animate-fade-in">
            <Link
              to="/"
              className="text-gray-700 hover:text-brand-500 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-brand-500 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-brand-500 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-brand-500 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
