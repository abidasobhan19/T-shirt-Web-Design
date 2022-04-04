import React from "react";
import { Box, Button } from "@mui/material";
import BlackTshirt from "../../img/T-shirt Layout/T-shirt.png";
import Canvastest from "./canvas";
import domtoimage from "dom-to-image";
const Display = () => {
  const getimage = () => {
    console.log("hello");
    var node = document.getElementById("my-node");

    domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        console.log(dataUrl);
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <Box id="my-node" display="flex" flexGrow="1">
      <Box style={{ marginTop: 80, marginLeft: "25%" }}>
        <img style={{ fillColor: "black" }} src={BlackTshirt} alt="t-shirt" />
      </Box>
      <Box
        style={{
          width: 150,
          height: 100,
          marginTop: 150,
          marginLeft: -210,
        }}
      >
        <Canvastest />
      </Box>

      <Box>
        <Button onClick={getimage}> Click to Save</Button>
      </Box>
    </Box>
  );
};

export default Display;
