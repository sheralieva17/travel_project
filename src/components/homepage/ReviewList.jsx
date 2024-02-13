// ReviewList.jsx
import React from 'react';
import './ReviewList.css'; // Подключаем файл стилей

const ReviewList = ({ reviews, removeReview }) => {
  const handleRemove = (index) => {
    removeReview(index);
  };

  return (
<>
  <div className="review-list-container">
    <h2 className='review-title'>What Travelers Are Saying</h2>
    <p className='review-info'>“I am a traveler and ON TRIP Travels helps me a lot in finding interesting tourist destinations and of course the price offers is very worth it”.</p>
  </div>
  <div className="review-list">
    {reviews.map((review, index) => (
      <div className="review-card" key={index}>
        <div className="review-card-header">
          {review.avatar && <img className="avatar" src={review.avatar} alt="Avatar" />}
          <div className="review-details">
            <div className="review-name">{review.name}</div>
            <div className="review-rating"> {/* Используем символы звездочек для рейтинга */}
              {'★'.repeat(review.rating)} {/* Повторяем символ звездочки рейтинг раз */}
            </div>
            <div className="review-content">{review.review}</div>
          </div>
        </div>
        <button className="delete-button" onClick={() => handleRemove(index)}>Удалить</button> {/* Добавляем кнопку удаления */}
      </div>
    ))}
  </div>
</>


  );
};

export default ReviewList;