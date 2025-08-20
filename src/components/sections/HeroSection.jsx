import React, { useEffect } from "react";

import { Box, Typography, Link } from "@mui/material";
import heroMobile from "../../assets/hero_mobile.webm";
import heroVideo from "../../assets/intro.webm";

const HeroSection = () => {
  return (
    <Box height={"100vh"} width={"100%"} position="relative">
      <Box
        component="video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        position="absolute"
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          width: "100%",
        }}
      >
        <Typography
          variant="h1"
          fontSize={{
            xs: "20px",
            md: "32px",
          }}
          textTransform="uppercase"
          lineHeight="normal"
        >
          For the modern nomad
        </Typography>
        <Link
          href="/shop"
          fontFamily="City Boys"
          fontSize={{
            xs: "12px",
            md: "16px",
          }}
          textTransform="uppercase"
        >
          discover products
        </Link>
      </Box>
    </Box>
  );
};

export default HeroSection;
