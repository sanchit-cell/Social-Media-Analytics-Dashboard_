// // src/components/PromotionCarousel.js
// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import PromotionCard from './PromotionCard';
// import './PromotionCarousel.css';

// const PromotionCarousel = ({ promotions }) => {
//   const renderSlides = () =>
//     promotions.map((promotion, index) => (
//       <div key={index} className="promotion-slide">
//         <PromotionCard
//           content={promotion.content}
//           createdAt={promotion.createdAt}
//           active={promotion.active}
//         />
//       </div>
//     ));

//   return (
//     <div className="promotion-carousel">
//       <Carousel
//         showThumbs={false}
//         showStatus={false}
//         infiniteLoop
//         useKeyboardArrows
//         autoPlay
//         centerMode
//         centerSlidePercentage={25}
//       >
//         {renderSlides()}
//       </Carousel>
//     </div>
//   );
// };

// export default PromotionCarousel;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PromotionCard from './PromotionCard';
import './PromotionCarousel.css';

const PromotionCarousel = ({ promotions }) => {
  // Ensure promotions is an array
  const isValidPromotionsArray = Array.isArray(promotions);
  console.log('Received promotions:', promotions);
  console.log('Is valid promotions array:', isValidPromotionsArray);

  const renderSlides = () =>
    isValidPromotionsArray ? (
      promotions.map((promotion, index) => (
        <div key={index} className="promotion-slide">
          <PromotionCard
            content={promotion.content}
            createdAt={promotion.createdAt}
            active={promotion.active}
          />
        </div>
      ))
    ) : (
      <div>No promotions available</div>
    );

  return (
    <div className="promotion-carousel">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        centerMode
        centerSlidePercentage={25}
      >
        {renderSlides()}
      </Carousel>
    </div>
  );
};

export default PromotionCarousel;
