import React, { useState, useEffect } from 'react';
import './Payment.css';

const Payment = () => {
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    // Hardcoded array of payment data
    const paymentArray = [
      {
        amount: 5000,
        date: '2024-10-03T14:30:00',
      },
      {
        amount: 7500,
        date: '2024-10-01T10:15:00',
      },
      {
        amount: 1500,
        date: '2024-09-30T09:00:00',
      },
    ];

    // Sort payments by date in descending order
    const sortedPayments = paymentArray.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Set the sorted payment data to state
    setPaymentData(sortedPayments);
  }, []);

  if (!paymentData.length) {
    return <div className="payment-container">Loading...</div>;
  }

  return (
    <div className="app-body">
      <div className="app-body-navigation">
        <nav className="navigation">
          <a href="/">
            <i className="ph-browsers"></i>
            <span>You</span>
          </a>
          <a href="/makepayment">
            <i className="ph-file-text"></i>
            <span>Make Payment</span>
          </a>
          <a href="/requestleave">
            <i className="ph-globe"></i>
            <span>Request Leave</span>
          </a>
          <a href="/payments">
            <i className="ph-clipboard-text"></i>
            <span>Payments</span>
          </a>
        </nav>
      </div>

      <div className="payment-container">
        <h2>Payment History</h2>
        <div className="payment-grid">
          {paymentData.map((payment, index) => (
            <div key={index} className="payment-card">
              <div className="payment-info">
                <p><strong>Amount Paid:</strong> ₹{payment.amount}</p>
                <p><strong>Date of Payment:</strong> {new Date(payment.date).toLocaleDateString()}</p>
                <p><strong>Time of Payment:</strong> {new Date(payment.date).toLocaleTimeString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;