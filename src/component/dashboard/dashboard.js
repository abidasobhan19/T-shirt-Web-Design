import React,{useState}from "react";
import { Box } from "@mui/material";
import Navbar from "./nav";
import Display from "../Design/display";
import Setting from "../Design/setting";
const Dashboard = () => {

  const [data , SetInterface] = useState();
  console.log(data)
  return (
    <Box>
      <Navbar />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        style={{ margin: 20 }}
      >
        <Display visibleData={data} />
        <Setting SetInterface={SetInterface}/>
      </Box>
    </Box>
  );
};

export default Dashboard;
