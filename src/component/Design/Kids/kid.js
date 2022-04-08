import React from 'react';
import { Box, Button, Switch } from "@mui/material";
import KidsTshirt from "../../../img/T-shirt Layout/KidTshirt.png"
import { connect } from "react-redux";
const Hoodie = ({Shirt_side, Color}) => {
    return (<Box > <img style={{ fillColor: "black" }} src={KidsTshirt} alt="t-shirt" /></Box>  );
}
 

const mapStateToProps = (state) => {
    return {
      ...state,
    };
  };
  
  export default connect(mapStateToProps)(Hoodie);
  