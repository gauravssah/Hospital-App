import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import FindRightDoctor from "./components/Homepages/FindRightDoctor";
import HeroSection from "./components/Homepages/HeroSection";
import PopularDoctors from "./components/Homepages/PopulerDoctors";
import PromoCode from "./components/Homepages/PromoCode";
import Specialities from "./components/Homepages/Specialities";
import TotalNumbers from "./components/Homepages/TotalNumbers";
import WhyChooseUs from "./components/Homepages/WhyChooseUs";
import BookAppointment from "./components/pages/BookAppointment"; // Cleaned path
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ForgotPassword from "./components/auth/ForgotPassword";
import Treatement from "./components/pages/Treatement";
import FindDoctor from "./components/pages/FindDoctor";
import AskQuestions from "./components/pages/AskQuestions";
import VideoConsulting from "./components/pages/VideoConsulting";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <PromoCode />
              <Specialities />
              <TotalNumbers />
              <WhyChooseUs />
              <PopularDoctors />
              <FindRightDoctor />
            </>
          }
        />

        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/treatments" element={<Treatement />} />
        <Route path="/ask-question" element={<AskQuestions />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/video-consulting" element={<VideoConsulting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
