import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import Loader from "./components/Loader";

const Home = React.lazy(() => import("./pages/Home"));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="/test" element={<Loader />} />
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
