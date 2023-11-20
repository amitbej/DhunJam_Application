/*
import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = ({ data, onUpdatePrice }) => {
  const { name, location, chargeCustomers} = data;

  return (
    <div className="dashboard-container">
      <h1>{name}</h1>
      <p>Location: {location}</p>
      <p>Charge Customers: {chargeCustomers ? 'Yes' : 'No'}</p>
      { Display other details as needed }
      <button onClick={() => onUpdatePrice(200)}>Update Price</button>
    </div>
  );
};
export default AdminDashboard;
*/

import React, { useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = ({ data, onUpdatePrice }) => {
  const { name, location, chargeCustomers, amount } = data;
  const [customAmount, setCustomAmount] = useState(amount.category_6);
  const [regularAmounts, setRegularAmounts] = useState({
    category_7: amount.category_7,
    category_8: amount.category_8,
    category_9: amount.category_9,
    category_10: amount.category_10,
  });

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
  };

  const handleRegularAmountChange = (category, event) => {
    setRegularAmounts((prevAmounts) => ({
      ...prevAmounts,
      [category]: event.target.value,
    }));
  };

  const handleUpdate = () => {
    // onUpdatePrice
    onUpdatePrice({
      category_6: customAmount,
      category_7: regularAmounts.category_7,
      category_8: regularAmounts.category_8,
      category_9: regularAmounts.category_9,
      category_10: regularAmounts.category_10,
    });
  };

  return (
    <div className="dashboard-container">
      <h1>{name}</h1>
      <p>Location: {location}</p>
      <p>Charge Customers: {chargeCustomers ? "Yes" : "No"}</p>

      {/* Custom Song Request Amount */}
      {chargeCustomers && (
        <div>
          <label htmlFor="customAmount">Custom Song Request Amount: </label>
          <input
            type="number"
            id="customAmount"
            value={customAmount}
            onChange={handleCustomAmountChange}
          />
        </div>
      )}

      {/* Regular Song Request Amounts */}
      {chargeCustomers && (
        <div>
          <p>Regular Song Request Amounts:</p>
          <label htmlFor="category_7">Category 7: </label>
          <input
            type="number"
            id="category_7"
            value={regularAmounts.category_7}
            onChange={(e) => handleRegularAmountChange("category_7", e)}
          />
          {/* similar blocks for category_8, category_9, and category_10 */}
        </div>
      )}

      {/* Update Button */}
      <button onClick={handleUpdate}>Update Price</button>
    </div>
  );
};

export default AdminDashboard;
