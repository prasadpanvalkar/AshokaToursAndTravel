import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Box, Typography } from '@mui/material';


function AboutUsPage() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflowX: "hidden", // Ensure there's no horizontal overflow
        }}
      >
        <Header />
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            textAlign={"center"}
            sx={{ mt: 4 }}
          >
            About Us
          </Typography>

          {/* About Us section */}
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                mt: 10,
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "50%" },
                  mr: { md: 10 },
                  mb: { xs: 5, md: 0 },
                }}
              >
                <Typography variant="body2" gutterBottom>
                  <b style={{ color: "red" }}>Ashoka Tours and Travels</b>,
                  based in Aurangabad we've been curating personalized and
                  ready-made tour packages across India since 2005. Our
                  expertise covers a range of travel experiences, from luxury
                  and group tours to adventure and heritage trips, all at
                  competitive prices. With a focus on providing seamless
                  journeys, we prioritize customer service, cleanliness, and
                  comfort. Backed by an experienced team, a modern fleet of
                  vehicles, and a commitment to excellence, we ensure your
                  travel dreams turn into memorable adventures. Choose us for
                  reliable, local expertise and unparalleled service that puts
                  you first.
                </Typography>
              </Box>
              <Box
                component="img"
                src={process.env.PUBLIC_URL + "/images/office.jpeg"}
                alt="About Us"
                sx={{
                  height: { xs: "230px", md: "250px" },
                  width: { xs: "100%", md: "50%" },
                  borderRadius: "10px",
                  boxShadow: 4,
                }}
              />
            </Box>
          </Container>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                mt: 15,
                mb: 15,
              }}
            >
              <Box
                component="img"
                src={process.env.PUBLIC_URL + "/images/withcliets.jpeg"}
                alt="About Us"
                sx={{
                  objectFit: "cover",
                  height: { xs: "230px", md: "250px" },
                  width: { xs: "100%", md: "50%" },
                  borderRadius: 4,
                  boxShadow: 4,
                  mt: { xs: 5, md: 0 },
                }}
              />
              <Box
                sx={{
                  width: { xs: "100%", md: "50%" },
                  ml: { md: 10 },
                  mt: { xs: 5, md: 0 },
                }}
              >
                <Typography variant="body2" gutterBottom>
                  <b style={{ color: "red" }}>Ashoka Tours and Travels</b> is
                  proud to be recommended by <b style={{ color: "blue" }}>Lonely Planet</b> in their India Trip
                  Guide, a testament to our dedication to delivering exceptional
                  travel experiences. This prestigious endorsement highlights
                  our reputation as a trusted tour operator, offering curated
                  journeys that showcase the best of India's rich culture and
                  history. Whether you're looking for adventure, heritage, or
                  leisure, our personalized services and commitment to customer
                  satisfaction ensure that every trip with us is unforgettable.
                  With this recognition, you can trust us to plan your dream
                  vacation with expertise and care.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
        <Footer />
      </Box>
    </div>
  );
}

export default AboutUsPage;
