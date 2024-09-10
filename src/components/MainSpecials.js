import greeksalad from "../assets/greeksalad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import carbonara from "../assets/carbonara.jpg";
import { useState, useEffect } from "react";

export default function MainSpecials() {
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    const specialsData = [
      {
        id: 1,
        title: "Greek Salad",
        price: "$12.99",
        description:
          "The famous greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with crunchy garlic & rosemary croutons.",
        image: greeksalad,
        alt: "Greek Salad",
      },
      {
        id: 2,
        title: "Bruschetta",
        price: "$8.99",
        description:
          "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: bruschetta,
        alt: "Bruschetta",
      },
      {
        id: 3,
        title: "Carbonara",
        price: "$16.99",
        description:
          "Al dente spaghetti tossed in a creamy sauce made from fresh eggs and Pecorino Romano cheese, complemented by crispy guanciale and black pepper.",
        image: carbonara,
        alt: "Spaghetti Carbonara",
      },
    ];

    setSpecials(specialsData);
  }, []);

  return (
    <div className="main-specials">
      <div className="specials-title">
        <h2>This Week's Specials!</h2>
        <button>Order Online</button>
      </div>
      <div className="card-container">
        {specials.map((special) => (
          <div className="specials-card" key={special.id}>
            <img src={special.image} alt={special.alt} />
            <article>
              <div className="card-title">
                <h3>{special.title}</h3>
                <h4>{special.price}</h4>
              </div>
              <p>{special.description}</p>
              <h3>Order Delivery #{special.id}</h3>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
