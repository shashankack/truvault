import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Fade,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchUI = ({ autoFocus }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);

  // Mock search data - replace with your actual products/collections
  const searchData = [
    {
      id: 1,
      title: "Premium Collection",
      type: "Collection",
      category: "Luxury",
    },
    { id: 2, title: "Classic Elegance", type: "Product", category: "Premium" },
    {
      id: 3,
      title: "Modern Essentials",
      type: "Collection",
      category: "Contemporary",
    },
    {
      id: 4,
      title: "Signature Series",
      type: "Product",
      category: "Exclusive",
    },
    {
      id: 5,
      title: "Heritage Collection",
      type: "Collection",
      category: "Classic",
    },
  ];

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 300);
    }
  }, [autoFocus]);

  useEffect(() => {
    if (searchQuery.trim()) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        const filtered = searchData.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.type.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filtered);
        setIsTyping(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setSearchResults([]);
      setIsTyping(false);
    }
  }, [searchQuery]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Search Input - Fixed at top */}
      <Box sx={{ mb: 4 }}>
        <TextField
          ref={inputRef}
          fullWidth
          variant="standard"
          placeholder="Search for products, collections..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "grey.500", mr: 1 }} />
              </InputAdornment>
            ),
            sx: {
              fontSize: {
                xs: "1.2rem",
                md: "1.5rem",
              },
              fontWeight: 300,
              "& .MuiInput-underline:before": {
                borderBottomColor: "grey.300",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "primary.main",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "primary.main",
              },
            },
          }}
          InputLabelProps={{
            sx: {
              fontSize: "1.1rem",
              fontWeight: 300,
            },
          }}
        />
      </Box>

      {/* Scrollable Results Container */}
      <Box
        sx={{
          flex: 1,
          overflow: "auto",
          minHeight: 0, // Important for flex scrolling
        }}
      >
        {/* Search Results */}
        {searchQuery && (
          <Fade in={!isTyping} timeout={300}>
            <Box>
              {searchResults.length > 0 ? (
                <>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "grey.600",
                      mb: 2,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      fontSize: "0.75rem",
                    }}
                  >
                    {searchResults.length} Result
                    {searchResults.length !== 1 ? "s" : ""} Found
                  </Typography>
                  <List sx={{ p: 0 }}>
                    {searchResults.map((item) => (
                      <ListItem
                        key={item.id}
                        sx={{
                          px: 0,
                          py: 1.5,
                          borderBottom: "1px solid",
                          borderColor: "grey.100",
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "grey.50",
                            transform: "translateX(5px)",
                            transition: "all 0.2s ease",
                          },
                          "&:last-child": {
                            borderBottom: "none",
                          },
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              variant="h6"
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
                            <Box
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "grey.600",
                                  fontSize: "0.8rem",
                                  textTransform: "uppercase",
                                  letterSpacing: 0.5,
                                }}
                              >
                                {item.type}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "primary.main",
                                  fontSize: "0.8rem",
                                  fontWeight: 500,
                                }}
                              >
                                {item.category}
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </>
              ) : (
                <Box sx={{ textAlign: "center", py: 4 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "grey.600",
                      fontSize: "1rem",
                      fontWeight: 300,
                    }}
                  >
                    No results found for "{searchQuery}"
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "grey.500",
                      fontSize: "0.9rem",
                      mt: 1,
                    }}
                  >
                    Try a different search term
                  </Typography>
                </Box>
              )}
            </Box>
          </Fade>
        )}

        {/* Search Suggestions when no query */}
        {!searchQuery && (
          <Fade in={true} timeout={500}>
            <Box sx={{ py: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "grey.700",
                  fontSize: "1.1rem",
                  fontWeight: 300,
                  mb: 3,
                  textAlign: "center",
                }}
              >
                Popular Searches
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  justifyContent: "center",
                  mb: 4,
                }}
              >
                {["Premium", "Collections", "Luxury", "Heritage"].map((tag) => (
                  <Box
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    sx={{
                      px: 2,
                      py: 0.5,
                      border: "1px solid",
                      borderColor: "grey.300",
                      borderRadius: 0,
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      color: "grey.700",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: "secondary.main",
                        backgroundColor: "secondary.main",
                        color: "white",
                      },
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>

              {/* Additional suggestions or categories can go here */}
              <Typography
                variant="body2"
                sx={{
                  color: "grey.500",
                  textAlign: "center",
                  fontSize: "0.85rem",
                }}
              >
                Start typing to search our entire collection
              </Typography>
            </Box>
          </Fade>
        )}
      </Box>
    </Box>
  );
};

export default SearchUI;
