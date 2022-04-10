import React from "react";
import { Box, Button, Switch } from "@mui/material";
import { connect } from "react-redux";
// import Canvas from "../canvas";
const TShirt = ({ Shirt_side, Color }) => {
  return (
    <Box>
      <Box>
        {" "}
        {Shirt_side === "front" ? (
          <Box>
            <img
              style={{ fillColor: "black" }}
              src={Color.front}
              alt="t-shirt"
            />
          </Box>
        ) : (
          <img style={{ fillColor: "black" }} src={Color.back} alt="t-shirt" />
        )}
      </Box>

      {/* <Box
        style={{
          marginTop: Shirt_side === "front" ? -370 : -400,
          marginLeft: 145,
        }}
      >
        <Canvas />
      </Box> */}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(TShirt);
