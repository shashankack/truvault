import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import AnimatedIcon from "../components/AnimatedIcon";

const About = () => {
  return (
    <Stack
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      px={{ xs: 2, sm: "15%" }}
      py={{ xs: 10, sm: 20 }}
    >
      <Box>
        <AnimatedIcon color="#000" width={100} height={100} />
      </Box>
      <Typography
        variant="h1"
        color="text.primary"
        textTransform="uppercase"
        fontSize={{ xs: 24, sm: 50 }}
        fontWeight={500}
      >
        About TruVault
      </Typography>
      <Typography
        variant="body1"
        fontSize={{ xs: 14, sm: 20 }}
        fontWeight={600}
      >
        TruVault: travel, evolved.
      </Typography>
      <Typography
        variant="body1"
        fontSize={{ xs: 14, sm: 20 }}
        fontWeight={400}
        textAlign="justify"
        lineHeight={1.5}
        sx={{
          textAlignLast: "center",
        }}
      >
        TruVault is a premium luggage brand engineered for the modern explorer —
        combining sophisticated design with uncompromising durability at a price
        that doesn’t weigh you down. Crafted using aerospace-grade materials and
        reinforced shell technology, every TruVault case is built to endure the
        rigours of travel while maintaining a sleek, minimalist aesthetic.
        <br /> <br />
        Our suitcases are more than just storage — they’re thoughtfully designed
        companions that protect what matters. From whisper-quiet wheels and
        ergonomic telescopic handles to GPS-enabled tags and reinforced corner
        guards, each detail is refined for performance, convenience, and peace
        of mind.
        <br /> <br />
        Rooted in the belief that world-class travel gear shouldn't be out of
        reach, TruVault redefines value without sacrificing quality. Whether
        you're navigating city streets or crossing continents, TruVault stays by
        your side — a reliable vault for your journey, wherever life takes you.
        <br /> <br />
        Built to move. Priced to move.
      </Typography>
    </Stack>
  );
};

export default About;
