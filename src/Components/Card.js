// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ title, value }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-value">{value}</p>
    </div>
  );
};

export default Card;
