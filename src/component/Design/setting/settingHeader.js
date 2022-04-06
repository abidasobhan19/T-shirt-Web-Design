import React from "react";
import { Box, Typography } from "@mui/material";

const SettingHeader = () => {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        style={{
          height: 40,
          width: 500,
          backgroundColor: "black",
          padding: 10,
        }}
      >
        <Box display="flex" flexGrow="1" style={{ padding: 10 }}>
          <Typography style={{ color: "white", marginLeft: 50 }}>
            Item
          </Typography>
        </Box>
        <Box display="flex" flexGrow="1" style={{ padding: 10 }}>
          <Typography style={{ color: "white", marginLeft: 50 }}>
            Enable
          </Typography>
        </Box>
        <Box display="flex" flexGrow="1" style={{ padding: 10 }}>
          <Typography style={{ color: "white", marginLeft: 50 }}>
            Default Color
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingHeader;
