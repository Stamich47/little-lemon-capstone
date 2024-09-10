import { useState, useEffect } from "react";

export default function CustomersSay() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("https://randomuser.me/api/?results=3");
        const data = await res.json();

        const reviewText = [
          "The food was amazing! I will definitely be ordering again!",
          "Absolutely loved the service and the food was delicious!",
          "A wonderful dining experience, highly recommended!",
        ];

        const reviewData = data.results.map((user, index) => ({
          id: index + 1,
          name: `${user.name.first} ${user.name.last}`,
          image: user.picture.medium,
          review: reviewText[index],
        }));
        setReviews(reviewData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }

    fetchReviews();
  }, []);

  console.log(reviews);

  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="review-container">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <p>⭐⭐⭐⭐⭐</p>
            <article>
              <img src={review.image} alt={review.name} />
              <h5>{review.name}</h5>
            </article>
            <div className="review-text">
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
