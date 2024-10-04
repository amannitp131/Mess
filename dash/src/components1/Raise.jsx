import React, { useState } from 'react';
import './Raise.css'; // Import the CSS file

const Raise = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    issue: '',
    documents: []
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    // Limit the issue input to 500 words
    if (id === 'issue') {
      const wordCount = value.trim().split(/\s+/).length; // Split by whitespace
      if (wordCount <= 500) {
        setFormData({ ...formData, [id]: value });
      }
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, documents: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
  };

  return (
    <div className="form">
      <div className="title">Communicate to Students</div>
      
      <div className="input-container ic1">
        <input 
          id="firstname" 
          className="input" 
          type="text" 
          value={formData.type} 
          onChange={handleChange} 
          placeholder=" " 
          required 
        />
        <div className="cut"></div>
        <label htmlFor="firstname" className="placeholder">Type</label>
      </div>

      <div className="input-container ic2">
        <input 
          id="lastname" 
          className="input" 
          type="email" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder=" " 
          required 
        />
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder">name</label>
      </div>

      <div className="input-container ic2">
        <textarea
          id="issue"
          className="input issue-input" // Keep the custom class for styling
          value={formData.subject}
          onChange={handleChange}
          placeholder=" "
          rows="4"
          required
        />
        <div className="cut cut-short"></div>
        <label htmlFor="issue" className="placeholder">Subject</label>
      </div>

      <div className="input-container ic2">
        <input 
          id="documents" 
          className="input" 
          type="file" 
          onChange={handleFileChange} 
          multiple 
          required 
        />
        <div className="cut"></div>
        <label htmlFor="documents" className="placeholder">Upload Notice</label>
      </div>

      <button 
        type="submit" 
        className="submit" 
        onClick={handleSubmit}>
        S
      </button>
    </div>
  );
};

export default Raise;