import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar.jsx";
import HomePage from "./Pages/HomePage.jsx";
import AboutUs from "./Pages/AboutPage.jsx";
import Footer from "./Components/footer/Footer.jsx";
import Service from "./Pages/ServicePage.jsx";
import Team from "./Pages/TeamPage.jsx";
import ContactUsPage from "./Pages/ContactUsPage.jsx";
import WorkPage from "./Pages/WorkPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </GoogleOAuthProvider>
  );
}

export default App;
