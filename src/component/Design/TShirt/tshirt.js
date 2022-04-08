import React from 'react';
import { Box, Button, Switch } from "@mui/material";
import { connect } from "react-redux";
const TShirt = ({Shirt_side, Color}) => {
    return (<Box > {Shirt_side === "front" ? (
        <Box>
          <img style={{ fillColor: "black" }} src={Color.front} alt="t-shirt" />
        </Box>
      ) : (
        <img style={{ fillColor: "black" }} src={Color.back} alt="t-shirt" />
      )}</Box>  );
}
 

const mapStateToProps = (state) => {
    return {
      ...state,
    };
  };
  
  export default connect(mapStateToProps)(TShirt);
  