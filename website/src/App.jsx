import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import InvestorCentre from "./components/investor";
import Services from "./components/services";
import Blog from "./components/blog";
import BranchContact from "./components/contact";
import Products from "./components/products";
import Catalogues from "./components/catalogues";
import Promotions from "./components/promotions";
import OurBrand from "./components/brand";
import Branches from "./components/branches";
import TechnicalSafety from "./components/technical";
import LegalCompliance from "./components/legal";
import WhatWeDo from "./components/whatwedo";
import CSR from './components/csr';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white gellix-font">
        <style jsx>{`
          @font-face {
            font-family: "Gellix";
            src: url("./fonts/Gellix-Light.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Gellix";
            src: url("./fonts/Gellix-Regular.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          /* Font utility classes */
          .gravesend-sans {
            font-family: "Gravesend Sans", "Inter", "Segoe UI", Tahoma, Geneva,
              Verdana, sans-serif;
          }

          .roboto-font {
            font-family: "Roboto", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
              sans-serif;
          }

          .gellix-font {
            font-family: "Gellix", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
              sans-serif;
          }

          body {
            overflow-x: hidden;
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
        `}</style>
        <Toaster position="top-right" richColors />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/investor-centre" element={<InvestorCentre />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/products" element={<Products />} />
          <Route path="/catalogues" element={<Catalogues />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/our-brand" element={<OurBrand />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/technical-safety" element={<TechnicalSafety />} />
          <Route path="/legal-compliance" element={<LegalCompliance />} />
          <Route path="/branch/:branchId" element={<BranchContact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
