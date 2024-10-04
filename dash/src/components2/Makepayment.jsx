import React, { useState } from 'react';
import './Makepayment.css'; // Ensure your CSS file is imported

const Makepayment = () => {
  const [amount, setAmount] = useState(0); // Initialize amount with 0
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const menuItems = [
    { name: 'Chicken', price: 24 },
    { name: 'Rosgulla', price: 7.5 },
    { name: 'Fish', price: 24 },
    { name: 'Rabdi', price: 20 },
    { name: 'Dahi', price: 20 },
    { name: 'Milk', price: 20 },
    { name: 'Boiled Egg', price: 15 },
    { name: 'Mushroom', price: 40 },
  ];

  // Function to handle item clicks and add price to the amount
  const handleAddPrice = (price) => {
    setAmount((prevAmount) => parseFloat(prevAmount) + parseFloat(price));
  };

  const handlePayment = () => {
    if (amount > 0) {
      const currentDateTime = new Date().toLocaleString();
      const [date, time] = currentDateTime.split(', ');

      const newPayment = {
        amount,
        date,
        time,
      };

      setPaymentDetails(newPayment);
      setIsModalVisible(true);
      setAmount(0); // Reset amount after payment
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  // Handle manual input change for amount
  const handleAmountChange = (e) => {
    const inputAmount = e.target.value;
    // Convert input to a number; if it's an empty string or invalid, fallback to 0
    setAmount(inputAmount === '' ? 0 : parseFloat(inputAmount));
  };

  return (
    <div className={`make-payment-container ${isModalVisible ? 'blur-background' : ''}`}>
      <h2>Make a Payment</h2>
      <input
        type="text"
        placeholder="Enter amount"
        value={amount}
        onChange={handleAmountChange} // Allow manual input
        className="make-payment-input"
      />
      <button onClick={handlePayment} className="make-payment-button">
        Pay
      </button>

      {/* Modal Popup for payment details */}
      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>✖</span>
            <h3>Payment Successful</h3>
            <p className="payment-detail"><strong>Amount Paid:</strong> ₹{paymentDetails.amount}</p>
            <p className="payment-detail"><strong>Date:</strong> {paymentDetails.date}</p>
            <p className="payment-detail"><strong>Time:</strong> {paymentDetails.time}</p>
          </div>
        </div>
      )}

      {/* Responsive Boxes */}
      <div className="box-container">
        {menuItems.map((item, index) => (
          <div className="box" key={index} onClick={() => handleAddPrice(item.price)}>
            <h4>{item.name}</h4>
            <p>Price: ₹{item.price} per pcs</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Makepayment;
