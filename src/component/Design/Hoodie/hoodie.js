import React from "react";
import { Box, Button, Switch } from "@mui/material";
import CharcoalHeather from "../../../img/T-shirt Layout/Charcoal Heather.png";
import { connect } from "react-redux";
import "../style.css";
import Canvas from "../canvas";
const Hoodie = ({ Shirt_side, Color }) => {
  return (
    <Box>
      <Box>
        {" "}
        <img
          style={{ fillColor: "black" }}
          src={CharcoalHeather}
          alt="t-shirt"
        />
      </Box>
      {/* <Box
        className="Hover"
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

export default connect(mapStateToProps)(Hoodie);
