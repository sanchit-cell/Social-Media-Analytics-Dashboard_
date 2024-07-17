// src/components/PromotionCard.js
import React from 'react';
import './PromotionCard.css';

const PromotionCard = ({ content, createdAt, active }) => {
  return (
    <div className="promotion-card">
      <p className="promotion-content">{content}</p>
      <p className="promotion-date">Created At: {createdAt}</p>
      <div className={`promotion-active ${active ? 'active' : 'inactive'}`}>
        {active ? 'Active' : 'Inactive'}
      </div>
    </div>
  );
};

export default PromotionCard;
