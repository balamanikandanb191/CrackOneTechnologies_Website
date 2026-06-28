import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Navigate to homepage sections
  const goToSection = (sectionId) => {
    closeMenu();

    if (location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");

      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <img
            src="/images/logo.png"
            alt="CrackOne"
            className="logo"
          />

          <span>CrackOne Technologies</span>
        </Link>

        {/* Navigation */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <button
            className="nav-btn"
            onClick={() => goToSection("solutions")}
          >
            Solutions
          </button>

          <button
            className="nav-btn"
            onClick={() => goToSection("services")}
          >
            What We Do
          </button>

          <button
            className="nav-btn"
            onClick={() => goToSection("why-choose")}
          >
            Why Us
          </button>

          <button
            className="nav-btn"
            onClick={() => goToSection("process")}
          >
            Process
          </button>

          <Link
            to="/about"
            onClick={closeMenu}
          >
            Who We Are
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </Link>

        </div>

        {/* Right Side */}
        <div className="navbar-right">

          <Link
            to="/contact"
            onClick={closeMenu}
          >
            <button className="cta-btn">
              Let's Talk
            </button>
          </Link>

          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

        </div>

      </div>

    </nav>
  );
}