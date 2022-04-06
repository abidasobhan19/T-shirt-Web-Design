import React from "react";
import { connect } from "react-redux";
import { Box, Typography } from "@mui/material";
import SettingHeader from "./setting/settingHeader";
import Config from "./setting/config";
import RadioPanel from "./setting/panel";
const Setting = () => {
  return (
    <Box>
      <SettingHeader />
      <Config />
      <RadioPanel />
    </Box>
  );
};


const mapStateToProps = (state) => {
  console.log(state)
  return {
    ...state,
  };
};

export default connect(
  mapStateToProps,
  
)(Setting);