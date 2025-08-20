import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Fade,
  Button,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import productsData from "../assets/data/productsData.json";
import Loader from "../components/Loader";

const Shop = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData.products);
      setLoading(false);
    }, 300);
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getColorDot = (color) => {
    const colorMap = {
      black: "#000000",
      silver: "#C0C0C0",
      red: "#DC143C",
      blue: "#1976d2",
      green: "#4caf50",
      brown: "#8B4513",
      gold: "#FFD700",
      white: "#FFFFFF",
      grey: "#808080",
      navy: "#000080",
    };
    return colorMap[color.toLowerCase()] || "#666";
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: 400, md: 600 },
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581553673739-c4906b6f5b2d?q=100&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",

          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            color: "white",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 300,
              mb: 2,
              letterSpacing: 2,
            }}
          >
            Polycarbonate Suitcases, Bags
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 300,
              letterSpacing: 2,
            }}
          >
            & Accessories
          </Typography>
        </Box>
      </Box>

      {/* Filters Bar */}
      <Box
        sx={{
          borderBottom: "1px solid #e0e0e0",
          backgroundColor: "white",
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              startIcon={<TuneIcon />}
              sx={{
                color: "black",
                textTransform: "uppercase",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: 1,
              }}
            >
              Filters
            </Button>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                variant="body2"
                sx={{ color: "grey.600", fontSize: "0.875rem" }}
              >
                {products.length} products
              </Typography>
              <Button
                sx={{
                  color: "black",
                  textTransform: "uppercase",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: 1,
                }}
              >
                Sort By
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* New Badge */}
      <Box sx={{ backgroundColor: "#e8e8e8", py: 1 }}>
        <Container maxWidth="xl">
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "grey.700",
              fontSize: "0.875rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            New
          </Typography>
        </Container>
      </Box>

      {/* Products Grid */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={0}>
          {products.map((product, index) => (
            <Grid
              size={{
                xs: 6,
                md: 3,
              }}
              key={product.id}
            >
              <Fade in={true} timeout={400 + index * 50}>
                <Card
                  onClick={() => navigate(`/product/${product.id}`)}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 0,
                    boxShadow: "none",
                    backgroundColor: "white",
                    cursor: "pointer",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {/* Product Image */}
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      height: { xs: 250, md: 350 },
                      objectFit: "cover",
                      backgroundColor: "#f8f8f8",
                    }}
                  />

                  {/* Product Details */}
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      p: { xs: 2, md: 3 },
                    }}
                  >
                    {/* Product Name */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        fontWeight: 400,
                        color: "text.primary",
                        mb: 1,
                        lineHeight: 1.3,
                      }}
                    >
                      {product.name}
                    </Typography>

                    {/* Price */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: "0.95rem", md: "1rem" },
                        fontWeight: 500,
                        color: "text.primary",
                        mb: 2,
                      }}
                    >
                      {formatPrice(product.price)}
                    </Typography>

                    {/* Color Options */}
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        mt: "auto",
                      }}
                    >
                      {product.colors.slice(0, 4).map((color, colorIndex) => (
                        <Box
                          key={colorIndex}
                          sx={{
                            width: 16,
                            height: 16,
                            borderRadius: "50%",
                            backgroundColor: getColorDot(color),
                            border:
                              color.toLowerCase() === "white"
                                ? "1px solid #e0e0e0"
                                : "none",
                            cursor: "pointer",
                            "&:hover": {
                              transform: "scale(1.1)",
                            },
                            transition: "transform 0.2s ease",
                          }}
                        />
                      ))}
                      {product.colors.length > 4 && (
                        <Typography
                          variant="caption"
                          sx={{
                            color: "grey.600",
                            fontSize: "0.75rem",
                            alignSelf: "center",
                            ml: 0.5,
                          }}
                        >
                          +{product.colors.length - 4}
                        </Typography>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Shop;
