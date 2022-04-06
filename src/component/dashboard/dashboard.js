import React from "react";
import { Box } from "@mui/material";
import Navbar from "./nav";
import Display from "../Design/display";
import Setting from "../Design/setting";
const Dashboard = () => {
  return (
    <Box>
      <Navbar />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        style={{ margin: 20 }}
      >
        <Display />
        {/* <Setting /> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
