import React from "react";
import { Box } from "@mui/material";
import BlackTshirt from "../../img/T-shirt Layout/T-shirt.png";
import Canvastest from "./canvas";
const Display = () => {
  return (
    <Box display="flex" flexGrow="1">
      <Box style={{ marginTop: 80, marginLeft: "25%" }}>
        <img style={{ fillColor: "black" }} src={BlackTshirt} alt="t-shirt" />
      </Box>

      <Box
        style={{
          width: 130,
          height: 100,
          marginTop: 150,
          marginLeft: -205,
          backgroundColor: "yellow",
        }}
      >
        <Canvastest />
      </Box>
    </Box>
  );
};

export default Display;
