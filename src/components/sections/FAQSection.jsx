import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import faqData from "../../assets/data/faqData.json";

const FAQSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ color: "#000", minHeight: "100vh", py: 6 }}>
      <Container maxWidth="md">
        {/* Monogram */}
        <Box display="flex" justifyContent="center" mb={4}>
          <img
            src="/black_monogram.png"
            alt="TruVault Monogram"
            style={{ height: isMobile ? 60 : 100 }}
          />
        </Box>

        {/* Header */}
        <Typography
          variant={isMobile ? "h4" : "h3"}
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Frequently Asked Questions
        </Typography>

        {/* Accordion Sections */}
        {faqData.faqs.map((section, index) => (
          <Box key={index} mb={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {section.category}
            </Typography>
            {section.questions.map((item, idx) => (
              <Accordion
                key={idx}
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: "1px solid #000",
                  boxShadow: "none",
                  "&::before": { display: "none" },
                  mb: 1,
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
                >
                  <Typography fontWeight={500}>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default FAQSection;
