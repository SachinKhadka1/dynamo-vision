// Footer.js
import React, { useState } from "react";
import {
  Grid,
  IconButton,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

const Footer = () => {
  const [emailValue, setEmailValue] = useState("");

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted email:", emailValue);
  };
  return (
    <div>
      <Box className="footer-box" component="footer">
        <Grid
          container
          spacing={2}
          direction={"column"}
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "80%",
            maxWidth: "50%",
          }}
        >
          <Grid item>
            <Typography className="newletter-txt">Newsletter</Typography>
          </Grid>
          <Grid item>
            <Typography className="sub-txt">
              Subscribe to our newsletter
            </Typography>
          </Grid>
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={8}>
              <TextField
                label="Enter email"
                fullWidth
                type="email"
                value={emailValue}
                onChange={handleEmailChange}
                sx={{ height: "100%", backgroundColor: "white" }}
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleSubmit}
                sx={{ height: "100%", backgroundColor: "#13351f" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8} md={6} container direction={"column"}>
            <Grid item>
              <Typography className="follow-txt"> FOLLOW</Typography>
            </Grid>
            <Grid item>
              <IconButton className="iconButton" aria-label="facebook">
                <FacebookIcon className="facebook-icon" />
              </IconButton>
              <IconButton className="iconButton" aria-label="instagram">
                <InstagramIcon className="instagram-icon" />
              </IconButton>
              <IconButton className="iconButton" aria-label="youtube">
                <YouTubeIcon className="youtube-icon" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
