import React from "react";
import { Box } from "@mui/material";
import BlackTshirt from "../../img/T-shirt Layout/T-shirt.png";
const Display = () => {
  return (
    <Box display="flex" flexGrow="1">
      <Box style={{ marginTop: 80, marginLeft: "25%" }}>
        <img style={{ fillColor: "black" }} src={BlackTshirt} alt="t-shirt" />
      </Box>
    </Box>
  );
};

export default Display;
