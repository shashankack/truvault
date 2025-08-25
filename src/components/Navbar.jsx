import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  AppBar,
  IconButton,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import HamburgerIcon from "./icons/HamburgerIcon";
import SearchIcon from "./icons/SearchIcon";
import ShoppingBagIcon from "./icons/ShoppingBagIcon";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"; // <-- NEW

import SearchUI from "./SearchUI";
import CartUI from "./CartUI";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Check if we're on the home page or shop page
  const isTransparentPage =
    location.pathname === "/" || location.pathname === "/shop";

  const navLinks = [
    {
      label: "Home",
      path: "/",
      icon: <HomeIcon />,
      description: "Discover TruVault",
    },
    {
      label: "Shop",
      path: "/shop",
      icon: <StorefrontIcon />,
      description: "Browse Collection",
    },
    {
      label: "About",
      path: "/about",
      icon: <InfoIcon />,
      description: "Our Story",
    },
    {
      label: "FAQ", // <-- NEW
      path: "/faq",
      icon: <HelpOutlineIcon />,
      description: "Questions & Answers",
    },
    {
      label: "Contact",
      path: "/contact",
      icon: <ContactMailIcon />,
      description: "Get in Touch",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  // Determine background color based on page and scroll state
  const getBackgroundColor = () => {
    if (!isTransparentPage) {
      return "primary.main"; // Always white on non-transparent pages
    }
    return isScrolled ? "primary.main" : "transparent"; // Transparent pages: transparent -> white on scroll
  };

  // Determine text/icon color
  const getTextColor = () => {
    if (!isTransparentPage) {
      return "#222"; // Always dark on non-transparent pages
    }
    return isScrolled ? "#222" : "#fff"; // Transparent pages: white -> dark on scroll
  };

  // Determine logo
  const getLogo = () => {
    if (!isTransparentPage) {
      return "/black_text_logo.png"; // Always black logo on non-transparent pages
    }
    return isScrolled ? "/black_text_logo.png" : "/white_text_logo.png"; // Transparent pages: white -> black on scroll
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: getBackgroundColor(),
        transition: "background-color 0.3s ease",
        py: {
          xs: 1,
          md: 2,
        },
        px: {
          xs: 1,
          md: 20,
        },
      }}
    >
      {/* Menu Button */}
      <IconButton
        onClick={() => setMenuOpen(true)}
        sx={{
          mr: 4,
          "&:hover": {
            transform: "scale(1.05)",
          },
          transition: "all 0.2s ease",
        }}
        size="small"
        aria-label="Open menu"
      >
        <HamburgerIcon
          size={isMobile ? 22 : 28}
          color={getTextColor()}
          hoverColor={getTextColor()}
        />
      </IconButton>

      {/* Centered Logo */}
      <Box sx={{ display: "flex", justifyContent: "center" }} flex={1}>
        <Box
          component="img"
          onClick={() => navigate("/")}
          src={getLogo()}
          alt="Logo"
          sx={{
            height: "auto",
            width: { xs: 150, md: 300 },
            cursor: "pointer",
          }}
        />
      </Box>

      {/* Search and Cart Icons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <IconButton
          onClick={() => setSearchOpen(true)}
          sx={{
            "&:hover": {
              transform: "scale(1.05)",
            },
            transition: "all 0.2s ease",
          }}
          aria-label="Open search"
        >
          <SearchIcon
            size={isMobile ? 22 : 28}
            color={getTextColor()}
            hoverColor={getTextColor()}
          />
        </IconButton>
        <IconButton
          onClick={() => setCartOpen(true)}
          sx={{
            padding: 1.5,
            "&:hover": {
              transform: "scale(1.05)",
            },
            transition: "all 0.2s ease",
          }}
          aria-label="Open cart"
        >
          <ShoppingBagIcon
            size={isMobile ? 22 : 28}
            color={getTextColor()}
            hoverColor={getTextColor()}
          />
        </IconButton>
      </Box>

      {/* Enhanced Menu Drawer */}
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: { xs: "90vw", sm: 500 },
              height: "100vh",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,249,250,0.95) 100%)",
              backdropFilter: "blur(20px)",
              borderRight: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "2px 0 30px rgba(0,0,0,0.1)",
            },
          },
        }}
      >
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <Box
            sx={{
              p: 3,
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              background: "rgba(255,255,255,0.8)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Box
                component="img"
                src="/black_text_logo.png"
                alt="TruVault"
                sx={{
                  height: 30,
                  width: "auto",
                }}
              />
              <IconButton
                onClick={() => setMenuOpen(false)}
                sx={{
                  p: 1,
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.05)",
                    transform: "rotate(90deg)",
                  },
                  transition: "all 0.2s ease",
                }}
                aria-label="Close menu"
              >
                <CloseIcon sx={{ color: "#333", fontSize: "1.6rem" }} />
              </IconButton>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "grey.600",
                fontSize: "0.875rem",
                fontWeight: 300,
              }}
            >
              Premium Travel Essentials
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ flex: 1, py: 2 }}>
            <List sx={{ px: 1 }}>
              {navLinks.map((link) => (
                <ListItem key={link.label} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    onClick={() => handleNavigation(link.path)}
                    sx={{
                      borderRadius: 2,
                      mx: 1,
                      py: 2,
                      px: 2.5,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.04)",
                        transform: "translateX(8px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        mr: 2.5,
                        color: "secondary.main",
                        display: "flex",
                        alignItems: "center",
                        "& svg": { fontSize: "1.3rem" },
                      }}
                    >
                      {link.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <ListItemText
                        primary={link.label}
                        secondary={link.description}
                        primaryTypographyProps={{
                          fontSize: "1rem",
                          fontWeight: 500,
                          color: "#333",
                        }}
                        secondaryTypographyProps={{
                          fontSize: "0.8rem",
                          color: "grey.500",
                          fontWeight: 300,
                        }}
                      />
                    </Box>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Footer */}
          <Box
            sx={{
              p: 3,
              borderTop: "1px solid rgba(0,0,0,0.06)",
              background: "rgba(255,255,255,0.6)",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "grey.500",
                fontSize: "0.75rem",
                fontWeight: 300,
                textAlign: "center",
                display: "block",
                mb: 1,
              }}
            >
              TruVault © 2025
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "grey.400",
                fontSize: "0.7rem",
                fontWeight: 300,
                textAlign: "center",
                display: "block",
              }}
            >
              Crafted for Discerning Travelers
            </Typography>
          </Box>
        </Box>
      </Drawer>

      {/* Search Drawer */}
      <Drawer
        anchor="top"
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        slotProps={{
          paper: {
            sx: {
              height: "100vh",
              background: "rgba(255,255,255,0.96)",
              backdropFilter: "blur(10px)",
              boxShadow: 0,
              display: "flex",
              flexDirection: "column",
              transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
            },
          },
        }}
        transitionDuration={400}
      >
        <Slide
          in={searchOpen}
          direction="down"
          timeout={400}
          mountOnEnter
          unmountOnExit
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              opacity: searchOpen ? 1 : 0,
              transform: searchOpen ? "translateY(0)" : "translateY(-20px)",
              transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
          >
            {/* Sticky Header */}
            <Box
              sx={{
                position: "sticky",
                top: 0,
                backgroundColor: "rgba(255,255,255,0.98)",
                backdropFilter: "blur(10px)",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
                p: { xs: 2, md: 4 },
                zIndex: 10,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 3,
                }}
              >
                <Box />
                <IconButton
                  onClick={() => setSearchOpen(false)}
                  sx={{
                    padding: 1.5,
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.05)",
                      transform: "rotate(90deg)",
                    },
                    transition: "all 0.2s ease",
                  }}
                  aria-label="Close search"
                >
                  <CloseIcon sx={{ color: "#222", fontSize: "1.5rem" }} />
                </IconButton>
              </Box>

              <Box sx={{ maxWidth: 700, mx: "auto" }}>
                <SearchUI autoFocus={searchOpen} />
              </Box>
            </Box>

            <Box sx={{ flex: 1, overflow: "auto", px: { xs: 2, md: 4 } }} />
          </Box>
        </Slide>
      </Drawer>

      {/* Cart Drawer */}
      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: {
                xs: "100vw",
                sm: 450,
              },
              height: "100vh",
              background: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(10px)",
              boxShadow: "-2px 0 20px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
            },
          },
        }}
        transitionDuration={400}
      >
        <Slide
          in={cartOpen}
          direction="left"
          timeout={400}
          mountOnEnter
          unmountOnExit
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              opacity: cartOpen ? 1 : 0,
              transform: cartOpen ? "translateX(0)" : "translateX(20px)",
              transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
          >
            <Box
              sx={{
                position: "sticky",
                top: 0,
                backgroundColor: "rgba(255,255,255,0.98)",
                backdropFilter: "blur(10px)",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
                p: { xs: 2, md: 3 },
                zIndex: 10,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box />
                <IconButton
                  onClick={() => setCartOpen(false)}
                  sx={{
                    padding: 1.5,
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.05)",
                      transform: "rotate(90deg)",
                    },
                    transition: "all 0.2s ease",
                  }}
                  aria-label="Close cart"
                >
                  <CloseIcon sx={{ color: "#222", fontSize: "1.5rem" }} />
                </IconButton>
              </Box>
            </Box>

            <Box
              sx={{
                flex: 1,
                overflow: "hidden",
                px: { xs: 2, md: 3 },
                pb: { xs: 2, md: 3 },
              }}
            >
              <CartUI />
            </Box>
          </Box>
        </Slide>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
