
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Narmada Ventures Group</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for business growth and success. We provide expert guidance
              for all your business consulting needs.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#startup" className="text-gray-300 hover:text-white transition-colors">
                  Business Setup
                </Link>
              </li>
              <li>
                <Link to="/services#registration" className="text-gray-300 hover:text-white transition-colors">
                  Company Registration
                </Link>
              </li>
              <li>
                <Link to="/services#legal" className="text-gray-300 hover:text-white transition-colors">
                  Legal Advisory
                </Link>
              </li>
              <li>
                <Link to="/services#web" className="text-gray-300 hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services#growth" className="text-gray-300 hover:text-white transition-colors">
                  Business Growth Strategy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <address className="text-gray-300 not-italic">
              <p className="mb-2">Inorbit Mall</p>
              <p className="mb-2">Genda Circle, Baroda</p>
              <p className="mb-2">Phone: +91 99999 99999</p>
              <p>Email: info@narmadaventures.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} GrowBiz Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
