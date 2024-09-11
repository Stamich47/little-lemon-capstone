import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h5>Site Map</h5>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/book">Reservations</Link>
          </li>
          <li>
            <Link to="/order">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div>
        <h5>Contact</h5>
        <ul>
          <li>123-456-7890</li>
          <li>1234 Delicious St.</li>
          <li>Chicago, IL 60106 </li>
          <li>inquiries@LittleLemon.com</li>
        </ul>
      </div>
      <div>
        <h5>Social Media</h5>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  );
}
