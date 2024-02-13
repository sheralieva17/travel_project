import React, { useState } from 'react';
import HeadBg from '../header/HeadBg';
import PackageList from '../products/PackageList';
import VideoBlock from './VideoBlock';
// import ReviewList from '../homepage/ReviewList';
// import ReviewForm from '../homepage/ReviewForm';
// import Footer from '../homepage/Footer';

const HomePage = () => {
//   const [reviews, setReviews] = useState(() => {
//     const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
//     return storedReviews;
//   });

//   const addReview = (newReview) => {
//     const updatedReviews = [...reviews, newReview];
//     setReviews(updatedReviews);
//     localStorage.setItem('reviews', JSON.stringify(updatedReviews));
//   };

//   const removeReview = (indexToRemove) => {
//     const updatedReviews = reviews.filter((review, index) => index !== indexToRemove);
//     setReviews(updatedReviews);
//     localStorage.setItem('reviews', JSON.stringify(updatedReviews));
//   };

  return (
    <div style={{ fontFamily: "Optima, sans-serif" }}>
      <HeadBg />
      <VideoBlock/>
      <section
        style={{
        backgroundColor: "#e1ebf0",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "32px",
            color: "black",
            letterSpacing: "1.5px",
            fontWeight: "600",
          }}
        >
          <div>
            <h1>OUR PACKAGES</h1>
          </div>
        </div>
        <PackageList />
      </section>
      {/* <ReviewList reviews={reviews} removeReview={removeReview} />
      <ReviewForm onSubmit={addReview} />
      <Footer /> */}
    </div>
  );
};

export default HomePage;
