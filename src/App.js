import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import Signup from "./components/Signup";
import Register from "./pages/Register";
import BuildYourPlan from "./pages/BuildYourPlan";
import BuildYourLagacy from "./pages/BuildYourLagacy";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermOfUsePage from "./pages/TermOfUsePage";
import AdminPage from "./pages/AdminPage ";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import EbookForm from "./components/EbookForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/NotFound";


function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}


function App() {
  return (
    <>
      <Navbar />
       <ScrollToHashElement/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/build-your-plan" element={<BuildYourPlan/>}/>
        <Route path="/build-your-legacy" element={<BuildYourLagacy/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
        <Route path="/terms-of-use" element={<TermOfUsePage/>}/>
        <Route path="/konal" element={<AdminPage/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        <Route path="/ebook-form" element={<EbookForm/>}/>
        <Route path="*" element={<NotFound/>}/>
      


      </Routes>
        <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="colored" 
      />
      <Footer />
    </>
  );
}

export default App;
