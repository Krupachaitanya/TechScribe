import React, { useState, useEffect } from 'react';
import { Star, Trash2, Edit2 } from 'lucide-react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [editingId, setEditingId] = useState(null);

  // Load existing feedbacks from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('techscribe_feedback');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setFeedbacks(parsed);
        } else {
          setFeedbacks([]);
        }
      } catch (e) {
        setFeedbacks([]);
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    let updatedFeedbacks;
    if (editingId) {
      updatedFeedbacks = feedbacks.map(fb => 
        fb.id === editingId 
          ? { ...fb, name, email, message, rating, date: new Date().toLocaleDateString() + ' (Edited)' } 
          : fb
      );
      setEditingId(null);
    } else {
      const newFeedback = {
        id: Date.now(),
        name,
        email,
        message,
        rating,
        date: new Date().toLocaleDateString()
      };
      updatedFeedbacks = [newFeedback, ...feedbacks];
    }

    setFeedbacks(updatedFeedbacks);
    localStorage.setItem('techscribe_feedback', JSON.stringify(updatedFeedbacks));

    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    setRating(5);
  };

  const handleEdit = (fb) => {
    setEditingId(fb.id);
    setName(fb.name);
    setEmail(fb.email || '');
    setMessage(fb.message);
    setRating(fb.rating);
    // Scroll to form smoothly
    const formEl = document.querySelector('.feedback-form-card');
    if (formEl) {
      window.scrollTo({ top: formEl.offsetTop - 100, behavior: 'smooth' });
    }
  };

  const handleDelete = (id) => {
    const updated = feedbacks.filter(fb => fb.id !== id);
    setFeedbacks(updated);
    localStorage.setItem('techscribe_feedback', JSON.stringify(updated));
    if (editingId === id) {
      setEditingId(null);
      setName('');
      setEmail('');
      setMessage('');
      setRating(5);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setName('');
    setEmail('');
    setMessage('');
    setRating(5);
  };

  return (
    <section className="feedback-section">
      <h2 className="section-heading">Student Feedback</h2>
      
      <div className="feedback-container">
        {/* Form Card */}
        <div className="feedback-form-card">
          <div className="feedback-header">
            <h3>{editingId ? "Update Your Review" : "Leave a Review"}</h3>
            <p>{editingId ? "Modify your previous thoughts below." : "Tell us about your learning experience with TechScribe!"}</p>
          </div>
          
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name *</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="John Doe" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Email (Optional)</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="john@example.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            
            <div className="form-group">
              <label>Rating</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="star-btn"
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => setRating(star)}
                    aria-label={`Rate ${star} stars`}
                  >
                    <Star 
                      size={24} 
                      color={star <= (hoveredRating || rating) ? "#fbbf24" : "#4b5563"} 
                      fill={star <= (hoveredRating || rating) ? "#fbbf24" : "transparent"} 
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="form-group">
              <label>Message *</label>
              <textarea 
                className="form-input" 
                placeholder="What did you learn? How can we improve?" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                required 
              ></textarea>
            </div>
            
            <div style={{ display: 'flex', gap: '15px' }}>
              <button type="submit" className="submit-btn" style={{ flex: 1 }}>
                {editingId ? "Update Feedback" : "Submit Feedback"}
              </button>
              {editingId && (
                <button type="button" onClick={cancelEdit} className="submit-btn cancel-btn" style={{ background: 'var(--card-border)' }}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Display Feedbacks */}
        {feedbacks?.length > 0 && (
          <div className="feedback-list">
            <h3 style={{ color: 'var(--text-main)', fontFamily: 'Outfit', marginBottom: '10px' }}>Recent Reviews</h3>
            {feedbacks?.map(fb => (
              <div key={fb.id} className="feedback-item">
                <div className="feedback-item-header">
                  <div>
                    <div className="feedback-author">{fb.name}</div>
                    {fb.email && <div className="feedback-email">{fb.email}</div>}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                    <div className="feedback-actions">
                      <button onClick={() => handleEdit(fb)} className="action-btn edit-btn" aria-label="Edit review">
                        <Edit2 size={15} />
                      </button>
                      <button onClick={() => handleDelete(fb.id)} className="action-btn delete-btn" aria-label="Delete review">
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} color={i < fb.rating ? "#fbbf24" : "#4b5563"} fill={i < fb.rating ? "#fbbf24" : "transparent"} />
                      ))}
                    </div>
                    <div className="feedback-date">{fb.date}</div>
                  </div>
                </div>
                <div className="feedback-message">{fb.message}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeedbackForm;
