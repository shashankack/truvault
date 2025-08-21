import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const Home = React.lazy(() => import("./pages/Home"));
const FAQ = React.lazy(() => import("./pages/FAQ"));
const About = React.lazy(() => import("./pages/About"));
const Shop = React.lazy(() => import("./pages/Shop"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="*" element={<div>404 Not Found</div>} />
  </Routes>
);

const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Navbar />
      <AppRoutes />
      <Footer />
    </React.Suspense>
  );
};

export default App;
