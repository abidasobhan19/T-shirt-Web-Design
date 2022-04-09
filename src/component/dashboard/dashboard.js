import React,{useState}from "react";
import { Box } from "@mui/material";
import Navbar from "./nav";
import Display from "../Design/display";
import Setting from "../Design/setting";
import Image from "../Design/image";

const Dashboard = () => {

  const [data , SetInterface] = useState();
  
  return (
    <Box>
      <Navbar />

      <Box style={{width:"100%",height:"100Vh"}}>
    <Image />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        style={{ margin: 20 ,padding:10}}
      >
        <Display visibleData={data} />
        <Setting SetInterface={SetInterface}/>
      </Box>
    </Box>
  );
};

export default Dashboard;
