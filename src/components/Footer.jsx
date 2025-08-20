import React from "react";
import { Box, Stack, Link, Divider, Typography } from "@mui/material";

import { FaPinterestP } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  const navLinkStyles = {
    fontFamily: "City Boys",
    color: { xs: "white", sm: "primary.main" },
    textDecoration: "none",
    fontSize: { xs: "20px", md: "22px" },
    fontWeight: 200,
    display: "block",
    padding: { xs: "16px 0", sm: "12px 0" },
    textAlign: { xs: "left", sm: "left" },
    transition: "all 0.3s ease",
    marginLeft: { xs: 0, sm: "-12px" },
    position: "relative",
    "&:hover": {
      color: { xs: "rgba(255,255,255,0.8)", sm: "primary.light" },
      transform: { xs: "none", sm: "translateX(8px)" },
      "&:before": {
        opacity: { xs: 0, sm: 1 },
        transform: { xs: "none", sm: "translateX(0)" },
      },
    },
    "&:before": {
      content: '""',
      position: "absolute",
      left: { xs: "calc(50% - 2px)", sm: "-12px" },
      top: "50%",
      transform: {
        xs: "translateY(-50%)",
        sm: "translate(-4px, -50%)",
      },
      width: "4px",
      height: "4px",
      backgroundColor: { xs: "white", sm: "primary.main" },
      borderRadius: "50%",
      opacity: 0,
      transition: "all 0.3s ease",
      display: { xs: "none", sm: "block" },
    },
  };

  const navLinks = [
    {
      title: "Quick Links",
      items: [
        { label: "About Us", link: "#" },
        { label: "Support", link: "#" },
        { label: "Services", link: "#" },
        { label: "FAQ", link: "#" },
      ],
    },
    {
      title: "Follow Us",
      items: [
        { label: "Instagram", link: "#", logo: <FaInstagram /> },
        { label: "Pinterest", link: "#", logo: <FaPinterestP /> },
        { label: "Whatsapp", link: "#", logo: <FaWhatsapp /> },
      ],
    },
  ];

  return (
    <Stack
      width="100%"
      alignItems="center"
      justifyContent="center"
      bgcolor={"secondary.main"}
      py={4}
      px={{
        xs: 2,
        sm: 20,
      }}
    >
      <Stack
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        direction={{
          xs: "column",
          md: "row",
        }}
      >
        {/* Intro */}
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={2.5}
          sx={{
            maxWidth: { xs: "100%", sm: "400px" },
            textAlign: "center",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Box>
            <Typography
              variant="h4"
              color={{ xs: "white", sm: "primary.main" }}
              fontSize={{ xs: "20px", md: "24px" }}
              fontWeight={600}
              textTransform="uppercase"
              letterSpacing="2px"
              mb={1}
              sx={{
                fontFamily: "ClashDisplay-Medium, sans-serif",
              }}
            >
              We're here for you
            </Typography>
            <Typography
              variant="body1"
              color={{ xs: "rgba(255,255,255,0.8)", sm: "primary.main" }}
              fontSize={{ xs: "14px", md: "16px" }}
              fontWeight={300}
              lineHeight={1.6}
              sx={{
                opacity: { xs: 1, sm: 0.9 },
              }}
            >
              Connect with our support team anytime.
            </Typography>
          </Box>

          <Stack spacing={1.5} alignItems="center">
            <Link
              variant="body1"
              fontSize={{ xs: "16px", md: "20px" }}
              fontWeight={400}
              underline="none"
              href="tel:+918181818181"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: { xs: "white", sm: "primary.main" },
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  color: { xs: "rgba(255,255,255,0.8)", sm: "primary.light" },
                },
              }}
            >
              <IoCallOutline size={18} />
              +91 8181818181
            </Link>

            <Link
              variant="body1"
              fontSize={{ xs: "16px", md: "20px" }}
              fontWeight={400}
              underline="none"
              href="mailto:info@truvault.com"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,

                color: { xs: "white", sm: "primary.main" },
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  color: { xs: "rgba(255,255,255,0.8)", sm: "primary.light" },
                },
              }}
            >
              <IoMailOutline size={18} />
              info@truvault.com
            </Link>
          </Stack>

          <Divider
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          />
        </Stack>

        {/* Navigation Links Stack */}
        <Stack
          spacing={0}
          alignItems="flex-start"
          sx={{
            minWidth: { xs: "100%", sm: "180px" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          {navLinks[0].items.map((item, index) => (
            <Box key={item.label} sx={{ width: "100%" }}>
              <Link href={item.link} sx={navLinkStyles}>
                {item.label}
              </Link>

              {index < navLinks[0].items.length && (
                <Divider
                  sx={{
                    display: { xs: "block", sm: "none" },
                  }}
                />
              )}
            </Box>
          ))}
        </Stack>

        {/* Social Media Links */}
        <Stack
          alignItems="center"
          sx={{
            my: 4,
            minWidth: { xs: "auto", sm: "150px" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Stack
            direction={{ xs: "row", sm: "column" }}
            spacing={{ xs: 3, sm: 2 }}
            alignItems="start"
            sx={{ mt: { xs: 2, sm: 0 } }}
          >
            {navLinks[1].items.map((item) => (
              <Link
                key={item.label}
                href={item.link}
                sx={{
                  fontFamily: "City Boys",
                  color: { xs: "secondary.main", sm: "primary.main" },
                  backgroundColor: { xs: "primary.main", sm: "transparent" },
                  textDecoration: "none",
                  fontSize: { xs: "20px", md: "17px" },
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: { xs: 0, sm: 1.5 },
                  borderRadius: { xs: "50%", sm: "8px" },
                  width: { xs: " 35px", sm: "auto" },
                  height: { xs: "35px", sm: "auto" },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                  "& svg": {
                    fontSize: { xs: "20px", sm: "24px" },
                    transition: "all 0.3s ease",
                  },
                  "&:hover svg": {
                    transform: "scale(1.15)",
                  },
                }}
              >
                {item.logo}
                {/* Hide text on mobile, show on desktop */}
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  {item.label}
                </Box>
              </Link>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <Stack width="100%" mt={4}>
        <Divider
          sx={{
            mb: 2,
          }}
        />
        <Typography
          variant="body1"
          color="white"
          textAlign="center"
          fontSize="15px"
        >
          INDIA
        </Typography>
        <Box width="100%" display="flex" justifyContent="center" mt={8} mb={4}>
          <Box component="img" src="/footer_logo.svg" width={50} />
        </Box>
        <Typography variant="body1" color="white" textAlign="center">
          © 2025 TruVault - All rights reserved
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
