import mainPhoto from "../assets/restauranfood.jpg";

export default function MainHero() {
  return (
    <div className="main-hero">
      <article>
        <h2>Little Lemon</h2>
        <h5>Chicago</h5>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </article>

      <img src={mainPhoto} alt="Restaurant Food" />
    </div>
  );
}
