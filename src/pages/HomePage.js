import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import UserReviewCard from "../components/UserReviewCard";
import { Container, Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExploreAurangabadSection from "../components/ExploreAurangabadSection";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";


function HomePage() {
  const theme = useTheme();
  

  return (
    <div>
      <Header />
      <img
        src="illustrations/Young man with a backpack and items for traveling around.png"
        alt="Young man with a backpack and items for traveling around"
        style={{
          position: "relative",
          left: 1170,
          top: 400,
          width: 350,
          height: 400,
          display: window.innerWidth < 600 ? "none" : "block",
        }}
      />
      <img
        src="illustrations/Passport and plane tickets for travelling abroad.png"
        alt="Young man with a backpack and items for traveling around"
        style={{
          position: "relative",
          left: 10,
          top: 90,
          width: 250,
          height: 300,

          display: window.innerWidth < 600 ? "none" : "block",
        }}
      />
      <Container maxWidth="lg" sx={{ overflowX: "hidden", mt: -85 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
            mt: 14,

            position: "relative",
            overflowX: "hidden",
            // [theme.breakpoints.down("sm")]: {
            //   transform: "scale(0.8)",
            // },
          }}
        >
          <Box
            sx={{
              transform: "scale(1.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{display: "flex", alignItems: "center"}}>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  alignItems: "left",
                  fontWeight: "semi-bold",
                  ml: -16,
                  pt: -2,
                  pr: 2,
                  [theme.breakpoints.down("sm")]: {
                    ml: -14,
                  },
                }}
              >
                Recommended By 
              </Typography>
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/images/LovelyPlanetLogo (2).png`}
                alt="ashoka logo"
                sx={{
                  height: 135,
                  width: 225,
                  mr: -25,
                  
                  [theme.breakpoints.down("sm")]: {
                    height: 100, 
                    width:115,
                    
                  
                  },
                }}
              />
            </Box>
            
            <Typography
              variant="h1"
              color="#db352a"
              sx={{ alignContent: "center" }}
            >
              Ashoka
            </Typography>
            <Typography
              variant="h6"
              color="#db352a"
              sx={{ alignContent: "right", mr: -20, mt: -2 }}
            >
              Tours and Travel
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="error"
            size={window.innerWidth < 600 ? "small" : "medium"}
            sx={{ mt: 6, bgcolor: "#db352a" }}
            component={Link}
            to="/booking"
          >
            Book Now
          </Button>
          <Grid
            container
            spacing={2}
            sx={{ mt: 10, pt: 2, flexDirection: { xs: "column", sm: "row" } }}
          >
            <Grid item xs={12} sm={12}>
              <Button
                variant="outlined"
                color="error"
                size="small" // button size smaller
                startIcon={<PhoneIcon sx={{ color: "#db352a" }} />}
                fullWidth
                href="tel:+919890565100"
                onClick={() => {
                  if (window.navigator.msLaunchUri) {
                    window.navigator.msLaunchUri(
                      "tel:+919890565100",
                      (success) => {},
                      (error) => {}
                    );
                  } else {
                    window.open("tel:+919890565100", "_self");
                  }
                }}
              >
                <Typography variant="body1" color="#db352a">
                  +91 9890565100
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                variant="outlined"
                color="error"
                size="small" // button size smaller
                startIcon={<PhoneIcon sx={{ color: "#db352a" }} />}
                fullWidth
                href="tel:+919890565100"
                onClick={() => {
                  if (window.navigator.msLaunchUri) {
                    window.navigator.msLaunchUri(
                      "tel:+919890565100",
                      (success) => {},
                      (error) => {}
                    );
                  } else {
                    window.open("tel:+919890565100", "_self");
                  }
                }}
              >
                <Typography variant="body1" color="#db352a">
                  +91 9890340816
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Button
            variant="outlined"
            color="error"
            size="small" // button size smaller
            startIcon={<EmailIcon sx={{ color: "#db352a" }} />}
            sx={{ mt: 2 }}
            href="mailto:atkadam88@gmail.com"
            target="_blank"
          >
            <Typography variant="body1" color="#db352a">
              atkadam88@gmail.com
            </Typography>
          </Button>
        </Box>
      </Container>
      <ExploreAurangabadSection /> {/* Services section */}
      <Container maxWidth="lg" sx={{ mt: -45 }}>
        <img
          src="illustrations/Young male traveler with backpack.png"
          alt="Young male traveler with backpack."
          style={{
            position: "relative",
            right: -1110,
            top: 700,
            display: window.innerWidth < 600 ? "none" : "block",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 2,
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            color="#db352a"
            align="center"
            sx={{ textAlign: "center", pt: 2 }}
          >
            Services
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            my: 8,
            py: 4,
            gap: 4,
          }}
        >
          <ServiceCard
            serviceTitle="Hotel Booking"
            imagePath={process.env.PUBLIC_URL + "/images/hotel1.jpg"}
          />
          <ServiceCard
            serviceTitle="Hire Guide"
            imagePath={process.env.PUBLIC_URL + "/images/GuideMap.jpg"}
          />
          <ServiceCard
            serviceTitle="Currency Exchange"
            imagePath={process.env.PUBLIC_URL + "/images/CurrencyExchange.png"}
          />
        </Box>
      </Container>
      {/* Customers reviews section */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "auto", md: "720px" },
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)",
          backgroundColor: "#db352a",
          mt: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 4,
            }}
          >
            {/* <img
              src="illustrations/Travelling by plane, person at the airport.png"
              alt="Young male traveler with backpack."
              style={{
                position: "absolute",
                left: 0,
                top: 2460,
                clipPath: "polygon(0 0, 60% 0%, 100% 70%, 0 100%)",
                display: window.innerWidth < 600 ? "none" : "block",
              }}
            /> */}
            <Typography
              variant="h3"
              component="h3"
              color="white"
              sx={{ textAlign: "center" }}
            >
              Reviews
            </Typography>
          </Box>
          <Grid
            container
            spacing={6}
            sx={{
              my: 4,
              py: 4,
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Grid item xs={12} md={6} lg={4}>
              <UserReviewCard
                review='"I had a great experience with Ashokatours. The hotel booking service was excellent and the guide was very knowledgeable about the places we visited."'
                userName="John Doe"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <UserReviewCard
                review='"This was the second time we have used Ashoka Car facility and as before all went well. Pick up and drop off timely and efficient. Car was well worth the hire fees and the the best compliment is we will use Ashoka next time also."'
                userName="SK Ansari"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <UserReviewCard
                review='"People very responsible and nice. Always willing to help and giving their best. Administrative staff is very serious and giving always very good options. I use to arrange the vehicles of this agency for my groups coming to India and they are always very happy!"'
                userName="Merlin"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <UserReviewCard
                review='"Transportation was on time, drivers were punctual and very polite to accommodate waiting time. mini bus was in great condition and perfect for the guests. you have been so quick to respond, professional, helpful and inc#db352aibly friendly."'
                userName="Priyanka C."
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Address Section */}
      <Box
        sx={{
          height: 425,
          bgcolor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
          my: 2,
        }}
      >
        {/* About Us section */}
        <Container maxWidth="lg" sx={{ mb: 12 }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "  ",
              mt: 24,
              py: 4,
              pt: 2,
            }}
          >
            Address
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: { xs: "center", md: "space-between" },
              my: 6,
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                mr: { xs: 0, md: 10 },
              }}
            >
              <Box sx={{ mt: { xs: 2, md: 0 } }}>
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
                    sx={{
                      mr: 2,
                      fontSize: "1.25rem",
                      mb: { xs: 3, md: 0 },
                      color: "#db352a",
                    }}
                  />
                  Hotel Panchavati, Samadhan Colony, Padampura, Chhatrapati
                  Sambhajinagar (Aurangabad), Maharashtra 431001
                </Typography>

                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  // margin-top is 4px on small screens and 0px on medium and large screens
                  sx={{ mt: { xs: 4, md: 4 } }}
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
                height: { xs: "150px", md: "250px" },
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
    </div>
  );
}

export default HomePage;

