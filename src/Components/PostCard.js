// src/components/PostCard.js
import React from 'react';
import './PostCard.css';

const PostCard = ({ content, createdAt, likes, comments, shares }) => {
  return (
    <div className="post-card">
      <p className="post-content">{content}</p>
      <p className="post-date">Created At: {createdAt}</p>
      <div className="post-stats">
        <span>Likes: {likes}</span>
        <span>Comments: {comments}</span>
        <span>Shares: {shares}</span>
      </div>
    </div>
  );
};

export default PostCard;
