// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import Card from './Card';
import PostCarousel from './PostCarousel';
import AdCarousel from './AdCarousel';
import PromotionCarousel from './PromotionCarousel';
import { getUsers, getPostsByUserId, getAdsByUserId, getPromotionsByUserId } from '../api/api';
import './Dashboard.css';

const Dashboard = () => {
  const [userId, setUserId] = useState(1); // Default selected userId
  const [user, setUser] = useState(null); // State to hold user details
  const [userPosts, setUserPosts] = useState([]);
  const [userAds, setUserAds] = useState([]);
  const [userPromotions, setUserPromotions] = useState([]);

  useEffect(() => {
    // Fetch all users and set user details with the first user in response
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        if (users.length > 0) {
          setUser(users[0]); // Set user details with the first user in the response
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Fetch user posts
    const fetchUserPosts = async () => {
      try {
        const posts = await getPostsByUserId(userId);
        setUserPosts(posts);
      } catch (error) {
        console.error('Error fetching user posts:', error);
      }
    };

    // Fetch user ads
    const fetchUserAds = async () => {
      try {
        const ads = await getAdsByUserId(userId);
        setUserAds(ads);
      } catch (error) {
        console.error('Error fetching user ads:', error);
      }
    };

    // Fetch user promotions
    const fetchUserPromotions = async () => {
      try {
        const promotions = await getPromotionsByUserId(userId);
        setUserPromotions(promotions);
      } catch (error) {
        console.error('Error fetching user promotions:', error);
      }
    };

    // Fetch data for default userId (1)
    fetchUsers();
    fetchUserPosts();
    fetchUserAds();
    fetchUserPromotions();
  }, [user,userId,userPosts,userAds,userPromotions]);

  return (
    <>
    <div className="dashboard">
      {/* Render user profile if user details are available */}
      {user && (
        <div className="user-profile">
          <h1 className="username">{user.name}</h1>
          <div className="user-stats">
            <span>Followers: {user.followers}</span>
            <span>Following: {user.following}</span>
            <span>Posts: {user.totalPosts}</span>
          </div>
          <p className="bio">{user.bio}</p>
          <div className="category">Category: {user.category}</div>
          <div className="links">
            <a href={user.links}>Website</a>
          </div>
          <div className="contact-details">
            <span>Email: {user.contactOptions}</span>
          </div>

          {/* Display analytic cards */}
          
        </div>
      )}

      {/* Your existing UI components */}
      {/* Example: */}
      
    </div>

    {user&&(<div className="analytics-cards">
            <Card title="Account Reached" value={user.accountReached} />
            <Card title="Account Engaged" value={user.accountEngaged} />
            <Card title="Total Stories" value={user.totalStories} />
            <Card title="Total Follows" value={user.totalFollows} />
            <Card title="Total Saves" value={user.totalSaves} />
            <Card title="Total Comments" value={user.totalComments} />
            <Card title="Total Shares" value={user.totalShares} />
          </div>)}

    <h2 className="posts-heading">Posts</h2>
      <PostCarousel posts={userPosts} />

    <h2 className="ads-heading">ADS</h2>
      <AdCarousel ads={userAds} />

    <h2 className="promotions-heading">Promotions</h2>
      <PromotionCarousel promotions={userPromotions} />
    </>
  );
};

export default Dashboard;
