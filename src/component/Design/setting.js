import React from "react";

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

export default Setting;
