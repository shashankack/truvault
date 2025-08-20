import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./collections-swiper.css";

import collectionsData from "../../assets/data/collectionsData.json";
import featuresData from "../../assets/data/featuresData.json";

const CollectionsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      minHeight="500px"
      sx={{
        paddingY: { xs: 4, md: 6 },
      }}
    >
      {/* Title */}
      <Typography
        variant="h1"
        color="#000"
        textAlign="center"
        fontSize={"25px"}
        textTransform="uppercase"
        fontWeight={500}
        pb={6}
      >
        Discover Collections
      </Typography>
      {/* Collections Swiper */}
      <Box
        width="100%"
        maxWidth="100%"
        sx={{
          position: "relative",
          paddingX: 0,
        }}
      >
        <Swiper
          className="collections-swiper"
          spaceBetween={15}
          slidesPerView={1.5}
          centeredSlides={true}
          loop
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          style={{
            paddingBlock: "10px",
            overflow: "visible",
            maxWidth: "1000px",
            width: "100%",
            overflowX: "hidden",
          }}
        >
          {collectionsData.map((collection, index) => (
            <SwiperSlide key={collection.id}>
              <Box
                className="collection-card"
                sx={{
                  position: "relative",
                  height: { xs: "320px", md: "380px" },
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  backgroundColor: "#888",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  mx: 1,
                }}
              >
                {/* Placeholder background matching the gray from your image */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#888888",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* X mark in center like the image */}
                  <Box
                    sx={{
                      color: "rgba(255,255,255,0.3)",
                      fontSize: "48px",
                      fontWeight: "300",
                      userSelect: "none",
                    }}
                  >
                    ×
                  </Box>
                </Box>

                {/* Collection Name */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 3,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    zIndex: 2,
                  }}
                >
                  <Typography
                    variant="h3"
                    color="white"
                    textAlign="center"
                    fontSize={{ xs: "16px", md: "18px" }}
                    fontWeight={500}
                    sx={{
                      fontFamily: "system-ui, -apple-system, sans-serif",
                    }}
                  >
                    {collection.name}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      {/* Features */}
      <Typography
        variant="h1"
        color="#000"
        textAlign="center"
        fontSize={"25px"}
        textTransform="uppercase"
        fontWeight={500}
        mt={10}
      >
        Tru - Features
      </Typography>
      <Stack
        spacing={2}
        gap={2}
        direction={{
          xs: "column",
          md: "row",
        }}
        justifyContent="center"
        alignItems="start"
        mt={4}
      >
        {featuresData.map((feature) => (
          <Box
            key={feature.id}
            maxWidth={280}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <Box
              component="img"
              src={feature.icon}
              sx={{
                height: "54px",
                width: "54px",
              }}
            />
            <Typography
              variant="body1"
              fontWeight={800}
              textTransform="uppercase"
              fontSize={{
                xs: "12px",
                md: "16px",
              }}
            >
              {feature.title}
            </Typography>
            <Typography
              variant="body1"
              fontWeight={400}
              textAlign="center"
              fontSize={{
                xs: "10px",
                md: "14px",
              }}
            >
              {feature.description}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default CollectionsSection;
