/*************  ✨ Codeium Command 🌟  *************/
import React from "react";
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Grid,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import emailjs from "@emailjs/browser";


emailjs.init("uafuRHsbBmMGhy5xY"); 
const BookingForm = () => {
  // States for form inputs
  const [dateTime, setDateTime] = React.useState(dayjs());
  const [serviceType, setServiceType] = React.useState("");
  const [vehicleType, setVehicleType] = React.useState("");
  const [tourType, setTourType] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");

  const handleServiceChange = (event) => {
    setServiceType(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Check if all fields are filled
    if (
      serviceType === "" ||
      (serviceType === "Hire Vehicle" && vehicleType === "") ||
      (serviceType === "Book a Tour" && tourType === "") ||
      name.trim() === "" ||
      email.trim() === "" ||
      mobile.trim() === ""
    ) {
      alert("Please fill all the fields.");
      return;
    }

    // Prepare the template parameters
    const templateParams = {
      serviceType,
      vehicleType: serviceType === "Hire Vehicle" ? vehicleType : "",
      tourType: serviceType === "Book a Tour" ? tourType : "",
      name,
      email,
      mobile,
      dateTime: dateTime.toISOString(),
    };

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        "service_xdwayot", // Your Service ID
        "template_4gpnkr8", // Your Template ID
        templateParams
      );

      // Check the response status
      if (response.status === 200) {
        alert("Booking confirmed!");
        window.location.href = "/booking-confirmation"; // Redirect to confirmation page
      } else {
        throw new Error("Failed to confirm booking.");
      }
    } catch (error) {
      console.error("Error during booking:", error);
      alert(`Error occurred while booking: ${error.message}`);
    }
  };


  return (
    <Box
      sx={{
        backgroundColor: "rgba(0,0,0,0.1)",
        backgroundImage: "linear-gradient(to bottom, #fff, #fff)",
        width: { xs: "90vw", md: "920px" },
        height: "auto",
        borderRadius: 4,
        border: "1px solid #E0E0E0",
        boxShadow: 3,
        padding: 4,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" align="center" gutterBottom>
        Booking
      </Typography>
      <Grid container spacing={3} my={6} px={4}>
        {/* Select Service */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="medium">
            Select Service
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Select Service</InputLabel>
            <Select value={serviceType} onChange={handleServiceChange}>
              <MenuItem value="Hire Vehicle">Hire Vehicle</MenuItem>
              <MenuItem value="Hire a Guide">Hire a Guide</MenuItem>
              <MenuItem value="Currency Exchange">Currency Exchange</MenuItem>
              <MenuItem value="Book a Tour">Book a Tour</MenuItem>
              <MenuItem value="Book Hotel">Book Hotel</MenuItem>
              <MenuItem value="Book Flight Ticket">
                Book Flight Tickets
              </MenuItem>
              <MenuItem value="Book Train Ticket">Book Train Ticket</MenuItem>
              <MenuItem value="Book Bus Ticket">Book Bus Ticket</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Select Vehicle or Tour */}
        <Grid item xs={12} md={6}>
          {serviceType === "Hire Vehicle" && (
            <Typography variant="h6" fontWeight="medium">
              Select Vehicle
            </Typography>
          )}
          {serviceType === "Book a Tour" && (
            <Typography variant="h6" fontWeight="medium">
              Select Tour
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {serviceType === "Hire Vehicle" && (
            <FormControl fullWidth>
              <InputLabel>Select Vehicle</InputLabel>
              <Select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <MenuItem value="Car">Car</MenuItem>
                <MenuItem value="Van">Tempo Traveler</MenuItem>
                <MenuItem value="Bus">Bus</MenuItem>
              </Select>
            </FormControl>
          )}
          {serviceType === "Book a Tour" && (
            <FormControl fullWidth>
              <InputLabel>Select Tour</InputLabel>
              <Select
                value={tourType}
                onChange={(e) => setTourType(e.target.value)}
              >
                <MenuItem value="Ellora and City Tour">
                  Ellora and City Tour
                </MenuItem>
                <MenuItem value="South India Tour">South India Tour</MenuItem>
                <MenuItem value="Shirdi / Shani Shingnapur Tour">
                  Shirdi / Shani Shingnapur Tour
                </MenuItem>
              </Select>
            </FormControl>
          )}
        </Grid>

        {/* Select Date and Time */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="medium">
            Select Date and Time *
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Select Date and Time *"
              value={dateTime}
              onChange={setDateTime}
              textField={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>

        {/* Enter Name */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="medium">
            Enter Name *
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* Enter Email */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="medium">
            Enter Email *
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* Enter Mobile Number */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="medium">
            Enter Mobile No. *
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            placeholder="Enter Mobile No."
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            fullWidth
          />
        </Grid>

        {/* Confirm Booking Button */}
        <Grid item xs={12} md={6} />
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#FB0606",
              "&:hover": { backgroundColor: "#d90404" },
            }}
            onClick={handleSubmit} // Add handleSubmit to confirm button
          >
            Confirm Booking
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingForm;

/******  d778818d-e606-4f51-8b4d-615e634abcfd  *******/