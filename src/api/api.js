// import axios from 'axios';
// // const API_URL = 'http://localhost:8080';

// export const getUsers = async () => {
//   try {
//     const response = await axios.get("/users");
//     console.log(response)
//     return response.data;
//   } catch (error) {

//     console.error('Error fetching users:', error);
//     throw error;
//   }
// };

// export const getPostsByUserId = async (userId) => {
//   try {
//     const response = await axios.get(`/posts/user/${userId}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching posts for user ${userId}:`, error);
//     throw error;
//   }
// };

// export const getAdsByUserId = async (userId) => {
//   try {
//     const response = await axios.get(`/ads/user/${userId}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching ads for user ${userId}:`, error);
//     throw error;
//   }
// };

// export const getPromotionsByUserId = async (userId) => {
//   try {
//     const response = await axios.get(`/promotions/user/${userId}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching promotions for user ${userId}:`, error);
//     throw error;
//   }
// };

// src/api/api.js
import axios from 'axios';

const API_URL = 'https://social-media-analytics-new.onrender.com';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getPostsByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/posts/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching posts for user ${userId}:`, error);
    throw error;
  }
};

export const getAdsByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/ads/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ads for user ${userId}:`, error);
    throw error;
  }
};

export const getPromotionsByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/promotions/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching promotions for user ${userId}:`, error);
    throw error;
  }
};




