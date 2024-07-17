// src/components/PostCarousel.js
// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import PostCard from './PostCard';
// import './PostCarousel.css';

// const PostCarousel = ({ posts }) => {
//   const renderSlides = () =>
//     posts.map((post, index) => (
//       <div key={index} className="post-slide">
//         <PostCard
//           content={post.content}
//           createdAt={post.createdAt}
//           likes={post.likes}
//           comments={post.comments}
//           shares={post.shares}
//         />
//       </div>
//     ));

//   return (
//     <div className="post-carousel">
//       <Carousel
//         showThumbs={false}
//         showStatus={false}
//         infiniteLoop
//         useKeyboardArrows
//         autoPlay
//         centerMode
//         centerSlidePercentage={33.33}
//       >
//         {renderSlides()}
//       </Carousel>
//     </div>
//   );
// };

// export default PostCarousel;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PostCard from './PostCard';
import './PostCarousel.css';

const PostCarousel = ({ posts }) => {
  // Ensure posts is an array
  const isValidPostsArray = Array.isArray(posts);

  const renderSlides = () =>
    isValidPostsArray ? (
      posts.map((post, index) => (
        <div key={index} className="post-slide">
          <PostCard
            content={post.content}
            createdAt={post.createdAt}
            likes={post.likes}
            comments={post.comments}
            shares={post.shares}
          />
        </div>
      ))
    ) : (
      <div>No posts available</div>
    );

  return (
    <div className="post-carousel">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        centerMode
        centerSlidePercentage={33.33}
      >
        {renderSlides()}
      </Carousel>
    </div>
  );
};

export default PostCarousel;
