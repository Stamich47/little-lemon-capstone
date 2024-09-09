import Logo from "../assets/Logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Little Lemon logo" />
    </header>
  );
}
