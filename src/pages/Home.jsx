import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import HeroSection from "../components/sections/HeroSection";
import ProductsSection from "../components/sections/ProductsSection";
import CollectionsSection from "../components/sections/CollectionsSection";
import productsData from "../assets/data/productsData.json";
import FAQSection from "../components/sections/FAQSection";

const Home = () => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Box
      width="100%"
      overflow="hidden"
      sx={{
        background: "linear-gradient(180deg, #F9F6EF 43%, #D1D1D1 100%);",
      }}
    >
      <HeroSection />
      <ProductsSection
        title="Featured Products"
        products={productsData.products}
        onProductClick={handleProductClick}
        showPrice={false}
        showDescription={false}
        autoplay={true}
        slidesPerView="auto"
        spaceBetween={20}
        slideWidth={280}
        imageWidth={320}
        imageHeight={320}
        showBottomBanner={true}
      />
      <CollectionsSection />
      <FAQSection />
    </Box>
  );
};

export default Home;
