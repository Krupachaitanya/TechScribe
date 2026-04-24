import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, Circle, ArrowLeft, ArrowRight, Menu, X, Code, Play, BookOpen, ExternalLink } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import { courses } from '../data/courses';
import './CourseView.css';

const CourseView = () => {
  const { techId } = useParams();
  const [course, setCourse] = useState(null);
  const [activeChapter, setActiveChapter] = useState(0);
  const [completedChapters, setCompletedChapters] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    let currentCourse = courses[techId];
    if (!currentCourse) {
      currentCourse = {
        title: techId.toUpperCase(),
        description: `Comprehensive, professional-grade curriculum for ${techId}. Master the core concepts with hands-on examples.`,
        curriculum: [
          {
            chapter: 'Introduction & Setup',
            content: `Welcome to the ${techId} module. Our curriculum engineers are actively building premium content for this stack.`,
            code: '// Implementation coming soon...\nconsole.log("Stay tuned!");'
          }
        ]
      };
    }
    setCourse(currentCourse);
    setActiveChapter(0);
    
    // Load saved progress from localStorage
    const savedProgress = localStorage.getItem(`techscribe_progress_${techId}`);
    if (savedProgress) {
      try {
        setCompletedChapters(JSON.parse(savedProgress));
      } catch (e) {
        setCompletedChapters({});
      }
    } else {
      setCompletedChapters({});
    }
    
    // SEO Optimization: Update Title and Meta Description dynamically
    document.title = `${currentCourse.title} Complete Guide | TechScribe`;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
    }
    metaDescription.content = currentCourse.description;
    
  }, [techId]);

  if (!course) return (
    <div className="course-view-layout">
        <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading curriculum...</p>
        </div>
    </div>
  );

  const currentChapter = course.curriculum[activeChapter];
  const totalChapters = course.curriculum.length;
  const completedCount = Object.keys(completedChapters).length;
  const progressPercent = totalChapters === 0 ? 0 : Math.round((completedCount / totalChapters) * 100);

  const toggleComplete = (index) => {
    setCompletedChapters(prev => {
      const newMap = { ...prev };
      if (newMap[index]) delete newMap[index];
      else newMap[index] = true;
      
      // Persist progress to local storage
      localStorage.setItem(`techscribe_progress_${techId}`, JSON.stringify(newMap));
      
      return newMap;
    });
  };

  const handleNext = () => {
    if (activeChapter < totalChapters - 1) setActiveChapter(prev => prev + 1);
  };

  const handlePrev = () => {
    if (activeChapter > 0) setActiveChapter(prev => prev - 1);
  };

  return (
    <div className="course-view-layout">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)} aria-label="Close sidebar overlay"></div>
      )}

      {/* Semantic Aside for Chapters */}
      <aside className={`course-sidebar ${isSidebarOpen ? 'open' : ''}`} aria-label="Course curriculum sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-title">
            <span className="gradient-text">{course.title}</span> Masterclass
          </h2>
          <button className="mobile-close-btn" onClick={() => setIsSidebarOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        
        {/* Progress Tracker */}
        <div className="progress-container">
          <div className="progress-header">
            <span className="progress-label">Course Progress</span>
            <span className="progress-value">{progressPercent}%</span>
          </div>
          <div className="progress-bar-bg" aria-valuenow={progressPercent} aria-valuemin="0" aria-valuemax="100">
             <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>

        <nav className="chapter-nav" aria-label="Chapters navigation">
            <ul className="chapter-list">
            {course.curriculum.map((item, index) => {
                const isCompleted = !!completedChapters[index];
                return (
                <li 
                    key={index} 
                    className={`chapter-item ${activeChapter === index ? 'active-chapter' : ''} ${isCompleted ? 'completed-chapter' : ''}`}
                    onClick={() => {
                    setActiveChapter(index);
                    if (window.innerWidth <= 992) setIsSidebarOpen(false);
                    }}
                >
                    <div 
                      className="chapter-status" 
                      onClick={(e) => { e.stopPropagation(); toggleComplete(index); }}
                      role="button"
                      aria-label={`Mark chapter ${index + 1} as ${isCompleted ? 'incomplete' : 'complete'}`}
                    >
                    {isCompleted ? <CheckCircle size={20} className="icon-success" /> : <Circle size={20} className="icon-muted" />}
                    </div>
                    <div className="chapter-info">
                        <span className="chapter-number">Chapter {index + 1}</span>
                        <span className="chapter-name">{item.chapter}</span>
                    </div>
                </li>
                );
            })}
            </ul>
        </nav>
      </aside>

      {/* Main Content Area: Semantic main tag for SEO */}
      <main className="course-main" role="main">
        <header className="course-header">
          <div className="course-title-wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <button className="mobile-menu-btn" onClick={() => setIsSidebarOpen(true)} aria-label="Open course menu">
                <Menu size={28} />
              </button>
              <h1 className="course-h1">{course.title} Curriculum</h1>
            </div>
            {course.videoUrl && (
              <a 
                href={course.videoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="youtube-btn"
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(239, 68, 68, 0.1)', 
                  color: '#ef4444', padding: '10px 20px', borderRadius: 'var(--radius-md)', 
                  textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem',
                  border: '1px solid rgba(239, 68, 68, 0.2)', transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <FaYoutube size={20} /> Watch Video Playlist
              </a>
            )}
          </div>
          <p className="course-desc" style={{ marginTop: '15px' }}>{course.description}</p>
        </header>
        
        {/* Article tag for individual module content */}
        <article className="chapter-content">
          <header className="chapter-title-row">
             <h2 className="chapter-h2">{activeChapter + 1}. {currentChapter.chapter}</h2>
             <button 
                className={`complete-btn ${completedChapters[activeChapter] ? 'completed' : ''}`}
                onClick={() => toggleComplete(activeChapter)}
                aria-label={completedChapters[activeChapter] ? "Marked as completed" : "Mark chapter as complete"}
             >
                {completedChapters[activeChapter] ? (
                    <><CheckCircle size={18} /> Completed</>
                ) : (
                    <><Circle size={18} /> Mark as Complete</>
                )}
             </button>
          </header>
          
          <section className="chapter-text-section">
            <p className="chapter-text">{currentChapter.content}</p>
          </section>
          
          <section className="code-sandbox-wrapper" aria-label="Code Example">
             <div className="code-header">
                <div className="code-header-left">
                    <Code size={18} className="code-icon" />
                    <span>Implementation Example</span>
                </div>
             </div>
             <div className="code-body">
                <pre className="code-block">
                <code>{currentChapter.code}</code>
                </pre>
             </div>
          </section>

          {currentChapter.references && (
            <section className="references-section" style={{ marginTop: '30px', padding: '20px', background: 'rgba(0,0,0,0.1)', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)' }}>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOpen size={18} className="icon-muted" /> External References
              </h3>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                {currentChapter.references.map((ref, idx) => (
                  <a 
                    key={idx}
                    href={ref.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="reference-link"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--card-border)',
                      padding: '10px 15px', borderRadius: 'var(--radius-sm)', color: 'var(--text-muted)',
                      textDecoration: 'none', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '8px',
                      fontSize: '0.9rem', fontWeight: '500'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; }}
                  >
                    {ref.name} <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Pagination Navigation */}
          <nav className="chapter-navigation" aria-label="Pagination">
            <button 
               className="nav-btn prev-btn" 
               onClick={handlePrev} 
               disabled={activeChapter === 0}
               aria-label="Go to previous chapter"
            >
              <ArrowLeft size={18} /> Previous
            </button>
            <button 
               className="nav-btn next-btn" 
               onClick={handleNext} 
               disabled={activeChapter === totalChapters - 1}
               aria-label="Go to next chapter"
            >
              Next Chapter <ArrowRight size={18} />
            </button>
          </nav>
        </article>
      </main>
    </div>
  );
};

export default CourseView;
