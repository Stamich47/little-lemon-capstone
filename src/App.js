import "./App.css";
import "react-day-picker/style.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/book/*" element={<BookingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
