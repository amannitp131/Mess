import React, { useState } from 'react';
import '/RequestLeave.css';

const Requestleave = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [applicationImage, setApplicationImage] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  // Hardcoded array of previously taken holidays
  const previousLeaves = [
    {
      startDate: '2024-01-10',
      endDate: '2024-01-15',
      reason: 'Family Function',
    },
    {
      startDate: '2024-02-05',
      endDate: '2024-02-07',
      reason: 'Medical Leave',
    },
    {
      startDate: '2024-03-18',
      endDate: '2024-03-20',
      reason: 'Vacation',
    },
    {
      startDate: '2024-05-10',
      endDate: '2024-05-12',
      reason: 'Personal Work',
    },
    {
      startDate: '2024-08-22',
      endDate: '2024-08-25',
      reason: 'Wedding Ceremony',
    },
   
  ];

  const handleImageUpload = (event) => {
    setApplicationImage(event.target.files[0]); // Capture the uploaded image
  };

  const handleVerification = () => {
    if (startDate && endDate && reason && applicationImage) {
      setIsVerified(true);
      alert('Leave request has been verified.');
    } else {
      alert('Please fill out all fields and upload the application image.');
    }
  };

  return (
    <div className="request-leave-container">
      <h2>Request Leave</h2>
      <form className="leave-form">
        <div className="form-group">
          <label htmlFor="start-date">Start Date:</label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="end-date">End Date:</label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason for Leave:</label>
          <input
            type="text"
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter reason for leave"
          />
        </div>
        <div className="form-group">
          <label htmlFor="application-image">Upload Application Form:</label>
          <input
            type="file"
            id="application-image"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <button
          type="button"
          className="verify-button"
          onClick={handleVerification}
        >
          Verify
        </button>
      </form>

      {/* Display verification status */}
      {isVerified && (
        <div className="verification-status">
          <p>✅ Your leave request has been verified.</p>
        </div>
      )}

      {/* Previously Taken Holidays */}
      <div className="previous-leaves">
        <h3>Previously Taken Holidays</h3>
        <div className="leave-grid">
          {previousLeaves.map((leave, index) => (
            <div key={index} className="leave-card">
              <p><strong>Start Date:</strong> {leave.startDate}</p>
              <p><strong>End Date:</strong> {leave.endDate}</p>
              <p><strong>Reason:</strong> {leave.reason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Requestleave;