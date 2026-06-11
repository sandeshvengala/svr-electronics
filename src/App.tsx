import { Routes, Route } from "react-router-dom";

import Header from "./components/site/Header";
import Footer from "./components/site/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Repairs from "./pages/Repairs";
import Parts from "./pages/Parts";
import Sales from "./pages/Sales";
import Warranty from "./pages/Warranty";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import RequestService from "./pages/RequestService";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Brands from "./pages/Brands";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/repairs" element={<Repairs />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request-service" element={<RequestService />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </>
  );
}