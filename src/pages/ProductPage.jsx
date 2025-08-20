import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Rating,
  Chip,
  IconButton,
  Card,
  CardMedia,
  Breadcrumbs,
  Link,
  Fade,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import productsData from "../assets/data/productsData.json";
import Loader from "../components/Loader";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const foundProduct = productsData.products.find(
      (p) => p.id === parseInt(id)
    );
    setTimeout(() => {
      setProduct(foundProduct);
      setSelectedColor(foundProduct?.colors[0] || "");
      setLoading(false);
    }, 300);
  }, [id]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
    // Add your cart logic here
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          aligns: "center",
          justifyContent: "center",
          pt: 10,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "grey.600", fontWeight: 300, mb: 2 }}
        >
          Product Not Found
        </Typography>
        <Button
          variant="outlined"
          onClick={() => navigate("/shop")}
          startIcon={<ArrowBackIcon />}
        >
          Back to Shop
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "grey.50",
        pt: { xs: 10, md: 12 },
        pb: 6,
      }}
    >
      <Container maxWidth="xl">
        {/* Breadcrumbs */}
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          sx={{ mb: 4, color: "grey.600" }}
        >
          <Link
            underline="hover"
            color="inherit"
            href="/"
            sx={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            sx={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              navigate("/shop");
            }}
          >
            Shop
          </Link>
          <Typography color="text.primary">{product.name}</Typography>
        </Breadcrumbs>

        {/* Back Button */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/shop")}
          sx={{
            mb: 4,
            color: "grey.700",
            "&:hover": { backgroundColor: "grey.100" },
          }}
        >
          Back to Collection
        </Button>

        {/* Product Content */}
        <Grid container spacing={{ xs: 3, md: 6 }}>
          {/* Product Image - Sticky */}
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Box
              sx={{
                position: { xs: "relative", md: "sticky" },
                top: { xs: "auto", md: 100 }, // Account for navbar height
                height: "fit-content",
              }}
            >
              <Fade in={true} timeout={600}>
                <Card
                  sx={{
                    borderRadius: 0,
                    boxShadow: "none",
                    border: "1px solid",
                    borderColor: "grey.200",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      height: { xs: 400, md: 600 },
                      objectFit: "cover",
                      backgroundColor: "grey.100",
                    }}
                  />
                </Card>
              </Fade>
            </Box>
          </Grid>

          {/* Product Details */}
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Fade in={true} timeout={800}>
              <Box>
                {/* Category & Stock Status */}
                <Box sx={{ display: "flex", aligns: "center", gap: 2, mb: 2 }}>
                  <Chip
                    label={product.category}
                    sx={{
                      backgroundColor: "grey.100",
                      color: "grey.700",
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                    }}
                  />
                  {product.inStock && (
                    <Chip
                      icon={<CheckCircleIcon />}
                      label="In Stock"
                      color="success"
                      variant="outlined"
                      size="small"
                    />
                  )}
                </Box>

                {/* Product Name */}
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.8rem", md: "2.5rem" },
                    fontWeight: 300,
                    color: "text.primary",
                    mb: 2,
                    letterSpacing: -1,
                    lineHeight: 1.2,
                  }}
                >
                  {product.name}
                </Typography>

                {/* Rating & Reviews */}
                <Box sx={{ display: "flex", aligns: "center", gap: 2, mb: 3 }}>
                  <Rating value={product.rating} precision={0.1} readOnly />
                  <Typography variant="body2" sx={{ color: "grey.600" }}>
                    {product.rating} ({product.reviews} reviews)
                  </Typography>
                </Box>

                {/* Pricing */}
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: "flex", aligns: "center", gap: 2 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        fontWeight: 600,
                        color: "text.primary",
                      }}
                    >
                      {formatPrice(product.price)}
                    </Typography>
                    {product.originalPrice > product.price && (
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.2rem",
                          color: "grey.500",
                          textDecoration: "line-through",
                        }}
                      >
                        {formatPrice(product.originalPrice)}
                      </Typography>
                    )}
                  </Box>
                  {product.originalPrice > product.price && (
                    <Typography
                      variant="body2"
                      sx={{ color: "success.main", fontWeight: 500, mt: 0.5 }}
                    >
                      Save {formatPrice(product.originalPrice - product.price)}
                    </Typography>
                  )}
                </Box>

                {/* Color Selection */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                    Color: {selectedColor}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {product.colors.map((color) => (
                      <Button
                        key={color}
                        variant={"outlined"}
                        size="small"
                        onClick={() => setSelectedColor(color)}
                        sx={{
                          borderRadius: 0,
                          border: "1px solid",
                          borderColor:
                            selectedColor === color
                              ? "secondary.main"
                              : "grey.300",
                          color: "text.primary",
                          minWidth: "auto",
                          px: 2,
                          py: 0.5,
                          fontSize: "0.8rem",
                          textTransform: "none",
                        }}
                      >
                        {color}
                      </Button>
                    ))}
                  </Box>
                </Box>

                {/* Quantity & Add to Cart */}
                <Box sx={{ mb: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      aligns: "center",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      Quantity:
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        aligns: "center",
                        border: "1px solid",
                        borderColor: "grey.300",
                      }}
                    >
                      <Button
                        onClick={() => handleQuantityChange(-1)}
                        sx={{
                          minWidth: 40,
                          borderRadius: 0,
                          color: "secondary.main",
                        }}
                      >
                        -
                      </Button>
                      <Typography
                        sx={{ px: 2, py: 1, minWidth: 40, textAlign: "center" }}
                      >
                        {quantity}
                      </Typography>
                      <Button
                        onClick={() => handleQuantityChange(1)}
                        sx={{
                          minWidth: 40,
                          borderRadius: 0,
                          color: "secondary.main",
                        }}
                      >
                        +
                      </Button>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                    <Button
                      variant="contained"
                      startIcon={<ShoppingCartIcon />}
                      size="large"
                      disabled={!product.inStock}
                      onClick={handleAddToCart}
                      sx={{
                        flex: 1,
                        backgroundColor: "secondary.main",
                        borderRadius: 0,
                        py: 1.5,
                        color: "white",
                        fontSize: "1rem",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                        "&:hover": {
                          backgroundColor: "secondary.dark",
                        },
                      }}
                    >
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                    <IconButton
                      onClick={() => setIsFavorite(!isFavorite)}
                      sx={{
                        border: "1px solid",
                        borderColor: "grey.300",
                        borderRadius: 0,
                        "&:hover": {
                          backgroundColor: "grey.100",
                        },
                      }}
                    >
                      {isFavorite ? (
                        <FavoriteIcon sx={{ color: "error.main" }} />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>
                  </Box>

                  {addedToCart && (
                    <Alert severity="success" sx={{ mt: 2 }}>
                      Product added to cart successfully!
                    </Alert>
                  )}
                </Box>

                {/* Short Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "grey.700",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    mb: 4,
                  }}
                >
                  {product.shortDescription}
                </Typography>

                {/* Product Specifications */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                    Specifications
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid
                      size={{
                        xs: 6,
                      }}
                    >
                      <Typography variant="body2" color="grey.600">
                        Size
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {product.size}
                      </Typography>
                    </Grid>
                    <Grid
                      size={{
                        xs: 6,
                      }}
                    >
                      <Typography variant="body2" color="grey.600">
                        Weight
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {product.weight}
                      </Typography>
                    </Grid>
                    <Grid
                      size={{
                        xs: 6,
                      }}
                    >
                      <Typography variant="body2" color="grey.600">
                        Capacity
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {product.capacity}
                      </Typography>
                    </Grid>
                    <Grid
                      size={{
                        xs: 6,
                      }}
                    >
                      <Typography variant="body2" color="grey.600">
                        Material
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {product.material}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                {/* Additional Info - Enhanced */}
                <Box
                  sx={{
                    mt: 4,
                    p: 3,
                    backgroundColor: "white",
                    border: "1px solid",
                    borderColor: "grey.200",
                    borderRadius: 0,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      fontWeight: 500,
                      color: "text.primary",
                      textAlign: "center",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      fontSize: "0.9rem",
                    }}
                  >
                    Why Choose TruVault
                  </Typography>

                  <Grid container spacing={3}>
                    <Grid
                      size={{
                        xs: 12,
                        md: 4,
                      }}
                    >
                      <Box
                        sx={{
                          textAlign: "center",
                          p: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "grey.50",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 2,
                          }}
                        >
                          <LocalShippingIcon
                            sx={{
                              fontSize: "2.5rem",
                              color: "secondary.main",
                              p: 1,
                              backgroundColor: "secondary.50",
                              borderRadius: "50%",
                            }}
                          />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "text.primary",
                            mb: 1,
                          }}
                        >
                          Free Shipping
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "grey.600",
                            fontSize: "0.85rem",
                            lineHeight: 1.5,
                          }}
                        >
                          Complimentary shipping on orders over ₹50,000 across
                          India
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid
                      size={{
                        xs: 12,
                        md: 4,
                      }}
                    >
                      <Box
                        sx={{
                          textAlign: "center",
                          p: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "grey.50",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 2,
                          }}
                        >
                          <SecurityIcon
                            sx={{
                              fontSize: "2.5rem",
                              color: "secondary.main",
                              p: 1,
                              backgroundColor: "secondary.50",
                              borderRadius: "50%",
                            }}
                          />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "text.primary",
                            mb: 1,
                          }}
                        >
                          Lifetime Guarantee
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "grey.600",
                            fontSize: "0.85rem",
                            lineHeight: 1.5,
                          }}
                        >
                          Comprehensive coverage on all functional damage for
                          life
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid
                      size={{
                        xs: 12,
                        md: 4,
                      }}
                    >
                      <Box
                        sx={{
                          textAlign: "center",
                          p: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "grey.50",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 2,
                          }}
                        >
                          <WorkspacePremiumIcon
                            sx={{
                              fontSize: "2.5rem",
                              color: "secondary.main",
                              p: 1,
                              backgroundColor: "secondary.50",
                              borderRadius: "50%",
                            }}
                          />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "text.primary",
                            mb: 1,
                          }}
                        >
                          Premium Quality
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "grey.600",
                            fontSize: "0.85rem",
                            lineHeight: 1.5,
                          }}
                        >
                          Crafted with precision engineering and premium
                          materials
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Fade>
          </Grid>
        </Grid>

        {/* Product Description & Key Features */}
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={{ xs: 3, md: 6 }}>
            {/* Extended Description */}
            <Grid
              size={{
                xs: 12,
                md: 8,
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontSize: "1.8rem", fontWeight: 300, mb: 3 }}
              >
                Product Details
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "grey.700",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  mb: 4,
                }}
              >
                {product.description}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "grey.700",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                }}
              >
                {product.extendedDescription}
              </Typography>
            </Grid>

            {/* Key Features */}
            <Grid
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontSize: "1.8rem", fontWeight: 300, mb: 3 }}
              >
                Key Features
              </Typography>
              {product.keyFeatures.map((feature, index) => (
                <Box key={index} sx={{ mb: 3, display: "flex", gap: 2 }}>
                  <Box
                    component="img"
                    src={feature.icon}
                    alt={feature.title}
                    sx={{ width: 40, height: 40, flexShrink: 0 }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "1rem", fontWeight: 500, mb: 0.5 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "grey.600", lineHeight: 1.5 }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductPage;
