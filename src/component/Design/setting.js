import React from "react";
import { connect } from "react-redux";
import { Box, Typography ,Select,Options} from "@mui/material";
import SettingHeader from "./TShirt/settingHeader";
import Config from "./TShirt/config";
import RadioPanel from "./TShirt/panel";
import HoodieConfig from "./Hoodie/hoodieConfig"
import LongsleeveConfig from "./LongSleeve/longsleeveConfig"
import Kidsonfig from "./Kids/kidsConfig"
const Setting = ({SetInterface}) => {
  return (
  <Box > 
     <Box onClick={()=>SetInterface(0) } style={{cursor:"pointer"}}>
  <SettingHeader />
  <Config />
  <RadioPanel />
      </Box>
            
    <Box onClick={()=>SetInterface(1) } style={{cursor:"pointer"}}>
<HoodieConfig/>
</Box>
<Box onClick={()=>SetInterface(2) } style={{cursor:"pointer"}}>
<LongsleeveConfig/>
</Box>

<Box onClick={()=>SetInterface(3) } style={{cursor:"pointer"}}>
<Kidsonfig/>
</Box>
</Box>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Setting);
