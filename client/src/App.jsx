import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HeroSection } from "./components/common/Hero-setion";
import { FAQPage } from "./Pages/FAQPage";
import { Guide } from "./Pages/Guide";
import EmiCalculator from "./Pages/EmiCalculator";
import Footer from "./components/common/Footer";
import Favorites from "./Pages/Favorites";
import { Navbar } from "./components/common/Navbar";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Login from "./components/common/Login";
import Signup from "./components/common/Sigup";
import Browse from "./Pages/Browse";
import { UserDetailContext } from "./context/userDetail";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import Booking from "./Pages/Booking";
import Property from "./Pages/Property";
import Contact from "./components/common/Contact";
import About from "./Pages/About";
import Map from "./components/common/Map";
import Nearby from "./Pages/Nearbylocation";
import { MarketInsights } from "./Pages/MarketInsights";

const App = () => {
  const queryClient = new QueryClient();

  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });

  return (
    <Router>
      <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/market-insights" element={<MarketInsights />} />
            <Route path="/about" element={<About />} />
            <Route path="/nearby" element={<Nearby />} />
            <Route path="/properties">
              <Route index element={<Browse />} />
              <Route path=":propertyId" element={<Property />} />
            </Route>
            <Route
              path="/favorites"
              element={
                <SignedIn>
                  <Favorites />
                </SignedIn>
              }
            />
            <Route
              path="/booking"
              element={
                <SignedIn>
                  <Booking />
                </SignedIn>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/guides" element={<Guide />} />
            <Route path="/emi" element={<EmiCalculator />} />
            <Route path="/map" element={<Map/>} />
            <Route
              path="/login"
              element={
                <SignedOut>
                  <Login />
                </SignedOut>
              }
            />
            <Route
              path="/signup"
              element={
                <SignedOut>
                  <Signup />
                </SignedOut>
              }
            />
            <Route
              path="*"
              element={
                <SignedIn>
                  <Navigate to="/" replace />
                </SignedIn>
              }
            />
          </Routes>
          <Footer />
          <ToastContainer />
        </QueryClientProvider>
      </UserDetailContext.Provider>
    </Router>
  );
};

export default App;