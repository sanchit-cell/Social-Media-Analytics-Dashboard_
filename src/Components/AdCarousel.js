// src/components/AdCarousel.js
// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import AdCard from './AdCard';
// import './AdCarousel.css';

// const AdCarousel = ({ ads }) => {
//   const renderSlides = () =>
//     ads.map((ad, index) => (
//       <div key={index} className="ad-slide">
//         <AdCard
//           content={ad.content}
//           createdAt={ad.createdAt}
//           insights={ad.insights}
//         />
//       </div>
//     ));

//   return (
//     <div className="ad-carousel">
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

// export default AdCarousel;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AdCard from './AdCard';
import './AdCarousel.css';

const AdCarousel = ({ ads }) => {
  // Ensure ads is an array
  const isValidAdsArray = Array.isArray(ads);
  console.log('Received ads:', ads);
  console.log('Is valid ads array:', isValidAdsArray);

  const renderSlides = () =>
    isValidAdsArray ? (
      ads.map((ad, index) => (
        <div key={index} className="ad-slide">
          <AdCard
            content={ad.content}
            createdAt={ad.createdAt}
            insights={ad.insights}
          />
        </div>
      ))
    ) : (
      <div>No ads available</div>
    );

  return (
    <div className="ad-carousel">
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

export default AdCarousel;
