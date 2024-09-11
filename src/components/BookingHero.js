import restaurant from "../assets/restaurant.jpg";

export default function BookingHero() {
  return (
    <div className="booking-hero">
      <article>
        <h2>Reservations</h2>
        <p>
          We are open everyday from 11 AM to 10 PM! We recommend making a
          reservation at least 1 week in advance. We look forward to serving
          you.
        </p>
      </article>

      <img src={restaurant} alt="Restaurant Decor" />
    </div>
  );
}
