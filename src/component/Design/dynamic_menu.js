import React, { useState, useEffect } from "react";
import { Box, Slider, Divider, IconButton, Typography } from "@mui/material";
import { connect } from "react-redux";
import { setButtonDyncData } from "../../redux/action/button_action";
import { setAlignButtonDyncData } from "../../redux/action/align_button";
import { setScaleDyncData } from "../../redux/action/scale_action";
import AlignVerticalTopIcon from "@mui/icons-material/AlignVerticalTop";
import AlignHorizontalCenterIcon from "@mui/icons-material/AlignHorizontalCenter";
const DynamicMenu = ({
  setButtonDyncData,
  setAlignButtonDyncData,
  setScaleDyncData,
}) => {
  const [value, setValue] = React.useState(0.1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setScaleDyncData(value);
  }, [value]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{
        width: 400,
        height: 100,
        backgroundColor: "black",
        padding: 10,
        marginLeft: 50,
      }}
    >
      <Box display="flex" flexDirection="row">
        <Typography variant="h6" style={{ color: "white" }}>
          <b>Tools </b>
        </Typography>
        <Box>
          <IconButton
            color="primary"
            aria-label="upload picture"
            onClick={() => {
              setButtonDyncData(1);
            }}
            component="span"
            style={{ backgroundColor: "white", margin: 5 }}
          >
            <AlignVerticalTopIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={() => {
              setAlignButtonDyncData(1);
            }}
            style={{ backgroundColor: "white", margin: 5 }}
          >
            <AlignHorizontalCenterIcon />
          </IconButton>
        </Box>
      </Box>

      <Box>
        <Slider
          defaultValue={0.1}
          value={value}
          onChange={handleChange}
          aria-label="Default"
          valueLabelDisplay="auto"
          step={0.00000000000000001}
          min={0.1}
          max={3}
        />
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setButtonDyncData: (data) => dispatch(setButtonDyncData(data)),
    setAlignButtonDyncData: (data) => dispatch(setAlignButtonDyncData(data)),
    setScaleDyncData: (data) => dispatch(setScaleDyncData(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DynamicMenu);
