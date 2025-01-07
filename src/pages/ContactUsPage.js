import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Container, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactUsPage = () => {
  return (
    <Box>
      <Header />
      <Box >
        <Typography
          variant="h4"
          gutterBottom
          textAlign={"center"}
          sx={{ mt: 4 }}
        >
          Contact Us
        </Typography>

        {/* About Us section */}
        <Container maxWidth="lg" sx={{ mb: 20 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: { xs: "center", md: "space-between" },
              mt: 10,
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                mr: { xs: 0, md: 10 },
                mb: { xs: 4, md: 0 },
              }}
            >
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontSize: "0.875rem",
                    lineHeight: "1.5rem",
                  }}
                >
                  <LocationOnIcon
                    fontSize="small"
                    sx={{ mr: 2, fontSize: "1.25rem", mb: 3, color: "red" }}
                  />
                  Hotel Panchavati, Samadhan Colony, Padampura, Chhatrapati
                  Sambhajinagar (Aurangabad), Maharashtra 431001
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontSize: "0.875rem",
                    lineHeight: "1.5rem",
                    mt: 2,
                  }}
                >
                  <PhoneIcon
                    fontSize="small"
                    sx={{ mr: 2, fontSize: "1.25rem", color: "red" }}
                  />
                  Mobile: +91 9890340816, 
                          +91 9890565100,
                          +91 9922063222                
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontSize: "0.875rem",
                    lineHeight: "1.5rem",
                    mt: 2,
                  }}
                >
                  <EmailIcon
                    fontSize="small"
                    sx={{ mr: 2, fontSize: "1.25rem", color: "red" }}
                  />
                  <span style={{ verticalAlign: "middle" }}>
                    {/* <b style={{ color: "red" }}>Email</b>: */}
                    <a
                      href="mailto:info@ashokatours.com"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      atkdam88@gmail.com
                    </a>
                  </span>
                </Typography>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  sx={{ mt: 4 }}
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/C8gMwQ2mJKwK34Ao8",
                      "_blank"
                    )
                  }
                >
                  Get Direction
                </Button>
              </Box>
            </Box>
            <Box
              component="img"
              src={process.env.PUBLIC_URL + "/images/Map.png"}
              alt="About Us"
              sx={{
                height: { xs: 150, md: 200 },
                width: { xs: "100%", md: "50%" },
                borderRadius: "10px",
                boxShadow: 4,
                objectFit: "cover",
                objectPosition: "center 60%",
                mt: { xs: 4, md: 0 },
              }}
            />
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactUsPage;
