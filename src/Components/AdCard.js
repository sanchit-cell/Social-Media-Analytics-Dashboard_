// src/components/AdCard.js
import React from 'react';
import './AdCard.css';

const AdCard = ({ content, createdAt, insights }) => {
  
  return (
    <div className="ad-card">
      <p className="ad-content">{content}</p>
      <p className="ad-date">Created At: {createdAt}</p>
      <div className="ad-insights">
        <span>Insights: {insights}</span>
      </div>
    </div>
  );
};

export default AdCard;
