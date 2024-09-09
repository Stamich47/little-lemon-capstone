import greeksalad from "../assets/greeksalad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import carbonara from "../assets/carbonara.jpg";

export default function MainSpecials() {
  return (
    <div className="main-specials">
      <div className="specials-title">
        <h2>This Week's Specials!</h2>
        <button>Order Online</button>
      </div>
      <div className="card-container">
        <div className="specials-card">
          <img src={greeksalad} alt="Greek Salad" />
          <article>
            <div className="card-title">
              <h3>Greek Salad</h3>
              <h4>$12.99</h4>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, alives and our
              Chicago-style feta cheese, garnished with crunchy garlic &
              rosemary croutons.
            </p>
            <h3>Order Delivery #1</h3>
          </article>
        </div>

        <div className="specials-card">
          <img src={bruschetta} alt="Bruschetta" />
          <article>
            <div className="card-title">
              <h3>Bruschetta</h3>
              <h4>$8.99</h4>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil
            </p>
            <h3>Order Delivery #2</h3>
          </article>
        </div>

        <div className="specials-card">
          <img src={carbonara} alt="Spaghetti Carbonara" />
          <article>
            <div className="card-title">
              <h3>Carbonara</h3>
              <h4>$16.99</h4>
            </div>
            <p>
              Al dente spaghetti tossed in a creamy sauce made from fresh eggs
              and Pecorino Romano cheese, complemented by crispy guanciale and
              black pepper.
            </p>
            <h3>Order Delivery #3</h3>
          </article>
        </div>
      </div>
    </div>
  );
}
