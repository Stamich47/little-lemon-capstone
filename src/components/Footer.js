export default function Footer() {
  return (
    <footer>
      <div className="d-flex justify-content-around align-items-start ">
        <img src="https://placehold.co/100.png"></img>
        <div>
          <h5>Doormat Navigation</h5>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li>123-456-7890</li>
            <li>1234 Delicious St.</li>
            <li>San Francisco, CA 94101</li>
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
      </div>

      <p>© 2024 Little Lemon</p>
    </footer>
  );
}
