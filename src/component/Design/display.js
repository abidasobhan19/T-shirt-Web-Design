import React, { useState, useEffect } from "react";
import { Box, Button, Switch } from "@mui/material";

import Canvastest from "./canvas";
import { connect } from "react-redux";
import domtoimage from "dom-to-image";
import Tshirt from "./TShirt/tshirt"
import Hoodie from "./Hoodie/hoodie"
import Longsleeve from "./LongSleeve/longsleeve";
import KidsTshirt from "./Kids/kid"
const Display = ({ Shirt_side, Color,visibleData}) => {


const [tshirtVisble,setVibility] = useState(false)
const [hoddievisible,sethoodievisible] = useState(false)
const [longsleevevisible,setlongsleeveVisible]= useState(false)
const [kidsTshirtVisible,setKidsTshirtVisible] = useState(false)

useEffect(()=>{
  switch (visibleData) {
    case 0:
      setVibility(true)
      sethoodievisible(false)
      setlongsleeveVisible(false)
        setKidsTshirtVisible(false)
      break;
      case 1:
        if(visibleData===1){
          setVibility(false)
          setlongsleeveVisible(false)
          setKidsTshirtVisible(false)
          sethoodievisible(true)
        }
       
        break;
        case 2:
          if(visibleData===2){
            setVibility(false)
            sethoodievisible(false)
            setKidsTshirtVisible(false)
            setlongsleeveVisible(true)
          }
          break;
          case 3:
            if(visibleData===3){
              setVibility(false)
              sethoodievisible(false)
              setlongsleeveVisible(false)
              setKidsTshirtVisible(true)
            }
            break;
    
    default:
      setVibility(true)
      break;
  }
},[visibleData])

  const getimage = () => {
    console.log("hello");
    var node = document.getElementById("my-node");

    domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        console.log(dataUrl);
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <Box id="my-node" display="flex" flexGrow="1">
    {tshirtVisble=== true? <Tshirt/>:""}
    {hoddievisible===true ? <Hoodie/>:""}
    {longsleevevisible===true?<Longsleeve/> :""}
    {kidsTshirtVisible=== true?<KidsTshirt/>:""}
      <Box
        style={{
          width: 300,
          height: 200,
          marginTop: Shirt_side === "front" ? 120 : 80,
          marginLeft: -345,
        }}
      >
        <Canvastest />
      </Box>

      <Box>
        <Button onClick={getimage}> Click to Save</Button>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Display);
