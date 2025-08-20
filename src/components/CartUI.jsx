import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Fade,
  Button,
  Divider,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartUI = () => {
  // Mock cart data - replace with your actual cart state
  const [cartItems, setCartItems] = useState([]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return (
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 8,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "grey.700",
            fontSize: "1.1rem",
            fontWeight: 300,
            mb: 2,
          }}
        >
          Your cart is empty
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "grey.500",
            fontSize: "0.9rem",
            mb: 4,
            maxWidth: 300,
          }}
        >
          Add items to your cart to see them here. Continue shopping to discover our collections.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderColor: "grey.300",
            color: "grey.700",
            borderRadius: 0,
            px: 4,
            py: 1,
            textTransform: "uppercase",
            letterSpacing: 1,
            fontSize: "0.8rem",
            "&:hover": {
              borderColor: "secondary.main",
              backgroundColor: "secondary.main",
              color: "white",
            },
          }}
        >
          Continue Shopping
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Cart Header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: {
              xs: "1.3rem",
              md: "1.5rem",
            },
            fontWeight: 300,
            color: "text.primary",
            mb: 1,
          }}
        >
          Shopping Cart
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "grey.600",
            fontSize: "0.9rem",
            textTransform: "uppercase",
            letterSpacing: 0.5,
          }}
        >
          {getTotalItems()} {getTotalItems() === 1 ? "Item" : "Items"}
        </Typography>
      </Box>

      {/* Cart Items - Scrollable */}
      <Box
        sx={{
          flex: 1,
          overflow: "auto",
          minHeight: 0,
        }}
      >
        <List sx={{ p: 0 }}>
          {cartItems.map((item, index) => (
            <Fade in={true} timeout={300 + index * 100} key={item.id}>
              <ListItem
                sx={{
                  px: 0,
                  py: 3,
                  borderBottom: "1px solid",
                  borderColor: "grey.100",
                  alignItems: "flex-start",
                  "&:last-child": {
                    borderBottom: "none",
                  },
                }}
              >
                {/* Product Image */}
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    mr: 2,
                    backgroundColor: "grey.100",
                  }}
                />

                {/* Product Details */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 400,
                          color: "text.primary",
                          mb: 0.5,
                        }}
                      >
                        {item.title}
                      </Typography>
                    }
                    secondary={
                      <Box sx={{ mt: 0.5 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "grey.600",
                            fontSize: "0.8rem",
                            mb: 0.5,
                          }}
                        >
                          {item.color} • {item.size}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.primary",
                            fontSize: "1rem",
                            fontWeight: 500,
                          }}
                        >
                          ${item.price.toLocaleString()}
                        </Typography>
                      </Box>
                    }
                  />

                  {/* Quantity Controls */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mt: 2,
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      sx={{
                        border: "1px solid",
                        borderColor: "grey.300",
                        borderRadius: 0,
                        width: 32,
                        height: 32,
                        "&:hover": {
                          borderColor: "secondary.main",
                          backgroundColor: "secondary.main",
                          color: "white",
                        },
                      }}
                    >
                      <RemoveIcon sx={{ fontSize: "1rem" }} />
                    </IconButton>

                    <Typography
                      sx={{
                        minWidth: 24,
                        textAlign: "center",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                      }}
                    >
                      {item.quantity}
                    </Typography>

                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      sx={{
                        border: "1px solid",
                        borderColor: "grey.300",
                        borderRadius: 0,
                        width: 32,
                        height: 32,
                        "&:hover": {
                          borderColor: "secondary.main",
                          backgroundColor: "secondary.main",
                          color: "white",
                        },
                      }}
                    >
                      <AddIcon sx={{ fontSize: "1rem" }} />
                    </IconButton>

                    {/* Remove Item */}
                    <IconButton
                      size="small"
                      onClick={() => removeItem(item.id)}
                      sx={{
                        ml: 2,
                        color: "grey.500",
                        "&:hover": {
                          color: "error.main",
                          backgroundColor: "error.50",
                        },
                      }}
                    >
                      <DeleteOutlineIcon sx={{ fontSize: "1.2rem" }} />
                    </IconButton>
                  </Box>
                </Box>
              </ListItem>
            </Fade>
          ))}
        </List>
      </Box>

      {/* Cart Footer - Fixed at bottom */}
      <Box
        sx={{
          mt: 4,
          pt: 3,
          borderTop: "2px solid",
          borderColor: "grey.200",
        }}
      >
        {/* Subtotal */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.1rem",
              fontWeight: 400,
              color: "text.primary",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Subtotal
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.3rem",
              fontWeight: 500,
              color: "text.primary",
            }}
          >
            ${getTotalPrice().toLocaleString()}
          </Typography>
        </Box>

        {/* Shipping Note */}
        <Typography
          variant="body2"
          sx={{
            color: "grey.600",
            fontSize: "0.8rem",
            mb: 3,
            textAlign: "center",
          }}
        >
          Shipping and taxes calculated at checkout
        </Typography>

        {/* Checkout Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "secondary.main",
            color: "white",
            borderRadius: 0,
            py: 1.5,
            fontSize: "0.9rem",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: 1,
            "&:hover": {
              backgroundColor: "secondary.dark",
            },
          }}
        >
          Proceed to Checkout
        </Button>

        {/* Continue Shopping */}
        <Button
          fullWidth
          variant="text"
          sx={{
            mt: 1,
            color: "grey.600",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: 0.5,
            "&:hover": {
              backgroundColor: "transparent",
              color: "secondary.main",
            },
          }}
        >
          Continue Shopping
        </Button>
      </Box>
    </Box>
  );
};

export default CartUI;
