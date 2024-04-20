import React, { useState } from "react";
import { Box, Slide, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./PackageCard.css";

const PackageCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageUrls = [
    "https://i.ibb.co/qCkd9jS/img1.jpg",
    "https://i.ibb.co/jrRb11q/img2.jpg",
    "https://i.ibb.co/NSwVv8D/img3.jpg",
    "https://i.ibb.co/Bq4Q0M8/img4.jpg",
    "https://i.ibb.co/jTQfmTq/img5.jpg",
    "https://i.ibb.co/RNkk6L0/img6.jpg",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box className="container">
      <Box className="slide">
        {imageUrls.map((imageUrl, idx) => (
          <Slide
            key={idx}
            direction={idx === currentIndex ? "left" : "right"}
            in={idx === currentIndex}
            mountOnEnter
            unmountOnExit
          >
            <img src={imageUrl} alt={`Image ${idx + 1}`} className="image" />
          </Slide>
        ))}
      </Box>
      <Box className="button">
        <Button className="prev" onClick={handlePrev}>
          <ChevronLeftIcon />
        </Button>
        <Button className="next" onClick={handleNext}>
          <ChevronRightIcon />
        </Button>
      </Box>
    </Box>
  );
};
export default PackageCard;
