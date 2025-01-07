import React from "react";
import { Route, Routes } from "react-router-dom";

// Import your pages
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import TourPacksPage from "./pages/TourPacksPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import BookingPage from "./pages/BookingPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        
        {/* Define routes for each page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/tour-packs" element={<TourPacksPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route
          path="/booking-confirmation"
          element={<BookingConfirmationPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
