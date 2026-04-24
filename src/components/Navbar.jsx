import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Code2, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 992) setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 992) setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Reset dropdown when toggling menu
  };

  const handleDropdownClick = (menu) => {
    if (window.innerWidth <= 992) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="mega-navbar">
      <div className="nav-brand">
        <Link to="/">
          <Code2 size={28} className="brand-icon" />
          <span>TechScribe</span>
        </Link>
      </div>

      <button className="mobile-nav-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {/* Dropdown 1: Basic */}
        <div 
          className="nav-item dropdown"
          onMouseEnter={() => handleMouseEnter('basic')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleDropdownClick('basic')}
        >
          <span className="nav-link">Basic <ChevronDown size={14} /></span>
          {activeDropdown === 'basic' && (
            <div className="dropdown-menu">
              <Link to="/tech/html">HTML & HTML5</Link>
              <Link to="/tech/css">CSS & CSS3</Link>
              <Link to="/tech/js">JavaScript</Link>
              <Link to="/tech/ts">TypeScript</Link>
            </div>
          )}
        </div>

        {/* Dropdown 2: Frameworks */}
        <div 
          className="nav-item dropdown"
          onMouseEnter={() => handleMouseEnter('frameworks')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleDropdownClick('frameworks')}
        >
          <span className="nav-link">Frameworks <ChevronDown size={14} /></span>
          {activeDropdown === 'frameworks' && (
            <div className="dropdown-menu">
              <Link to="/tech/react">React</Link>
              <Link to="/tech/redux">Redux</Link>
              <Link to="/tech/angular">Angular</Link>
              <Link to="/tech/nextjs">Next.js</Link>
            </div>
          )}
        </div>

        {/* Dropdown 3: Programming */}
        <div 
          className="nav-item dropdown"
          onMouseEnter={() => handleMouseEnter('programming')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleDropdownClick('programming')}
        >
          <span className="nav-link">Programming <ChevronDown size={14} /></span>
          {activeDropdown === 'programming' && (
            <div className="dropdown-menu">
              <Link to="/tech/python">Python</Link>
              <Link to="/tech/java">Java</Link>
            </div>
          )}
        </div>

        <Link to="/tech/dotnet" className="nav-link">.NET</Link>
        <Link to="/tech/nodejs" className="nav-link">NodeJS</Link>
        <Link to="/tech/express" className="nav-link">ExpressJs</Link>
        <Link to="/tech/spring" className="nav-link">Spring Boot</Link>

        {/* Dropdown 4: Databases */}
        <div 
          className="nav-item dropdown"
          onMouseEnter={() => handleMouseEnter('sql')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleDropdownClick('sql')}
        >
          <span className="nav-link">Databases <ChevronDown size={14} /></span>
          {activeDropdown === 'sql' && (
            <div className="dropdown-menu">
              <Link to="/tech/sql">SQL</Link>
              <Link to="/tech/mysql">MySQL</Link>
              <Link to="/tech/mongodb">MongoDB</Link>
              <Link to="/tech/postgresql">PostgreSQL</Link>
            </div>
          )}
        </div>

        {/* Stacks */}
         <div 
          className="nav-item dropdown"
          onMouseEnter={() => handleMouseEnter('stacks')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleDropdownClick('stacks')}
        >
          <span className="nav-link">Full Stacks <ChevronDown size={14} /></span>
          {activeDropdown === 'stacks' && (
            <div className="dropdown-menu">
              <Link to="/tech/mern">MERN Stack</Link>
              <Link to="/tech/mean">MEAN Stack</Link>
              <Link to="/tech/python-full">Python Full Stack</Link>
              <Link to="/tech/java-full">Java Full Stack</Link>
            </div>
          )}
        </div>

        <Link to="/compiler" className="nav-link compiler-btn">Compiler</Link>
      </div>
    </nav>
  );
};

export default Navbar;
