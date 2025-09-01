import React from "react";
import "./Reviews .css"
import img1 from "../assets/images (13).jpeg";
import img2 from "../assets/images (12).jpeg";
import img3 from "../assets/images (14).jpeg";

const Reviews = () => {
  const reviews = [
    {
      img: img1,
      text: "After attending Konasal’s workshop, I started tracking my expenses and created a savings plan. I’ve never felt more in control of my money.",
      name: "Nneka A., Brooklyn, NY",
      stars: 5
    },
    {
      img: img2,
      text: "Konasal’s YouTube videos helped me take their advice on building credit and get off the debt hamster wheel.",
      name: "Jason W., Newark, NJ",
      stars: 5
    },
    {
      img: img3,
      text: "I’ve read tons of personal finance books, but Konasal Legacy Partners broke it down in a way I finally understood. Clear, practical, and life-changing. I now save with purpose.",
      name: "Chloe M., Atlanta, GA",
      stars: 5
    }
  ];

  return (
  <section className="reviews-section">
      <h2>Client Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="avatar-wrapper">
              <img src={review.img} alt={review.name} className="review-avatar" />
            </div>
            <p className="review-text">“{review.text}”</p>
            <p className="review-name">{review.name}</p>
            <div className="review-stars">
              {"⭐".repeat(review.stars)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
