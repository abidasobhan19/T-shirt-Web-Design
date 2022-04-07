import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";

import Canvastest from "./canvas";
import { connect } from "react-redux";
import domtoimage from "dom-to-image";
const Display = ({ Shirt_side, Color }) => {
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
      {Shirt_side === "front" ? (
        <Box>
          <img style={{ fillColor: "black" }} src={Color.front} alt="t-shirt" />
        </Box>
      ) : (
        <img style={{ fillColor: "black" }} src={Color.back} alt="t-shirt" />
      )}
      <Box
        style={{
          width: 500,
          height: 200,
          marginTop: Shirt_side === "front" ? 150 : 100,
          marginLeft: -345,
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

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Display);
