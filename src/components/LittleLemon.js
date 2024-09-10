import littleLemonOne from "../assets/restaurant.jpg";
import littleLemonTwo from "../assets/littlelemon-2.jpg";

export default function LittleLemon() {
  return (
    <div className="about-us">
      <article>
        <h2>Little Lemon</h2>
        <h5>Chicago</h5>
        <p>
          Founded by two Italian brothers, Mario and Adrian, we bring you
          traditional recipes with a modern twist. Our menu, inspired by
          Italian, Greek, and Turkish cuisines, features seasonal dishes crafted
          from family recipes and Mario’s culinary expertise. With a rustic and
          relaxed atmosphere, Little Lemon is the perfect spot for any meal of
          the day. Join us for a taste of the Mediterranean, right here in
          Chicago.
        </p>
      </article>
      <div className="about-images">
        <img src={littleLemonOne} alt="Little Lemon Restaurant" />
        <img src={littleLemonTwo} alt="Little Lemon Restaurant" />
      </div>
    </div>
  );
}
