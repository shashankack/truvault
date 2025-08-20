import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Typography, Button } from "@mui/material";
import "./products-swiper.css"; // Import custom styles for Swiper

const ProductsSection = ({ 
  title = "Featured Products",
  products = [],
  autoplay = true,
  slidesPerView = "auto",
  spaceBetween = 24,
  slideWidth = 260,
  imageWidth = 220,
  imageHeight = 220,
  showDescription = false,
  showPrice = false,
  showButton = false,
  buttonText = "View Product",
  onProductClick,
  showBottomBanner = true,
  bottomBannerHeight = "60vh",
  bottomBannerColor = "#B2ADA6",
  containerPadding = 6,
  titleFontSize = "25px",
  titleColor = "#000",
  titleFontWeight = 500,
  customStyles = {}
}) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleProductClick = (product) => {
    if (onProductClick) {
      onProductClick(product);
    }
  };

  return (
    <Box py={containerPadding} sx={customStyles.container}>
      <Typography
        variant="h1"
        color={titleColor}
        textAlign="center"
        fontSize={titleFontSize}
        textTransform="uppercase"
        fontWeight={titleFontWeight}
        sx={{
          mb: 4,
          ...customStyles.title
        }}
      >
        {title}
      </Typography>
      
      <Swiper
        scrollbar={{ draggable: true }}
        modules={[Pagination, Autoplay, Scrollbar]}
        className="mySwiper"
        autoplay={autoplay}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        style={{ background: "transparent", ...customStyles.swiper }}
      >
        {products.map((product) => (
          <SwiperSlide 
            key={product.id} 
            style={{ width: slideWidth, ...customStyles.slide }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              py={4}
              sx={{
                cursor: onProductClick ? "pointer" : "default",
                transition: "transform 0.2s ease",
                "&:hover": onProductClick ? {
                  transform: "translateY(-4px)"
                } : {},
                ...customStyles.productCard
              }}
              onClick={() => handleProductClick(product)}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: imageWidth,
                  height: imageHeight,
                  objectFit: "contain",
                  mb: 2,
                  borderRadius: 2,
                  ...customStyles.productImage
                }}
              />
              
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                align="center"
                sx={{
                  fontWeight: 500,
                  fontSize: "1rem",
                  color: "text.primary",
                  mb: showDescription || showPrice ? 1 : 2,
                  ...customStyles.productName
                }}
              >
                {product.name}
              </Typography>

              {showDescription && product.shortDescription && (
                <Typography
                  variant="body2"
                  align="center"
                  sx={{
                    color: "grey.600",
                    fontSize: "0.875rem",
                    mb: showPrice ? 1 : 2,
                    maxWidth: 200,
                    ...customStyles.productDescription
                  }}
                >
                  {product.shortDescription}
                </Typography>
              )}

              {showPrice && product.price && (
                <Typography
                  variant="h6"
                  align="center"
                  sx={{
                    color: "text.primary",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    mb: showButton ? 2 : 0,
                    ...customStyles.productPrice
                  }}
                >
                  {formatPrice(product.price)}
                </Typography>
              )}

              {showButton && (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(product);
                  }}
                  sx={{
                    mt: 1,
                    borderColor: "grey.300",
                    color: "text.primary",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    "&:hover": {
                      borderColor: "secondary.main",
                      backgroundColor: "secondary.main",
                      color: "white",
                    },
                    ...customStyles.productButton
                  }}
                >
                  {buttonText}
                </Button>
              )}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {showBottomBanner && (
        <Box 
          my={6} 
          width={"95%"} 
          height={bottomBannerHeight} 
          bgcolor={bottomBannerColor} 
          mx={"auto"}
          sx={customStyles.bottomBanner}
        />
      )}
    </Box>
  );
};

export default ProductsSection;
