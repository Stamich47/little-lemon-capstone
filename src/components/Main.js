import MainHero from "./MainHero";
import MainSpecials from "./MainSpecials";
import CustomersSay from "./CustomersSay";
import LittleLemon from "./LittleLemon";

export default function Main() {
  return (
    <main className="main">
      <MainHero />
      <MainSpecials />
      <CustomersSay />
      <LittleLemon />
    </main>
  );
}
