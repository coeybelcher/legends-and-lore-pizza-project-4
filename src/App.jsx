import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}