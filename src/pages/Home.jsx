import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, BookOpen, Layers, TerminalSquare, ArrowRight } from 'lucide-react';
import FeedbackForm from '../components/FeedbackForm';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Master the Modern Web</h1>
        <p className="hero-subtitle">
          The ultimate curriculum platform for scaling from basic syntax to advanced full-stack architectures.
          Structured deeply for interviews and real-world development.
        </p>
        <div className="hero-buttons">
          <Link to="/tech/html" className="btn-primary">Start Learning Now</Link>
          <Link to="/compiler" className="btn-secondary">Open Compiler</Link>
        </div>
      </div>

      <h2 className="section-heading"><BookOpen className="brand-icon" /> Popular Learning Tracks</h2>
      
      <div className="tracks-grid">
        {/* Track Card 1 */}
        <div className="track-card">
          <div className="track-icon">🌐</div>
          <h3 className="track-title">Frontend Foundation</h3>
          <p className="track-desc">
            Master the absolute core of the web. Cover HTML semantics, CSS flexbox/grid, and modern JavaScript (ES6+).
          </p>
          <div className="track-tags">
            <span className="tag">HTML5</span>
            <span className="tag">CSS3</span>
            <span className="tag">JavaScript</span>
          </div>
          <Link to="/tech/html" className="track-link">View Curriculum <ArrowRight size={16} /></Link>
        </div>

        {/* Track Card 2 */}
        <div className="track-card">
          <div className="track-icon">⚛️</div>
          <h3 className="track-title">React Ecosystem</h3>
          <p className="track-desc">
            Dive deep into components, hooks, state management, and modern routing. Built for production-level apps.
          </p>
          <div className="track-tags">
            <span className="tag">React</span>
            <span className="tag">Redux</span>
            <span className="tag">Next.js</span>
          </div>
          <Link to="/tech/react" className="track-link">View Curriculum <ArrowRight size={16} /></Link>
        </div>

        {/* Track Card 3 */}
        <div className="track-card">
          <div className="track-icon">🐍</div>
          <h3 className="track-title">Python Full Stack</h3>
          <p className="track-desc">
            From basic backend scripts to full Django APIs. Learn the language of data and rapid web scaling.
          </p>
          <div className="track-tags">
            <span className="tag">Python 3</span>
            <span className="tag">Django</span>
            <span className="tag">SQL</span>
          </div>
          <Link to="/tech/python" className="track-link">View Curriculum <ArrowRight size={16} /></Link>
        </div>

        {/* Track Card 4 */}
        <div className="track-card">
          <div className="track-icon">☕</div>
          <h3 className="track-title">Java Spring Boot</h3>
          <p className="track-desc">
            The enterprise standard. Learn object-oriented principles, robust backend design patterns, and microservices.
          </p>
          <div className="track-tags">
            <span className="tag">Java</span>
            <span className="tag">Spring Boot</span>
            <span className="tag">OOP</span>
          </div>
          <Link to="/tech/java" className="track-link">View Curriculum <ArrowRight size={16} /></Link>
        </div>

        {/* Track Card 5 */}
        <div className="track-card">
          <div className="track-icon"><Layers color="#60a5fa" /></div>
          <h3 className="track-title">MERN Stack</h3>
          <p className="track-desc">
            The JS monolith. Connect MongoDB, Express, React, and Node for universally rapid startup development.
          </p>
          <div className="track-tags">
            <span className="tag">MongoDB</span>
            <span className="tag">ExpressJS</span>
            <span className="tag">NodeJS</span>
          </div>
          <Link to="/tech/mern" className="track-link">View Curriculum <ArrowRight size={16} /></Link>
        </div>

        {/* Track Card 6 */}
        <div className="track-card">
          <div className="track-icon"><TerminalSquare color="#60a5fa" /></div>
          <h3 className="track-title">Online Compiler</h3>
          <p className="track-desc">
            Don't just read. Write, execute, and practice your data structures directly within our in-browser IDE.
          </p>
          <div className="track-tags">
            <span className="tag">JS</span>
            <span className="tag">Python</span>
            <span className="tag">Java</span>
            <span className="tag">C++</span>
          </div>
          <Link to="/compiler" className="track-link">Open Sandbox <ArrowRight size={16} /></Link>
        </div>
      </div>
      
      <FeedbackForm />
    </div>
  );
};

export default Home;
